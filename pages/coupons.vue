<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Coupons") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Coupons") }}
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
          <label> By Customer </label>
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
              <option :value="item.id" v-for="item in customers" :key="item.id">
                {{ item.name }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
          <label> Service </label>
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
                v-for="item in services.content"
                :key="item.id"
              >
                {{ item.titleEn }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
          <label> Service </label>
          <div class="controls">
            <select
              @change="filter('vendor', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option :value="item.id" v-for="item in vendors" :key="item.id">
                {{ item.titleEn }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
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
              <option value="PERCENTAGE">PERCENTAGE</option>
              <option value="FLAT_RATE">FLAT RATE</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
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
              disabled="true"
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="DENIED">DENIED</option>
              <option value="PENDING">PENDING</option>
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
        <h3>Coupons ({{ listing.content.length }})</h3>
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
                <th>SL</th>
                <th>Title</th>
                <th>Coupon Code</th>
                <th>Duration</th>
                <th>Service</th>
                <th>Vendor</th>
                <th>Customer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- start row -->
              <tr
                class="search-items"
                v-for="item in listing.content"
                :key="'vendor-' + item.id"
              >
                <td>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck1"
                      :value="item.id"
                      v-model="selected"
                    />
                  </div>
                </td>
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.couponCode }}</td>
                <td>
                  {{ getDate(item.startDate) + " " + getDate(item.expireDate) }}
                </td>
                <td>{{ item.serviceId }}</td>
                <td>{{ item.vendorId }}</td>
                <td>{{ item.customerId }}</td>
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
              <h5 class="modal-title">{{ $t("Manage Coupon") }}</h5>
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
                      <div class="col-lg-12 d-flex align-items-stretch">
                        <div
                          class="card w-100 position-relative overflow-hidden"
                        >
                          <div class="card-body p-4">
                            <form class="row">
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Coupon Type</label
                                >
                                <select
                                  v-model="data.couponType"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option value="type">
                                    Select Coupon Type
                                  </option>
                                  <option value="DISCOUNT">Discount</option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Coupon Title</label
                                >
                                <input
                                  v-model="data.title"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div
                                class="mb-4 col-4"
                                style="position: relative"
                              >
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Coupon Code</label
                                >
                                <input
                                  v-model="data.couponCode"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                                <i class="fs-5 ti ti-lock generateCode"></i>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Vendor</label
                                >
                                <input
                                  type="text"
                                  v-model="vendorText"
                                  class="form-control"
                                  id="searchInput"
                                  @input="searchVendors"
                                />
                                <div
                                  class="searchResults"
                                  v-if="vendors.length > 0"
                                >
                                  <ul>
                                    <li
                                      class="resultItems"
                                      @click="setVendorId(item.id)"
                                      v-for="item in vendors"
                                      :key="item.id + 'ser'"
                                    >
                                      {{ item.name }}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Customer</label
                                >
                                <input
                                  type="text"
                                  v-model="customerText"
                                  class="form-control"
                                  id="searchInput"
                                  @input="searchCustomers"
                                />
                                <div
                                  class="searchResults"
                                  v-if="customers.length > 0"
                                >
                                  <ul>
                                    <li
                                      class="resultItems"
                                      @click="setCustomerId(item.id)"
                                      v-for="item in customers"
                                      :key="item.id + 'ser'"
                                    >
                                      {{ item.name }}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Coupon By Service</label
                                >
                                <input
                                  type="text"
                                  v-model="serviceText"
                                  class="form-control"
                                  id="searchInput"
                                  @input="searchServices"
                                />
                                <div
                                  class="searchResults"
                                  v-if="services.length > 0"
                                >
                                  <ul>
                                    <li
                                      class="resultItems"
                                      @click="setServiceId(item.id)"
                                      v-for="item in services"
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
                                  >Discount Type</label
                                >
                                <select
                                  v-model="data.discountType"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option value="PERCENTAGE">Percentage</option>
                                  <option value="FLAT_RATE">Flat Rate</option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Discount Amount</label
                                >
                                <input
                                  v-model="data.discountAmount"
                                  placeholder="Ex: 500"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Limit for same user</label
                                >
                                <input
                                  v-model="data.limitForSameUser"
                                  placeholder="Ex: 5"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Minimum Purchase (AED)</label
                                >
                                <input
                                  v-model="data.minimumPurchase"
                                  placeholder="Ex: 100"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Start Date</label
                                >
                                <input
                                  v-model="data.startDate"
                                  type="date"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Expirte Date</label
                                >
                                <input
                                  v-model="data.expireDate"
                                  type="date"
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
      title: "Dashboard | Coupons",
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
        couponType: null,
        title: null,
        couponCode: null,
        vendorId: null,
        customerId: null,
        discountType: null,
        discountAmount: null,
        minimumPurchase: null,
        startDate: null,
        limitForSameUser: null,
        expireDate: null,
        serviceId: null,
      },
      listing: [],
      load: false,
      branches: [],
      services: [],
      customerText: null,
      serviceText: null,
      vendorText: null,
      customersFilter: [],
      servicesFilter: [],
      vendorsFilter: [],
      customers: [],
      vendors: [],
      link: "/base/coupons",
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
    filter(key, e) {
      this.load = false;
      let value = false;
      if (e != "all") value = e.target.value;
      else value = "";
      let url = this.link;
      this.step = "all";
      // if (value) {
      if (key == "customer") {
        url = this.link + "/byCustomer/" + value + "?page=0&size=10";
        // this.step = "all";
      }
      if (key == "vendor") {
        url = this.link + "/byVendor/" + value + "?page=0&size=10";
      }
      if (key == "service") {
        url = this.link + "/byService/" + value + "?page=0&size=10";
      }
      if (key == "type") {
        url = this.link + "/byType/" + value + "?page=0&size=10";
      }
      if (key == "all") {
        url = "/base/api/services" + value;
      }
      // }
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
    pagination(e, page) {
      e.preventDefault();
      if (page == 0) page = 1;
      axios
        .get(this.link + "?page=" + page + "&size=10", this.config)
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
    getDate(timing, type = false) {
      if (type) return moment.utc(timing).format("YYYY-MM-DD");
      return moment.utc(timing).format("MMMM DD, YYYY");
    },
    async getAll() {
      $(".preloader").show();
      axios
        .all([
          axios.get(this.link + "?page=0&size=10", this.config),
          axios.get("/branch/api/customers", this.config),
          axios.get("/base/api/services", this.config),
          axios.get("/branch/api/vendors", this.config),
        ])
        .then(
          axios.spread((listing, customers, services, vendors) => {
            this.listing = listing.data.response;
            this.customersFilter = customers.data.response;
            this.servicesFilter = services.data.response;
            this.vendorsFilter = vendors.data.response;
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
    setCustomerId(ev) {
      if (ev) {
        this.data.customerId = ev;
        this.customers = [];
        this.customerText = ev;
      }
    },
    searchCustomers() {
      if (this.customerText.length > 3) {
        axios
          .get(
            "/branch/api/customers/by-name?name=" + this.customerText,
            this.config
          )
          .then((response) => {
            if (response.data.success) {
              this.customers = response.data.response;
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      }
    },
    setVendorId(ev) {
      if (ev) {
        this.data.vendorId = ev;
        this.vendors = [];
        this.vendorText = ev;
      }
    },
    searchVendors() {
      if (this.vendorText.length > 3) {
        axios
          .get(
            "/branch/api/vendors/by-name?name=" + this.vendorText,
            this.config
          )
          .then((response) => {
            if (response.data.success) {
              this.vendors = response.data.response;
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      }
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
              this.serviceText +
              "&page=0&size=10",
            this.config
          )
          .then((response) => {
            if (response.data.success) {
              this.services = response.data.response.content;
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      }
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
            this.data.startDate = this.getDate(this.data.startDate, true);
            this.data.expireDate = this.getDate(this.data.expireDate, true);
            this.id = this.data.id;
            // this.link = this.link + "/" + response.data.response.id;
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
      this.data.startDate = moment(this.data.startDate).toISOString();
      this.data.expireDate = moment(this.data.expireDate).toISOString();
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
                couponType: null,
                title: null,
                couponCode: null,
                vendorId: null,
                customerId: null,
                discountType: null,
                discountAmount: null,
                minimumPurchase: null,
                limitForSameUser: null,
                startDate: null,
                expireDate: null,
                serviceId: null,
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
          .put(this.link + "/" + this.id, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              // this.link = "/branch/api/vendors";
              setTimeout(() => {
                this.getAll();
              }, 1000);
              this.data = {
                couponType: null,
                title: null,
                couponCode: null,
                vendorId: null,
                customerId: null,
                discountType: null,
                discountAmount: null,
                limitForSameUser: null,
                minimumPurchase: null,
                startDate: null,
                expireDate: null,
                serviceId: null,
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
<style scoped>
.generateCode {
  position: absolute;
  top: 38px;
  right: 24px;
  cursor: pointer;
}
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
  max-width: 33em;
  z-index: 1000;
  height: 12em;
  max-height: 12em;
  overflow-y: auto;
}
</style>
