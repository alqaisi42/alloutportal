<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Category") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Category") }}
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
        <!-- <div class="mb-3 form-group col-2">
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
        </div> -->
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
            @click="filter('status', 1)"
          >
            <span class="d-none d-md-block font-weight-medium">Active</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            @click="filter('status', 0)"
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
        <h3>Categories ({{ listing.length }})</h3>
        <div class="table-responsive" v-show="load">
          <table
            id=""
            class="table table-striped table-bordered"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Created On</th>
                <th>Priority</th>
                <th>Branch</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in listing" :key="item.createdDate">
                <td>{{ item.id }}</td>
                <td>
                  <img
                    height="50"
                    width="50"
                    :src="item.imagePath"
                    :alt="item.nameAr"
                  />
                </td>
                <td>{{ item.nameEn }}</td>
                <td>{{ getDate(item.createdDate) }}</td>
                <td>{{ item.priority }}</td>
                <td>{{ item.branchName }}</td>
                <td>
                  <span v-if="item.isActive" class="btn btn-sm badge-success"
                    >Active</span
                  >
                  <span v-else class="btn btn-sm badge-danger">Inactive</span>
                </td>
                <td>
                  <div class="action-btn">
                    <a
                      @click="get(item.id)"
                      href="javascript:void(0)"
                      class="ms-2 btn btn-info btn-sm"
                    >
                      Edit
                      <!-- <div class="eye-display-edit">
                        <i class="ti ti-edit fs-5"></i>
                      </div> -->
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
                <th>Image</th>
                <th>Name</th>
                <th>Created On</th>
                <th>Branch</th>
                <th>Status</th>
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
              <h5 class="modal-title">{{ $t("Add Category") }}</h5>
              <!-- <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> -->
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
                            <!-- <form class="mt-4 col-12" novalidate=""> -->
                            <div class="mb-3 form-group">
                              <label>
                                Name (EN)
                                <span class="text-danger">*</span>
                              </label>
                              <div class="controls">
                                <input
                                  v-model="data.nameEn"
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
                            <!-- </form> -->
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="arabic"
                          role="tabpanel"
                          aria-labelledby="link1-tab"
                        >
                          <!-- <form class="mt-4 col-12" novalidate=""> -->
                          <div class="mb-3 form-group">
                            <label>
                              Name (JO)
                              <span class="text-danger">*</span>
                            </label>
                            <div class="controls">
                              <input
                                v-model="data.nameAr"
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
                          <!-- </form> -->
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3 form-group">
                          <label
                            >Priority <span class="text-danger">*</span></label
                          >
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
                              <option
                                :value="i"
                                v-for="i in 30"
                                :key="'prio' + i"
                              >
                                {{ i }}
                              </option>
                              <!-- <option value="2">2</option> -->
                            </select>
                            <div class="help-block"></div>
                          </div>
                        </div>
                        <div class="mb-3 form-group">
                          <label
                            >Status <span class="text-danger">*</span></label
                          >
                          <div class="controls">
                            <select
                              v-model="data.isActive"
                              name="select"
                              id="select"
                              required=""
                              class="form-control"
                              aria-invalid="false"
                            >
                              <option value="">Set Status</option>
                              <option value="1">Active</option>
                              <option value="0">Inactive</option>
                            </select>
                            <div class="help-block"></div>
                          </div>
                        </div>
                        <div class="mb-3 form-group">
                          <label
                            >Branch <span class="text-danger">*</span></label
                          >
                          <div class="controls">
                            <select
                              v-model="data.branchId"
                              name="select"
                              id="select"
                              required=""
                              class="form-control"
                              aria-invalid="false"
                            >
                              <option value="">Set Branch</option>
                              <option
                                :value="item.id"
                                v-for="item in branches"
                                :key="item.id + 'br'"
                              >
                                {{ item.nameEn }}
                              </option>
                            </select>
                            <div class="help-block"></div>
                          </div>
                        </div>
                        <FileUpload
                          @upload="handleSingleFileUpload"
                          :key="uploadComponenet"
                          :multiple="false"
                        />
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
      title: "Categories | List",
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
      ],
    };
  },
  name: "categories",
  data() {
    return {
      dataTable: null,
      data: {
        nameEn: null,
        nameAr: null,
        priority: null,
        branchID: null,
        isActive: null,
        imagePath: null,
      },
      file: null,
      imageList: null,
      uploadPercentage: 0,
      formData: null,
      listing: [],
      branches: [],
      load: false,
      action: "insert",
      link: "/base/categories",
      uploadComponenet: 1,
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
  component: {
    FileUpload,
  },
  methods: {
    filter(key, e) {
      this.load = false;
      let value = e;
      let url = this.link + "/all";
      axios
        .get(url, this.config)
        .then((response) => {
          if (response.data.success == true) {
            if (e != "all")
              this.listing = response.data.response.filter(
                (obj) => obj.isActive === value
              );
            else this.listing = response.data.response;

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
      await axios
        .all([
          axios.get(this.link + "/all", this.config),
          axios.get("/branch/api/branches", this.config),
        ])
        .then(
          axios.spread((categories, branches) => {
            this.listing = categories.data.response;
            this.branches = branches.data.response;
            if (categories.data.success == true) {
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
                this.$toast.success(response.data.message).goAway(1500);
                this.getAll();
              } else this.$toast.error(response.data.message).goAway(1500);
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
            this.showModal("addVendorModal");
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
      const formData = new FormData();
      for (const key in this.data) {
        if (this.data.hasOwnProperty(key)) {
          formData.append(key, this.data[key]);
        }
      }
      formData.append("createdBy", 1);
      formData.append("userID", 1);
      if (this.file) formData.append("imagePath", this.file);
      if (this.action == "insert") {
        axios
          .post(this.link + "/add", formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.getAll();
              this.initForm();
              this.showModal("addVendorModal");
              this.uploadComponenet += 1;
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      } else {
        axios
          .put(this.link + "/" + this.data.id, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.getAll();
              this.initForm();
              this.showModal("addVendorModal");
              this.uploadComponenet += 1;
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      }
    },
    initForm() {
      this.data = {
        nameEn: null,
        nameAr: null,
        priority: null,
        branchID: null,
        isActive: null,
        imagePath: null,
      };
    },
    showModal(id) {
      $("#" + id).modal("toggle");
    },
  },
};
</script>
