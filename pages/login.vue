<template>
  <body data-sidebartype="full">
  <!-- Preloader -->
  <div class="preloader" style="display: none">
    <img
        src="https://allout.ae/wp-content/uploads/2024/05/allout-logo-100x100-1.png"
        alt="loader"
        class="lds-ripple img-fluid"
    />
  </div>

  <!-- Main Wrapper -->
  <div id="main-wrapper">
    <div class="radial-gradient min-vh-100 w-100 d-flex justify-content-center align-items-center">
      <div class="row w-100">
        <!-- Left Side: Branding and Images -->
        <div class="col-xl-7 col-xxl-8 d-none d-xl-block">
          <a href="/" class="text-nowrap logo-img d-block px-4 py-9">
            <img
                src="https://allout.ae/wp-content/uploads/2024/05/allout-logo-100x100-1.png"
                class="dark-logo"
                alt="All Out Logo"
            />
          </a>
          <div class="text-center mt-3">
            <h1 class="fw-bold">Adventure Awaits!</h1>
            <p class="sub-title">
              ✓ EASY PLANNING, INCREDIBLE EXPERIENCES &nbsp;&nbsp;
              ✓ ENDLESS EXCURSIONS &nbsp;&nbsp;
              ✓ MAXIMIZE YOUR TIME
            </p>
          </div>
          <div class="d-flex justify-content-center align-items-center flex-wrap gap-4">
            <img
                src="https://allout.ae/wp-content/uploads/2024/05/2.png"
                alt="Adventure Image 1"
                class="img-fluid rounded"
                style="width: 300px; height: auto;"
            />
            <img
                src="https://allout.ae/wp-content/uploads/2024/05/2-1-1.png"
                alt="Adventure Image 2"
                class="img-fluid rounded"
                style="width: 300px; height: auto;"
            />
            <img
                src="https://allout.ae/wp-content/uploads/2024/05/6-2.png"
                alt="Adventure Image 3"
                class="img-fluid rounded"
                style="width: 300px; height: auto;"
            />
          </div>
        </div>

        <!-- Right Side: Login Form -->
        <div class="col-xl-5 col-xxl-4 d-flex justify-content-center align-items-center">
          <div class="authentication-login w-100 p-4 bg-white shadow rounded">
            <div class="text-center mb-5">
              <h2 class="fw-bold mb-2">Welcome to ALL OUT FZC-LLC</h2>
              <p class="text-muted mb-4">Your Admin Dashboard</p>
            </div>

            <!-- Login Form -->
            <form v-on:submit.prevent="loginHandler">
              <div class="mb-4">
                <label for="email" class="form-label">Username</label>
                <input
                    v-model="data.email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                    v-model="data.password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                />
              </div>
<!--              <div class="d-flex justify-content-between align-items-center mb-4">-->
<!--                <div class="form-check">-->
<!--                  <input-->
<!--                      class="form-check-input"-->
<!--                      type="checkbox"-->
<!--                      id="rememberMe"-->
<!--                  />-->
<!--                  <label class="form-check-label" for="rememberMe">-->
<!--                    Remember this Device-->
<!--                  </label>-->
<!--                </div>-->
<!--                <a href="/login" class="text-primary">-->
<!--                  Forgot Password?-->
<!--                </a>-->
<!--              </div>-->
              <button
                  type="submit"
                  class="btn btn-primary w-100 py-3 rounded-pill"
              >
                Sign In
              </button>
            </form>

            <!-- Option to Register -->
            <div class="text-center mt-4">
              <p class="mb-0">
                New to ALL OUT?
                <a href="https://allout.ae/contact/" class="text-primary">
                  Call Customer Support
                </a>
              </p>
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
    title: "ALL OUT FZC-LLC Login",
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
  methods: {
    async loginHandler() {
      const formData = {
        ...this.data,
      };
      try {
        const ret = await this.$auth.loginWith("local", { data: formData });
        var response = ret.data;
        if (!response.success) {
          this.$toast.error(response.messageText || "You have to verify your email.").goAway(1500);
        } else {
          let data = JSON.stringify(response.response.data);
          localStorage.setItem("data", data);
          localStorage.setItem("loggedIn", true);
          window.location.href = "/home";
        }
      } catch (e) {
        console.error(e.message);
      }
    },
  },
};
</script>



<style scoped>
/* Preloader */
.preloader img {
  width: 50px;
}

/* Login Page Styles */
.radial-gradient {
  background: radial-gradient(circle at center, #f7f7f7, #e9ecef);
}

.authentication-login {
  max-width: 400px;
}

.text-center h2 {
  font-size: 1.75rem;
  color: #333;
}

.form-control {
  border-radius: 5px;
  padding: 12px;
  font-size: 1rem;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sub-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 30px;
}

img {
  border-radius: 10px;
}

@media (max-width: 768px) {
  .col-xl-7 {
    display: none;
  }
  .col-xl-5 {
    max-width: 100%;
  }
}

.authentication-login {
  max-width: 400px;
  position: relative; /* Ensure the form is positioned relative to the flow */
  z-index: 10; /* Ensure the form is above any other content */
  padding: 20px;
  background-color: #ffffff; /* Ensure a background to avoid transparency issues */
}

.form-control {
  z-index: 20; /* Ensures that the input fields are clickable */
  position: relative;
}
</style>
