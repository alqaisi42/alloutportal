<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">Fees And VAT</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a
                      class="text-muted text-decoration-none"
                      href="/Modernize/main/index.html"
                      >Home</a
                    >
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    Fees And VAT
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
      <div class="col-md-12">
        <!-- --------------------- start Tab with Underline ---------------- -->
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="mb-3 form-group col-4">
                <label>
                  Branch
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <div class="controls">
                    <select
                      name="select"
                      id="select"
                      v-model="data.branchId"
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
                    <div class="help-block"></div>
                  </div>
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>
                  Company Fees (%)
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.serviceFee"
                    placeholder="Ex: 15"
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
                <label>
                  VAT (%)
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.vat"
                    placeholder="Ex: 10"
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
              <div class="text-xs-right">
                <button
                  @click="submit()"
                  type="submit"
                  class="btn btn-info rounded-pill px-4"
                >
                  Submit
                </button>
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
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Business | Business Information",
      link: [
        {
          rel: "stylesheet",
          href: "/assets/Modernize/vendor/dropzone/dist/min/dropzone.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "/assets/Modernize/vendor/dropzone/dist/min/dropzone.min.js",
          body: true,
        },
        {
          src: "/assets/Modernize/vendor/fullcalendar/index.global.min.js",
          defer: true,
          body: true,
          callback: this.onScriptLoaded,
        },
      ],
    };
  },
  name: "gallery",
  data() {
    return {
      dataTable: null,
      load: false,
      id: null,
      countries: [],
      // times: [],
      data: {
        serviceFee: null,
        vat: null,
        branchId: null,
      },
      link: "/branch/api/services-configs",
      action: "update",
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  async mounted() {
    // this.times = Intl.supportedValuesOf("timeZone");
    this.getAll();
  },
  component: {},
  methods: {
    get() {
      axios
        .all([
          axios.get(this.link + "/" + id, this.config),
          // axios.get("/base/api/locationTimings/locationId/" + code, config),
        ])
        .then(
          axios.spread((customer) => {
            if (customer.data.success == true) {
              this.data = customer.data.response;
              delete this.data.password;
              delete this.data.isPhoneVerified;
              delete this.data.loyalityPoint;
              delete this.data.branchId;
              delete this.data.isGlobal;
              this.id = this.data.id;
              this.action = "update";
              if (!this.data.imgPath) {
                this.data.imgPath =
                  "/assets/Modernize/images/profile/user-1.jpg";
              }
              this.filesList = [this.data.imgPath];
              $("#addContactModal").modal("show");
            }
          })
        );
    },
    async getAll() {
      $(".preloader").show();
      axios
        .all([
          axios.get("/branch/api/branches", this.config),
          axios.get(this.link, this.config),
        ])
        .then(
          axios.spread((branches, listing) => {
            this.branches = branches.data.response;
            this.listing = listing.data.response;
            if (listing.data.response.length > 0) {
              this.action = "update";
              this.id = listing.data.response[0].id;
              this.data = listing.data.response[0];
            } else this.action = "insert";
            if (branches.data.success == true) {
              setTimeout(() => {
                this.load = true;
                $(".preloader").hide();
              }, 500);
            }
            // this.$forceUpdate();
          })
        );
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
              this.getAll();
              this.data = {
                serviceFee: null,
                vat: null,
                branchId: null,
              };
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
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                serviceFee: null,
                vat: null,
                branchId: null,
              };
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      }
    },
  },
};
</script>
