<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Reviews") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Reviews") }}
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
        <div class="mb-3 form-group col-3">
          <label>
            Customer
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select
              @change="filter('customer', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option
                :value="customer.id"
                v-for="customer in customers"
                :key="customer.id + 'custom'"
              >
                {{ customer.name }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
          <label>
            Booking
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select
              @change="filter('booking', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option
                :value="item.id"
                v-for="item in booking.content"
                :key="'bookingfilter' + item.id"
              >
                {{ item.id }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
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
                v-for="item in servicesFilter.content"
                :key="item.id + 'servoihd'"
              >
                {{ item.titleEn }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
          <label>
            Branch
            <span class="text-danger">*</span>
          </label>
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
              <option :value="item.id" v-for="item in branches" :key="item.id">
                {{ item.nameEn }}
              </option>
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
            @click="filter('rate', 'all')"
            :class="{ active: step == 'all' }"
          >
            <i class="ti ti-list fill-white me-0 me-md-1"></i>
            <span
              class="d-none d-md-block font-weight-medium"
              style="color: white"
              >All Reviews</span
            >
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-business"
            @click="filter('rate', 1)"
            :class="{ active: step == 1 }"
          >
            <i class="ti ti-star fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">1 Star</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
            @click="filter('rate', 2)"
            :class="{ active: step == 2 }"
          >
            <i class="ti ti-star fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">2 Stars</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-important"
            @click="filter('rate', 3)"
            :class="{ active: step == 3 }"
          >
            <i class="ti ti-star fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">3 Stars</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-important"
            @click="filter('rate', 4)"
            :class="{ active: step == 4 }"
          >
            <i class="ti ti-star fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">4 Stars</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-important"
            @click="filter('rate', 5)"
            :class="{ active: step == 5 }"
          >
            <i class="ti ti-star fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">5 Stars</span>
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

      <div class="tab-content">
        <div
          id="note-full-container"
          class="note-has-grid row"
          v-if="listing.totalElements > 0"
        >
          <div
            class="col-md-3 single-note-item all-category"
            v-for="item in listing.content"
            :key="'review-' + item.id"
          >
            <div class="card card-body">
              <span class="side-stick"></span>
              <h6
                class="note-title text-truncate w-75 mb-0"
                data-noteheading="Book a Ticket for Movie"
              >
                {{ item.title }}
              </h6>
              <p class="note-date fs-2">Banner: {{ item.bannerType }}</p>
              <div class="note-content">
                <img
                  :src="item.imagePath"
                  :alt="item.title"
                  style="
                    width: 100%;
                    min-height: 16em;
                    max-height: 22em;
                    border-radius: 1em;
                  "
                />
              </div>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0)" class="link me-1">
                  <!-- <i
                    style="color: #ffe234;"
                    class="ti ti-star fs-4 favourite-note"
                    
                  ></i> -->
                  <img
                    v-for="star in item.rate"
                    :key="star + 'star'"
                    style="width: 30px"
                    src="/Modernize/images/star.webp"
                    alt=""
                  />
                  <!-- <i class="ti ti-star fs-4 favourite-note"></i> -->
                </a>
                <a href="javascript:void(0)" class="link text-danger ms-2">
                  <i
                    @click="performAction(item.id)"
                    class="ti ti-trash fs-4"
                  ></i>
                </a>
                <div class="ms-auto">
                  <i
                    @click="get(item.id)"
                    class="ti ti-pencil fs-4"
                    style="cursor: pointer"
                  ></i>
                  <!-- <div class="form-check form-switch">
                    <input
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      checked="checked"
                      class="form-check-input"
                    />
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="note-has-grid" v-else>
          <p style="margin: 4em; text-align: center">No data has been found</p>
        </div>
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
      <!-- Modal Add notes -->

      <div
        v-if="load"
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
              <h5 class="modal-title">{{ $t("Review Management") }}</h5>
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
                            <!-- <NuxtTime :datetime="Date.now()" second="numeric" month="long" day="numeric" /> -->
                            <form class="row">
                              <FileUpload
                                @upload="handleSingleFileUpload"
                                :fileList="filesList"
                                :upload="true"
                                :multiple="false"
                                :params="uploadType"
                                :key="uploadComponenet"
                              />
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Customer</label
                                >
                                <select
                                  v-model="data.customerId"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option
                                    :value="item.id"
                                    v-for="item in customers"
                                    :key="item.id + 'custUser'"
                                  >
                                    {{ item.name }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Banner Type</label
                                >
                                <select
                                  v-model="data.bannerType"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option value="">All</option>
                                  <option value="Type">Type</option>
                                  <option value="Banner">Banner</option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Publish</label
                                >
                                <select
                                  v-model="data.published"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option value="">All</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </select>
                              </div>
                              <div
                                class="mb-4 col-4"
                                style="position: relative"
                              >
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Service</label
                                >

                                <input
                                  type="text"
                                  v-model="serviceText"
                                  class="form-control"
                                  id="searchInput"
                                  @input="searchServices"
                                />
                                <div class="searchResults">
                                  <ul>
                                    <li
                                      class="resultItems"
                                      @click="setServiceId(item.id)"
                                      v-for="item in services.content"
                                      :key="item.id + 'ser'"
                                    >
                                      {{ item.titleEn }}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Booking</label
                                >
                                <select
                                  v-model="data.bookingId"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option
                                    :value="item.id"
                                    v-for="item in booking.content"
                                    :key="item.id + 'Book'"
                                  >
                                    {{ item.id }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
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
                                  >Title</label
                                >
                                <input
                                  v-model="data.title"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Url</label
                                >
                                <input
                                  v-model="data.url"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Rate</label
                                >
                                <input
                                  v-model="data.rate"
                                  type="number"
                                  max="5"
                                  min="1"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
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
      title: "Booking | Manage",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
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
      link: "/branch/api/reviews",
      tmpLink: "/branch/api/reviews",
      load: false,
      data: {
        imagePath: null,
        bannerType: null,
        published: null,
        url: null,
        title: null,
        branchId: null,
        customerId: null,
        serviceId: null,
        bookingId: null,
        rate: null,
      },
      listing: [],
      services: [],
      servicesFilter: [],
      action: "insert",
      branches: [],
      customers: [],
      booking: [],
      serviceText: "",
      filesList: null,
      uploadType: "Reviews",
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
  component: { FileUpload },
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
      let value = null;
      if (key == "rate") {
        value = e;
        this.step = e;
        // if(e=='all')
      } else {
        value = e.target.value;
        this.step = "all";
      }
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
      this.load = false;
      axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/branch/api/customers", this.config),
          axios.get("/base/api/services", this.config),
          axios.get("/branch/api/branches", this.config),
          axios.get("/base/api/bookings", this.config),
        ])
        .then(
          axios.spread((listing, customers, services, branches, booking) => {
            this.listing = listing.data.response;
            this.customers = customers.data.response;
            this.servicesFilter = services.data.response;
            this.branches = branches.data.response;
            this.booking = booking.data.response;
            if (listing.data.success == true) {
              setTimeout(() => {
                this.load = true;
                $(".preloader").hide();
              }, 500);
            }
            // this.$forceUpdate();
          })
        );

      await axios
        .get(this.link + "", this.config)
        .then((response) => {
          if (response.data.success) {
            this.listing = response.data.response;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
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
    setServiceId(ev) {
      if (ev) {
        this.data.serviceId = ev;
        this.services = [];
        this.serviceText = ev;
      }
    },
    searchServices() {
      if (this.serviceText.length > 3) {
        axios
          .get(
            "/base/api/services/byTitle?titleEn=" +
              this.serviceText +
              "&titleAr=" +
              this.serviceText,
            this.config
          )
          .then((response) => {
            if (response.data.success) {
              this.services = response.data.response;
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      }
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
    handleSingleFileUpload(file) {
      this.file = file;
    },
    submit() {
      this.data.imagePath = this.file;
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
                imagePath: null,
                bannerType: null,
                published: null,
                url: null,
                title: null,
                branchId: null,
                customerId: null,
                serviceId: null,
                bookingId: null,
                rate: null,
              };
              $("#addVendorModal").modal("hide");
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
          .put(this.link + "/" + this.id, formData, this.config)
          .then((response) => {
            if (response.data) {
              this.$toast.success("Data has been updated").goAway(1500);
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                imagePath: null,
                bannerType: null,
                published: null,
                url: null,
                title: null,
                branchId: null,
                customerId: null,
                serviceId: null,
                bookingId: null,
                rate: null,
              };
              $("#addVendorModal").modal("hide");
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
    showModal(id) {
      $("#" + id).modal("toggle");
    },
  },
};
</script>
<style>
.resultItems:hover {
  background-color: rgb(93, 135, 255);
  color: white;
}
.resultItems {
  padding: 0.5em;
  background-color: #f8f9fa;
  border-bottom: 1px solid #999;
}
.searchResults ul {
  position: absolute;
  width: 95%;
  z-index: 1000;
}
</style>
