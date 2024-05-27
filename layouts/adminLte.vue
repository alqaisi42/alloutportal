<template>
  <div v-if="load == true">
    <div class="preloader">
      <img
        src="/Modernize/images/allout.svg"
        alt="loader"
        class="lds-ripple img-fluid"
      />
      <div class="loader"></div>
    </div>
    <div id="main-wrapper">
      <SideBar />
      <div class="page-wrapper">
        <NavBar />
        <Aside />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
// import Loading from "~/components/Loading.vue";
import NavBar from "../components/pages/NavBar";
import SideBar from "../components/pages/SideBar";
import Footer from "../components/pages/Footer";
import Aside from "../components/pages/Aside";
export default {
  data() {
    return {
      name: null,
      load: true,
      token: null,
    };
  },
  // created() {
  //   this.$watch(this.getAuthState, this.handleAuthStateChange)
  // },
  mounted() {
    this.$watch(this.getAuthState, this.handleAuthStateChange);
    if (!process.client) return;
    this.token = localStorage.getItem("loggedIn");
    console.log(this.token);
    if (this.token != null) this.load = true;
    else this.load = null;
    this.load = true;
  },
  methods: {
    getAuthState() {
      if (process.client) {
        let isLoggedIn = localStorage.getItem("loggedIn");
        if (isLoggedIn != null) this.load = true;
        else {
          this.$router.push(this.localeLocation({ name: "login" }));
          this.load = null;
        }
        return this.load;
      } else {
        this.load = null;
      }
    },
    handleAuthStateChange(newAuth, oldAuth) {
      if (newAuth) {
        this.load = true;
      } else {
        this.load = null;
      }
    },
  },
  components: {
    NavBar,
    SideBar,
    Footer,
    Aside,
    // Loading
  },
};
</script>
<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 120px;
  height: 20px;
  background: linear-gradient(#5d87ff 0 0) 0/0% no-repeat #ddd;
  animation: l1 1.5s infinite linear;
  position: absolute;
  top: calc(50% - -46.5px);
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 14px;
  height: 7px;
}
@keyframes l1 {
  100% {
    background-size: 100%;
  }
}
</style>
