<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Wallet") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Wallet") }}
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
      <div class="widget-content searchable-container list">
        <div class="card card-body">
            <h3>Filter options</h3>
          <div class="row">
            <div
              class="col-md-12 col-xl-12 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0"
            >
              <div class="action-btn show-btn" style="display: none">
                <a
                  href="javascript:void(0)"
                  class="delete-multiple bg-danger-subtle btn me-2 text-danger d-flex align-items-center font-medium"
                >
                  <i class="ti ti-trash text-danger me-1 fs-5"></i> Delete All
                  Row
                </a>
              </div>
              <a
                href="javascript:void(0)"
                id="btn-add-fund"
                class="btn btn-info d-flex align-items-center"
              >
                <i class="ti ti-users text-white me-1 fs-5"></i>
                {{ $t("Add Fund") }}
              </a>
            </div>
            <div class="col-md-12 col-xl-12">
              <form class="position-relative col-12 row">
                <div class="mb-3 form-group col-3">
                  <label>
                    From
                    <span class="text-danger">*</span>
                  </label>
                  <div class="controls">
                    <input
                      type="date"
                      name="date"
                      class="form-control"
                      required=""
                      data-validation-required-message="This field is required"
                      aria-invalid="false"
                    />
                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-3">
                  <label>
                    To
                    <span class="text-danger">*</span>
                  </label>
                  <div class="controls">
                    <input
                      type="date"
                      name="date"
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
                    Type
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
                      <option value="">All</option>
                      <option value="1">India</option>
                      <option value="2">USA</option>
                      <option value="3">UK</option>
                      <option value="4">Canada</option>
                      <option value="5">Dubai</option>
                    </select>
                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-2">
                  <label>
                    Customers
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
                      <option value="">All</option>
                      <option value="1">India</option>
                      <option value="2">USA</option>
                      <option value="3">UK</option>
                      <option value="4">Canada</option>
                      <option value="5">Dubai</option>
                    </select>
                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-2">
                  <label>
                    Customers
                    <span class="text-danger">*</span>
                  </label>
                  <div class="controls">
                    <button class="btn btn-md btn-info">
                      <i class="ti ti-filter"></i> Filter
                    </button>
                    <div class="help-block"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="addFundModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="addFundModalTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header d-flex align-items-center">
                <h5 class="modal-title">{{ $t("Customer's Wallet") }}</h5>
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
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3 contact-email">
                            <input
                              type="text"
                              id="c-email"
                              class="form-control"
                              placeholder="Amount"
                            />
                            <span class="validation-text text-danger"></span>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3 contact-occupation">
                            <input
                              type="text"
                              id="c-occupation"
                              class="form-control"
                              placeholder="Ex.abc990"
                            />
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
        <div class="card card-body">
            <h3>Summary</h3>
          <div class="table-responsive">
            <div class="col-md-12 col-xl-12 row gap-7 d-flex justify-content-md-end">
              <div class="col-4 row pt-3" style="background-color:rgb(238, 238, 238);border-radius:1em;">
                <div class="col-6 row">
                    <i class="col-2 pt-1 ti ti-brand-mastercard"></i>
                    <p class="col-8">Debit</p>
                </div>
                <div class="col-6 text-end" style="color:#0070ff;">
                    <p>7335.00 UAE</p>
                </div>
              </div>
              <div class="col-4 row pt-3" style="background-color:rgb(238, 238, 238);border-radius:1em;">
                <div class="col-6 row">
                    <i class="col-2 pt-1 ti ti-credit-card"></i>
                    <p class="col-8">Debit</p>
                </div>
                <div class="col-6 text-end" style="color:#009110;">
                    <p>7335.00 UAE</p>
                </div>
              </div>
              <div class="col-4 row pt-3" style="background-color:rgb(238, 238, 238);border-radius:1em;">
                <div class="col-6 row">
                    <i class="col-2 pt-1 ti ti-wallet"></i>
                    <p class="col-8">Debit</p>
                </div>
                <div class="col-6 text-end" style="color:#f25b00;">
                    <p>7335.00 UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-body">
          <div class="table-responsive">
            <table class="table search-table align-middle text-nowrap">
              <thead class="header-item">
                <tr>
                  <th>SL</th>
                  <th>Transaction ID</th>
                  <th>Customer</th>
                  <th>Credit</th>
                  <th>Debit</th>
                  <th>Balance</th>
                  <th>Transaction Type</th>
                  <th>Reference</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                <!-- start row -->
                <tr class="search-items" v-for="i in 10" :key="'user-' + i">
                  <td>{{i+1}}</td>
                  <td>eghseh-sg45-set6h</td>
                  <td>User</td>
                  <td>500 UAE</td>
                  <td>0</td>
                  <td>1725 UAE</td>
                  <td><span class="mb-1 badge rounded-pill text-bg-success">Add fund</span></td>
                  <td>Add funds to wallet</td>
                  <td>2024-01-15</td>
                </tr>
              </tbody>
            </table>
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
      title: "Reservation | Customer Wallet",
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
