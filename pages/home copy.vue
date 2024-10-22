<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <!--  Owl carousel -->
      <!-- <ClientOnly fallback-tag="span" fallback="Loading comments..."> -->
      <div class="owl-carousel counter-carousel owl-theme">
        <div class="item">
          <div class="card border-0 zoom-in bg-primary-subtle shadow-none">
            <div class="card-body">
              <div class="text-center">
                <img
                  src="/Modernize/images/svgs/icon-user-male.svg"
                  width="50"
                  height="50"
                  class="mb-3"
                  alt=""
                />
                <p class="fw-semibold fs-3 text-primary mb-1">Total Clients</p>
                <h5 class="fw-semibold text-primary mb-0">{{ totalClient }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border-0 zoom-in bg-warning-subtle shadow-none">
            <div class="card-body">
              <div class="text-center">
                <img
                  src="/Modernize/images/svgs/icon-briefcase.svg"
                  width="50"
                  height="50"
                  class="mb-3"
                  alt=""
                />
                <p class="fw-semibold fs-3 text-warning mb-1">Total Bookings</p>
                <h5 class="fw-semibold text-warning mb-0">{{ totalBookings }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border-0 zoom-in bg-info-subtle shadow-none">
            <div class="card-body">
              <div class="text-center">
                <img
                  src="/Modernize/images/svgs/icon-mailbox.svg"
                  width="50"
                  height="50"
                  class="mb-3"
                  alt=""
                />
                <p class="fw-semibold fs-3 text-info mb-1">Total Services</p>
                <h5 class="fw-semibold text-info mb-0">{{ totalService }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border-0 zoom-in bg-danger-subtle shadow-none">
            <div class="card-body">
              <div class="text-center">
                <img
                  src="/Modernize/images/svgs/icon-favorites.svg"
                  width="50"
                  height="50"
                  class="mb-3"
                  alt=""
                />
                <p class="fw-semibold fs-3 text-danger mb-1">Total Locations</p>
                <h5 class="fw-semibold text-danger mb-0">{{ totalLocation }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border-0 zoom-in bg-info-subtle shadow-none">
            <div class="card-body">
              <div class="text-center">
                <img
                  src="/Modernize/images/svgs/icon-connect.svg"
                  width="50"
                  height="50"
                  class="mb-3"
                  alt=""
                />
                <p class="fw-semibold fs-3 text-info mb-1">Total Categories</p>
                <h5 class="fw-semibold text-info mb-0">{{ totalCategories || 0 }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Row 1 -->
      <div class="row">
        <div class="col-lg-8 d-flex align-items-strech">
          <div class="card w-100">
            <div class="card-body">
              <div
                class="d-sm-flex d-block align-items-center justify-content-between mb-9"
              >
                <div class="mb-3 mb-sm-0">
                  <h5 class="card-title fw-semibold">Total Earnings</h5>
                  <p class="card-subtitle mb-0">136.5 AED</p>
                </div>
                <select class="form-select w-auto">
                  <option value="1">By Day</option>
                  <option value="2">By Week</option>
                  <option value="3">By Month</option>
                  <option value="4">By 3 Months</option>
                  <option value="4">By 6 Months</option>
                  <option value="4">By 1 Year</option>
                  <option value="4">By All Time</option>
                </select>
              </div>
              <div class="row align-items-center">
                <div class="col-md-8">
                  <BarChart :chartData="chartData" :options="options" />
                </div>
                <div class="col-md-4">
                  <div class="hstack mb-4 pb-1">
                    <div
                      class="p-8 bg-primary-subtle rounded-1 me-3 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-grid-dots text-primary fs-6"></i>
                    </div>
                    <div>
                      <h4 class="mb-0 fs-7 fw-semibold">63,489.50 AED</h4>
                      <p class="fs-3 mb-0">Total Earnings</p>
                    </div>
                  </div>
                  <div>
                    <div class="d-flex align-items-baseline mb-4">
                      <span
                        class="round-8 text-bg-primary rounded-circle me-6"
                      ></span>
                      <div>
                        <p class="fs-3 mb-1">Earnings this month</p>
                        <h6 class="fs-5 fw-semibold mb-0">48,820 AED</h6>
                      </div>
                    </div>
                    <div class="d-flex align-items-baseline mb-4 pb-1">
                      <span
                        class="round-8 text-bg-secondary rounded-circle me-6"
                      ></span>
                      <div>
                        <p class="fs-3 mb-1">Expense this month</p>
                        <h6 class="fs-5 fw-semibold mb-0">26,498 AED</h6>
                      </div>
                    </div>
                    <div>
                      <button class="btn btn-primary w-100">
                        View Full Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12 col-md-6">
              <!-- Yearly Breakup -->
              <div class="card">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-8">
                      <h5 class="card-title mb-9 fw-semibold">Today Visits</h5>
                      <h4 class="fw-semibold mb-3">148</h4>
                      <div class="d-flex align-items-center mb-3">
                        <span
                          class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-arrow-up-left text-success"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">12</p>
                        <p class="fs-3 mb-0">Registration</p>
                      </div>
                      <!-- <div class="d-flex align-items-center">
                        <div class="me-4">
                          <span
                            class="round-8 text-bg-primary rounded-circle me-2 d-inline-block"
                          ></span>
                          <span class="fs-2">2023</span>
                        </div>
                        <div>
                          <span
                            class="round-8 bg-primary-subtle rounded-circle me-2 d-inline-block"
                          ></span>
                          <span class="fs-2">2023</span>
                        </div>
                      </div> -->
                    </div>
                    <div class="col-4">
                      <div class="d-flex justify-content-center">
                        <div id="breakup"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-6">
              <!-- Monthly Earnings -->
              <div class="card">
                <div class="card-body">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h5 class="card-title mb-9 fw-semibold">
                        Revenue Breakdown
                      </h5>
                      <h4 class="fw-semibold mb-3">$6,820</h4>
                      <div class="d-flex align-items-center pb-1">
                        <span
                          class="me-2 rounded-circle bg-warning round-20 d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">(5)</p>
                        <p class="fs-3 mb-0">Total bookings</p>
                      </div>
                      <div class="d-flex align-items-center pb-1">
                        <span
                          class="me-2 rounded-circle bg-danger round-20 d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">(109.2 AED)</p>
                        <p class="fs-3 mb-0">Vendor</p>
                      </div>
                      <div class="d-flex align-items-center pb-1">
                        <span
                          class="me-2 rounded-circle bg-success round-20 d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">(27.3 AED)</p>
                        <p class="fs-3 mb-0">All out</p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex justify-content-end">
                        <div
                          class="text-white text-bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center"
                        >
                          <i class="ti ti-currency-dollar fs-6"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="earning"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Row 2 -->
      <div class="row">
        <!-- Employee Salary -->
        <div class="col-lg-4 d-flex align-items-strech">
          <div class="card w-100">
            <div class="card-body">
              <div>
                <h5 class="card-title fw-semibold mb-1">Statistics</h5>
                <p class="card-subtitle mb-0">Every month</p>
                <div id="salary" class="mb-7 pb-8"></div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div
                      class="bg-primary-subtle rounded me-8 p-8 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-grid-dots text-primary fs-6"></i>
                    </div>
                    <div>
                      <p class="fs-3 mb-0 fw-normal">Bookings</p>
                      <h6 class="fw-semibold text-dark fs-4 mb-0">
                        36,358 AED
                      </h6>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div
                      class="text-bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-grid-dots text-muted fs-6"></i>
                    </div>
                    <div>
                      <p class="fs-3 mb-0 fw-normal">Earnings</p>
                      <h6 class="fw-semibold text-dark fs-4 mb-0">5,296 AED</h6>
                    </div>
                  </div>
                </div>
                <div class="">
                  <PieChart :chartData="chartData" :options="options" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Project -->
        <div class="col-lg-4">
          <div class="row">
            <!-- Customers -->
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body pb-0 mb-xxl-4 pb-1">
                  <p class="mb-1 fs-3">Customers</p>
                  <h4 class="fw-semibold fs-7">36,358</h4>
                  <div class="d-flex align-items-center mb-3">
                    <span
                      class="me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-arrow-down-right text-danger"></i>
                    </span>
                    <p class="text-dark fs-3 mb-0">+9%</p>
                  </div>
                </div>
                <div id="customers"></div>
              </div>
            </div>
            <!-- Projects -->
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <p class="mb-1 fs-3">Bookings</p>
                  <h4 class="fw-semibold fs-7">78,298</h4>
                  <div class="d-flex align-items-center mb-3">
                    <span
                      class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-arrow-up-left text-success"></i>
                    </span>
                    <p class="text-dark fs-3 mb-0">+9%</p>
                  </div>
                  <div id="projects"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Comming Soon -->
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-7 pb-2">
                <div class="me-3 pe-1">
                  <img
                    src="/Modernize/images/profile/user-1.jpg"
                    class="shadow-warning rounded-2"
                    alt=""
                    width="72"
                    height="72"
                  />
                </div>
                <div>
                  <h5 class="fw-semibold fs-5 mb-2">
                    Super awesome, Vue coming soon!
                  </h5>
                  <p class="fs-3 mb-0">22 March, 2023</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <ul class="hstack mb-0">
                  <li class="ms-n8">
                    <a href="javascript:void(0)" class="me-1">
                      <img
                        src="/Modernize/images/profile/user-2.jpg"
                        class="rounded-circle border border-2 border-white"
                        width="44"
                        height="44"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="ms-n8">
                    <a href="javascript:void(0)" class="me-1">
                      <img
                        src="/Modernize/images/profile/user-3.jpg"
                        class="rounded-circle border border-2 border-white"
                        width="44"
                        height="44"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="ms-n8">
                    <a href="javascript:void(0)" class="me-1">
                      <img
                        src="/Modernize/images/profile/user-4.jpg"
                        class="rounded-circle border border-2 border-white"
                        width="44"
                        height="44"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="ms-n8">
                    <a href="javascript:void(0)" class="me-1">
                      <img
                        src="/Modernize/images/profile/user-5.jpg"
                        class="rounded-circle border border-2 border-white"
                        width="44"
                        height="44"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none"
                >
                  <i class="ti ti-message-2 fs-6 text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Selling Products -->
        <div class="col-lg-4 d-flex align-items-strech">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title fw-semibold">Weekly Stats</h5>
              <p class="card-subtitle mb-0">Average sales</p>
              <div id="stats" class="my-4"></div>
              <div class="position-relative">
                <div
                  class="d-flex align-items-center justify-content-between mb-7"
                >
                  <div class="d-flex">
                    <div
                      class="p-6 bg-primary-subtle rounded me-6 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-grid-dots text-primary fs-6"></i>
                    </div>
                    <div>
                      <h6 class="mb-1 fs-4 fw-semibold">Top Sales</h6>
                      <p class="fs-3 mb-0">Johnathan Doe</p>
                    </div>
                  </div>
                  <div class="bg-primary-subtle badge">
                    <p class="fs-3 text-primary fw-semibold mb-0">+68</p>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between mb-7"
                >
                  <div class="d-flex">
                    <div
                      class="p-6 bg-success-subtle rounded me-6 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-grid-dots text-success fs-6"></i>
                    </div>
                    <div>
                      <h6 class="mb-1 fs-4 fw-semibold">Best Seller</h6>
                      <p class="fs-3 mb-0">MaterialPro Admin</p>
                    </div>
                  </div>
                  <div class="bg-success-subtle badge">
                    <p class="fs-3 text-success fw-semibold mb-0">+68</p>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex">
                    <div
                      class="p-6 bg-danger-subtle rounded me-6 d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-grid-dots text-danger fs-6"></i>
                    </div>
                    <div>
                      <h6 class="mb-1 fs-4 fw-semibold">Most Commented</h6>
                      <p class="fs-3 mb-0">Ample Admin</p>
                    </div>
                  </div>
                  <div class="bg-danger-subtle badge">
                    <p class="fs-3 text-danger fw-semibold mb-0">+68</p>
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
import BarChart from "~/components/BarChart.vue";
import PieChart from "~/components/PieChart.vue";
import axios from "axios";

// import type { Header, Item } from "vue3-easy-data-table";
export default {
  name: "index",
  layout: "adminLte",
  metaInfo() {
    return {
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
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    };
  },
  data() {
    return {
      totalClient: 0,
      totalBookings: 0,
      totalService: 0,
      totalLocation: 0,
      totalCategories: 0,
      load: false,
      chartData: {
        labels: ["Lions", "Monkeys", "Zebras", "Eagles", "Horses"],
        datasets: [
          {
            label: "Dataset 1",
            data: [12, 19, 3, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
              "rgba(255, 159, 64, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      },
    };
  },
  mounted() {
    if (!process.client) return;
    var vm = this; //declare this just BEFORE calling axios();
    // The below are inside axios.then()
    // vm.videos_p = response.data;

    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 900,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
          margin: 20,
        },
      },
    });
  },
  components: { BarChart, PieChart },

  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://143.198.103.113:8086/main/dashboard/data");
        const data = response.data.response;
        this.totalClient = data.totalClient || 0;
        this.totalBookings = data.totalBookings || 0;
        this.totalService = data.totalService || 0;
        this.totalLocation = data.totalLocation || 0;
        this.totalCategories = data.totalCategories || 0;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>
