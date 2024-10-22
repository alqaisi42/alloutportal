<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <!-- Header Card -->
      <div class="card bg-info-light shadow mb-4">
        <div class="card-body d-flex justify-content-between align-items-center px-4 py-3">
          <div>
            <h4 class="fw-semibold">{{ $t("Interests") }}</h4>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a class="text-muted text-decoration-none" href="/">{{ $t("Home") }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ $t("Interests") }}</li>
              </ol>
            </nav>
          </div>
          <div class="text-center">
            <img src="/Modernize/images/breadcrumb/ChatBc.png" alt="" class="img-fluid" style="max-height: 60px;" />
          </div>
        </div>
      </div>

      <!-- Filter Form -->
      <form class="row g-3 align-items-end mt-4">
        <div class="col-2">
          <label class="form-label">Branch <span class="text-danger">*</span></label>
          <select @change="filter('branch', $event.target.value)" class="form-select" required>
            <option value="">All</option>
            <option :value="item.id" v-for="item in branches" :key="item.id">{{ item.nameEn }}</option>
          </select>
        </div>

        <div class="col-2">
          <label class="form-label">Status <span class="text-danger">*</span></label>
          <select @change="filter('status', $event.target.value)" class="form-select" required>
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div class="col-2">
          <button type="button" class="btn btn-primary d-flex align-items-center" id="search-btn">
            <i class="ti ti-search me-1"></i>
            <span class="d-none d-md-block">Search</span>
          </button>
        </div>
      </form>

      <!-- Interests Filter Tabs -->
      <ul class="nav nav-pills p-3 mb-3 rounded bg-light shadow-sm d-flex align-items-center justify-content-between">
        <li class="nav-item">
          <a href="javascript:void(0)" class="nav-link active d-flex align-items-center px-3" id="all-category">
            <i class="ti ti-list me-1"></i>
            <span>All</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)" @click="filter('status', 1)" class="nav-link d-flex align-items-center px-3" id="active-category">
            <span>Active</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)" @click="filter('status', 0)" class="nav-link d-flex align-items-center px-3" id="inactive-category">
            <span>Inactive</span>
          </a>
        </li>
        <li class="nav-item ms-auto">
          <button type="button" class="btn btn-primary" id="add-vendor" @click="showModal('addVendorModal')">
            <i class="ti ti-file-export me-1"></i>
            <span>New</span>
          </button>
        </li>
      </ul>

      <!-- Interests Table -->
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title mb-4">Interests ({{ listing.length }})</h5>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Created On</th>
                <th>Branch</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in listing" :key="item.createdDate">
                <td>{{ item.id }}</td>
                <td>
                  <img :src="item.imagePath" :alt="item.nameEn" height="50" width="50" class="rounded" />
                </td>
                <td>{{ item.nameEn }}</td>
                <td>{{ getDate(item.createdDate) }}</td>
                <td>{{ item.branchName }}</td>
                <td>
                    <span :class="item.isActive ? 'badge bg-success' : 'badge bg-danger'">
                      {{ item.isActive ? 'Active' : 'Inactive' }}
                    </span>
                </td>
                <td>
                  <button @click="get(item.id)" class="btn btn-info btn-sm me-2">Edit</button>
                  <button @click="performAction(item.id)" class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Add Interests Modal -->
      <div class="modal fade" id="addVendorModal" tabindex="-1" aria-labelledby="addVendorModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ $t("Add Interests") }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="english" role="tabpanel">
                  <form class="row g-3">
                    <div class="col-12">
                      <label class="form-label">Interest Name (EN) <span class="text-danger">*</span></label>
                      <input v-model="data.nameEn" type="text" class="form-control" required>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade" id="arabic" role="tabpanel">
                  <form class="row g-3">
                    <div class="col-12">
                      <label class="form-label">Interest Name (AR) <span class="text-danger">*</span></label>
                      <input v-model="data.nameAr" type="text" class="form-control" required>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row g-3 mt-4">
                <div class="col-4">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <select v-model="data.isActive" class="form-select" required>
                    <option value="">Select Status</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
                <div class="col-4">
                  <label class="form-label">Branch <span class="text-danger">*</span></label>
                  <select v-model="data.branchId" class="form-select" required>
                    <option value="">Select Branch</option>
                    <option :value="item.id" v-for="item in branches" :key="item.id">{{ item.nameEn }}</option>
                  </select>
                </div>
                <div class="col-4">
                  <label class="form-label">Priority <span class="text-danger">*</span></label>
                  <select v-model="data.priority" class="form-select" required>
                    <option value="">Select Priority</option>
                    <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
                  </select>
                </div>
              </div>
              <FileUpload @upload="handleSingleFileUpload" :key="uploadComponenet" :multiple="false" />
            </div>
            <div class="modal-footer">
              <button @click="submit()" class="btn btn-success">Add</button>
              <button class="btn btn-danger" data-bs-dismiss="modal">Discard</button>
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
      title: "Data | Interests",
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
  name: "interests",
  data() {
    return {
      dataTable: null,
      data: {
        nameEn: null,
        nameAr: null,
        priority: null,
        branchId: null,
        isActive: null,
      },
      file: null,
      imageList: null,
      uploadPercentage: 0,
      formData: null,
      listing: [],
      branches: [],
      load: false,
      link: "/base/interests/all",
      username: "user",
      password: "123456",
      uploadComponenet: 1,
    };
  },
  mounted() {
    if (!process.client) return;
    this.getAll();
  },
  components: {
    FileUpload,
  },
  methods: {
    filter(key, value) {
      this.load = false;
      let url = this.link + "";
      axios
          .get(url, {
            auth: {
              username: this.username,
              password: this.password,
            },
          })
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
      $(".preloader").show();
      this.load = false;
      await axios
          .get("/base/interests/all", {
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
    performAction(id = null) {
      this.$confirm("Are you sure you want to perform this action?").then(() => {
        const config = {
          auth: {
            username: this.username,
            password: this.password,
          },
        };
        axios
            .delete("/base/interests/" + id, config)
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
    get(code) {
      const config = {
        auth: {
          username: this.username,
          password: this.password,
        },
      };
      axios
          .get("/base/interests/" + code, config)
          .then((response) => {
            if (response.data.success) {
              this.data = response.data.response;
              this.showModal("addVendorModal");
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
    },
    onScriptLoaded() {
      this.externalLoaded = true;
      setTimeout(() => {
        this.dataTable = $("table").DataTable({
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
      const config = {
        auth: {
          username: this.username,
          password: this.password,
        },
      };
      const formData = new FormData();
      for (const key in this.data) {
        if (this.data.hasOwnProperty(key)) {
          formData.append(key, this.data[key]);
        }
      }
      formData.append("createdBy", 1);
      formData.append("userID", 1);
      if (this.file) formData.append("file", this.file);
      axios
          .post("/base/interests/add", formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.getAll();
              this.uploadComponenet += 1;
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
    },
    showModal(id) {
      $("#" + id).modal("toggle");
    },
  },
};
</script>

<style>
/* Custom styles */
.body-wrapper {
  background-color: #f8f9fa;
}
.card {
  border-radius: 12px;
}
.nav-pills .nav-link {
  border-radius: 8px;
}
.nav-pills .nav-link.active {
  background-color: #0d6efd;
  color: white;
}
.table thead th {
  background-color: #f1f1f1;
}
.btn-close {
  background-color: #e0e0e0;
}
</style>