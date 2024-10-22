<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Vendors") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Vendors") }}
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
          <label> Company name </label>
          <div class="controls">
            <input
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
        <div class="mb-3 form-group col-2">
          <label>
            Display
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
            <select
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">Date Descending</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
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

      <div class="card card-body">
        <h3>Vendors (2)</h3>
        <div class="table-responsive" v-show="load">
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
                <th>Company Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Second Email</th>
                <th>Phone Number</th>
                <th>National ID</th>
                <th>Created Date</th>
                <th>Comission Amount</th>
                <th>commission Type</th>
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
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.secondEmail }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.nationalId }}</td>
                <td>{{ getDate(item.createdDate) }}</td>
                <td>{{ money(item.commissionAmount) }}</td>
                <td>{{ item.commissionType }}</td>

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
                      <!-- <div class="col-lg-4 d-flex align-items-stretch">
                          <div
                            class="card w-100 position-relative overflow-hidden"
                          >
                            <div class="card-body p-4">
                              <h5 class="card-title fw-semibold">
                                Change Profile
                              </h5>
                              <p class="card-subtitle mb-4">
                                Change your profile picture from here
                              </p>
                              <div class="text-center">
                                <img
                                  src="/assets/Modernize/images/profile/user-1.jpg"
                                  alt=""
                                  class="img-fluid rounded-circle"
                                  width="120"
                                  height="120"
                                />
                                <div
                                  class="d-flex align-items-center justify-content-center my-4 gap-3"
                                >
                                  <button class="btn btn-primary">
                                    Upload
                                  </button>
                                  <button class="btn btn-outline-danger">
                                    Reset
                                  </button>
                                </div>
                                <p class="mb-0">
                                  Allowed JPG, GIF or PNG. Max size of 800K
                                </p>
                              </div>
                            </div>
                          </div>
                        </div> -->
                      <div class="col-lg-12 d-flex align-items-stretch">
                        <div
                          class="card w-100 position-relative overflow-hidden"
                        >
                          <div class="card-body p-4">
                            <form class="row">
                              <div class="mb-4 col-6">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Branche
                                  <span class="text-danger">*</span></label
                                >
                                <select
                                  v-model="data.branchId"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option
                                    :value="item.id"
                                    v-for="item in branches"
                                    :key="item.id"
                                  >
                                    {{ item.nameEn }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-4 col-6">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Company name
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  v-model="data.name"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Email
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  v-model="data.email"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Second Email</label
                                >
                                <input
                                  v-model="data.secondemail"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Address
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  v-model="data.password"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Phone No
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  v-model="data.phone"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >ID</label
                                >
                                <input
                                  v-model="data.nationalId"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-4">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Password
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  v-model="data.password"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-4 col-6">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Comission types</label
                                >
                                <select
                                  v-model="data.commissionType"
                                  name="select"
                                  id="select"
                                  required=""
                                  class="form-control"
                                  aria-invalid="false"
                                >
                                  <option value="">
                                    Select Commission Type
                                  </option>
                                  <option value="">Percentage</option>
                                  <option value="">Flat rate</option>
                                </select>
                              </div>
                              <div class="mb-4 col-6">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label fw-semibold"
                                  >Comission Amount</label
                                >
                                <input
                                  v-model="data.commissionAmount"
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
      title: "Reservation | Vendors",
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
        name: null,
        email: null,
        password: null,
        address: null,
        nationalId: null,
        brancheId: null,
        secondEmail: null,
        lastLoging: null,
        createdDate: null,
        commissionAmount: null,
        commissionType: null,
      },
      listing: null,
      load: false,
      branches: [],
      link: "/branch/api/vendors",
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
    money(amount) {
      if (amount == null) return "0 AED";
      const formatter = new Intl.NumberFormat("ae-AE", {
        style: "currency",
        currency: "AED",
      });

      return formatter.format(amount);
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
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    async getAll() {
      $(".preloader").show();
      axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/branch/api/branches", this.config),
        ])
        .then(
          axios.spread((listing, branches) => {
            this.listing = listing.data.response;
            this.branches = branches.data.response;
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
            this.link = this.link + "/" + response.data.response.id;
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
                name: null,
                email: null,
                password: null,
                address: null,
                nationalId: null,
                brancheId: null,
                secondEmail: null,
                lastLoging: null,
                createdDate: null,
                commissionAmount: null,
                commissionType: null,
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
          .put(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.link = "/branch/api/vendors";
              setTimeout(() => {
                this.getAll();
              }, 1000);
              this.data = {
                name: null,
                email: null,
                password: null,
                address: null,
                nationalId: null,
                brancheId: null,
                secondEmail: null,
                lastLoging: null,
                createdDate: null,
                commissionAmount: null,
                commissionType: null,
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
