<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="row" v-if="load">
        <div class="col-12">
          <div class="d-flex align-items-center gap-4 mb-4">
            <div class="position-relative">
              <div class="border border-2 border-primary rounded-circle">
                <img
                  :src="data.imgPath"
                  class="rounded-circle m-1"
                  :alt="data.name"
                  width="60"
                />
              </div>
            </div>
            <div>
              <h3 class="fw-semibold">
                <span class="text-dark">{{ data.name }}</span>
              </h3>
              <span>ID #{{ data.id }}, Joining Date: {{ data.createdDate }}</span
              ><br />
              <span>Email: {{ data.email }}</span
              ><br />
              <span>Phone: {{ data.phone }}</span>
              ><br />
              <span>Last Active: {{ data.lastLogin }}</span>
            </div>
          </div>
        </div>
        <form class="mt-4 row" novalidate="">
          <div class="mb-3 form-group col-6">
            <label>
              Filter By
              <span class="text-danger">*</span>
            </label>
            <div class="controls">
              <select
                name="select"
                id="select"
                required=""
                class="form-control"
                aria-invalid="false"
              >
                <option value="">Order ID</option>
              </select>
              <div class="help-block"></div>
            </div>
          </div>
          <div class="mb-3 form-group col-6">
            <label>
              Type to Search
              <span class="text-danger">*</span>
            </label>
            <div class="controls">
              <input
                type="text"
                name="text"
                class="form-control"
                placeholder="You can write"
                required=""
                data-validation-required-message="This field is required"
                aria-invalid="false"
              />
              <div class="help-block"></div>
            </div>
          </div>
        </form>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="d-md-flex align-items-center mb-9">
                <div>
                  <h5 class="card-title fw-semibold">Activities</h5>
                  <p class="card-subtitle">
                    List of customer's Activities history
                  </p>
                </div>
                <div class="ms-auto mt-4 mt-md-0">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link rounded active"
                        data-bs-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-selected="true"
                      >
                        <span>Bookings ({{ bookings.length }})</span>
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link rounded"
                        data-bs-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        <span>Reviews ({{ reviews.totalElements }})</span>
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link rounded"
                        data-bs-toggle="tab"
                        href="#messages"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        <span>Notifications ({{ notifications.totalElements }})</span>
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link rounded"
                        data-bs-toggle="tab"
                        href="#loyalty"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        <span>Loyalty ({{ loyalti.totalElements }})</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-content mt-3">
                <div class="tab-pane active" id="home" role="tabpanel">
                  <div class="table-responsive" v-if="load">
                    <table id="" class="table align-middle mb-0 text-nowrap">
                      <thead class="header-item">
                        <tr>
                          <th>Service</th>
                          <th>Number of guests</th>
                          <th>Day</th>
                          <th>Timing</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- start row -->
                        <tr
                          class="search-items"
                          v-for="item in bookings"
                          :key="'booking-' + item.id"
                        >
                          <td>{{ item.serviceId }}</td>
                          <td>{{ item.numberOfGuests }}</td>
                          <td>{{ days[item.dayId] }}</td>
                          <td>{{ getDate(item.bookingTime) }}</td>
                          <td>{{ money(item.totalPrice) }}</td>
                          <td>
                            <span
                              v-if="item.paymentStatus == 'PAID'"
                              class="btn btn-sm badge-success"
                              >PAID</span
                            >
                            <span v-else class="btn btn-sm badge-danger">{{
                              item.paymentStatus
                            }}</span>
                          </td>
                          <td>
                            <div class="action-btn">
                              <a
                                @click="goto(item.id)"
                                href="javascript:void(0)"
                                class="text-info ms-2"
                                style="padding-top: 5px"
                              >
                                <i class="ti ti-eye fs-5"></i>
                              </a>
                              <a
                                @click="
                                  performAction(
                                    item.id,
                                    '/base/api/bookings/' + item.id
                                  )
                                "
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
                <div class="tab-pane" id="profile" role="tabpanel">
                  <div class="table-responsive" v-if="load">
                    <table
                      id="example2"
                      class="table table-hover align-middle mb-0 text-nowrap"
                    >
                      <thead>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Banner Type</th>
                        <th>Published</th>
                        <th>URL</th>
                        <th>Title</th>
                        <th>Branch</th>
                        <th>Service</th>
                        <th>Booking</th>
                        <th>Rate</th>
                        <th class="text-end">Action</th>
                      </thead>
                      <tbody>
                        <tr v-for="item in reviews.content" :key="'reviews-' + item.id">
                          <td>{{ item.id }}</td>
                          <td>
                            <img
                              height="50"
                              width="50"
                              :src="item.imagePath"
                              :alt="item.title"
                            />
                          </td>
                          <td>
                            {{ item.bannerType }}
                          </td>
                          <td>
                            <span
                              v-if="item.published == 'Yes'"
                              class="btn btn-sm badge-success"
                              >Yes</span
                            >
                            <span v-else class="btn btn-sm badge-danger">No</span>
                          </td>
                          <td>{{ item.url }}</td>
                          <td>{{ item.title }}</td>
                          <td>{{ item.branchId }}</td>
                          <td>{{ item.serviceId }}</td>
                          <td>{{ item.bookingId }}</td>
                          <td>{{ item.rate }}</td>
                          <td>
                            <div class="action-btn">
                              <a
                                @click="
                                  performAction(
                                    item.id,
                                    '/branch/api/reviews/' + item.id
                                  )
                                "
                                href="javascript:void(0)"
                                class="text-dark ms-2"
                              >
                                <i class="ti ti-trash fs-5"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="messages" role="tabpanel">
                  <div class="table-responsive" v-if="load">
                    <table
                      id="example3"
                      class="table table-hover align-middle mb-0 text-nowrap"
                    >
                      <thead class="header-item">
                        <tr>
                          <th>Image</th>
                          <th>Customer</th>
                          <th>Branch</th>
                          <th>Type</th>
                          <th>Title</th>
                          <th>Message</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="search-items"
                          v-for="item in notifications.content"
                          :key="'notification-' + item.id"
                        >
                          <td>
                            <img
                              height="50"
                              width="50"
                              :src="item.imagePath"
                              :alt="item.title"
                            />
                          </td>
                          <td>{{ item.customersId }}</td>
                          <td>{{ item.branchId }}</td>
                          <td>{{ item.type }}</td>
                          <td>{{ item.title }}</td>
                          <td>{{ item.message }}</td>
                          <td>
                            <span v-if="item.status" class="btn btn-sm badge-success"
                              >Active</span
                            >
                            <span v-else class="btn btn-sm badge-danger"
                              >Inactive</span
                            >
                          </td>
                          <td>
                            <div class="action-btn">
                              <a
                                @click="
                                  performAction(
                                    item.id,
                                    '/branch/api/notifications/' + item.id
                                  )
                                "
                                href="javascript:void(0)"
                                class="text-dark ms-2"
                              >
                                <i class="ti ti-trash fs-5"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="loyalty" role="tabpanel">
                  <div class="table-responsive" v-if="load">
                    <table
                      id="example4"
                      class="table table-hover align-middle mb-0 text-nowrap"
                    >
                      <thead class="header-item">
                        <tr>
                          <th>#</th>
                          <th>Booking</th>
                          <th>Date</th>
                          <th>Points</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="search-items"
                          v-for="item in loyalti.content"
                          :key="'loyalti-' + item.id"
                        >
                          <td>{{ item.id }}</td>
                          <td>{{ item.bookingId }}</td>
                          <td>{{ getDate(item.redeemDate) }}</td>
                          <td>{{ item.points }}</td>
                          <td>
                            <span
                              v-if="item.published == 'INSERT'"
                              class="btn btn-sm badge-success"
                              >INSERT</span
                            >
                            <span v-else class="btn btn-sm badge-danger">{{
                              "REDEEM"
                            }}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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
      title: "Customer | Detail",
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
  head: {
    title: "Customer | Profile",
  },
  name: "profile",
  data() {
    return {
      dataTable: null,
      link: "/branch/api/customers",
      load: false,
      action: "insert",
      username: "user",
      id: null,
      data: {
        id: 1,
        imgPath: null,
        name: "John Doe",
        phone: "1234567890",
        email: "john.doe@example.com",
        date: "2023-01-01T00:00:00Z",
        isActive: null,
        lastLogin: "2024-02-13",
        isPhoneVerified: 1,
        walletBalance: null,
        loyalityPoint: 1,
        refferedCode: null,
        refferedBy: null,
        branchId: 1,
        isGlobal: null,
      },
      days: {
        1: "sunday",
        2: "monday",
        3: "tuesday",
        4: "wednesday",
        5: "thursday",
        6: "friday",
        7: "saturday",
      },
      bookings: [],
      reviews: [],
      notifications: [],
      loyalti: [],
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  async mounted() {
    if (!process.client) return;
    // this.id = this.$route.params.id;
    if (!this.id) {
      this.localeLocation({
        path: "customers-list",
      });
      return;
    }
    this.get();
  },
  component: {},
  methods: {
    money(amount) {
      const formatter = new Intl.NumberFormat("ae-AE", {
        style: "currency",
        currency: "AED",
      });

      return formatter.format(amount);
    },
    performAction(id = null, link = null) {
      this.$confirm("Are you sure you want to perform this action?").then(
        () => {
          if (!link) link = this.link;
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
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    get() {
      $(".preloader").show();
      axios
        .all([
          axios.get(this.link + "/" + this.id, this.config),
          axios.get(
            "/base/api/bookings/byCustomerId?customerId=" + this.id,
            this.config
          ),
          axios.get("/branch/api/reviews/customer/" + this.id, this.config),
          axios.get(
            "/branch/api/notifications/customer/" + this.id,
            this.config
          ),
          axios.get(
            "/branch/api/loyalty-transactions/customer/" + this.id,
            this.config
          ),
        ])
        .then(
          axios.spread(
            (customer, bookings, reviews, notifications, loyalti) => {
              this.data = customer.data.response;
              this.bookings = bookings.data.response;
              this.reviews = reviews.data.response;
              this.notifications = notifications.data.response;
              this.loyalti = loyalti.data.response;
              if (!this.data.imgPath)
                this.data.imgPath =
                  "/assets/Modernize/images/profile/user-1.jpg";
              // this.timing = timing.data.response;
              // this.data.locationtTiming = [];
              if (customer.data.success == true) {
                this.load = true;
                $(".preloader").hide();
                // this.onScriptLoaded();
              }
              // this.$forceUpdate()
            }
          )
        );
    },
    onScriptLoaded() {
      this.externalLoaded = true;
      // setTimeout(() => {
      $("#example").DataTable({
        authWidth: true,
        responsive: true,
        bDestroy: true,
      });
      $("#example2").DataTable({
        authWidth: true,
        responsive: true,
        bDestroy: true,
      });
      $("#example3").DataTable({
        authWidth: true,
        responsive: true,
        bDestroy: true,
      });
      // }, 300);
    },
    goto(code) {
      this.$router.push(
        this.localeLocation({
          name: "booking-detail",
          params: { id: code },
        })
      );
    },
  },
};
</script>
<style scoped>
img.rounded-circle {
  height: 4.3em;
}
</style>
