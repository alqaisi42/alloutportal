<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Deals") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Deals") }}
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
      <div class="col-md-12">
        <!-- --------------------- start Tab with Underline ---------------- -->
        <div class="card">
          <div class="card-body">
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
            <div class="tab-content tabcontent-border py-3" id="myTabContent">
              <div
                role="tabpanel"
                class="tab-pane fade active show"
                id="english"
                aria-labelledby="active-tab"
              >
                <div class="row">
                  <form class="mt-4 col-12 row" novalidate="">
                    <div class="mb-3 form-group col-12">
                      <label>
                        Name (EN)
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
                    <div class="mb-3 form-group col-12">
                      <label>
                        Description (EN)
                        <span class="text-danger">*</span>
                      </label>
                      <div class="controls">
                        <textarea
                          v-model="data.descEn"
                          class="form-control"
                          required=""
                          data-validation-required-message="This field is required"
                          aria-invalid="false"
                        ></textarea>
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
                <form class="mt-4 col-12 row" novalidate="">
                  <div class="mb-3 form-group col-12">
                    <label>
                      Name (JO)
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
                  <div class="mb-3 form-group col-12">
                    <label>
                      Description (JO)
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <textarea
                        v-model="data.descAr"
                        class="form-control"
                        required=""
                        data-validation-required-message="This field is required"
                        aria-invalid="false"
                      ></textarea>
                      <div class="help-block"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 form-group col-4">
                <label>Type <span class="text-danger">*</span></label>
                <div class="controls">
                  <select
                    v-model="data.type"
                    name="select"
                    id="select"
                    required=""
                    class="form-control"
                    aria-invalid="false"
                  >
                    <option value="">Select Type</option>
                    <option value="offers">Offers</option>
                    <option value="deals">Deals</option>
                  </select>
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
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
                    <option value="">Select Priority</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>Service <span class="text-danger">*</span></label>
                <div class="controls">
                  <select
                    v-model="data.serviceId"
                    name="select"
                    id="select"
                    required=""
                    class="form-control"
                    aria-invalid="false"
                  >
                    <option value="">Select Service</option>
                    <option
                      :value="item.id"
                      v-for="item in services"
                      :key="item.id + 'ser'"
                    >
                      {{ item.titleEn }}
                    </option>
                  </select>
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-6">
                <label>
                  Points Count
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.pointsCount"
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
              <div class="mb-3 form-group col-6">
                <label>
                  Discount Percentage
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.discountPercentage"
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
              <div class="text-xs-right">
                <button
                  type="submit"
                  class="btn btn-info rounded-pill px-4"
                  @click="submit()"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="widget-content searchable-container list">
        <form class="mt-4 row" novalidate="">
          <div class="mb-3 form-group col-5">
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
                <option value="deals">Deals</option>
                <option value="offers">Offers</option>
              </select>
              <div class="help-block"></div>
            </div>
          </div>
          <div class="mb-3 form-group col-5">
            <label>
              Service
              <span class="text-danger">*</span>
            </label>
            <div class="controls">
              <select
                @change="filter('service', $event)"
                name="select"
                id="select"
                required=""
                class="form-control"
                aria-invalid="false"
              >
                <option value="">All</option>
                <option
                  :value="item.id"
                  v-for="item in services"
                  :key="item.id + 'ser'"
                >
                  {{ item.titleEn }}
                </option>
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
        <!-- Modal -->
        <div
          class="modal fade"
          id="addContactModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="addContactModalTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header d-flex align-items-center">
                <h5 class="modal-title">{{ $t("Customers") }}</h5>
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
                    <form id="">
                      <FileUpload
                        @upload="handleSingleFileUpload"
                        :key="uploadComponenet"
                        :fileList="filesList"
                        :upload="true"
                        :multiple="false"
                        :params="uploadType"
                      />
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3 contact-name">
                            <input
                              type="text"
                              id="c-name"
                              v-model="data.name"
                              class="form-control"
                              placeholder="Name"
                            />
                            <span class="validation-text text-danger"></span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3 contact-email">
                            <input
                              type="text"
                              id="c-email"
                              v-model="data.email"
                              class="form-control"
                              placeholder="Email"
                            />
                            <span class="validation-text text-danger"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3 contact-phone">
                            <input
                              type="password"
                              id="c-phone"
                              v-model="data.password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3 contact-phone">
                            <input
                              type="text"
                              id="c-phone"
                              v-model="data.phone"
                              class="form-control"
                              placeholder="Phone"
                            />
                            <span class="validation-text text-danger"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="mb-3 contact-location">
                            <input
                              type="checkbox"
                              v-model="data.isPhoneVerified"
                              id="c-location"
                              class=""
                              value="1"
                            />
                            Is verified
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  @click="submit()"
                  class="btn btn-success rounded-pill px-4"
                >
                  Save
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
        <div class="card card-body">
          <div class="table-responsive" v-show="load">
            <table class="table search-table align-middle text-nowrap" id="">
              <thead class="header-item">
                <tr>
                  <th>
                    <div class="n-chk align-self-center text-center">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input primary"
                          id="contact-check-all"
                        />
                        <label
                          class="form-check-label"
                          for="contact-check-all"
                        ></label>
                        <span class="new-control-indicator"></span>
                      </div>
                    </div>
                  </th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Priority</th>
                  <th>Points</th>
                  <th>Discount</th>
                  <th>Branch</th>
                  <th>Service</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- start row -->
                <tr
                  class="search-items"
                  v-for="item in listing.content"
                  :key="'user-' + item.id"
                >
                  <td>
                    <div class="n-chk align-self-center text-center">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input contact-chkbox primary"
                          id="checkbox1"
                        />
                        <label class="form-check-label" for="checkbox1"></label>
                      </div>
                    </div>
                  </td>
                  <td>{{ item.titleEn }}</td>
                  <td>{{ item.descEn }}</td>
                  <td>{{ item.priority }}</td>
                  <td>{{ item.pointsCount }}</td>
                  <td>{{ item.discountPercentage }}</td>
                  <td>{{ item.branchId }}</td>
                  <td>{{ item.serviceId }}</td>
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
            <ul class="pagination" v-if="listing.totalElements">
              <li class="page-item" v-if="listing.number > 1">
                <a
                  class="page-link link"
                  @click="pagination($event, listing.number - 1)"
                  href=""
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <i class="ti ti-chevrons-left fs-4"></i>
                  </span>
                </a>
              </li>
              <li
                class="page-item"
                v-for="page in listing.totalPages"
                :class="{ active: page == listing.number }"
                :key="page + 'pag'"
              >
                <a
                  class="page-link link"
                  @click="pagination($event, page)"
                  href=""
                  >{{ page }}</a
                >
              </li>
              <li class="page-item" v-if="!listing.last">
                <a
                  class="page-link link"
                  @click="pagination($event, listing.number + 1)"
                  href=""
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    <i class="ti ti-chevrons-right fs-4"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Deals & Offers | List",
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
  name: "deals",
  data() {
    return {
      dataTable: null,
      load: false,
      file: null,
      filesList: [],
      id: null,
      uploadType: "Customers",
      data: {
        type: null,
        titleEn: null,
        titleAr: null,
        priority: null,
        descEn: null,
        descAr: null,
        pointsCount: null,
        discountPercentage: null,
        serviceId: null,
      },
      link: "/branch/api/deals-and-offers",
      tmpLink: "/branch/api/deals-and-offers",
      listing: [],
      services: [],
      action: "insert",
      uploadComponenet: 1,
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  created() {
    // // this.onScriptLoaded();
  },
  async mounted() {
    this.getAll();
  },
  component: {},
  methods: {
    pagination(e, page) {
      e.preventDefault();
      if (page == 0) page = 1;
      axios
        .get(this.tmpLink + "?page=" + page + "&size=10", this.config)
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
      return false;
    },
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
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    get(id) {
      axios
        .all([
          axios.get(this.link + "/" + id, this.config),
          // axios.get("/base/api/locationTimings/locationId/" + code, config),
        ])
        .then(
          axios.spread((deal) => {
            if (deal.data.success == true) {
              this.data = deal.data.response;
              this.id = this.data.id;
              this.action = "update";
              //   $("#addContactModal").modal("show");
            }
          })
        );
    },
    performAction(id = null) {
      this.$confirm("You sure you want to delete this item?").then(() => {
        this.token = JSON.parse(localStorage.getItem("access_token"));

        axios
          .delete(this.link + "/" + id, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.msg).goAway(1500);
              this.getAll();
            } else this.$toast.error(response.data.msg).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      });
    },
    async getAll() {
      $(".preloader").show();
      await axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/base/api/services", this.config),
        ])
        .then(
          axios.spread((listing, services) => {
            this.listing = listing.data.response;
            this.services = services.data.response;
            if (listing.data.success == true) {
              // setTimeout(() => {
              // }, 500);
              this.load = true;
              $(".preloader").hide();
              // // this.onScriptLoaded();
            }
            this.$forceUpdate();
          })
        );
    },
    handleSingleFileUpload(file) {
      this.file = file;
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
      this.data.pointsCount = parseInt(this.data.pointsCount);
      this.data.discountPercentage = parseInt(this.data.discountPercentage);
      this.data.priority = parseInt(this.data.priority);
      const formData = {
        ...this.data,
        branchId: 1,
        createdBy: 1,
        userId: 1,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success("Data has been updated").goAway(1500);
              this.getAll();
              this.data = {
                type: null,
                titleEn: null,
                titleAr: null,
                priority: null,
                descEn: null,
                descAr: null,
                pointsCount: null,
                discountPercentage: null,
                serviceId: null,
              };
              this.uploadComponenet += 1;
              $("#addContactModal").modal("hide");
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      } else {
        axios
          .put(this.link + "/" + this.id, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success("Data has been updated").goAway(1500);
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                type: null,
                titleEn: null,
                titleAr: null,
                priority: null,
                descEn: null,
                descAr: null,
                pointsCount: null,
                discountPercentage: null,
                serviceId: null,
              };
              this.uploadComponenet += 1;
              //   $("#addContactModal").modal("hide");
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      }
    },
  },
};
</script>
<!-- <script src="~/assets/Modernize/js/apps/contact.js"></script> -->
