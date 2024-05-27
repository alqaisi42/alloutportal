<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Banners") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Banners") }}
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
      <form class="mt-4 row" novalidate="">
        <div class="mb-3 form-group col-2">
          <label>
            Branch
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <div class="controls">
              <select
                @change="filter('branch', $event)"
                name="select"
                id="select"
                required=""
                class="form-control"
                aria-invalid="false"
              >
                <option value="">All</option>
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
        <div class="mb-3 form-group col-2">
          <label>
            Status
            <span class="text-danger">*</span>
          </label>
          <div class="controls">
            <select
              @change="filter('status', $event)"
              name="select"
              id="select"
              required=""
              class="form-control"
              aria-invalid="false"
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-2">
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
      <ul
        class="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row"
      >
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center active px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="all-category"
          >
            <i class="ti ti-list fill-white me-0 me-md-1"></i>
            <span class="d-none d-md-block font-weight-medium">All</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-business"
          >
            <span class="d-none d-md-block font-weight-medium">Active</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Inactive</span>
          </a>
        </li>
        <li
          class="nav-item ms-auto row gap-1"
          style="position: absolute; right: 1em"
        >
          <a
            href="javascript:void(0)"
            class="btn btn-primary d-flex align-items-center px-2 col-5"
            style="width: 5em;"
            id="add-vendor"
            @click="showModal('addVendorModal')"
          >
            <i class="ti ti-file-export me-0 me-md-1 fs-4"></i>
            <span class="d-none d-md-block font-weight-medium fs-3">New</span>
          </a>
        </li>
      </ul>

      <div class="card card-body">
        <h3>Banners ({{ listing.length }})</h3>
        <div class="table-responsive" v-show="load">
          <table id="" class="table search-table align-middle text-nowrap">
            <thead class="header-item">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Branch</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- start row -->
              <tr
                class="search-items"
                v-for="item in listing"
                :key="'banner-' + item.id"
              >
                <td>{{ item.id }}</td>
                <td>
                  <img
                    class="h-5"
                    :src="item.imagePath"
                    :alt="'Banner' + item.id"
                  />
                </td>
                <td>{{ item.branch }}</td>
                <td>
                  <span v-if="item.isActive" class="btn btn-sm badge-success"
                    >Active</span
                  >
                  <span v-else class="btn btn-sm badge-danger">Inactive</span>
                </td>
                <td>
                  <div class="action-btn">
                    <a
                      @click="get(item.id)"
                      href="javascript:void(0)"
                      class="ms-2 btn btn-info btn-sm"
                    >
                      Edit
                    </a>
                    <a
                      @click="performAction(item.id)"
                      href="javascript:void(0)"
                      class="ms-2 btn badge-danger btn-sm"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="modal fade"
        id="addVendorModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addVendorModalTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          role="document"
          style="width: 80% !important; max-width: 80% !important"
        >
          <div class="modal-content">
            <div class="modal-header d-flex align-items-center">
              <h5 class="modal-title">{{ $t("Add Banner") }}</h5>
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
                  <form class="mt-4 row" v-on:submit.prevent="submit">
                    <div class="col-6">
                      <div class="mb-3 form-group col-12">
                        <label> Branches </label>
                        <div class="controls">
                          <select
                            v-model="data.branch"
                            name="select"
                            id="select"
                            required=""
                            class="form-control"
                            aria-invalid="false"
                          >
                            <option value="">All</option>
                            <option
                              :value="item.id"
                              v-for="item in branches"
                              :key="item.id + 'branches'"
                            >
                              {{ item.nameEn }}
                            </option>
                          </select>
                          <div class="help-block"></div>
                        </div>
                      </div>
                      <div class="mb-3 form-group col-12">
                        <label> Status </label>
                        <div class="controls">
                          <select
                            v-model="data.isActive"
                            name="select"
                            id="select"
                            required=""
                            class="form-control"
                            aria-invalid="false"
                          >
                            <option value="">Select status</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                          </select>
                          <div class="help-block"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <FileUpload
                        @upload="handleSingleFileUpload"
                        :fileList="filesList"
                        :upload="true"
                        :multiple="false"
                        :params="uploadType"
                        :key="uploadComponenet"
                      />
                      <p>Banner Image Ratio 3:1</p>
                      <p>
                        Banner Image Ratio is not same for all sections in
                        website.
                      </p>
                      <p>Please review the ratio before upload</p>
                    </div>
                    <div class="col-12">
                      <div class="controls">
                        <button @click="submit()" class="btn btn-md btn-info">
                          Save
                        </button>
                        <div class="help-block"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id=""
                @click="submit()"
                class="btn btn-success rounded-pill px-4"
              >
                Add
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
      title: "Settings | Banner",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "/assets/Modernize/vendor/fullcalendar/index.global.min.js",
          defer: true,
          body: true,
          callback: this.onScriptLoaded,
        },
      ],
    };
  },
  name: "usertype",
  data() {
    return {
      dataTable: null,
      uploadComponenet: 1,
      link: "/branch/banners",
      load: false,
      data: {
        branch: null,
        createdBy: 1,
        imagePath: null,
        imageUrl: null,
        isActive: null,
      },
      listing: [],
      action: "insert",
      branches: null,
      filesList: null,
      uploadType: "Banners",
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
  component: { FileUpload },
  methods: {
    filter(key, e) {
      this.load = false;
      let value = e.target.value;
      let url = this.link + "";
      // let url = this.link + "/" + key + "/" + value;
      // if (!value) url = this.link;
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
    async getAll() {
      $(".preloader").show();
      axios
        .all([
          axios.get(this.link, this.config),
          axios.get("/branch/api/branches", this.config),
        ])
        .then(
          axios.spread((listing, branches) => {
            this.listing = listing.data.response;
            this.branches = branches.data.response;
            if (listing.data.success == true) {
              setTimeout(() => {
                this.load = true;
                $(".preloader").hide();
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
            this.filesList = [this.data.imagePath];
            if (this.data.isActive) this.data.isActive = 1;
            else this.data.isActive = 0;
            this.action = "update";
            this.id = code;
            $("#addVendorModalTitle").modal("show");
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
      this.data.imagePath = this.file;
      this.data.imageUrl = this.file;
      if (this.data.isActive) this.data.isActive = true;
      else this.data.isActive = false;
      const formData = {
        ...this.data,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success("Data has been updated").goAway(1500);
              this.getAll();
              this.data = {
                branch: null,
                createdBy: 1,
                imagePath: null,
                imageUrl: null,
                isActive: null,
              };
              this.filesList = [];
              this.uploadComponenet += 1;
              $("#addVendorModalTitle").modal("hide");
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
              this.$toast.success("Data has been updated").goAway(1500);
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                branch: null,
                createdBy: 1,
                imagePath: null,
                imageUrl: null,
                isActive: null,
              };
              this.filesList = [];
              this.uploadComponenet += 1;
              $("#addVendorModalTitle").modal("hide");
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      }
      // this.$forceUpdate();
    },
    showModal(id) {
      $("#" + id).modal("toggle");
    },
  },
};
</script>
<style scoped>
.h-5 {
  height: 5em;
  border-radius: 1em;
}
</style>
