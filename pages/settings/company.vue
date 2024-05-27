<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">Company Information</h4>
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
                    Company Information
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
                  Company Name
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.companyName"
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
                  Phone
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.phone"
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
                  Email
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.email"
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
                  Country
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <select
                    v-model="data.country"
                    name="select"
                    id="select"
                    required=""
                    class="form-control"
                    aria-invalid="false"
                  >
                    <option
                      :value="item.cca3"
                      v-for="item in countries"
                      :key="item.cca3 + 'cntr'"
                    >
                      {{ item.flag + " " + item.name.official }}
                    </option>
                  </select>
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>
                  Time Zone
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <select
                    v-model="data.timeZone"
                    name="select"
                    id="select"
                    required=""
                    class="form-control"
                    aria-invalid="false"
                  >
                    <option
                      :value="item"
                      v-for="item in times"
                      :key="item + 'cntr'"
                    >
                      {{ item }}
                    </option>
                  </select>
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-4">
                <label>
                  Language
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.language"
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
                  Company Address
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.companyAddress"
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
                  Latitude
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.latitude"
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
                  Longitude
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input
                    v-model="data.longitude"
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
      title: "Business | Company Information",
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
      times: [],
      data: {
        companyName: null,
        phone: null,
        email: null,
        country: 'UAE',
        timeZone: null,
        language: null,
        companyAddress: null,
        latitude: null,
        longitude: null,
      },
      link: "/branch/api/business-setup",
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
    this.times = Intl.supportedValuesOf("timeZone");
    this.get();
  },
  component: {},
  methods: {
    get() {
      axios
        .all([
          axios.get(this.link, this.config),
          axios.get("https://restcountries.com/v3.1/all?fields=name,flag,cca3"),
        ])
        .then(
          axios.spread((info, countries) => {
            this.countries = countries.data
            if (info.data.success == true) {
              if (info.data.response.length > 0) {
                this.action = "update";
                this.id = info.data.response[0].id;
                this.data = info.data.response[0];
              } else {
                this.action = "insert";
              }
            }
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
              // this.link = "/branch/api/vendors"
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
