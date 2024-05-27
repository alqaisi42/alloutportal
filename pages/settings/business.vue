<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">Business Information</h4>
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
                    Business Information
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
                  Currency
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <select
                    v-model="data.currency"
                    name="select"
                    id="select"
                    required=""
                    class="form-control"
                    aria-invalid="false"
                  >
                    <option
                      :value="item.id"
                      v-for="item in currencies"
                      :key="item.id + 'cntr'"
                    >
                      {{ item.currencyNameEn + " - " + item.currencyCode }}
                    </option>
                  </select>
                  <div class="help-block"></div>
                </div>
              </div>

              <div class="mb-3 form-group col-4">
                <label>
                  Currency Position
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <div
                    class="col-12"
                    style="
                      border: 1px solid #dfe5ef;
                      border-radius: 5px;
                      padding: 5px;
                      display: flex;
                      height: 40px;
                      gap: 8em;
                    "
                  >
                    <div>
                      <input
                        type="radio"
                        v-model="data.currencyPosition"
                        value="LEFT"
                        id=""
                      />
                      Left
                    </div>
                    <div>
                      <input
                        type="radio"
                        v-model="data.currencyPosition"
                        value="RIGHT"
                        id=""
                      />
                      Right
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>
                  Forgot Password Verification By
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <div
                    class="col-12"
                    style="
                      border: 1px solid #dfe5ef;
                      border-radius: 5px;
                      padding: 5px;
                      display: flex;
                      height: 40px;
                      gap: 8em;
                    "
                  >
                    <div>
                      <input
                        type="radio"
                        v-model="data.forgot"
                        value="email"
                        id=""
                      />
                      Email
                    </div>
                    <div>
                      <input
                        type="radio"
                        v-model="data.forgot"
                        value="phone"
                        id=""
                      />
                      Phone (OTP)
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>
                  <!-- <span class="text-danger">*</span> -->
                </label>
                <div class="controls">
                  <div class="col-12 verification">
                    <div>Email Verification</div>
                    <div class="verificationItem">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="true"
                          v-model="data.emailVerification"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>
                  <!-- <span class="text-danger">*</span> -->
                </label>
                <div class="controls">
                  <div class="col-12 verification">
                    <div>OTP Verification</div>
                    <div class="verificationItem">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="true"
                          id="flexSwitchCheckChecked"
                          v-model="data.otpVerification"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>
                  Pagination
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.pagination"
                    type="text"
                    placeholder="Ex. 10"
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
                  Company Copyright Text
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.companyCopyrightText"
                    placeholder="Company Copyright Text"
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
                  Digit After Decimal Point (Ex 0.00)
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.digitAfterDecimalPoint"
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
      id: 1,
      countries: [],
      times: [],
      data: {
        currency: null,
        currencyPosition: "LEFT",
        forgot: "email",
        emailVerification: null,
        otpVerification: null,
        pagination: 10,
        companyCopyrightText: null,
        digitAfterDecimalPoint: 2,
      },
      link: "/branch/api/business-setup",
      action: "update",
      currencies: [],
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  async mounted() {
    this.getCurrency();
  },
  component: {},
  methods: {
    getCurrency() {
      axios.all([axios.get("/branch/api/currencies", this.config)]).then(
        axios.spread((currencies) => {
          if (currencies.data.success == true) {
            this.currencies = currencies.data.response;
          }
        })
      );
    },
    get() {
      axios.all([axios.get(this.link + "/" + id, this.config)]).then(
        axios.spread((customer) => {
          if (customer.data.success == true) {
            this.data = customer.data.response;
            this.id = this.data.id;
            this.action = "update";
            if (!this.data.imgPath) {
              this.data.imgPath = "/assets/Modernize/images/profile/user-1.jpg";
            }
            this.filesList = [this.data.imgPath];
            $("#addContactModal").modal("show");
          }
        })
      );
    },
    submit() {
      if (this.data.emailVerification == null) this.data.emailVerification = false;
      if (this.data.otpVerification == null) this.data.otpVerification = false;

      // console.log(this.data);
      // return;
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
                companyName: null,
                companyPhone: null,
                companyEmail: null,
                companyCountry: null,
                companyTime: null,
                companyLanguage: null,
                companyAddress: null,
                companyLatitude: null,
                companyLongitude: null,
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
              this.getAll();
              this.data = {
                companyName: null,
                companyPhone: null,
                companyEmail: null,
                companyCountry: null,
                companyTime: null,
                companyLanguage: null,
                companyAddress: null,
                companyLatitude: null,
                companyLongitude: null,
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
<style scoped>
.verification {
  position: relative;
  border: 1px solid #dfe5ef;
  border-radius: 5px;
  padding: 8px 5px;
  display: flex;
  height: 40px;
}
.verificationItem {
  position: absolute;
  right: 4px;
}
</style>
