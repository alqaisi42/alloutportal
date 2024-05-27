<template>
  <body data-sidebartype="full">
    <!-- Preloader -->
    <div class="preloader" style="display: none">
      <img
        src="/Modernize/images/logos/favicon.png"
        alt="loader"
        class="lds-ripple img-fluid"
      />
    </div>
    <div id="main-wrapper">
      <div
        class="position-relative overflow-hidden radial-gradient min-vh-100 w-100"
      >
        <div class="position-relative z-index-5">
          <div class="row">
            <div class="col-xl-7 col-xxl-8">
              <a href="/" class="text-nowrap logo-img d-block px-4 py-9 w-100">
                <img
                  src="/Modernize/images/logos/dark-logo.svg"
                  class="dark-logo"
                  alt="Logo-Dark"
                />
                <img
                  src="/Modernize/images/logos/light-logo.svg"
                  class="light-logo"
                  alt="Logo-light"
                  style="display: none"
                />
              </a>
              <div
                class="d-none d-xl-flex align-items-center justify-content-center"
                style="height: calc(100vh - 80px)"
              >
                <img
                  src="/Modernize/images/backgrounds/login-security.svg"
                  alt=""
                  class="img-fluid"
                  width="500"
                />
              </div>
            </div>
            <div class="col-xl-5 col-xxl-4">
              <div
                class="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4"
              >
                <div class="col-sm-8 col-md-6 col-xl-9">
                  <h2 class="mb-3 fs-7 fw-bolder">Welcome to Modernize</h2>
                  <p class="mb-9">Your Admin Dashboard</p>
                  <!-- <div class="row">
                    <div class="col-6 mb-2 mb-sm-0">
                      <a
                        class="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                        href="javascript:void(0)"
                        role="button"
                      >
                        <img
                          src="/Modernize/images/svgs/google-icon.svg"
                          alt=""
                          class="img-fluid me-2"
                          width="18"
                          height="18"
                        />
                        <span class="d-none d-sm-block me-1 flex-shrink-0"
                          >Sign in with</span
                        >Google
                      </a>
                    </div>
                    <div class="col-6">
                      <a
                        class="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                        href="javascript:void(0)"
                        role="button"
                      >
                        <img
                          src="/Modernize/images/svgs/facebook-icon.svg"
                          alt=""
                          class="img-fluid me-2"
                          width="18"
                          height="18"
                        />
                        <span class="d-none d-sm-block me-1 flex-shrink-0"
                          >Sign in with</span
                        >FB
                      </a>
                    </div>
                  </div>
                  <div class="position-relative text-center my-4">
                    <p
                      class="mb-0 fs-4 px-3 d-inline-block text-bg-white text-dark z-index-5 position-relative"
                    >
                      or sign in with
                    </p>
                    <span
                      class="border-top w-100 position-absolute top-50 start-50 translate-middle"
                    ></span>
                  </div> -->
                  <form v-on:submit.prevent="loginHandler">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label"
                        >Username</label
                      >
                      <input
                        v-model="data.email"
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-4">
                      <label for="exampleInputPassword1" class="form-label"
                        >Password</label
                      >
                      <input
                        v-model="data.password"
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between mb-4"
                    >
                      <div class="form-check">
                        <input
                          class="form-check-input primary"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          checked=""
                        />
                        <label
                          class="form-check-label text-dark"
                          for="flexCheckChecked"
                        >
                          Remeber this Device
                        </label>
                      </div>
                      <a
                        class="text-primary fw-medium"
                        href="/Modernize/AuthenticationForgotPassword"
                        >Forgot Password ?</a
                      >
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary w-100 py-8 mb-4 rounded-2"
                      :to="
                        localeLocation({
                          name: 'home',
                        })
                      "
                    >
                      {{ $t("Sign In") }}
                    </button>
                    <!-- <a
                      href="/"
                      class="btn btn-primary w-100 py-8 mb-4 rounded-2"
                      >Sign In</a
                    > 
                    <div
                      class="d-flex align-items-center justify-content-center"
                    >
                      <p class="fs-4 mb-0 fw-medium">New to Modernize?</p>
                      <a
                        class="text-primary fw-medium ms-2"
                        href="/Modernize/AuthenticationRegister"
                        >Create an account</a
                      >
                    </div>-->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import axios from "axios";
export default {
  head: {
    title: "Espace d'authentification",
  },
  auth: false,
  name: "login",
  data() {
    return {
      blobUrl: null,
      data: {
        email: null,
        password: null,
      },
      loaded: false,
    };
  },
  async mounted() {
    if (!process.client) return;
    // let token = localStorage.getItem("access_token");
    // if (typeof yourvar == "undefined") {
    //   this.logout();
    // } else {
    //   this.token = JSON.parse(localStorage.getItem("access_token"));
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${this.token}`,
    //     },
    //   };
    //   axios
    //     .get("https://moobin.ibnbadis.ch/users/get/?format=web", config)
    //     .then((token) => {})
    //     .catch((error) => {
    //       if (error.response.data.disconnect) {
    //         this.logout();
    //       }
    //     });
    // }
  },
  component: {},
  methods: {
    logout() {
      localStorage.removeItem("data");
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      this.$auth.$storage.setUniversal("loggedIn", false);
      this.$router.push(this.localeLocation({ name: "login" }));
    },
    mobile() {
      if (!process.client) return;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.$router.push(this.localeLocation({ name: "error" }));
        return true;
      }
    },
    async loginHandler() {
      // var data = new URLSearchParams();

      const formData = {
        ...this.data,
      };
      try {
        const ret = await this.$auth.loginWith("local", { data: formData });
        var response = ret.data;
        if (response.success == false) {
          if (response.messageText) {
            this.$toast.error(response.messageText).goAway(1500);
          } else {
            this.$toast.error("You have to verify your email.").goAway(1500);
          }
          return false;
        } else {
          // this.$auth.$storage.setUniversal("code", response.data.code);
          // await this.$auth.setUserToken(response.data.jwt, response.data.jwt);
          let data = response.response.data;
          data.password = this.data.password;
          data = JSON.stringify(data);
          if (process.client) {
            localStorage.setItem("data", data);
            localStorage.setItem("loggedIn", true);
            localStorage.setItem(
              "userId",
              JSON.stringify(response.response.data.id)
            );
            // localStorage.setItem(
            //   "access_token",
            //   JSON.stringify(response.data.jwt)
            // );
            window.location.href = "/home";
            // this.$router.push(this.localeLocation({ name: "home" }));
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  head: {
    title: "Login",
  },
};
</script>
