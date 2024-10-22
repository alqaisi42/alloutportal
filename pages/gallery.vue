<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">Gallery</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a
                      class="text-muted text-decoration-none"
                      href="/Modernize/main/index.html"
                      >Home</a
                    >
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Gallery</li>
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
            <ul class="nav nav-underline" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="active-tab"
                  data-bs-toggle="tab"
                  href="#english"
                  role="tab"
                  aria-controls="active"
                  aria-expanded="true"
                  aria-selected="true"
                >
                  <span>English</span>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="link1-tab"
                  data-bs-toggle="tab"
                  href="#arabic"
                  role="tab"
                  aria-controls="link1"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <span>Arabic</span>
                </a>
              </li>
            </ul>
            <div class="tab-content tabcontent-border py-3" id="myTabContent">
              <div
                role="tabpanel"
                class="tab-pane fade active show"
                id="english"
                aria-labelledby="active-tab"
              >
                <div class="row">
                  <form class="mt-4 col-12 row" novalidate="">
                    <div class="mb-3 form-group col-12">
                      <label>
                        Image Name (EN)
                        <span class="text-danger">*</span>
                      </label>
                      <div class="controls">
                        <input
                          type="text"
                          v-model="data.imgName"
                          name="text"
                          class="form-control"
                          required=""
                          data-validation-required-message="This field is required"
                          aria-invalid="false"
                        />
                        <div class="help-block"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="arabic"
                role="tabpanel"
                aria-labelledby="link1-tab"
              >
                <form class="mt-4 col-12 row" novalidate="">
                  <div class="mb-3 form-group col-12">
                    <label>
                      Image Name (JO)
                      <span class="text-danger">*</span>
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
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <FileUpload
                  @upload="handleSingleFileUpload"
                  :fileList="filesList"
                  :upload="true"
                  :multiple="false"
                  :params="uploadType"
                  :key="uploadComponenet"
                />
              </div>
              <div class="mb-3 form-group col-12">
                <label> Service </label>
                <div class="controls">
                  <select
                    v-model="data.serviceId"
                    name="select"
                    id="select"
                    required=""
                    class="form-control"
                    aria-invalid="false"
                  >
                    <option value="">Select related service</option>
                    <option value="13">Services 13</option>
                    <option value="14">Services 14</option>
                    <option value="15">Services 15</option>
                    <option value="16">Services 16</option>
                  </select>
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-12">
                <label> Vendor </label>
                <div class="controls">
                  <select
                    v-model="data.vendorId"
                    name="select"
                    id="select"
                    required=""
                    class="form-control"
                    aria-invalid="false"
                  >
                    <option value="">Select Vendor</option>
                    <option value="1">Vendor 1</option>
                    <option value="2">Vendor 2</option>
                    <option value="3">Vendor 3</option>
                    <option value="4">Vendor 4</option>
                  </select>
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
      <form class="mt-4 row" novalidate="">
        <div class="mb-3 form-group col-3">
          <label> Title </label>
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
        <div class="mb-3 form-group col-3">
          <label>
            Service
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select
              @change="filter('service', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All Services</option>
              <option value="13">Services 13</option>
              <option value="14">Services 14</option>
              <option value="15">Services 15</option>
              <option value="16">Services 16</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
          <label>
            Branche
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
              <option value="">All branches</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
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
        <div class="mb-3 form-group col-3">
          <label> Date From </label>
          <div class="controls">
            <input
              type="date"
              name="text"
              class="form-control"
              required=""
              data-validation-required-message="This field is required"
              aria-invalid="false"
            />
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-3">
          <label> Date To </label>
          <div class="controls">
            <input
              type="date"
              name="text"
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
        <div class="mb-3 form-group col-3">
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
      <div class="row el-element-overlay">
        <div
          class="col-lg-3 col-md-6"
          v-for="item in listing"
          :key="item.id + 'gallery'"
        >
          <div class="card overflow-hidden">
            <div class="el-card-item pb-3">
              <div
                class="el-card-avatar mb-3 el-overlay-1 w-100 overflow-hidden position-relative text-center"
              >
                <img
                  :src="item.imgPath"
                  class="d-block position-relative w-100"
                  :alt="item.imgName"
                />
                <div class="el-overlay w-100 overflow-hidden">
                  <ul
                    class="list-style-none el-info text-white text-uppercase d-inline-block p-0"
                  >
                    <li class="el-item d-inline-block my-0 mx-1">
                      <a
                        @click="get(item.id)"
                        class="btn default btn-outline image-popup-vertical-fit el-link text-white border-white"
                        ><i class="ti ti-pencil"></i
                      ></a>
                    </li>
                    <li class="el-item d-inline-block my-0 mx-1">
                      <a
                        class="btn default btn-outline image-popup-vertical-fit el-link text-white border-white"
                        :href="item.imgPath"
                        ><i class="ti ti-maximize"></i
                      ></a>
                    </li>
                    <li class="el-item d-inline-block my-0 mx-1">
                      <a
                        class="btn danger btn-outline el-link text-white border-white"
                        @click="performAction(item.id)"
                        href="javascript:void(0);"
                        ><i class="ti ti-trash"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="el-card-content text-center">
                <h4 class="mb-0 fs-5">{{ item.imgName }}</h4>
                <span class="text-muted">{{ item.serviceId }}</span>
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
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Gallery",
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
      file: null,
      filesList: [],
      id: null,
      uploadType: "Galleries",
      data: {
        imgName: null,
        imgPath: null,
        serviceId: null,
        isActive: null,
        vendorId: null,
      },
      link: "/base/api/gallery",
      listing: [],
      username: "user",
      password: "123456",
      action: "insert",
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
    this.getAll();
  },
  component: { FileUpload },
  methods: {
    get(id) {
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
    performAction(id = null) {
      this.$confirm("You sure you want to delete this item?").then(() => {
        this.token = JSON.parse(localStorage.getItem("access_token"));
        const config = {
          auth: {
            username: this.username,
            password: this.password,
          },
        };
        axios
          .delete(this.link + "/" + id, config)
          .then((response) => {
            if (response.data.success) {
              this.$toast.success(response.data.message).goAway(1500);
              this.getAll();
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      });
    },
    filter(key, e) {
      this.load = false;
      let value = e.target.value;
      let url = this.link + "/" + key + "/" + value;
      if (!value) url = this.link;
      axios
        .get(url, {
          auth: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          if (response.data.success) {
            this.listing = response.data.response;
            setTimeout(() => {
              this.load = true;
            }, 500);
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    async getAll() {
      $(".preloader").show();
      await axios
        .get(this.link, {
          auth: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          if (response.data.success) {
            this.listing = response.data.response;
            setTimeout(() => {
              this.load = true;
              $(".preloader").hide();
            }, 500);
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    handleSingleFileUpload(file) {
      this.file = file;
    },
    onScriptLoaded() {
      this.externalLoaded = true;
      // setTimeout(() => {
      //   this.dataTable = $("#example").DataTable({
      //     authWidth: true,
      //     responsive: true,
      //     bDestroy: true,
      //   });
      // }, 300);
    },
    submit() {
      const config = {
        auth: {
          username: "user",
          password: "123456",
        },
      };
      this.data.imgPath = this.file;
      if (this.action == "update") {
        if (!this.data.imgPath) this.data.imgPath = this.filesList[0];
      }
      const formData = {
        ...this.data,
        // branchId: 1,
        // isGlobal: 1
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.getAll();
              this.data = {
                imgName: null,
                imgPath: null,
                serviceId: null,
                isActive: null,
                vendorId: null,
              };
              this.fileslist = [];
              this.uploadComponenet += 1;
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      } else {
        axios
          .put(this.link + "/" + this.id, formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                imgName: null,
                imgPath: null,
                serviceId: null,
                isActive: null,
                vendorId: null,
              };
              this.fileslist = [];
              this.uploadComponenet += 1;
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

