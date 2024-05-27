<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <h5>Entry Point</h5>
              <p class="mb-3 card-subtitle">
                Here you can manage Entry point, you may edit data related to
                Entry point
              </p>
            </div>
            <div class="row">
              <div class="row col-12">
                <div class="col-6">
                  <div class="mb-3 form-group">
                    <label>
                      Enter point function (1 Point = AED)
                      <span class="text-danger">*</span> </label
                    ><br />
                    <b>Bronze</b>
                    <div class="controls">
                      <input
                        v-model="data.bronzeFunc"
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
                </div>
                <div class="col-6">
                  <div class="mb-3 form-group">
                    <label>
                      Enter point function (1 Point = AED)
                      <span class="text-danger">*</span> </label
                    ><br />
                    <b>Silver</b>
                    <div class="controls">
                      <input
                        v-model="data.silverFunc"
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
                </div>
                <div class="col-6">
                  <div class="mb-3 form-group">
                    <label>
                      Enter point function (1 Point = AED)
                      <span class="text-danger">*</span> </label
                    ><br />
                    <b>Gold</b>
                    <div class="controls">
                      <input
                        v-model="data.goldFunc"
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
                </div>
                <div class="col-6">
                  <div class="mb-3 form-group">
                    <label>
                      Enter point function (1 Point = AED)
                      <span class="text-danger">*</span> </label
                    ><br />
                    <b>Platinum</b>
                    <div class="controls">
                      <input
                        v-model="data.platinumFunc"
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
                </div>
              </div>
              <!-- <div class="text-xs-right">
                                <button type="submit" class="btn btn-info rounded-pill px-4">
                                    Submit
                                </button>
                            </div> -->
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <h5>Loyalty management</h5>
              <p class="mb-3 card-subtitle">
                Here you can manage Loyalty, you may edit data related to
                Loyalty
              </p>
            </div>
            <div class="row">
              <div class="row col-12">
                <div class="col-6">
                  <div class="image-loyalty">
                    <img src="/assets/Modernize/icons/bronze.png" alt="" />
                    <p>Bronze <br />Membership</p>
                  </div>
                  <div class="mb-3 form-group">
                    <label>
                      Start Level From
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input
                        v-model="data.bronzeLevelFrom"
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
                </div>
                <div class="col-6">
                  <div class="image-loyalty">
                    <img src="/assets/Modernize/icons/gold.png" alt="" />
                    <p>Gold <br />Membership</p>
                  </div>
                  <div class="mb-3 form-group">
                    <label>
                      Start Level From
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input
                        v-model="data.goldLevelFrom"
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
                </div>
                <div class="col-6">
                  <div class="image-loyalty">
                    <img src="/assets/Modernize/icons/silver.png" alt="" />
                    <p>Silver <br />Membership</p>
                  </div>
                  <div class="mb-3 form-group">
                    <label>
                      Start Level From
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input
                        v-model="data.silverLevelFrom"
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
                </div>
                <div class="col-6">
                  <div class="image-loyalty">
                    <img src="/assets/Modernize/icons/platinum.png" alt="" />
                    <p>Platinum <br />Membership</p>
                  </div>
                  <div class="mb-3 form-group">
                    <label>
                      Start Level From
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input
                        v-model="data.platinumLevelFrom"
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
      title: "Dashboard | Loyalty",
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
  name: "loyalty",
  data() {
    return {
      dataTable: null,
      load: false,
      data: {
        bronzeFunc: null,
        bronzeLevelFrom: null,
        silverFunc: null,
        silverLevelFrom: null,
        goldFunc: null,
        goldLevelFrom: null,
        platinumFunc: null,
        platinumLevelFrom: null,
        branch: { id: 1 },
      },

      link: "/branch/api/loyalty-systems",
      listing: [],
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
  },
  component: {},
  methods: {
    async getAll() {
      $(".preloader").show();
      await axios
        .get(this.link + "/1", this.config)
        .then((response) => {
          if (response.data.success) {
            this.data = response.data.response;
            $(".preloader").hide();
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
                this.$toast.success(response.data.message).goAway(1500);
                this.getAll();
                // // this.onScriptLoaded();
              } else this.$toast.error(response.data.message).goAway(1500);
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
            this.data = response.data;
            // this.link = response.data.link;
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
        createdBy: 1,
        userId: 1,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.data = response.data;
              //   this.getAll();
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
              this.link = "/base/amenities";
              this.getAll();
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
<style>
.image-loyalty {
  display: flex;
  gap: 2em;
}
.image-loyalty img {
  margin: 0;
  height: 10em;
}
.image-loyalty p {
  font-size: 24px;
  font-weight: 500;
  margin: 5% 0;
}
</style>
