<template>
  <div class="body-wrapper">
    <div class="container-fluid" v-if="load">
      <!--  Owl carousel -->
      <div class="owl-carousel counter-carousel owl-theme">
        <div class="item" v-for="(item, index) in carouselItems" :key="index">
          <div class="card border-0 zoom-in bg-primary-subtle shadow-none">
            <div class="card-body">
              <div class="text-center">
                <img :src="item.imgSrc" width="50" height="50" class="mb-3" :alt="item.alt" />
                <p :class="['fw-semibold', 'fs-3', item.textClass, 'mb-1']">{{ item.text }}</p>
                <h5 :class="['fw-semibold', item.textClass, 'mb-0']">{{ item.count }}</h5>
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
              <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div class="mb-3 mb-sm-0">
                  <h5 class="card-title fw-semibold">Total Five Services</h5>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-8">
                  <BarChart :chartData="chartData" :options="options" />
                </div>
                <div class="col-md-4">
                  <!-- Customers -->
                  <div class="card">
                    <div class="card-body pb-0 mb-xxl-4 pb-1">
                      <p class="mb-1 fs-3">Bookings</p>
                      <h4 class="fw-semibold fs-7">{{ totalBookings }}</h4>
                      <div class="d-flex align-items-center mb-3">
                        <span
                          class="me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark fs-3 mb-0">+2%</p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body pb-0 mb-xxl-4 pb-1">
                      <p class="mb-1 fs-3">Clients</p>
                      <h4 class="fw-semibold fs-7">{{  totalClient  }}</h4>
                      <div class="d-flex align-items-center mb-3">
                        <span
                          class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-up-left text-success"></i>
                        </span>
                        <p class="text-dark fs-3 mb-0">+2%</p>
                      </div>
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
                      <h4 class="fw-semibold mb-3">{{ totalVisits }}</h4>
                      <div class="d-flex align-items-center mb-3">
                        <span
                          class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-up-left text-success"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">12</p>
                        <p class="fs-3 mb-0">Registration</p>
                      </div>
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
                          class="me-2 rounded-circle bg-warning round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">(5)</p>
                        <p class="fs-3 mb-0">Total bookings</p>
                      </div>
                      <div class="d-flex align-items-center pb-1">
                        <span
                          class="me-2 rounded-circle bg-danger round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">(109.2 AED)</p>
                        <p class="fs-3 mb-0">Vendor</p>
                      </div>
                      <div class="d-flex align-items-center pb-1">
                        <span
                          class="me-2 rounded-circle bg-success round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-down-right text-danger"></i>
                        </span>
                        <p class="text-dark me-1 fs-3 mb-0">(27.3 AED)</p>
                        <p class="fs-3 mb-0">All out</p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex justify-content-end">
                        <div
                          class="text-white text-bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
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
                    <div class="bg-primary-subtle rounded me-8 p-8 d-flex align-items-center justify-content-center">
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
                    <div class="text-bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
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
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body pb-0 mb-xxl-4 pb-1">
                  <p class="mb-1 fs-3">Customers</p>
                  <h4 class="fw-semibold fs-7">36,358</h4>
                  <div class="d-flex align-items-center mb-3">
                    <span
                      class="me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center">
                      <i class="ti ti-arrow-down-right text-danger"></i>
                    </span>
                    <p class="text-dark fs-3 mb-0">+9%</p>
                  </div>
                </div>
                <div id="customers"></div>
              </div>
            </div>
            <!-- Projects -->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <p class="mb-1 fs-3">Bookings</p>
                  <h4 class="fw-semibold fs-7">78,298</h4>
                  <div class="d-flex align-items-center mb-3">
                    <span
                      class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
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
        </div>
        <!-- Selling Products -->
        <div class="col-lg-4 d-flex align-items-strech">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title fw-semibold">Weekly Stats</h5>
              <p class="card-subtitle mb-0">Average sales</p>
              <div id="stats" class="my-4"></div>
              <div class="position-relative">
                <div class="d-flex align-items-center justify-content-between mb-7">
                  <div class="d-flex">
                    <div class="p-6 bg-primary-subtle rounded me-6 d-flex align-items-center justify-content-center">
                      <i class="ti ti-grid-dots text-primary fs-6"></i>
                    </div>
                    <div>
                      <h6 class="mb-1 fs-4 fw-semibold">Top Customer</h6>
                      <p class="fs-3 mb-0">{{ topCustomerName }}</p>
                    </div>
                  </div>
                  <div class="bg-primary-subtle badge">
                    <p class="fs-3 text-primary fw-semibold mb-0">+1</p>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-7">
                  <div class="d-flex">
                    <div class="p-6 bg-success-subtle rounded me-6 d-flex align-items-center justify-content-center">
                      <i class="ti ti-grid-dots text-success fs-6"></i>
                    </div>
                    <div>
                      <h6 class="mb-1 fs-4 fw-semibold">Top Vendor</h6>
                      <p class="fs-3 mb-0">{{ topVendorName }}</p>
                    </div>
                  </div>
                  <div class="bg-success-subtle badge">
                    <p class="fs-3 text-success fw-semibold mb-0">+1</p>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex">
                    <div class="p-6 bg-danger-subtle rounded me-6 d-flex align-items-center justify-content-center">
                      <i class="ti ti-grid-dots text-danger fs-6"></i>
                    </div>
                    <div>
                      <h6 class="mb-1 fs-4 fw-semibold">Top Service</h6>
                      <p class="fs-3 mb-0">{{ topServiceTitle }}</p>
                    </div>
                  </div>
                  <div class="bg-danger-subtle badge">
                    <p class="fs-3 text-danger fw-semibold mb-0">+1</p>
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
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
          body: true
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
          body: true
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
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
        },
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
      totalVisits: 0,
      topCustomerName: '',
      topVendorName: '',
      topServiceTitle: '',
      load: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#49beff', '#fd5e94', '#13deb9', '#6610f2', '#ffbc34'],
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          labels: {
            fontColor: 'black',
            fontSize: 12,
            filter: function (legendItem, chartData) {
              return legendItem.datasetIndex !== 0; // Hide label for dataset with index 0
            }
          }
        }
      },
      load: false,
      carouselItems: []
    };
  },
  mounted() {
    if (!process.client) return;
    this.fetchData();
    this.fetchTopFiveServices();
  },

  watch: {
    load(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          $(".owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
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
                items: 4,
                nav: false,
                loop: true,
                margin: 20,
              },
            },
          });
        });
      }
    }
  },

  components: { BarChart, PieChart },

  created() {
    this.fetchData();
    this.fetchTopFiveServices();

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
        this.totalVisits = data.totalVisits || 0;

        this.topCustomerName = data.topCustomerName || '';
        this.topVendorName = data.topVendorName || '';
        this.topServiceTitle = data.topServiceTitle || '';
        this.populateCarouselItems();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchTopFiveServices() {
      try {
        const response = await this.$axios.get('/base/api/services/top-five', {
          auth: {
            username: 'user',
            password: '123456'
          }
        });
        const responseData = response.data.response;

        // Check if responseData is a valid array
        if (responseData && Array.isArray(responseData)) {
          this.chartData.labels = responseData.map(service => service.title_En);
          this.chartData.datasets[0].data = responseData.map(service => service.totalServicePrice);
        } else {
          console.error('Invalid response data:', responseData);
          // Handle empty or invalid data case
          this.chartData.labels = [];
          this.chartData.datasets[0].data = [];
        }

        this.load = true;
        console.log(this.chartData.datasets[0].data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    ,

    populateCarouselItems() {
      this.carouselItems = [
        {
          imgSrc: "/Modernize/images/svgs/icon-user-male.svg",
          alt: "Total Clients",
          text: "Total Clients",
          textClass: "text-primary",
          count: this.totalClient,
        },
        {
          imgSrc: "/Modernize/images/svgs/icon-briefcase.svg",
          alt: "Total Bookings",
          text: "Total Bookings",
          textClass: "text-warning",
          count: this.totalBookings,
        },
        {
          imgSrc: "/Modernize/images/svgs/icon-mailbox.svg",
          alt: "Total Services",
          text: "Total Services",
          textClass: "text-info",
          count: this.totalService,
        },
        {
          imgSrc: "/Modernize/images/svgs/icon-favorites.svg",
          alt: "Total Locations",
          text: "Total Locations",
          textClass: "text-danger",
          count: this.totalLocation,
        },
        {
          imgSrc: "/Modernize/images/svgs/icon-connect.svg",
          alt: "Total Categories",
          text: "Total Categories",
          textClass: "text-info",
          count: this.totalCategories || 0,
        }
      ];
    }
  }
};
</script>
