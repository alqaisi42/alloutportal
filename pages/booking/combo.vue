<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Combo") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Combo") }}
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
        <h3>Manage Combo Booking</h3>
        <div class="mb-3 form-group col-5">
          <label> By Title </label>
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
      </ul>

      <div class="card card-body">
        <h3>Booking (5)</h3>
        <div class="table-responsive">
          <table class="table search-table align-middle text-nowrap">
            <thead class="header-item">
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Location</th>
                <th>Created On</th>
                <th>Date</th>
                <th>Timing</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- start row -->
              <tr class="search-items" v-for="i in 5" :key="'user-' + i">
                <td>Customer {{ i + 1 }}</td>
                <td>5245877455</td>
                <td>Row</td>
                <td>Address {{ i + 1 }}</td>
                <td>Jan 24, 2024</td>
                <td>Jan 28, 2024</td>
                <td>3:00 PM - 5:00 PM</td>
                <td>1,811.25 AED</td>
                <td>
                  <div class="action-btn">
                    <a href="javascript:void(0)" class="text-dark ms-2">
                      <i class="ti ti-ban fs-5"></i>
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
                        <div class="col-lg-4 d-flex align-items-stretch">
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
                        </div>
                        <div class="col-lg-8 d-flex align-items-stretch">
                          <div
                            class="card w-100 position-relative overflow-hidden"
                          >
                            <div class="card-body p-4">
                              <form class="row">
                                <div class="mb-4 col-6">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Company name</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                  />
                                </div>
                                <div class="mb-4 col-6">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Email</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                  />
                                </div>
                                <div class="mb-4 col-6">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Address</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                  />
                                </div>
                                <div class="mb-4 col-6">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Language</label
                                  >
                                  <select
                                    name="select"
                                    id="select"
                                    required=""
                                    class="form-control"
                                    aria-invalid="false"
                                  >
                                    <option value="">Arabic</option>
                                  </select>
                                </div>
                                <div class="mb-4 col-6">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Phone No</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                  />
                                </div>
                                <div class="mb-4 col-6">
                                  <label
                                    for="exampleInputPassword1"
                                    class="form-label fw-semibold"
                                    >Emirate ID</label
                                  >
                                  <input
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
              <button id="btn-add" class="btn btn-success rounded-pill px-4">
                Add
              </button>
              <button id="btn-edit" class="btn btn-success rounded-pill px-4">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      ],
      script: [
        {
          src: "/assets/Modernize/js/apps/contact.js",
          body: true,
        },
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
    };
  },
  async mounted() {},
  component: {},
  methods: {},
};
</script>
