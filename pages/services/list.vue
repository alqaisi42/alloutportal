<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="widget-content searchable-container list">
        <div class="card card-body">
          <form class="mt-4 row" novalidate="">
            <div class="mb-3 form-group col-4">
              <label> Categories </label>
              <div class="controls">
                <select
                  @change="getSubCategories($event)"
                  name="select"
                  id="select"
                  required=""
                  class="form-control"
                  aria-invalid="false"
                >
                  <option value="">Main Category</option>
                  <option
                    :value="item.id"
                    v-for="item in categories"
                    :key="item.id"
                  >
                    {{ item.nameEn }}
                  </option>
                </select>
                <div class="help-block"></div>
              </div>
            </div>
            <div class="mb-3 form-group col-4" v-if="subcategories">
              <label> Sub Category </label>
              <div class="controls">
                <select
                  @change="filter('sub', $event)"
                  name="select"
                  id="select"
                  required=""
                  class="form-control"
                  aria-invalid="false"
                >
                  <option value="">Main Sub Category</option>
                  <option
                    :value="item.id"
                    v-for="item in subcategories"
                    :key="item.id"
                  >
                    {{ item.nameEn }}
                  </option>
                </select>
                <div class="help-block"></div>
              </div>
            </div>
            <!-- <div class="mb-3 form-group col-3">
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
        </div>
        <ul
          class="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row"
        >
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
              id="all-category"
              @click="filter('all', 'all')"
              :class="{ active: step == 'all' }"
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
              @click="filter('featured', 'all')"
              :class="{ active: step == 'featured' }"
            >
              <span class="d-none d-md-block font-weight-medium">Featured</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
              id="note-social"
              @click="filter('cashOnDelivery', 'all')"
              :class="{ active: step == 'cashOnDelivery' }"
            >
              <span class="d-none d-md-block font-weight-medium"
                >Cash on Delivery</span
              >
            </a>
          </li>
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
              id="note-social"
              @click="filter('freeCancellation', 'all')"
              :class="{ active: step == 'freeCancellation' }"
            >
              <span class="d-none d-md-block font-weight-medium"
                >Free Cancellation</span
              >
            </a>
          </li>
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
              id="note-social"
              @click="filter('pickupAndDrop', 'all')"
              :class="{ active: step == 'pickupAndDrop' }"
            >
              <span class="d-none d-md-block font-weight-medium"
                >Pickup And Drop</span
              >
            </a>
          </li>
          <li class="nav-item ms-auto row gap-1">
            <nuxt-link
              to="/services/"
              class="btn btn-primary d-flex align-items-center px-2 col-5"
              style="width: 5em"
            >
              <i class="ti ti-file-export me-0 me-md-1 fs-4"></i>
              <span class="d-none d-md-block font-weight-medium fs-3">New</span>
            </nuxt-link>
          </li>
        </ul>
        <div class="card card-body">
          <h3>Services ({{ listing.totalElements }})</h3>
          <div class="table-responsive" v-show="load">
            <table id="" class="table search-table align-middle text-nowrap">
              <thead class="header-item">
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Vendor</th>
                  <th>Interest</th>
                  <th>Location</th>
                  <th>Fees</th>
                  <th>Adrenaline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- start row -->
                <tr
                  class="search-items"
                  v-for="item in listing.content"
                  :key="'serv-' + item.id"
                >
                  <td>{{ item.id }}</td>
                  <td>
                    <img
                      height="50"
                      width="50"
                      :src="item.imagePath"
                      :alt="item.nameAr"
                    />
                  </td>
                  <td>{{ item.titleEn }}</td>
                  <td>{{ item.categoryNameEn }}</td>
                  <td>{{ item.vendorName }}</td>
                  <td>{{ item.interestNameEn }}</td>
                  <td>{{ item.locationName }}</td>
                  <td>{{ money(item.companyFee) }}</td>
                  <td>
                    <span
                      :class="{
                        'badge-success': item.adrenalineMeterEn.includes('Low'),
                        'badge-warning':
                          item.adrenalineMeterEn.includes('Medium'),
                        'badge-danger': item.adrenalineMeterEn.includes('High'),
                      }"
                      class="btn btn-sm"
                      >{{ item.adrenalineMeterEn }}</span
                    >
                  </td>
                  <td>
                    <div class="action-btn">
                      <a
                        @click="makeOfflineList(item.id)"
                        href="javascript:void(0)"
                        class="btn badge-danger btn-sm"
                      >
                        <!-- <i class="ti ti-ban fs-5"></i> -->
                        Add Offline
                      </a>
                      <a
                        @click="goto(item.id)"
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
      <div
        class="modal fade"
        id="offlineCases"
        tabindex="-1"
        role="dialog"
        aria-labelledby="offlineCasesTitle"
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
                  <div class="col-12">
                    <p>Set days and times</p>
                    <div class="mb-3 form-group col-12">
                      <label> Offline type </label>
                      <div class="controls">
                        <select
                          name="select"
                          @change="changeOffline($event)"
                          v-model="offline.type"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option selected value="">Select one</option>
                          <option value="DAILY">DAILY</option>
                          <option value="OCCASIONAL">OCCASIONAL</option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 form-groupcol-12 row">
                    <div
                      class="mb-3 form-group col-12 row"
                      v-if="
                        offline.type == 'OCCASIONAL' || offline.type == 'DAILY'
                      "
                    >
                      <div class="col-6">
                        <label> From time </label>
                        <div class="controls">
                          <input
                            type="time"
                            v-model="offline.fromTime"
                            name="text"
                            class="form-control"
                            required=""
                            data-validation-required-message="This field is required"
                            aria-invalid="fa*lse"
                          />
                          <div class="help-block"></div>
                        </div>
                      </div>
                      <div class="col-6">
                        <label> To time </label>
                        <div class="controls">
                          <input
                            type="time"
                            v-model="offline.toTime"
                            name="text"
                            class="form-control"
                            required=""
                            data-validation-required-message="This field is required"
                            aria-invalid="false"
                          />
                          <div class="help-block"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="mb-3 form-group col-12"
                      v-if="offline.type == 'OCCASIONAL'"
                    >
                      <p>Offline duration</p>
                      <div class="mb-3 form-group col-12 row">
                        <div class="col-6">
                          <label> Start date </label>
                          <div class="controls">
                            <input
                              type="date"
                              v-model="offline.occasionalOfflineCases.startDate"
                              name="text"
                              class="form-control"
                              required=""
                              data-validation-required-message="This field is required"
                              aria-invalid="false"
                            />
                            <div class="help-block"></div>
                          </div>
                        </div>
                        <div class="col-6">
                          <label> End date </label>
                          <div class="controls">
                            <input
                              type="date"
                              v-model="offline.occasionalOfflineCases.endDate"
                              name="text"
                              class="form-control"
                              required=""
                              data-validation-required-message="This field is required"
                              aria-invalid="false"
                            />
                            <div class="help-block"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="mb-3 form-group col-12"
                      v-if="offline.type == 'DAILY'"
                    >
                      <p>Offline days</p>
                      <div class="row form-check-inline" style="display: flex">
                        <div class="form-check col-3 day">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="offline.dailyOfflineCases.monday"
                            value="monday"
                            id="Monday"
                          />
                          <label class="form-check-label" for="Monday"
                            >Monday</label
                          >
                        </div>
                        <div class="form-check col-3 day">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="offline.dailyOfflineCases.tuesday"
                            value="tuesday"
                            id="Tuesday"
                          />
                          <label class="form-check-label" for="Tuesday"
                            >Tuesday</label
                          >
                        </div>
                        <div class="form-check col-3 day">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="offline.dailyOfflineCases.wednesday"
                            value="wednesday"
                          />
                          <label class="form-check-label" for="wednesday"
                            >Wednesday</label
                          >
                        </div>
                        <div class="form-check col-3 day">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="offline.dailyOfflineCases.thursday"
                            value="thursday"
                          />
                          <label class="form-check-label" for="thursday"
                            >Thursday</label
                          >
                        </div>
                        <div class="form-check col-3 day">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="offline.dailyOfflineCases.friday"
                            value="friday"
                          />
                          <label class="form-check-label" for="friday"
                            >Friday</label
                          >
                        </div>
                        <div class="form-check col-3 day">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="offline.dailyOfflineCases.saturday"
                            value="saturday"
                          />
                          <label class="form-check-label" for="saturday"
                            >Saturday</label
                          >
                        </div>
                        <div class="form-check col-3 day">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="offline.dailyOfflineCases.sunday"
                            value="sunday"
                            id="Sunday"
                          />
                          <label class="form-check-label" for="Sunday"
                            >Sunday</label
                          >
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
      <div
        class="modal fade"
        id="offlineCasesList"
        tabindex="-1"
        role="dialog"
        aria-labelledby="offlineCasesListTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          role="document"
          style="width: 80% !important; max-width: 80% !important"
        >
          <div class="modal-content">
            <div class="modal-header d-flex align-items-center">
              <h5 class="modal-title">{{ $t("Add Offline") }}</h5>
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
                  <table class="table search-table align-middle text-nowrap">
                    <thead class="header-item">
                      <tr>
                        <th>Id</th>
                        <th>Service</th>
                        <th>Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Daily</th>
                        <th>Occasionally</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-if="offlineList">
                      <!-- start row -->
                      <tr
                        class="search-items"
                        v-for="item in offlineList"
                        :key="'offlineList-' + item.id"
                      >
                        <td>{{ item.id }}</td>
                        <td>{{ item.service }}</td>
                        <td>{{ item.type }}</td>
                        <td>{{ item.fromTime }}</td>
                        <td>{{ item.toTime }}</td>
                        <td>{{ item.dailyOfflineCases.length }}</td>
                        <td>{{ item.occasionalOfflineCases.list }}</td>
                        <td>
                          <div class="action-btn">
                            <a
                              @click="makeOffline(item.id)"
                              href="javascript:void(0)"
                              class="text-info edit"
                            >
                              <i class="ti ti-pencil fs-5"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div v-if="!offlineList">
                    <p style="text-align: center">No offline data found.</p>
                  </div>
                  <!-- </form> -->
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id=""
                @click="addOffline()"
                class="btn btn-info rounded-pill px-4"
              >
                Add Offline
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
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Services | List",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap.min.css",
        },
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
      ],
    };
  },
  name: "usertype",
  data() {
    return {
      dataTable: null,
      link: "/base/api/services",
      tmpLink: "/base/api/services",
      linkOffline: "/base/api/offlineCases",
      load: false,
      step: "all",
      offline: {
        serviceId: null,
        type: null,
        fromTime: null,
        toTime: null,
        dailyOfflineCases: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
        occasionalOfflineCases: {},
      },
      listing: [],
      action: "insert",
      offlineList: [],
      bookings: null,
      customers: null,
      invitations: null,
      splits: null,
      offlineId: null,
      categories: null,
      serviceId: null,
      subcategories: null,
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
      let value = false;
      if (e != "all") value = e.target.value;
      else value = "";
      let url = this.link;
      this.step = "all";
      if (key == "cat") {
        url = "/base/api/services/category/" + value;
      }
      if (key == "sub") {
        url = "/base/api/services/sub-category/" + value;
      }
      if (key == "featured") {
        url = "/base/api/services/featured" + value;
        this.step = "featured";
      }
      if (key == "cashOnDelivery") {
        url = "/base/api/services/cashOnDelivery" + value;
        this.step = "cashOnDelivery";
      }
      if (key == "freeCancellation") {
        url = "/base/api/services/freeCancellation" + value;
        this.step = "freeCancellation";
      }
      if (key == "pickupAndDrop") {
        url = "/base/api/services/pickupAndDrop" + value;
        this.step = "pickupAndDrop";
      }
      if (key == "all") {
        url = "/base/api/services" + value;
        this.step = "all";
      }
      this.tmpLink = url;
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
    money(amount) {
      if (amount == null) return "0 AED";
      const formatter = new Intl.NumberFormat("ae-AE", {
        style: "currency",
        currency: "AED",
      });

      return formatter.format(amount);
    },
    async getAll() {
      $(".preloader").show();
      axios
        .all([
          axios.get("/base/categories/all", this.config),
          axios.get(this.link, this.config),
          axios.get("/branch/api/customers", this.config),
          axios.get("/base/api/bookings", this.config),
          axios.get("/base/api/invitations", this.config),
          axios.get("/base/api/split-payments", this.config),
        ])
        .then(
          axios.spread(
            (categories, listing, customers, bookings, invitations, splits) => {
              this.categories = categories.data.response;
              this.listing = listing.data.response;
              this.customers = customers.data.response;
              this.bookings = bookings.data.response;
              this.invitations = invitations.data.response;
              this.splits = splits.data.response;
              if (listing.data.success == true) {
                setTimeout(() => {
                  this.load = true;
                  $(".preloader").hide();
                }, 500);
              }
              this.$forceUpdate();
            }
          )
        );
    },
    changeOffline(event) {
      this.offline.type = event.target.value;
    },
    makeOfflineList(id = null) {
      axios
        .get("/base/api/offlineCases/by-service-id/" + id, this.config)
        .then((response) => {
          if (response.data.success) {
            this.offlineList = response.data.response;
            this.serviceId = id;
            this.showModal("offlineCasesList");
          } else {
            this.$toast.error(response.data.message).goAway(1500);
            this.showModal("offlineCasesList");
          }
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
          this.offlineList = [];
          this.showModal("offlineCasesList");
        });
    },
    addOffline() {
      this.action = "insert";
      this.offline.type = null;
      $("#offlineCasesList").modal("hide");
      this.showModal("offlineCases");
    },
    makeOffline(id = null) {
      axios
        .get("/base/api/offlineCases/" + id, this.config)
        .then((response) => {
          if (response.data.success) {
            this.offlineId = response.data.response.id;
            this.offline = response.data.response;
            this.action = "update";
            if (this.offline.dailyOfflineCases.length > 0)
              this.offline.dailyOfflineCases =
                this.offline.dailyOfflineCases[0];
            else this.offline.dailyOfflineCases = [];
            if (this.offline.occasionalOfflineCases.length > 0)
              this.offline.occasionalOfflineCases =
                this.offline.occasionalOfflineCases[0];
            else this.offline.occasionalOfflineCases = [];
            this.offline.type = response.data.response.type;
            $("#offlineCasesList").modal("hide");
            this.showModal("offlineCases");
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
    getSubCategories(e) {
      let value = e.target.value;
      axios
        .get("/base/api/subcategories/by-category/" + value, this.config)
        .then((response) => {
          if (response.data.success) {
            this.subcategories = response.data.response;
            axios
              .get("/base/api/services/category/" + value, this.config)
              .then((response) => {
                if (response.data.success == true) {
                  this.listing = response.data.response;
                  this.load = true;
                } else {
                  this.listing = [];
                }
              })
              .catch((error) => {
                this.$toast.error(error.response.data.messageText).goAway(1500);
              });
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    showModal(id) {
      $("#" + id).modal("toggle");
    },
    submit() {
      this.offline.dailyOfflineCases = [this.offline.dailyOfflineCases];
      if (this.offline.occasionalOfflineCases)
        this.offline.occasionalOfflineCases = [
          this.offline.occasionalOfflineCases,
        ];
      else this.offline.occasionalOfflineCases = [];
      const formData = {
        ...this.offline,
        serviceId: this.serviceId,
      };
      if (this.action == "insert") {
        axios
          .post(this.linkOffline, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.offline = {
                serviceId: null,
                type: null,
                fromTime: null,
                toTime: null,
                dailyOfflineCases: {
                  monday: false,
                  tuesday: false,
                  wednesday: false,
                  thursday: false,
                  friday: false,
                  saturday: false,
                  sunday: false,
                },
                occasionalOfflineCases: {
                  startDate: null,
                  endDate: null,
                },
              };
              $("#offlineCases").modal("hide");
              this.getAll();
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      } else {
        axios
          .put(this.linkOffline + "/" + this.offlineId, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.offline = {
                serviceId: null,
                type: null,
                fromTime: null,
                toTime: null,
                dailyOfflineCases: {
                  monday: false,
                  tuesday: false,
                  wednesday: false,
                  thursday: false,
                  friday: false,
                  saturday: false,
                  sunday: false,
                },
                occasionalOfflineCases: {
                  startDate: null,
                  endDate: null,
                },
              };
              $("#offlineCases").modal("hide");
              this.getAll();
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      }
    },
    goto(code) {
      this.$router.push(
        this.localeLocation({
          path: `/services/${code}`,
        })
      );
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
  },
};
</script>
<style scoped>
.addoffline {
  margin-top: 7px;
  width: 6.5em;
  height: 2em;
  padding: 0.2em;
  font-size: 10px;
  background-color: red;
}
</style>
