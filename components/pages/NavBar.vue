<template>
  <!-- Navbar -->
  <header class="topbar">
    <div class="with-vertical">
      <nav class="navbar navbar-expand-lg p-0">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
                class="nav-link sidebartoggler nav-icon-hover ms-n3"
                id="headerCollapse"
                href="javascript:void(0)"
            >
              <i class="ti ti-menu-2"></i>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block">
            <a
                class="nav-link nav-icon-hover"
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
              <i class="ti ti-search"></i>
            </a>
          </li>
        </ul>

        <div class="d-block d-lg-none">
          <!-- Replace with AllOut branding -->
          <h3>AllOut</h3>
        </div>
        <a
            class="navbar-toggler nav-icon-hover p-0 border-0"
            href="javascript:void(0)"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="p-2">
            <i class="ti ti-dots fs-7"></i>
          </span>
        </a>
        <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
        >
          <div class="d-flex align-items-center justify-content-between">
            <a
                href="javascript:void(0)"
                class="nav-link d-flex d-lg-none align-items-center justify-content-center"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobilenavbar"
                aria-controls="offcanvasWithBothOptions"
            >
              <i class="ti ti-align-justified fs-7"></i>
            </a>
            <ul
                class="navbar-nav flex-row ms-auto align-items-center justify-content-center"
            >
              <!-- Start language Dropdown -->
              <li class="nav-item dropdown">
                <a
                    class="nav-link nav-icon-hover"
                    href="javascript:void(0)"
                    id="drop2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  <img
                      src="/Modernize/images/svgs/icon-flag-en.svg"
                      alt=""
                      width="20px"
                      height="20px"
                      class="rounded-circle object-fit-cover round-20"
                  />
                </a>
                <div
                    class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop2"
                >
                  <div class="message-body">
                    <a
                        href="javascript:void(0)"
                        class="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                    >
                      <div class="position-relative">
                        <img
                            src="/Modernize/images/svgs/icon-flag-en.svg"
                            alt=""
                            width="20px"
                            height="20px"
                            class="rounded-circle object-fit-cover round-20"
                        />
                      </div>
                      <p class="mb-0 fs-3">English (UK)</p>
                    </a>
                    <!-- Add more languages if needed -->
                  </div>
                </div>
              </li>

              <!-- Start Profile Dropdown -->
              <li class="nav-item dropdown">
                <a
                    class="nav-link pe-0"
                    href="javascript:void(0)"
                    id="drop1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  <div class="d-flex align-items-center">
                    <div class="user-profile-img">
                      <img
                          src="/Modernize/images/profile/user-1.jpg"
                          class="rounded-circle"
                          width="35"
                          height="35"
                          alt="User"
                      />
                    </div>
                  </div>
                </a>
                <div
                    class="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop1"
                >
                  <div
                      class="profile-dropdown position-relative"
                      data-simplebar
                  >
                    <!-- User Information -->
                    <div
                        class="d-flex align-items-center py-9 mx-7 border-bottom"
                    >
                      <img
                          src="https://allout.ae/wp-content/uploads/2024/05/allout-logo-100x100-1.png"
                          class="rounded-circle"
                          width="80"
                          height="80"
                          alt="User"
                      />
                      <div class="ms-3">
                        <h5 class="mb-1 fs-3">All Out Super Admin</h5>
                        <span class="mb-1 d-block">Admin Role</span>
                        <p class="mb-0 d-flex align-items-center gap-2">
                          <i class="ti ti-mail fs-4"></i>
                          Admin@allout.ae
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- Removed My Inbox, My Tasks, and Upgrade Plan sections -->
                  <div class="d-grid py-4 px-7 pt-8">
                    <a
                        href="/login"
                        class="btn btn-outline-primary"
                    >Log Out</a
                    >
                  </div>
                </div>
              </li>
              <!-- End Profile Dropdown -->
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- /.navbar -->
</template>


<script>
// import axios from "axios";
export default {
  name: "IndexPage",
  created() {},
  data() {
    return {
      trial: false,
      display: false,
      verified: false,
      showModal: false,
      name: null,
      pic: null,
      medcoin: 0,
      qcm: 0,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    async logout() {
      this.$confirm("Êtes-vous sûr?").then(() => {
        try {
          this.$auth.logout({
            data: {
              refreshToken: this.$auth.strategies.local.refreshToken.get(),
            },
          });
          localStorage.removeItem("data");
          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
          localStorage.removeItem("expired");
          localStorage.removeItem("playlists");
          localStorage.removeItem("coins");
          localStorage.removeItem("loggedIn");
          window.location.href = "/login";
        } catch (e) {
          console.log(e.message);
        }
      });
    },
  },
  component: {
    // notifications,
  },
};
</script>
