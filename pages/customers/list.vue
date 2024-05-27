<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Customers") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Customers") }}
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
      <!-- <ul
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
      </ul> -->
      <div class="widget-content searchable-container list">
        <div class="card card-body">
          <div class="row">
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
            <div class="mb-3 form-group col-4">
              <label>
                Search
                <span class="text-danger">*</span>
              </label>
              <form class="position-relative">
                <input
                  type="text"
                  class="form-control product-search ps-5"
                  id="input-search"
                  placeholder="Search Contacts..."
                />
                <i
                  class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"
                ></i>
              </form>
            </div>
            <div
              class="mb-3 form-group col-2"
              style="float: right; position: absolute; right: 0; top: 3.5em"
            >
              <div class="action-btn show-btn" style="display: none">
                <a
                  href="javascript:void(0)"
                  class="delete-multiple bg-danger-subtle btn me-2 text-danger d-flex align-items-center font-medium"
                >
                  <i class="ti ti-trash text-danger me-1 fs-5"></i> Delete All
                  Row
                </a>
              </div>
              <a
                href="javascript:void(0)"
                id="btn-add-contact"
                @click="showModal('addContactModal')"
                class="btn btn-info d-flex align-items-center"
              >
                <i class="ti ti-users text-white me-1 fs-5"></i>
                {{ $t("Add Customers") }}
              </a>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="addContactModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="addContactModalTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header d-flex align-items-center">
                <h5 class="modal-title">{{ $t("Customers") }}</h5>
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
                    <form id="">
                      <FileUpload
                        @upload="handleSingleFileUpload"
                        :fileList="filesList"
                        :upload="true"
                        :multiple="false"
                        :params="uploadType"
                        :key="uploadComponenet"
                      />
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3 contact-name">
                            <input
                              type="text"
                              id="c-name"
                              v-model="data.name"
                              class="form-control"
                              placeholder="Name"
                            />
                            <span class="validation-text text-danger"></span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3 contact-email">
                            <input
                              type="text"
                              id="c-email"
                              v-model="data.email"
                              class="form-control"
                              placeholder="Email"
                            />
                            <span class="validation-text text-danger"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3 contact-phone">
                            <input
                              type="password"
                              id="c-phone"
                              v-model="data.password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3 contact-phone">
                            <input
                              type="text"
                              id="c-phone"
                              v-model="data.phone"
                              class="form-control"
                              placeholder="Phone"
                            />
                            <span class="validation-text text-danger"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="mb-3 contact-location">
                            <input
                              type="checkbox"
                              v-model="data.isPhoneVerified"
                              id="c-location"
                              class=""
                              value="1"
                            />
                            Is verified
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  @click="submit()"
                  class="btn btn-success rounded-pill px-4"
                >
                  Save
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

        <div class="card card-body">
        <h3>All Customers ({{ listing.length }})</h3>
          <div class="table-responsive" v-show="load">
            <table class="table search-table align-middle text-nowrap" id="">
              <thead class="header-item">
                <tr>
                  <th>
                    <div class="n-chk align-self-center text-center">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input primary"
                          id="contact-check-all"
                        />
                        <label
                          class="form-check-label"
                          for="contact-check-all"
                        ></label>
                        <span class="new-control-indicator"></span>
                      </div>
                    </div>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Balance</th>
                  <th>Joining Date</th>
                  <th>Loyalty Points</th>
                  <th>Block / Unblock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- start row -->
                <tr
                  class="search-items"
                  v-for="item in listing"
                  :key="'user-' + item.id"
                >
                  <td>
                    <div class="n-chk align-self-center text-center">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input contact-chkbox primary"
                          id="checkbox1"
                        />
                        <label class="form-check-label" for="checkbox1"></label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        :src="item.imgPath"
                        :alt="item.name"
                        class="rounded-circle"
                        width="35"
                        height="35"
                      />
                      <div class="ms-3">
                        <div class="user-meta-info">
                          <h6 class="user-name mb-0" data-name="Emma Adams">
                            User Name
                          </h6>
                          <span
                            class="user-work fs-3"
                            data-occupation="#ehsehserhserth"
                            >{{ item.name }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="usr-email-addr" data-email="adams@mail.com">{{
                      item.email
                    }}</span>
                  </td>
                  <td>
                    <span class="usr-location" :data-location="item.branchId">{{
                      item.phone
                    }}</span>
                  </td>
                  <td>{{ item.walletBalance }}</td>
                  <td>{{ item.createdDate }}</td>
                  <td>{{ item.loyalityPoint }}</td>
                  <td>
                    <span v-if="item.isActive" class="btn btn-sm badge-success"
                      >Active</span
                    >
                    <span v-else class="btn btn-sm badge-danger">Inactive</span>
                  </td>
                  <td>
                    <div class="action-btn">
                      <a
                        @click="goto(item.id, 'messages')"
                        href="javascript:void(0)"
                        class="text-info edit"
                      >
                        <div class="eye-display">
                          <i class="ti ti-brand-hipchat"></i>
                        </div>
                      </a>
                      <a
                        @click="goto(item.id)"
                        href="javascript:void(0)"
                        class="text-info edit"
                      >
                        <div class="eye-display">
                          <img src="/icons/eye-filled.png" alt="" />
                        </div>
                      </a>
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
      title: "Customers | List",
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
  name: "usertype",
  data() {
    return {
      dataTable: null,
      load: false,
      file: null,
      filesList: [],
      id: null,
      uploadType: "Customers",
      data: {
        name: null,
        phone: null,
        email: null,
        imgPath: null,
        date: null,
        isActive: null,
        isPhoneVerified: null,
        branchId: null,
        isGlobal: null,
      },
      link: "/branch/api/customers",
      listing: [],
      branches: [],
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
  created() {
    // // this.onScriptLoaded();
  },
  async mounted() {
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
    showModal(id) {
      $("#" + id).modal("toggle");
    },
    get(id) {
      axios.all([axios.get(this.link + "/" + id, this.config)]).then(
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
              this.data.imgPath = "/assets/Modernize/images/profile/user-1.jpg";
            }
            $("#addContactModal").modal("show");
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
    async getAll() {
      $(".preloader").show();
      await axios
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
    },
    goto(code, page = null) {
      if (page)
        this.$router.push(
          this.localeLocation({
            name: page,
            params: { id: code },
          })
        );
      else
        this.$router.push(
          this.localeLocation({
            path: `${code}`,
            // params: { code },
          })
        );
    },
    handleSingleFileUpload(file) {
      this.file = file;
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
    submit() {
      const config = {
        auth: {
          username: "user",
          password: "123456",
        },
      };
      this.data.imgPath = this.file;
      if (this.data.isPhoneVerified) this.data.isPhoneVerified = 1;
      else this.data.isPhoneVerified = 0;
      const formData = {
        ...this.data,
        branchId: 1,
        isGlobal: 1,
      };
      if (this.action == "insert") {
        axios
          .post("/branch/api/customers/register", formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.getAll();
              this.data = {
                imgPath: null,
                name: null,
                phone: null,
                email: null,
                imgPath: null,
                date: null,
                isActive: null,
                isPhoneVerified: null,
                branchId: null,
                isGlobal: null,
              };
              $("#addContactModal").modal("hide");
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
          .put("/branch/api/customers/" + this.id, formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              // this.link = "/branch/api/vendors"
              this.getAll();
              this.data = {
                imgPath: null,
                name: null,
                phone: null,
                email: null,
                imgPath: null,
                date: null,
                isActive: null,
                isPhoneVerified: null,
                branchId: null,
                isGlobal: null,
              };
              $("#addContactModal").modal("hide");
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
<!-- <script src="~/assets/Modernize/js/apps/contact.js"></script> -->
