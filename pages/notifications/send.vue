<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Send Notifications") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Send Notifications") }}
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FileUpload from "~/components/fileUpload.vue";
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
      link: "/branch/api/notifications",
      load: false,
      data: {
        customersId: 1,
        type: null,
        title: null,
        message: null,
        status: null,
        branchId: null,
        imagePath: null,
      },
      listing: [],
      action: "insert",
      branches: null,
      customers: null,
      filesList: null,
      uploadType: "Notifications",
      uploadComponenet: 1,
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
    //   this.getAll();
  },
  component: { FileUpload },
  methods: {
    filter(key, e) {
      this.load = false;
      let value = e.target.value;
      let url = this.link + "/" + key + "/" + value;
      if (!value) url = this.link;
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
    },
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    async getAll() {
      axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/branch/api/customers", this.config),
          axios.get("/branch/api/branches", this.config),
        ])
        .then(
          axios.spread((listing, customers, branches) => {
            this.listing = listing.data.response;
            this.customers = customers.data.response;
            this.branches = branches.data.response;
            if (listing.data.success == true) {
              setTimeout(() => {
                this.load = true;
              }, 500);
              // this.onScriptLoaded();
            }
            this.$forceUpdate();
          })
        );

      await axios
        .get(this.link + "", this.config)
        .then((response) => {
          if (response.data.success) {
            this.listing = response.data.response;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
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
                id: null,
                customersId: null,
                serviceId: null,
                bookingTime: null,
                status: null,
                totalPrice: null,
                numberOfGuests: null,
                checkInDate: null,
                checkOutDate: null,
                inDate: null,
                outDate: null,
                dayId: null,
                serviceTimingId: null,
                noOfReservations: null,
                noOfCar: null,
                paymentStatus: null,
                durationServiceId: null,
                pricePerType: null,
                constraintMsg: null,
              };
              this.uploadComponenet += 1;
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
                id: null,
                customersId: null,
                serviceId: null,
                bookingTime: null,
                status: null,
                totalPrice: null,
                numberOfGuests: null,
                checkInDate: null,
                checkOutDate: null,
                inDate: null,
                outDate: null,
                dayId: null,
                serviceTimingId: null,
                noOfReservations: null,
                noOfCar: null,
                paymentStatus: null,
                durationServiceId: null,
                pricePerType: null,
                constraintMsg: null,
              };
              this.uploadComponenet += 1;
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
