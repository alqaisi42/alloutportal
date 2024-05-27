<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Manage Currencies") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Manage Currencies") }}
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
            <span class="d-none d-md-block font-weight-medium"
              >All Currencies</span
            >
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
            <span class="d-none d-md-block font-weight-medium">Disabled</span>
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

      <div class="card card-body" v-if="load">
        <h3>Currencies List ({{ listing.length }})</h3>
        <div class="table-responsive">
          <table class="table search-table align-middle text-nowrap" id="">
            <thead class="header-item">
              <tr>
                <th>
                  <div class="form-check">
                    <input
                      @change="selectAll($event)"
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck1"
                    />
                  </div>
                </th>
                <th>ID</th>
                <th>Name En</th>
                <th>Name Ar</th>
                <th>Code</th>
                <th>Symbol</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- start row -->
              <tr
                class="search-items"
                v-for="item in listing"
                :key="'vendor-' + item.id"
              >
                <th>
                  <div class="form-check">
                    <input
                      @change="selectAll($event)"
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck1"
                    />
                  </div>
                </th>
                <td>{{ item.id }}</td>
                <td>{{ item.currencyNameEn }}</td>
                <td>{{ item.currencyNameAr }}</td>
                <td>{{ item.currencyCode }}</td>
                <td>{{ item.symbol }}</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      :checked="item.status"
                    />
                  </div>
                </td>

                <td>
                  <div class="action-btn">
                    <!-- <a href="javascript:void(0)" class="text-info edit">
                          <div class="eye-display">
                            <img src="/icons/eye-filled.png" alt="" />
                          </div>
                        </a> -->
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
              <h5 class="modal-title">{{ $t("Manage Currency") }}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="add-contact-box">
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
                                v-model="data.currencyNameEn"
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
                              v-model="data.currencyNameAr"
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
                      <div class="mb-3 form-group col-4">
                        <label>
                          Currency Code
                          <span class="text-danger">*</span>
                        </label>
                        <div class="controls">
                          <input
                            v-model="data.currencyCode"
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
                      <div class="mb-3 form-group col-4">
                        <label>
                          Currency Symbol
                          <span class="text-danger">*</span>
                        </label>
                        <div class="controls">
                          <input
                            v-model="data.symbol"
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
                      <div class="mb-3 form-group col-4">
                        <label>Status <span class="text-danger">*</span></label>
                        <div class="controls">
                          <select
                            v-model="data.status"
                            name="select"
                            id="select"
                            required=""
                            class="form-control"
                            aria-invalid="false"
                          >
                            <option :value="true">Active</option>
                            <option :value="false">Inactive</option>
                            <!-- <option value="2">2</option> -->
                          </select>
                          <div class="help-block"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btn-add"
                class="btn btn-success rounded-pill px-4"
                @click="submit()"
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
      title: "Business Settings | Language",
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
      selected: [],
      data: {
        languageCode: null,
        languageNameEn: null,
        languageNameAr: null,
        status: null,
        defaultStatus: null,
      },
      listing: null,
      load: false,
      link: "/branch/api/currencies",
      action: "insert",
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
    // this.$layout.toggleLoader()
  },
  component: {},
  methods: {
    selectAll(e) {
      if (e.target.checked) {
        for (let i = 0; i < this.listing.length; i++) {
          const el = this.listing[i];
          this.selected.push(el.id);
        }
      } else {
        this.selected = [];
      }
    },
    async getAll() {
      $(".preloader").show();
      axios.all([axios.get(this.link, this.config)]).then(
        axios.spread((listing) => {
          this.listing = listing.data.response;
          if (listing.data.success == true) {
            setTimeout(() => {
              this.load = true;
              $(".preloader").hide();
            }, 500);
          }
          // this.$forceUpdate();
        })
      );
    },
    performAction(id = null) {
      this.$confirm("You sure you want to delete this item?").then(() => {
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
      });
    },
    get(code) {
      axios
        .get(this.link + "/" + code, this.config)
        .then((response) => {
          if (response.data.success) {
            this.data = response.data.response;
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
    submit() {
      const formData = {
        ...this.data,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              setTimeout(() => {
                this.getAll();
              }, 1000);
              this.data = {
                languageCode: null,
                languageNameEn: null,
                languageNameAr: null,
                status: null,
                defaultStatus: null,
              };
              this.action = "insert";
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
          .put(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.link = "/branch/api/currencies";
              setTimeout(() => {
                this.getAll();
              }, 1000);
              this.data = {
                languageCode: null,
                languageNameEn: null,
                languageNameAr: null,
                status: null,
                defaultStatus: null,
              };
              $("#addVendorModal").modal("hide");
              this.action = "update";
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
