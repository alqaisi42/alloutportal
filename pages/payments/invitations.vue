<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Payments Invitations") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Payments Invitations") }}
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
        <div class="mb-3 form-group col-5">
          <label> By Sender </label>
          <div class="controls">
            <select
              @change="filter('sender', $event)"
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
        <div class="mb-3 form-group col-5">
          <label> By Receiver </label>
          <div class="controls">
            <select
              @change="filter('receiver', $event)"
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
        <div class="mb-3 form-group col-2">
          <label>
            Booking
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
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
                  v-for="item in bookings"
                  :key="item.id"
                >
                  {{ item.id }}
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
              <option value="SENT">SENT</option>
              <option value="EXPIRED">EXPIRED</option>
              <option value="DECLINED">DECLINED</option>
              <option value="ACCEPTED">ACCEPTED</option>
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
            <span class="d-none d-md-block font-weight-medium">Approved</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Pending</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Declined</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Completed</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Cancelled</span>
          </a>
        </li>
        <li
          class="nav-item ms-auto row gap-1"
          style="position: absolute; right: 1em"
        >
          <a
            href="javascript:void(0)"
            class="btn btn-primary d-flex align-items-center px-2 col-5"
            style="width: 5em;"
            id="add-vendor"
            @click="showModal('addVendorModal')"
          >
            <i class="ti ti-file-export me-0 me-md-1 fs-4"></i>
            <span class="d-none d-md-block font-weight-medium fs-3">New</span>
          </a>
        </li>
      </ul>

      <div class="card card-body" v-if="load">
        <h3>Payment Invitations ({{ listing.content.length }})</h3>
        <div class="table-responsive">
          <table
            id=""
            class="table search-table align-middle text-nowrap"
          >
            <thead class="header-item">
              <tr>
                <th>Id</th>
                <th>Booking</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Status</th>
                <th>Expiration Date</th>
                <th>Sent Date</th>
                <th>Amount</th>
                <th>Split Payment</th>
              </tr>
            </thead>
            <tbody>
              <!-- start row -->
              <tr
                class="search-items"
                v-for="item in listing.content"
                :key="'notification-' + item.id"
              >
                <td>{{ item.id }}</td>
                <td>{{ item.bookingId }}</td>
                <td>{{ item.inviterCustomerName }}</td>
                <td>{{ item.inviteeCustomerName }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.expirationDate }}</td>
                <td>{{ item.sentDate }}</td>
                <td>{{ money(item.amount) }}</td>

                <td>
                  <div class="action-btn">
                    <a
                      @click="get(item.id)"
                      href="javascript:void(0)"
                      class="text-info edit"
                    >
                      <div class="eye-display">
                        <img src="/icons/eye-filled.png" alt="" />
                      </div>
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
                            <!-- <NuxtTime :datetime="Date.now()" second="numeric" month="long" day="numeric" /> -->
                            <form class="row">
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
                                    v-for="item in bookings"
                                    :key="item.id + 'bookingUser'"
                                  >
                                    {{ item.id }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Sender</label
                                >
                                <select
                                  v-model="data.inviterCustomerId"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option
                                    :value="item.id"
                                    v-for="item in customers"
                                    :key="item.id + 'customUser'"
                                  >
                                    {{ item.name }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Receiver</label
                                >
                                <select
                                  v-model="data.inviteeCustomerId"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option
                                    :value="item.id"
                                    v-for="item in customers"
                                    :key="item.id + 'customUsers'"
                                  >
                                    {{ item.name }}
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
                                  v-model="data.status"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option value="">All</option>
                                  <option value="SENT">SENT</option>
                                  <option value="EXPIRED">EXPIRED</option>
                                  <option value="DECLINED">DECLINED</option>
                                  <option value="ACCEPTED">ACCEPTED</option>
                                </select>
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Amount</label
                                >
                                <input
                                  v-model="data.amount"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Expiration Date</label
                                >
                                <input
                                  v-model="data.expirationDate"
                                  type="date"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Sent Date</label
                                >
                                <input
                                  v-model="data.sentDate"
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
      link: "/base/api/invitations",
      tmpLink: "/base/api/invitations",
      load: false,
      data: {
        bookingId: null,
        inviterCustomerId: null,
        inviteeCustomerId: null,
        status: null,
        expirationDate: null,
        sentDate: null,
        amount: null,
      },
      listing: [],
      action: "insert",
      bookings: null,
      customers: null,
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
    filter(key, e) {
      this.load = false;
      let value = e.target.value;
      if (key == "booking") this.tmpLink = this.link + "/booking/" + value;
      else this.tmpLink = this.link;
      if (!value) this.tmpLink = this.link;
      axios
        .get(this.tmpLink, this.config)
        .then((response) => {
          if (response.data.success == true) {
            if (response.data.response.content)
              this.listing = response.data.response;
            else this.listing.content = response.data.response;
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
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    async getAll() {
      $(".preloader").show();
      axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/branch/api/customers", this.config),
          axios.get("/base/api/bookings", this.config),
        ])
        .then(
          axios.spread((listing, customers, bookings) => {
            this.listing = listing.data.response;
            this.customers = customers.data.response;
            this.bookings = bookings.data.response.content;
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
            if (response.data.response)
              this.$router.push(
                this.localeLocation({
                  name: "payments-split",
                  params: { id: code },
                })
              );
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
      if (this.data.expirationDate)
        this.data.expirationDate = moment(
          this.data.expirationDate
        ).toISOString();
      if (this.data.sentDate)
        this.data.sentDate = moment(this.data.sentDate).toISOString();
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
                bookingId: null,
                inviterCustomerId: null,
                inviteeCustomerId: null,
                status: null,
                expirationDate: null,
                sentDate: null,
                amount: null,
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
            if (response.data) {
              this.$toast.success("Data has been updated").goAway(1500);
              this.getAll();
              this.data = {
                bookingId: null,
                inviterCustomerId: null,
                inviteeCustomerId: null,
                status: null,
                expirationDate: null,
                sentDate: null,
                amount: null,
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
    goto(code) {
      this.$router.push(
        this.localeLocation({
          name: "school-view",
          params: { code: code },
        })
      );
    },
  },
};
</script>
