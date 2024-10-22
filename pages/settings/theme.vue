<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div
        class="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4"
      >
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">{{ $t("Manage Languages") }}</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted text-decoration-none" href="/">{{
                      $t("Home")
                    }}</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ $t("Manage Languages") }}
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
      <div class="col-12 row">
        <div class="card col-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-4">Website Color</h5>
            <div class="col-12 row" style="margin: auto">
              <div class="col-6">
                <input
                  class="coloring"
                  type="color"
                  v-model="data.websiteColorPrimary"
                  style="width: 100%"
                />
                <!-- <div
                    class="coloring"
                    :style="{ backgroundColor: data.primaryColor }"
                  ></div> -->
                <p class="colorCode">{{ data.websiteColorSecondary }}</p>
                <p class="colorType">Primary Color</p>
              </div>
              <div class="col-6">
                <input
                  class="coloring"
                  type="color"
                  v-model="data.secondaryColor"
                  style="width: 100%"
                />
                <p class="colorCode">{{ data.secondaryColor }}</p>
                <p class="colorType">Secondary Color</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-4">Website Image</h5>
            <div class="col-12" style="margin: auto">
              <FileUpload
                style="margin-top: 1em"
                @upload="HandleFileUploadImage"
                :key="uploadComponenet"
                :upload="true"
                :request="true"
                :multiple="false"
                :fileList="data.websiteImage"
                :params="'Services'"
              />
            </div>
          </div>
        </div>
        <div class="card col-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-4">Website Footer Logo</h5>
            <div class="col-12" style="margin: auto">
              <FileUpload
                style="margin-top: 1em"
                @upload="HandleFileUploadFooter"
                :key="uploadComponenet"
                :upload="true"
                :request="true"
                :multiple="false"
                :fileList="data.websiteFooterLogo"
                :params="'Services'"
              />
            </div>
          </div>
        </div>
        <div class="card col-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-4">Website Favicon</h5>
            <div class="col-12" style="margin: auto">
              <FileUpload
                style="margin-top: 1em"
                @upload="HandleFileUploadFavicon"
                :key="uploadComponenet"
                :upload="true"
                :request="true"
                :multiple="false"
                :fileList="data.websiteFavicon"
                :params="'Services'"
              />
            </div>
          </div>
        </div>
        <div class="card col-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-4">Loading Gif</h5>
            <div class="col-12" style="margin: auto">
              <FileUpload
                style="margin-top: 1em"
                @upload="HandleFileUploadGif"
                :key="uploadComponenet"
                :upload="true"
                :request="true"
                :multiple="false"
                :fileList="data.loadingGif"
                :params="'Services'"
              />
            </div>
          </div>
        </div>
        <div class="card col-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-4">App Logo</h5>
            <div class="col-12" style="margin: auto">
              <FileUpload
                style="margin-top: 1em"
                @upload="HandleFileUploadApp"
                :key="uploadComponenet"
                :upload="true"
                :request="true"
                :multiple="false"
                :fileList="data.appLogo"
                :params="'Services'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import FileUpload from "~/components/fileUpload.vue";
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
      selected: [],
      data: {
        websiteColorPrimary: "#1C8F78",
        websiteColorSecondary: "#00F000",
        websiteImage: null,
        websiteFooterLogo: null,
        websiteFavicon: null,
        loadingGif: null,
        appLogo: null,
      },
      headerLogo: [
        {
          id: 78,
          imgName: "Image name as test data",
          imgPath:
            "https://allout-space.nyc3.digitaloceanspaces.com/allout-space/Gallery/1708726760305_fun.jpg",
        },
      ],
      footerLogo: [
        {
          id: 79,
          imgName: "Image name as test data",
          imgPath:
            "https://allout-space.nyc3.digitaloceanspaces.com/allout-space/Gallery/1708726761534_fun1.jpg",
        },
      ],
      favicon: [
        {
          id: 79,
          imgName: "Image name as test data",
          imgPath:
            "https://allout-space.nyc3.digitaloceanspaces.com/allout-space/Gallery/1708726761534_fun1.jpg",
        },
      ],
      gif: [
        {
          id: 79,
          imgName: "Image name as test data",
          imgPath:
            "https://allout-space.nyc3.digitaloceanspaces.com/allout-space/Gallery/1708726761534_fun1.jpg",
        },
      ],
      app: [
        {
          id: 79,
          imgName: "Image name as test data",
          imgPath:
            "https://allout-space.nyc3.digitaloceanspaces.com/allout-space/Gallery/1708726761534_fun1.jpg",
        },
      ],
      listing: null,
      load: false,
      link: "/branch/api/business-setup",
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
    if (!process.client) return;
    this.get();
    // this.$layout.toggleLoader()
  },
  component: { FileUpload },
  methods: {
    HandleFileUploadImage(file) {
      // console.log(file)
      this.data.websiteImage = file;
      this.submit();
    },
    HandleFileUploadFooter(file) {
      this.data.websiteFooterLogo = file;
      this.submit();
    },
    HandleFileUploadFavicon(file) {
      this.data.websiteFavicon = file;
      this.submit();
    },
    HandleFileUploadGif(file) {
      this.data.loadingGif = file;
      this.submit();
    },
    HandleFileUploadApp(file) {
      this.data.appLogo = file;
      this.submit();
    },
    get() {
      axios
        .get(this.link, this.config)
        .then((response) => {
          if (response.data.success) {
            // console.log('hi')
            if (response.data.response.length > 0) {
              this.id = response.data.response[0].id;
              this.data = response.data.response[0];
              // console.log(isValidHttpUrl(this.data.websiteImage))
              if (this.isValidHttpUrl(this.data.websiteImage))
                this.data.websiteImage = [this.data.websiteImage];
              else this.data.websiteImage = null;
              if (this.isValidHttpUrl(this.data.websiteFooterLogo))
                this.data.websiteFooterLogo = [this.data.websiteFooterLogo];
              else this.data.websiteFooterLogo = null;
              if (this.isValidHttpUrl(this.data.websiteFavicon))
                this.data.websiteFavicon = [this.data.websiteFavicon];
              else this.data.websiteFavicon = null;
              if (this.isValidHttpUrl(this.data.loadingGif))
                this.data.loadingGif = [this.data.loadingGif];
              else this.data.loadingGif = null;
              if (this.isValidHttpUrl(this.data.appLogo))
                this.data.appLogo = [this.data.appLogo];
              else this.data.appLogo = null;
              this.action = "update";
            }
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    isValidHttpUrl(string) {
      let url;

      try {
        url = new URL(string);
      } catch (_) {
        return false;
      }

      return url.protocol === "http:" || url.protocol === "https:";
    },
    submit() {
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
              setTimeout(() => {
                this.getAll();
              }, 1000);
              this.data = {
                name: null,
                code: null,
              };
              this.action = "insert";
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
          .put(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.link = "/branch/api/vendors";
              setTimeout(() => {
                this.getAll();
              }, 1000);
              this.data = {
                name: null,
                code: null,
              };
              $("#addVendorModal").modal("hide");
              this.action = "update";
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
<style scoped>
.mainColor {
  padding: 0.5em;
  border: 1px solid rgb(68, 68, 68);
  border-radius: 0.4em;
}
.coloring {
  height: 4em;
}
.colorCode,
.colorType {
  text-align: center;
  margin: 10px 0;
}
</style>
