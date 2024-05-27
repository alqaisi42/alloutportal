<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="widget-content searchable-container list">
        <div class="card card-body">
          <h3>Add Location</h3>
          <div class="row">
            <div class="col-md-12 col-xl-12">
              <form
                class="position-relative col-12 row"
                v-on:submit.prevent="submit"
              >
                <div class="col-12">
                  <FileUpload
                    @upload="handleSingleFileUpload"
                    :key="uploadComponenet"
                    :multiple="false"
                  />
                </div>
                <div class="col-12 row">
                  <div class="mb-3 form-group col-6">
                    <label> Title (EN) </label>
                    <div class="controls">
                      <input
                        v-model="data.titleEn"
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
                  <div class="mb-3 form-group col-6">
                    <label> Title (JO) </label>
                    <div class="controls">
                      <input
                        v-model="data.titleAr"
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
                  <div class="mb-3 form-group col-6">
                    <label> Email </label>
                    <div class="controls">
                      <input
                        v-model="data.email"
                        type="email"
                        name="text"
                        class="form-control"
                        required=""
                        data-validation-required-message="This field is required"
                        aria-invalid="false"
                      />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-6">
                    <label> Phone </label>
                    <div class="controls">
                      <input
                        v-model="data.phone"
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
                  <div class="mb-3 form-group col-6">
                    <label> Address </label>
                    <div class="controls">
                      <input
                        v-model="data.address"
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
                  <!-- <div class="mb-3 form-group col-6">
                                        <label> About </label>
                                        <div class="controls">
                                            <textarea name="description" class="form-control"></textarea>
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                    <div class="mb-3 form-group col-12">
                                        <label> Amenities </label>
                                        <div class="controls">
                                            <select name="select" v-model="amenity" @change="pushAmenity($event)"
                                                id="select" required="" class="form-control" aria-invalid="false">
                                                <option value="">Main Language</option>
                                                <option :value="key" v-for="(item, key) in amenities"
                                                    :key="item.id + 'itemlist' + item.name">{{ item.name }}</option>
                                            </select>
                                            <div class="help-block"></div>
                                        </div>
                                    </div> -->
                </div>
                <!-- <div class="row col-12 amenities-list">
                                    <div class="amitity-item col-2" v-for="(item, key) in chosen"
                                        :key="item.id + 'chosen' + item.id">
                                        <img src="/Modernize/images/profile/user-1.jpg" alt="">
                                        <p>{{ item.name }}</p>
                                        <div class="delete" @click="deleteThis(key)">
                                            <i class="fa fa-trash"></i>
                                        </div>
                                    </div>
                                </div> -->
                <h3 class="my-8">Timing</h3>
                <div class="mb-3 form-group col-12 row">
                  <table class="table">
                    <thead>
                      <th style="width: 25%">Weekday</th>
                      <th style="width: 25%">From</th>
                      <th style="width: 25%">To</th>
                      <th style="width: 25%"></th>
                    </thead>
                    <tbody>
                      <tr v-for="(day, k) in days" :key="day + 'day'">
                        <td style="width: 25%">{{ k }}</td>
                        <td style="width: 25%" class="">
                          <div class="timingTd">
                            <select
                              class="form-control"
                              v-model="startH[k]"
                              style="width: 4em; padding: 0.4em"
                            >
                              <option
                                :value="i"
                                v-for="(n, i) in 23"
                                :key="i + 'fromh'"
                              >
                                {{ pad(i) }}
                              </option>
                            </select>
                            :

                            <select
                              class="form-control"
                              v-model="startM[k]"
                              style="width: 4em; padding: 0.4em"
                            >
                              <option
                                :value="i"
                                v-for="(n, i) in 59"
                                :key="i + 'fromm'"
                              >
                                {{ pad(i) }}
                              </option>
                            </select>
                          </div>
                        </td>
                        <td style="width: 25%" class="">
                          <div class="timingTd">
                            <select
                              class="form-control"
                              v-model="endH[k]"
                              style="width: 4em; padding: 0.4em"
                            >
                              <option
                                :value="i"
                                v-for="(n, i) in 23"
                                :key="i + 'toh'"
                              >
                                {{ pad(i) }}
                              </option>
                            </select>
                            :

                            <select
                              class="form-control"
                              v-model="endM[k]"
                              style="width: 4em; padding: 0.4em"
                            >
                              <option
                                :value="i"
                                v-for="(n, i) in 59"
                                :key="i + 'tom'"
                              >
                                {{ pad(i) }}
                              </option>
                            </select>
                          </div>
                        </td>
                        <td v-if="k == 'saturday'" style="width: 25%">
                          <a
                            class="btn btn-info btn-md col-12"
                            @click="applyAll()"
                            >Apply to all</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="col-12">
                  <div class="controls">
                    <button type="submit" class="btn btn-md btn-info">
                      Save
                    </button>
                    <div class="help-block"></div>
                  </div>
                </div>
              </form>
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
      title: "Reservation | Customer Wallet",
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
  name: "usertype",
  data() {
    return {
      dataTable: null,
      id: null,
      offline: null,
      amenity: null,
      chosen: [],
      startH: {},
      startM: {},
      previous: [],
      endH: {},
      endM: {},
      data: {
        titleEn: null,
        titleAr: null,
        email: null,
        phone: null,
        address: null,
        locationtTiming: [],
      },
      amenities: {
        0: {
          id: 1,
          name: "AC",
        },
        1: {
          id: 2,
          name: "Shower",
        },
        2: {
          id: 3,
          name: "Wi-Fi",
        },
        3: {
          id: 4,
          name: "Parking",
        },
      },
      days: {
        sunday: 1,
        monday: 2,
        tuesday: 3,
        wednesday: 4,
        thursday: 5,
        friday: 6,
        saturday: 7,
      },
      link: null,
      load: false,
      action: "insert",
      username: "user",
      uploadComponenet: 1,
      password: "123456",
    };
  },
  async mounted() {
    this.startH["sunday"] = 0;
    this.startM["sunday"] = 0;
    this.endH["sunday"] = 0;
    this.endM["sunday"] = 0;
    this.applyAll()
    this.id = this.$route.params.id;
    if (this.id == null) {
      this.link = "/branch/locations";
      this.action = "insert";
    } else {
      this.link = "/branch/locations/" + this.id;
      this.action = "update";
      this.get(this.id);
    }
  },
  component: { FileUpload },
  methods: {
    get(code) {
      const config = {
        auth: {
          username: this.username,
          password: this.password,
        },
      };
      axios
        .all([
          axios.get(this.link, config),
          axios.get("/base/api/locationTimings/locationId/" + code, config),
        ])
        .then(
          axios.spread((location, timing) => {
            this.data = location.data.response;
            this.timing = timing.data.response;
            this.data.locationtTiming = [];
            if (location.data.success == true) {
              setTimeout(() => {
                this.load = true;
              }, 500);
            }
            if (timing.data.success) {
              if (timing.data.response) {
                timing.data.response.forEach((el) => {
                  let from = ["0", "0", "0"];
                  let to = ["0", "0", "0"];
                  if (el.timeFrom && el.timeTo) {
                    from = el.timeFrom.split(":");
                    to = el.timeTo.split(":");
                  }
                  let current = this.getKeyByValue(this.days, el.day);
                  if (!this.previous.includes(current))
                    this.previous.push(current);
                  this.startH[current] = parseInt(from[0]).toString();
                  this.startM[current] = parseInt(from[1]).toString();
                  this.endH[current] = parseInt(to[0]).toString();
                  this.endM[current] = parseInt(to[1]).toString();
                });
                for (let k in this.days) {
                  if (!this.previous.includes(k)) {
                    this.startH[k] = "0";
                    this.startM[k] = "0";
                    this.endH[k] = "0";
                    this.endM[k] = "0";
                  }
                }
              }
            }
          })
        );
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    },
    applyAll() {
      for (let k in this.days) {
        this.startH[k] = this.startH["sunday"];
        this.startM[k] = this.startM["sunday"];
        this.endH[k] = this.endH["sunday"];
        this.endM[k] = this.endM["sunday"];
      }
      this.$forceUpdate();
      return false;
    },
    pad(n) {
      return n < 10 ? "0" + n : n;
    },
    deleteThis(key) {
      this.chosen.splice(key, 1);
    },
    hasItemWithKeyAndValue(arr, key, value) {
      return arr.some((item) => item[key] === value);
    },
    changeOffline(event) {
      this.offline = event.target.value;
    },
    pushAmenity(event) {
      if (
        !this.hasItemWithKeyAndValue(
          this.chosen,
          "id",
          this.amenities[event.target.value].id
        )
      )
        this.chosen.push(this.amenities[event.target.value]);
    },
    handleSingleFileUpload(file) {
      this.file = file;
    },
    submit() {
      const config = {
        auth: {
          username: "user",
          password: "123456",
        },
      };
      for (let k in this.days) {
        this.data.locationtTiming.push({
          day: this.days[k],
          timeFrom: (this.startH[k] + ":" + this.startM[k]).toString(),
          timeTo: (this.endH[k] + ":" + this.endM[k]).toString(),
          isActive: true,
        });
      }
      const formData = {
        ...this.data,
        branchId: 1,
        vendorId: 1,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.uploadComponenet += 1;
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      } else {
        axios
          .put(this.link, formData, config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.uploadComponenet += 1;
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      }
    },
  },
};
</script>
<style>
.timing {
  padding: 0.4em;
}

.amitity-item {
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 2em;
  height: 2em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  padding: 0;
}

.delete {
  position: absolute;
  right: -5px;
  border-radius: 1em;
  top: -5px;
  width: 1.5em;
  color: white;
  background-color: #ff001e;
  height: 1.5em;
}

.delete i {
  font-size: 10px;
  position: absolute;
  padding: 0;
  top: 6px;
  right: 6px;
}

.amitity-item p {
  line-height: 2em;
  margin: auto 0;
}

.amitity-item img {
  width: 2em;
  height: 2em;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}

.amenities-list {
  display: flex;
  gap: 2em;
  justify-content: center;
}

.timingTd {
  display: flex;
  gap: 10px;
  width: 50%;
  float: left;
}
</style>
