<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Locations") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Locations") }}
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
        <div class="mb-3 form-group col-4">
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
        <div class="mb-3 form-group col-4">
          <label>
            Vendor
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
              <option value="">Vendor 1</option>
            </select>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="mb-3 form-group col-4">
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
            <span class="d-none d-md-block font-weight-medium">Approve</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Pending</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Disabled</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            class="nav-link note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 text-body-color"
            id="note-social"
          >
            <span class="d-none d-md-block font-weight-medium">Declined</span>
          </a>
        </li>
        <li class="nav-item ms-auto row gap-1 col-2">
          <nuxt-link
            to="/addlocation"
            class="btn btn-primary d-flex align-items-center px-2 col-5"
          >
            <i class="ti ti-file-export me-0 me-md-1 fs-4"></i>
            <span class="d-none d-md-block font-weight-medium fs-3">New</span>
          </nuxt-link>
        </li>
      </ul> -->

      <div class="card card-body" style="position: relative">
        <nuxt-link
          to="/addlocation"
          class="btn btn-primary d-flex align-items-center px-2 col-5"
          style="position: absolute; width: 8em; right: 0"
        >
          <i class="ti ti-file-export me-0 me-md-1 fs-4"></i>
          <span class="d-none d-md-block font-weight-medium fs-3">New</span>
        </nuxt-link>
        <h3>Location's List (2)</h3>
        <div class="table-responsive">
          <table
            class="table search-table align-middle text-nowrap"
            id=""
            v-show="load"
          >
            <thead class="header-item">
              <tr>
                <th>Id</th>
                <th>Logo</th>
                <th>Location</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Name</th>
                <th>Date</th>
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
                <td>{{ item.id }}</td>
                <td><img src="/assets/images/shot.png" alt="" /></td>
                <td>{{ item.titleEn }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.branchId }}</td>
                <td>
                  <div class="action-btn">
                    <a href="javascript:void(0)" class="text-info edit">
                      <div class="eye-display">
                        <i class="ti ti-eye"></i>
                      </div>
                    </a>
                    <a
                      @click="goto(item.id)"
                      href="javascript:void(0)"
                      class="btn btn-info btn-sm ms-2"
                    >
                      Edit
                    </a>
                    <a
                      @click="performAction(item.id)"
                      href="javascript:void(0)"
                      class="btn badge-danger btn-sm ms-2"
                    >
                      Remove
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <ul class="pagination">
              <li class="page-item" v-if="listing.number > 1">
                <a
                  class="page-link link"
                  @click="pagination($event, listing.number - 1)"
                  href=""
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <i class="ti ti-chevrons-left fs-4"></i>
                  </span>
                </a>
              </li>
              <li
                class="page-item"
                v-for="page in listing.totalPages"
                :class="{ active: page == listing.number }"
                :key="page + 'pag'"
              >
                <a
                  class="page-link link"
                  @click="pagination($event, page)"
                  href=""
                  >{{ page }}</a
                >
              </li>
              <li class="page-item" v-if="!listing.last">
                <a
                  class="page-link link"
                  @click="pagination($event, listing.number + 1)"
                  href=""
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    <i class="ti ti-chevrons-right fs-4"></i>
                  </span>
                </a>
              </li>
            </ul> -->
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
      title: "Reservation | Vendors",
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
        // {
        //   src: "/assets/Modernize/js/apps/contact.js",
        //   body: true,
        // },
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
      load: false,
      link: "/branch/locations",
      listing: [],
      username: "user",
      password: "123456",
    };
  },
  async mounted() {
    this.getAll();
  },
  component: {},
  methods: {
    // pagination(e, page) {
    //   e.preventDefault();
    //   if (page == 0) page = 1;
    //   axios
    //     .get(this.link + "?page=" + page + "&size=10", this.config)
    //     .then((response) => {
    //       if (response.data.success == true) {
    //         this.listing = response.data.response;
    //         setTimeout(() => {
    //           this.load = true;
    //         }, 500);
    //       } else {
    //         this.listing = [];
    //       }
    //     })
    //     .catch((error) => {
    //       this.$toast.error(error.response.data.messageText).goAway(1500);
    //     });
    //   return false;
    // },
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
        .get(this.link, {
          auth: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          if (response.data.success) {
            this.listing = response.data.response;
            // setTimeout(() => {
            this.load = true;
            $(".preloader").hide();
            // }, 200);
            // this.onScriptLoaded();
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    goto(code) {
      this.$router.push(
        this.localeLocation({
          name: "addlocation",
          params: { id: code },
        })
      );
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
  },
};
</script>
