<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Personal Info") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Personal Info") }}
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-3">
              <div class="text-center mb-n5">
                <img
                  src="/Modernize/images/breadcrumb/ChatBc.png"
                  alt=""
                  class="img-fluid mb-n4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form class="mt-4 row" novalidate="">
        <div class="mb-3 form-group col-2">
          <label>
            Branch
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <div class="controls">
              <select
                @change="filter('branch', $event)"
                name="select"
                id="select"
                required=""
                class="form-control"
                aria-invalid="false"
              >
                <option value="">All</option>
                <option
                  :value="item.id"
                  v-for="item in branches"
                  :key="item.id"
                >
                  {{ item.nameEn }}
                </option>
              </select>
              <div class="help-block"></div>
            </div>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-2">
          <label>
            Status
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select
              @change="filter('status', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-2">
          <a
            href="javascript:void(0)"
            class="btn btn-primary d-flex align-items-center px-3"
            id="add-notes"
            style="margin-top: 1.5em"
          >
            <i class="ti ti-search me-0 me-md-1 fs-4"></i>
            <span class="d-none d-md-block font-weight-medium fs-3"
              >Search</span
            >
          </a>
        </div>
      </form>
      <ul
        class="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row"
      >
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center active px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="all-category"
          >
            <i class="ti ti-list fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">All</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-business"
          >
            <span class="d-none d-md-block font-weight-medium">Active</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Inactive</span>
          </a>
        </li>
        <li
          class="nav-item ms-auto row gap-1"
          style="position: absolute; right: 1em"
        >
          <a
            href="javascript:void(0)"
            class="btn btn-primary d-flex align-items-center px-2 col-5"
            style="width: 5em"
            id="add-vendor"
            @click="showModal('addVendorModal')"
          >
            <i class="ti ti-file-export me-0 me-md-1 fs-4"></i>
            <span class="d-none d-md-block font-weight-medium fs-3">New</span>
          </a>
        </li>
      </ul>

      <div class="card card-body">
        <h3>Personal Info ({{ listing.length }})</h3>
        <div class="table-responsive" v-show="load">
          <table
            id=""
            class="table table-striped table-bordered"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in listing" :key="item.createdDate">
                <td>{{ item.id }}</td>
                <td>{{ item.titleEn }}</td>
                <td>{{ item.priority }}</td>
                <td>{{ getDate(item.createdDate) }}</td>
                <td>
                  <div class="action-btn">
                    <a
                      @click="get(item.id)"
                      href="javascript:void(0)"
                      class="ms-2 btn btn-info btn-sm"
                    >
                      Edit
                    </a>
                    <a
                      @click="performAction(item.id)"
                      href="javascript:void(0)"
                      class="ms-2 btn badge-danger btn-sm"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Created On</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div
        class="modal fade"
        id="addVendorModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addVendorModalTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          role="document"
          style="width: 80% !important; max-width: 80% !important"
        >
          <div class="modal-content">
            <div class="modal-header d-flex align-items-center">
              <h5 class="modal-title">{{ $t("Add Interests") }}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="add-contact-box">
                <div class="add-contact-content">
                  <ul class="nav nav-underline" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="active-tab"
                        data-bs-toggle="tab"
                        href="#english"
                        role="tab"
                        aria-controls="active"
                        aria-expanded="true"
                        aria-selected="true"
                      >
                        <span>English</span>
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="link1-tab"
                        data-bs-toggle="tab"
                        href="#arabic"
                        role="tab"
                        aria-controls="link1"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        <span>Arabic</span>
                      </a>
                    </li>
                  </ul>
                  <div
                    class="tab-content tabcontent-border py-3"
                    id="myTabContent"
                  >
                    <div
                      role="tabpanel"
                      class="tab-pane fade active show"
                      id="english"
                      aria-labelledby="active-tab"
                    >
                      <div class="row">
                        <form class="mt-4 col-12" novalidate="">
                          <div class="mb-3 form-group">
                            <label>
                              Title (EN)
                              <span class="text-danger">*</span>
                            </label>
                            <div class="controls">
                              <input
                                v-model="data.titleEn"
                                type="text"
                                name="text"
                                class="form-control"
                                required=""
                                data-validation-required-message="This field is required"
                                aria-invalid="false"
                              />
                              <div class="help-block"></div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="arabic"
                      role="tabpanel"
                      aria-labelledby="link1-tab"
                    >
                      <form class="mt-4 col-12" novalidate="">
                        <div class="mb-3 form-group">
                          <label>
                            Title (JOR)
                            <span class="text-danger">*</span>
                          </label>
                          <div class="controls">
                            <input
                              v-model="data.titleAr"
                              type="text"
                              name="text"
                              class="form-control"
                              required=""
                              data-validation-required-message="This field is required"
                              aria-invalid="false"
                            />
                            <div class="help-block"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3 form-group">
                      <label>Priority <span class="text-danger">*</span></label>
                      <div class="controls">
                        <select
                          v-model="data.priority"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">Set priority</option>
                          <option :value="i" v-for="i in 30" :key="'prio' + i">
                            {{ i }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id=""
                @click="submit()"
                class="btn btn-success rounded-pill px-4"
              >
                Add
              </button>
              <button
                class="btn btn-danger rounded-pill px-4"
                data-bs-dismiss="modal"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Data | Personal",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",
          defer: true,
          body: true,
          callback: this.onScriptLoaded,
        },
        {
          src: "https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js",
          body: true,
          skip: !this.externalLoaded,
        },
      ],
    };
  },
  name: "personal",
  data() {
    return {
      dataTable: null,
      data: {
        titleAr: null,
        titleEn: null,
        priority: null,
      },
      listing: [],
      branches: [],
      load: false,
      link: "/base/api/personalInfo",
      action: "insert",
      username: "user",
      password: "123456",
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  mounted() {
    if (!process.client) return;
    this.getAll();
  },
  component: {},
  methods: {
    filter(key, e) {
      this.load = false;
      let value = e.target.value;
      let url = this.link + "";
      // let url = this.link + "/" + key + "/" + value;
      // if (!value) url = this.link;
      axios
        .get(url, this.config)
        .then((response) => {
          if (response.data.success == true) {
            this.listing = response.data.response;
            setTimeout(() => {
              this.load = true;
            }, 500);
          } else {
            this.listing = [];
          }
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm");
    },
    async getAll() {
      $(".preloader").show();
      await axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/branch/api/branches", this.config),
        ])
        .then(
          axios.spread((listing, branches) => {
            this.listing = listing.data.response;
            this.branches = branches.data.response;
            if (listing.data.success == true) {
              setTimeout(() => {
                this.load = true;
                $(".preloader").hide();
              }, 500);
              // this.onScriptLoaded();
            }
            this.$forceUpdate();
          })
        );
    },
    performAction(id = null) {
      this.$confirm("You sure you want to delete this item?").then(() => {
        this.token = JSON.parse(localStorage.getItem("access_token"));
        const config = {
          auth: {
            username: this.username,
            password: this.password,
          },
        };
        axios
          .delete(this.link + "/" + id, config)
          .then((response) => {
            if (response.data.success) {
              this.$toast.success(response.data.message).goAway(1500);
              this.getAll();
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      });
    },
    get(code) {
      const config = {
        auth: {
          username: this.username,
          password: this.password,
        },
      };
      axios
        .get(this.link + "/" + code, config)
        .then((response) => {
          if (response.data.success) {
            this.data = response.data.response;
            this.link = this.link + "/" + response.data.response.id;
            this.action = "update";
            $("#addVendorModal").modal("show");
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    onScriptLoaded() {
      this.externalLoaded = true;
      setTimeout(() => {
        this.dataTable = $("#example").DataTable({
          authWidth: true,
          responsive: true,
          bDestroy: true,
        });
      }, 300);
    },
    handleSingleFileUpload(file) {
      this.file = file;
    },
    submit() {
      const config = {
        auth: {
          username: "user",
          password: "123456",
        },
      };
      const formData = {
        ...this.data,
        userId: 1,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.getAll();
              this.data = {
                titleAr: null,
                titleEn: null,
                priority: null,
              };
              $("#addVendorModal").modal("hide");
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      } else {
        axios
          .put(this.link, formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.link = "/base/api/personalInfo";
              this.getAll();
              this.data = {
                titleAr: null,
                titleEn: null,
                priority: null,
              };
              $("#addVendorModal").modal("hide");
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      }
    },
    showModal(id) {
      $("#" + id).modal("toggle");
    },
  },
};
</script>
