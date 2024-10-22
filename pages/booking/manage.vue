<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Bookings") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                $t("Home")
              }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Bookings") }}
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-3">
              <div class="text-center mb-n5">
                <img src="/Modernize/images/breadcrumb/ChatBc.png" alt="" class="img-fluid mb-n4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form class="mt-4 row" novalidate="">
        <div class="mb-3 form-group col-5">
          <label> By Service </label>
          <div class="controls">
            <select @change="filter('service', $event)" name="select" id="select" required="" class="form-control"
              aria-invalid="false">
              <option value="">All</option>
              <option :value="item.id" v-for="item in services.content" :key="item.id + 'serv'">
                {{ item.titleEn }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-2">
          <label>
            Display
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select name="select" id="select" required="" class="form-control" aria-invalid="false">
              <option value="">10</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-2">
          <label>
            Order
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select name="select" id="select" required="" class="form-control" aria-invalid="false">
              <option value="">Date Descending</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-2">
          <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center px-3" id="add-notes"
            style="margin-top: 1.5em">
            <i class="ti ti-search me-0 me-md-1 fs-4"></i>
            <span class="d-none d-md-block font-weight-medium fs-3">Search</span>
          </a>
        </div>
      </form>
      <ul class="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row">
        <li class="nav-item">
          <a href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="all-category" @click="filter('status', 'ALL')" :class="{ active: step == 'ALL' }">
            <i class="ti ti-list fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">All</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-business" @click="filter('status', 'Paid')" :class="{ active: step == 'Paid' }">
            <span class="d-none d-md-block font-weight-medium">PAID</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social" @click="filter('status', 'Pending')" :class="{ active: step == 'Pending' }">
            <span class="d-none d-md-block font-weight-medium">PENDING</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social" @click="filter('status', 'Unpaid')" :class="{ active: step == 'Unpaid' }">
            <span class="d-none d-md-block font-weight-medium">UNPAID</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social" @click="filter('status', 'Refunded')" :class="{ active: step == 'Refunded' }">
            <span class="d-none d-md-block font-weight-medium">REFUNDED</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social" @click="filter('status', 'Canceled')" :class="{ active: step == 'Canceled' }">
            <span class="d-none d-md-block font-weight-medium">CANCELED</span>
          </a>
        </li>
        <li class="nav-item ms-auto row gap-1" style="position: absolute; right: 1em">
          <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center px-2 col-5" style="width: 5em"
            id="add-vendor" @click="showModal('addVendorModal')">
            <i class="ti ti-file-export me-0 me-md-1 fs-4"></i>
            <span class="d-none d-md-block font-weight-medium fs-3">New</span>
          </a>
        </li>
      </ul>

      <div class="card card-body" v-if="load">
        <h3>Bookings ({{ listing.content.length }})</h3>
        <div class="table-responsive">
          <table id="" class="table search-table align-middle text-nowrap">
            <thead class="header-item">
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Guests N.</th>
                <th>Day</th>
                <th>Timing</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- start row -->
              <tr class="search-items" v-for="item in listing.content" :key="'booking-' + item.id">
                <td>{{ item.customerName }}</td>
                <td>{{ item.serviceName }}</td>
                <td>{{ item.numberOfGuests }}</td>
                <td>{{ days[item.dayId] }}</td>
                <td>{{ getDate(item.bookingTime) }}</td>
                <td>{{ money(item.totalPrice) }}</td>
                <td>
                  <span :class="{
                'badge-success': item.paymentStatus == 'PAID',
                'badge-warning': item.paymentStatus == 'PENDING',
                'badge-info': item.paymentStatus == 'REFUNDED',
                'badge-danger':
                  item.paymentStatus == 'CANCELLED' ||
                  item.paymentStatus == 'UNPAID',
              }" class="btn btn-sm">{{ item.paymentStatus }}</span>
                </td>
                <td>
                  <div class="action-btn">
                    <a @click="goto(item.id)" href="javascript:void(0)" class="text-info edit">
                      <div class="eye-display">
                        <img src="/icons/eye-filled.png" alt="" />
                      </div>
                    </a>
                    <a @click="get(item.id)" href="javascript:void(0)" class="ms-2 btn btn-info btn-sm">
                      Edit
                    </a>
                    <a @click="performAction(item.id)" href="javascript:void(0)" class="ms-2 btn badge-danger btn-sm">
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <ul class="pagination">
            <li class="page-item" v-if="listing.number > 1">
              <a class="page-link link" @click="pagination($event, listing.number - 1)" href="" aria-label="Previous">
                <span aria-hidden="true">
                  <i class="ti ti-chevrons-left fs-4"></i>
                </span>
              </a>
            </li>
            <li class="page-item" v-for="page in listing.totalPages" :class="{ active: page == listing.number }"
              :key="page + 'pag'">
              <a class="page-link link" @click="pagination($event, page)" href="">{{ page }}</a>
            </li>
            <li class="page-item" v-if="!listing.last">
              <a class="page-link link" @click="pagination($event, listing.number + 1)" href="" aria-label="Next">
                <span aria-hidden="true">
                  <i class="ti ti-chevrons-right fs-4"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div class="modal fade" id="addVendorModal" tabindex="-1" role="dialog" aria-labelledby="addVendorModalTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document"
          style="width: 80% !important; max-width: 80% !important">
          <div class="modal-content">
            <div class="modal-header d-flex align-items-center">
              <h5 class="modal-title">{{ $t("Manage Booking") }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="add-contact-box">
                <div class="add-contact-content">
                  <!-- <form id="addContactModalTitle"> -->
                  <div class="tab-pane fade active show" id="pills-account" role="tabpanel"
                    aria-labelledby="pills-account-tab" tabindex="0">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 d-flex align-items-stretch">
                        <div class="card w-100 position-relative overflow-hidden">
                          <div class="card-body p-4">
                            <!-- <NuxtTime :datetime="Date.now()" second="numeric" month="long" day="numeric" /> -->
                            <form class="row">
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Customer </label>
                                <select v-model="data.customerId" name="select" id="select" required=""
                                  class="form-control" aria-invalid="false">
                                  <option :value="item.id" v-for="item in customers" :key="item.id + 'cust'">
                                    {{ item.name }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Service</label>
                                <select v-model="data.serviceId" name="select" id="select" required=""
                                  class="form-control" aria-invalid="false">
                                  <option :value="item.id" v-for="item in services.content" :key="item.id + 'ser'">
                                    {{ item.titleEn }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold" >Bookings Time</label>
                                <input v-model="data.bookingTime" type="datetime-local" class="form-control"
                                @change="formatBookingTime" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Payment Status</label>
                                <select v-model="data.paymentStatus" name="select" id="select" required=""
                                  class="form-control" aria-invalid="false">
                                  <option :value="item.title" v-for="item in statuses" :key="item.title">
                                    {{ item.title }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Booking Status</label>
                                <select v-model="data.status" name="select" id="select" required="" class="form-control"
                                  aria-invalid="false">
                                  <option value="0">Inactive</option>
                                  <option value="1">Active</option>
                                </select>
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Total Price</label>
                                <input v-model="data.totalPrice" type="number" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Number of
                                  guests</label>
                                <input v-model="data.numberOfGuests" type="text" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">In Date</label>
                                <input v-model="data.inDate" type="date" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Day</label>
                                <select v-model="data.dayId" name="select" id="select" required="" class="form-control"
                                  aria-invalid="false">
                                  <option value="1">Sunday</option>
                                  <option value="2">Monday</option>
                                  <option value="3">Tuesday</option>
                                  <option value="4">Wednesday</option>
                                  <option value="5">Thursday</option>
                                  <option value="6">Friday</option>
                                  <option value="7">Saturday</option>
                                </select>
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Service Timing</label>
                                <input v-model="data.serviceTimingId" type="number" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">N° of
                                  Reservations</label>
                                <input v-model="data.noOfReservations" type="number" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">N° of car</label>
                                <input v-model="data.noOfCar" type="number" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Duration
                                  Service</label>
                                <input v-model="data.durationServiceId" type="number" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">Price Per Type</label>
                                <input v-model="data.pricePerType" type="number" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">No Child</label>
                                <input v-model="data.noChild" type="text" class="form-control"
                                  id="exampleInputPassword1" />
                              </div>
                              <div class="mb-4 col-3">
                                <label for="exampleInputPassword1" class="form-label fw-semibold">No Adult</label>
                                <input v-model="data.noAdult" type="text" class="form-control"
                                  id="exampleInputPassword1" />
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
              <button @click="submit()" class="btn btn-success rounded-pill px-4">
                Add
              </button>
              <button class="btn btn-danger rounded-pill px-4" data-bs-dismiss="modal">
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
      title: "Booking | Manage",
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
      link: "/base/api/bookings",
      load: false,
      data: {
        id: null,
        customerId: null,
        serviceId: null,
        bookingTime: null,
        status: 0,
        totalPrice: null,
        numberOfGuests: null,
        inDate: null,
        dayId: null,
        serviceTimingId: null,
        noOfReservations: null,
        noOfCar: null,
        paymentStatus: "PENDING",
        durationServiceId: null,
        pricePerType: null,
        noChild: null,
        noAdult: null,
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
      listing: [],
      customers: [],
      services: [],
      statuses: [],
      action: "insert",
      step: "ALL",
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
    $(".preloader").show();
    let token = JSON.parse(localStorage.getItem("data"));
    if (!token) this.$router.push(this.localeLocation({ name: "login" }));
    // this.config.auth.username = token.email
    // this.config.auth.password = token.password
    this.getAll();
  },
  component: {},
  methods: {
    formatBookingTime() {
      const date = new Date(this.data.bookingTime);
      // Ensure we are getting the correct date and time
      if (!isNaN(date.getTime())) {
        // Convert to the desired format: "2024-06-27T13:34:10Z"
        const formattedDate = date.toISOString().split('.')[0] + 'Z';
        this.data.bookingTime = formattedDate;
      }
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
    money(amount) {
      const formatter = new Intl.NumberFormat("ae-AE", {
        style: "currency",
        currency: "AED",
      });

      return formatter.format(amount);
    },
    filter(key, e) {
      this.load = false;
      let value = null;
      if (key != "status") value = e.target.value;
      else value = e;
      let url = this.link;
      if (key == "service") {
        url = "/base/api/bookings/byServiceId?serviceId=" + value;
        this.step = "ALL";
      }
      if (key == "status") {
        url = "/base/api/bookings/byStatus?status=" + value;
        if (value == "ALL") {
          url = this.link;
        }
        this.step = value;
      }
      if (!value) url = this.link;
      axios
        .get(url, this.config)
        .then((response) => {
          if (response.data) {
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
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    async getAll() {
      $(".preloader").show();
      await axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/branch/api/customers", this.config),
          axios.get("/base/api/services", this.config),
          axios.get("/base/api/bookings/statuses", this.config),
        ])
        .then(
          axios.spread((listing, customers, services, statuses) => {
            this.listing = listing.data.response;
            this.customers = customers.data.response;
            this.services = services.data.response;
            this.statuses = statuses.data.response;
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
      // alert(id)
      this.$confirm("Are you sure you want to perform this action?").then(
        () => {
          this.token = JSON.parse(localStorage.getItem("access_token"));
          axios
            .delete(this.link + "/" + id, this.config)
            .then((response) => {
              if (response.data.success) {
                this.load = false;
                this.$toast.success(response.data.response.msg).goAway(1500);
                this.getAll();
                setTimeout(() => {
                  this.load = true;
                }, 500);
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
    handleSingleFileUpload(file) {
      this.file = file;
    },
    async submit() {
    
      const formData = {
        ...this.data,
      };
      // alert(formData.bookingTime)
      if (this.action == "insert") {
        await axios.post(this.link, formData, this.config)
          .then((response) => {
            if (response) {
              this.$toast.success("Data has been created").goAway(1500);
              this.getAll();
              // alert(response);
              // alert('SENT')
              $("#addVendorModal").modal("hide");
            } else this.$toast.error("Then Error ").goAway(1500);
          })
          .catch((error) => {
            if (error.response) {
              console.error('Error response:', error.response);
              const errorMessage = error.response.data.message || "An error occurred";
              this.$toast.error(`Catch Error: ${errorMessage}`).goAway(1500);
            } else if (error.request) {
              console.error('Error request:', error.request);
              this.$toast.error("No response received from the server").goAway(1500);
            } else {
              console.error('Error message:', error.message);
              this.$toast.error(`Error: ${error.message}`).goAway(1500);
            }
            // if (error.response.data.success == false) {
            //   this.$toast.error("Catch Error").goAway(1500);
            // }
          });
      } else {
        axios
          .put(this.link + "/" + this.id, formData, this.config)
          .then((response) => {
            if (response.data) {
              this.$toast.success("Data has been updated").goAway(1500);
              this.getAll();
              this.data = {
                id: null,
                customerId: null,
                serviceId: null,
                bookingTime: null,
                status: null,
                totalPrice: null,
                numberOfGuests: null,
                inDate: null,
                dayId: null,
                serviceTimingId: null,
                noOfReservations: null,
                noOfCar: null,
                paymentStatus: null,
                durationServiceId: null,
                pricePerType: null,
                constraintMsg: null,
              };
              $("#addVendorModal").modal("hide");
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Catch Error").goAway(1500);
            }
          });
      }
    },
    showModal(id) {
      $("#" + id).modal("toggle");
    },
    goto(code) {
      this.$router.push(
        this.localeLocation({
          path: `${code}`,
        })
      );
    },
  },
};
</script>

<style scoped>
.table> :not(caption)>*>* {
  padding: 10px 0px;
  text-align: center !important;
}
</style>
