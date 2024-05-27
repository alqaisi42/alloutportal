<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Notifications Topic") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Notifications Topic") }}
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
            Type
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select
              @change="filter('type', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option value="Info">Info</option>
              <option value="Alert">Alert</option>
            </select>
            <div class="help-block"></div>
          </div>
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
        <h3>Notifications Topics ({{ listing.length }})</h3>
        <div class="table-responsive" v-show="load">
          <table id="" class="table search-table align-middle text-nowrap">
            <thead class="header-item">
              <tr>
                <th>Branche</th>
                <th>Topic</th>
                <th>Status</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="search-items"
                v-for="item in listing"
                :key="'notification-' + item.id"
              >
                <td>{{ item.branchId }}</td>
                <td>{{ item.topic }}</td>
                <td>
                  <span v-if="item.isActive" class="btn btn-sm badge-success"
                    >Active</span
                  >
                  <span v-else class="btn btn-sm badge-danger">Inactive</span>
                </td>
                <td>{{ item.desc }}</td>
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
              <h5 class="modal-title">{{ $t("Add Vendor") }}</h5>
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
                  <!-- <form id="addContactModalTitle"> -->
                  <div
                    class="tab-pane fade active show"
                    id="pills-account"
                    role="tabpanel"
                    aria-labelledby="pills-account-tab"
                    tabindex="0"
                  >
                    <div class="row">
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 d-flex align-items-stretch"
                      >
                        <div
                          class="card w-100 position-relative overflow-hidden"
                        >
                          <div class="card-body p-4">
                            <form class="row">
                              <div class="mb-4 col-12">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Branches</label
                                >
                                <select
                                  v-model="data.branchId"
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
                                    :key="item.id + 'branches'"
                                  >
                                    {{ item.nameEn }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Status</label
                                >
                                <select
                                  v-model="data.isActive"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option value="">All</option>
                                  <option :value="true">Active</option>
                                  <option :value="false">Inactive</option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Topic</label
                                >
                                <input
                                  v-model="data.topic"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-12">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Description</label
                                >
                                <textarea
                                  v-model="data.desc"
                                  class="form-control"
                                ></textarea>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- </form> -->
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
import FileUpload from "~/components/fileUpload.vue";
import moment from "moment";
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Notifications | Topics",
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
          src: "/assets/Modernize/vendor/fullcalendar/index.global.min.js",
          defer: true,
          body: true,
          callback: this.onScriptLoaded,
        },
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
  name: "usertype",
  data() {
    return {
      dataTable: null,
      link: "/branch/api/notification/topics",
      load: false,
      data: {
        topic: null,
        desc: null,
        isActive: null,
        branchId: null,
      },
      listing: [],
      action: "insert",
      branches: null,
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  async mounted() {
    if (!process.client) return;
    this.getAll();
  },
  component: { FileUpload },
  methods: {
    filter(key, e) {
      this.load = false;
      let value = e.target.value;
      let url = this.link + "/" + key + "/" + value;
      if (!value) url = this.link;
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
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    async getAll() {
      $(".preloader").show();
      axios
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
            }
            this.$forceUpdate();
          })
        );
    },
    performAction(id = null) {
      this.$confirm("Are you sure you want to perform this action?").then(
        () => {
          this.token = JSON.parse(localStorage.getItem("access_token"));
          axios
            .delete(this.link + "/" + id, this.config)
            .then((response) => {
              if (response.data.success) {
                this.$toast.success(response.data.response.msg).goAway(1500);
                this.getAll();
              } else this.$toast.error(response.data.response.msg).goAway(1500);
            })
            .catch((error) => {
              this.$toast.error(error.response.data.messageText).goAway(1500);
            });
        }
      );
    },
    get(code) {
      axios
        .get(this.link + "/" + code, this.config)
        .then((response) => {
          if (response.data.success) {
            this.data = response.data.response;
            $("#addVendorModal").modal("show");
            this.action = "update";
            this.id = code;
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
    submit() {
      // this.data.isActive = (this.data.isActive == 1) ? true : false
      const formData = {
        ...this.data,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, this.config)
          .then((response) => {
            if (response.data) {
              this.$toast.success("Data has been updated").goAway(1500);
              this.getAll();
              this.data = {
                isActive: null,
                topic: null,
                desc: null,
                isActive: null,
                branchId: null,
              };
              this.uploadComponenet += 1;
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
          .put(this.link + "/" + this.id, formData, this.config)
          .then((response) => {
            if (response.data) {
              this.$toast.success("Data has been updated").goAway(1500);
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                isActive: null,
                topic: null,
                desc: null,
                isActive: null,
                branchId: null,
              };
              this.uploadComponenet += 1;
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
