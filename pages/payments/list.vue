<template>
  <div class="body-wrapper">
    <div class="container-fluid" v-if="load">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Payments") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Payments") }}
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
                  v-for="item in bookings.content"
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
        <div class="mb-3 form-group col-5">
          <label> Payment Invitation </label>
          <div class="controls">
            <select
              @change="filter('invitation', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option
                :value="item.id"
                v-for="item in invitations"
                :key="item.id"
              >
                {{ item.id }}
              </option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-5">
          <label> Split Payment </label>
          <div class="controls">
            <select
              @change="filter('split', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option :value="item.id" v-for="item in splits" :key="item.id">
                {{ item.id }}
              </option>
            </select>
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
              <option value="FULL">FULL</option>
              <option value="Alert">Alert</option>
            </select>
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
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="all-category"
            @click="filter('status', 'ALL')"
            :class="{ active: step == 'ALL' }"
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
            @click="filter('status', 'ACCEPTED')"
            :class="{ active: step == 'ACCEPTED' }"
          >
            <span class="d-none d-md-block font-weight-medium">Accepted</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
            @click="filter('status', 'PENDING')"
            :class="{ active: step == 'PENDING' }"
          >
            <span class="d-none d-md-block font-weight-medium">Pending</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
            @click="filter('status', 'DECLINED')"
            :class="{ active: step == 'DECLINED' }"
          >
            <span class="d-none d-md-block font-weight-medium">Declined</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
            @click="filter('status', 'EXPIRED')"
            :class="{ active: step == 'EXPIRED' }"
          >
            <span class="d-none d-md-block font-weight-medium">Expired</span>
          </a>
        </li>
      </ul>

      <div class="card card-body" v-if="load">
        <h3>Payments ({{ listing.content.length }})</h3>
        <div class="table-responsive">
          <table class="table search-table align-middle text-nowrap" id="">
            <thead class="header-item">
              <tr>
                <th>Id</th>
                <th>Booking</th>
                <th>Customer</th>
                <th>Split Payment</th>
                <th>Invitation</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Type</th>
                <th>Payment Method</th>
                <th>View</th>
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
                <td>{{ item.customerId }}</td>
                <td>{{ item.splitPaymentId }}</td>
                <td>{{ item.invitationId }}</td>
                <td>{{ money(item.amount) }}</td>
                <td>
                  <span
                    :class="{
                      'badge-success': item.status == 'COMPLETED',
                      'badge-warning': item.status == 'PENDING',
                      'badge-danger': item.status == 'FAILED',
                    }"
                    class="btn btn-sm"
                    >{{ item.status }}</span
                  >
                </td>

                <td>{{ item.paymentDate }}</td>
                <td>
                  <span
                    :class="{
                      'badge-success': item.type == 'FULL',
                      'badge-info': item.type == 'SPLIT',
                    }"
                    class="btn btn-sm"
                    >{{ item.type }}</span
                  >
                </td>
                <td>
                  <span v-if="item.paymentMethod == 'Credit Card'">
                    <i class="ti ti-credit-card fs-7"></i> </span
                  ><span v-else>
                    {{ item.paymentMethod }}
                  </span>
                </td>
                <td>
                  <div class="action-btn">
                    <a
                      @click="goto(item.id)"
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
      <!-- <div
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
                  <form id="addContactModalTitle">
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
                                    >Split Payment</label
                                  >
                                  <select
                                    v-model="data.splitPaymentId"
                                    name="select"
                                    id="select"
                                    required=""
                                    class="form-control"
                                    aria-invalid="false"
                                  >
                                    <option
                                      :value="item.id"
                                      v-for="item in splits"
                                      :key="item.id + 'splitsUser'"
                                    >
                                      {{ item.id }}
                                    </option>
                                  </select>
                                </div>
                                <div class="mb-4 col-4">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Payment Invitations</label
                                  >
                                  <select
                                    v-model="data.invitationId"
                                    name="select"
                                    id="select"
                                    required=""
                                    class="form-control"
                                    aria-invalid="false"
                                  >
                                    <option
                                      :value="item.id"
                                      v-for="item in invitations"
                                      :key="item.id + 'invitiationsUser'"
                                    >
                                      {{ item.id }}
                                    </option>
                                  </select>
                                </div>
                                <div class="mb-4 col-4">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Type</label
                                  >
                                  <select
                                    v-model="data.type"
                                    name="select"
                                    id="select"
                                    required=""
                                    class="form-control"
                                    aria-invalid="false"
                                  >
                                    <option value="">All</option>
                                    <option value="FULL">FULL</option>
                                    <option value="Alert">Alert</option>
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
                                    disabled="true"
                                    required=""
                                    class="form-control"
                                    aria-invalid="false"
                                  >
                                    <option value="">All</option>
                                    <option value="COMPLETED">COMPLETED</option>
                                    <option value="DENIED">DENIED</option>
                                    <option value="PENDING">PENDING</option>
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
                                    >Payment Date</label
                                  >
                                  <input
                                    v-model="data.paymentDate"
                                    type="date"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                  />
                                </div>
                                <div class="mb-4 col-4">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Payment Method</label
                                  >
                                  <input
                                    v-model="data.paymentMethod"
                                    type="text"
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
                  </form>
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
      </div> -->
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
      title: "Payment | Manage",
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
      link: "/base/api/payments",
      tmpLink: "/base/api/payments",
      load: false,
      data: {
        amount: null,
        bookingId: null,
        customerId: null,
        invitationId: null,
        paymentDate: null,
        paymentMethod: null,
        splitPaymentId: null,
        status: "PENDING",
        type: null,
      },
      listing: [],
      action: "insert",
      bookings: null,
      customers: null,
      step: "ALL",
      invitations: null,
      splits: null,
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
      let url = this.tmpLink + "?page=" + page + "&size=10";
      let cnt = url.split("?").length - 1;
      if (cnt > 1) url = this.tmpLink + "&page=" + page + "&size=10";

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
      if (key == "status") value = e;
      else value = e.target.value;

      this.tmpLink = this.link + "/" + key + "/" + value;
      if (key == "customer")
        this.tmpLink = this.link + "/search/byCustomerId?customerId=" + value;
      if (key == "booking")
        this.tmpLink = this.link + "/search/byBookingId?bookingId=" + value;
      if (key == "invitation")
        this.tmpLink =
          this.link + "/search/byInvitationId?invitationId=" + value;
      if (key == "status") {
        this.tmpLink = this.link + "/search/byStatus?status=" + value;
        if (key == "ALL") this.tmpLink = this.link;
        this.step = value;
      }
      if (key == "type")
        this.tmpLink = this.link + "/search/byType?type=" + value;
      if (key == "split")
        this.tmpLink =
          this.link + "/search/bySplitPaymentId?splitPaymentId=" + value;
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
          axios.get("/base/api/invitations", this.config),
          axios.get("/base/api/split-payments", this.config),
        ])
        .then(
          axios.spread((listing, customers, bookings, invitations, splits) => {
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
              // this.onScriptLoaded();
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
    handleSingleFileUpload(file) {
      this.file = file;
    },
    submit() {
      if (this.data.paymentDate)
        this.data.paymentDate = moment(this.data.paymentDate).toISOString();
      const formData = {
        ...this.data,
        // branchId: 1,
        // createdBy: 1,
        // userId: 1,
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
                customerId: null,
                splitPaymentId: null,
                invitationId: null,
                amount: null,
                status: null,
                paymentDate: null,
                type: null,
                paymentMethod: null,
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
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                bookingId: null,
                customerId: null,
                splitPaymentId: null,
                invitationId: null,
                amount: null,
                status: null,
                paymentDate: null,
                type: null,
                paymentMethod: null,
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
          path: `${code}`,
          // params: { code },
        })
      );
    },
  },
};
</script>
