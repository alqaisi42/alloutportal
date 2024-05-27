<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Loyalty Points") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Loyalty Points") }}
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
            <div class="col-md-12 col-xl-12">
              <form class="position-relative col-12 row">
                <div class="mb-3 form-group col-4">
                  <label>
                    From
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
                <div class="mb-3 form-group col-4">
                  <label>
                    To
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
                <div class="mb-3 form-group col-4">
                  <label>
                    Type
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
                    </select>
                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-4">
                  <label>
                    Customers
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
                    </select>
                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-4">
                  <label>
                    Search By
                  </label>
                  <div class="controls">
                    <select
                      name="select"
                      id="select"
                      required=""
                      class="form-control"
                      aria-invalid="false"
                    >
                      <option value="">Name</option>
                    </select>
                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-4">
                  <label>
                    Type
                  </label>
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
                <div class="mb-3 form-group col-4">
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
        <div class="card card-body">
          <h3>Summary</h3>
          <div class="table-responsive" v-show="load">
            <div
              class="col-md-12 col-xl-12 row gap-7 d-flex justify-content-md-end"
            >
              <div
                class="col-4 row pt-3"
                style="background-color: rgb(238, 238, 238); border-radius: 1em"
              >
                <div class="col-6 row">
                  <i class="col-2 pt-1 ti ti-brand-mastercard"></i>
                  <p class="col-8">Debit</p>
                </div>
                <div class="col-6 text-end" style="color: #0070ff">
                  <p>116.00 UAE</p>
                </div>
              </div>
              <div
                class="col-4 row pt-3"
                style="background-color: rgb(238, 238, 238); border-radius: 1em"
              >
                <div class="col-6 row">
                  <i class="col-2 pt-1 ti ti-credit-card"></i>
                  <p class="col-8">Debit</p>
                </div>
                <div class="col-6 text-end" style="color: #009110">
                  <p>1763.00 UAE</p>
                </div>
              </div>
              <div
                class="col-4 row pt-3"
                style="background-color: rgb(238, 238, 238); border-radius: 1em"
              >
                <div class="col-6 row">
                  <i class="col-2 pt-1 ti ti-wallet"></i>
                  <p class="col-8">Debit</p>
                </div>
                <div class="col-6 text-end" style="color: #f25b00">
                  <p>1647.00 UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-body">
          <div class="table-responsive" v-show="load">
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
                </tr>
              </thead>
              <tbody>
                <!-- start row -->
                <tr class="search-items" v-for="i in 10" :key="'user-' + i">
                  <td>{{ i + 1 }}</td>
                  <td>eghseh-sg45-set6h</td>
                  <td>User</td>
                  <td>500 UAE</td>
                  <td>0</td>
                  <td>1725 UAE</td>
                  <td>
                    <span class="mb-1 badge rounded-pill text-bg-success"
                      >Order place</span
                    >
                  </td>
                  <td>100187</td>
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
    };
  },
  async mounted() {},
  component: {},
  methods: {},
};
</script>
