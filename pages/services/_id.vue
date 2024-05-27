<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="widget-content searchable-container list">
        <div class="card card-body">
          <h3>Add service</h3>
          <div class="row">
            <div class="col-md-12 col-xl-12">
              <form
                class="position-relative col-12 row"
                v-on:submit.prevent="submit"
                novalidate
              >
                <FileUpload
                  @upload="HandleFileUpload"
                  :key="uploadComponenet"
                  :upload="true"
                  :request="true"
                  :multiple="false"
                  :fileList="imagesList"
                  :params="'Services'"
                />

                <div class="col-12 row">
                  <div class="col-6">
                    <div class="mb-3 form-group col-12">
                      <label> Category </label>
                      <div class="controls">
                        <select
                          @change="getSubCategories($event)"
                          name="select"
                          id="select"
                          v-model="data.categoryId"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">Main Category</option>
                          <option
                            :value="item.id"
                            v-for="item in categories"
                            :key="item.id"
                          >
                            {{ item.nameEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                    <div class="mb-3 form-group col-12" v-if="subcategories">
                      <label> Sub Category </label>
                      <div class="controls">
                        <select
                          name="select"
                          id="select"
                          v-model="data.subCategoryId"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">Main Sub Category</option>
                          <option
                            :value="item.id"
                            v-for="item in subcategories"
                            :key="item.id"
                          >
                            {{ item.nameEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                    <div class="mb-3 form-group col-12">
                      <label> Location </label>
                      <div class="controls">
                        <select
                          v-model="data.locationId"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">Select location</option>
                          <option
                            :value="item.id"
                            v-for="item in locations"
                            :key="item.id"
                          >
                            {{ item.titleEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                    <div class="mb-3 form-group col-12">
                      <label> Personal information </label>
                      <div class="controls">
                        <select
                          v-model="data.personalInfoId"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">Select perosonal information</option>
                          <option
                            :value="item.id"
                            v-for="item in personals"
                            :key="item.id"
                          >
                            {{ item.titleEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                    <div class="mb-3 form-group col-12">
                      <label> Company fees </label>
                      <div class="controls">
                        <input
                          v-model="data.fees"
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
                  </div>
                  <div class="col-6">
                    <div class="mb-3 form-group col-12">
                      <label> Pricing </label>
                      <div class="controls">
                        <select
                          v-model="data.pricingTypeId"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">Select pricing</option>
                          <option
                            :value="item.id"
                            v-for="item in pricings"
                            :key="item.id"
                          >
                            {{ item.titleEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                    <div class="mb-3 form-group col-12">
                      <label> Interest </label>
                      <div class="controls">
                        <select
                          v-model="data.interestId"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">Select your interest</option>
                          <option
                            :value="item.id"
                            v-for="item in interests"
                            :key="item.id"
                          >
                            {{ item.nameEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                    <div class="mb-3 form-group col-12">
                      <label> Adrenaline meter </label>
                      <div class="controls">
                        <select
                          v-model="data.adrenalineId"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="">
                            Select the level of adrenaline
                          </option>
                          <option
                            :value="item.id"
                            v-for="item in adrenalines"
                            :key="item.id"
                          >
                            {{ item.titleEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                    </div>
                    <div class="mb-3 form-group col-12">
                      <label> Amenities </label>
                      <div class="controls">
                        <select
                          @change="setAmenities($event)"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option
                            :value="key"
                            v-for="(item, key) in amenitites"
                            :key="item.id + 'ame'"
                          >
                            {{ item.titleEn }}
                          </option>
                        </select>
                        <div class="help-block"></div>
                      </div>
                      <div class="col-12 row mt-4" style="gap: 10px">
                        <div
                          style="position: relative"
                          class="btn btn-sm badge-info col-2 p-2"
                          v-for="(item, k) in selectedAmenitites"
                          :key="'ams' + item.id"
                        >
                          {{ item.titleEn }}
                          <div class="deleteAmenity" @click="deleteAmenity(k)">
                            <i class="ti ti-trash"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    class="nav nav-underline ml-4"
                    id="myTab"
                    role="tablist"
                    style="margin-left: 1em"
                  >
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="active-tab"
                        data-bs-toggle="tab"
                        href="#english"
                        role="tab"
                        aria-controls="active"
                        aria-expanded="true"
                        aria-selected="true"
                      >
                        <span>English</span>
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="link1-tab"
                        data-bs-toggle="tab"
                        href="#arabic"
                        role="tab"
                        aria-controls="link1"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        <span>Arabic</span>
                      </a>
                    </li>
                  </ul>
                  <div
                    class="tab-content tabcontent-border py-3"
                    id="myTabContent"
                  >
                    <div
                      role="tabpanel"
                      class="tab-pane fade active show"
                      id="english"
                      aria-labelledby="active-tab"
                    >
                      <div class="row">
                        <div class="mb-3 form-group col-12">
                          <label> Service title (EN) </label>
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
                        <div class="mb-3 form-group col-12">
                          <label> Description (EN) </label>
                          <div class="controls">
                            <textarea
                              v-model="data.descEn"
                              name="description"
                              class="form-control"
                            ></textarea>
                            <div class="help-block"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="arabic"
                      role="tabpanel"
                      aria-labelledby="link1-tab"
                    >
                      <div class="mb-3 form-group col-12">
                        <label> Service title (JO)</label>
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
                      <div class="mb-3 form-group col-12">
                        <label> Description (JO) </label>
                        <div class="controls">
                          <textarea
                            v-model="data.descAr"
                            name="description"
                            class="form-control"
                          ></textarea>
                          <div class="help-block"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-12">
                    <label> Description </label>
                    <div class="controls">
                      <textarea
                        v-model="data.description"
                        name="description"
                        class="form-control"
                      ></textarea>
                      <div class="help-block"></div>
                    </div>
                  </div>
                </div>
                <div class="mb-3 form-group col-12">
                  <p>Gallery</p>
                  <FileUpload
                    v-if="load"
                    :key="uploadComponenet"
                    @upload="HandleGalleryUpload"
                    :upload="true"
                    :fileList="filesList"
                    :request="true"
                    :multiple="true"
                    :params="'Gallery'"
                  />
                </div>
                <div class="mb-3 form-group col-12 row">
                  <div class="col-6">
                    <p>Cancelation Policy</p>

                    <FileUpload
                      :key="uploadComponenet"
                      @upload="HandleCancelationUpload"
                      :upload="true"
                      :multiple="false"
                      :request="true"
                      :fileType="'PDF'"
                      :fileList="CancelationList"
                      :params="'Cancelation'"
                    />
                  </div>
                  <div class="col-6">
                    <p>Reschedule Policy</p>

                    <FileUpload
                      :key="uploadComponenet"
                      @upload="HandlePolicyUpload"
                      :upload="true"
                      :multiple="false"
                      :request="true"
                      :fileType="'PDF'"
                      :fileList="PolicyList"
                      :params="'Reschedule'"
                    />
                  </div>
                </div>
                <div class="mb-3 form-group col-12">
                  <div class="controls">
                    <div id="map-wrap" style="height: 75vh">
                      <client-only>
                        <Map @address="setAddress" />
                      </client-only>
                    </div>

                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-12">
                  <label> What to expect </label>
                  <div class="controls">
                    <!-- <editor1
                      @updated="setWhatToExpect"
                      :content="data.whatToExpectId"
                      :key="editorNbr"
                    /> -->
                    <client-only placeholder="loading...">
                      <!-- <CkeditorNuxt v-model="data.whatToExpectId"/> -->
                      <CKEditor v-model="data.whatToExpectId" />
                    </client-only>
                    <!-- <textarea
                      v-model="data.whatToExpectId"
                      name="expect"
                      class="form-control"
                    ></textarea> -->
                    <div class="help-block"></div>
                  </div>
                </div>

                <h4 class="my-8">Pricing Structure</h4>
                <!---
                                    Vehicule per group
                                --->
                <div class="col-12 row">
                  <div class="mb-3 form-group col-6">
                    <label> Max Reservation Number </label>
                    <div class="controls">
                      <input
                        v-model="data.maxReservations"
                        type="number"
                        name="text"
                        class="form-control"
                      />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-6">
                    <label> Vehicle Max. number per day </label>
                    <div class="controls">
                      <input
                        v-model="data.vehicleMaxNumberPerDay"
                        type="number"
                        name="text"
                        class="form-control"
                      />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-6">
                    <label> Person Per Vehicle (min) </label>
                    <div class="controls">
                      <input
                        v-model="data.personPerVehicleMin"
                        type="number"
                        name="text"
                        class="form-control"
                      />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-6">
                    <label> Person Per Vehicle (max) </label>
                    <div class="controls">
                      <input
                        v-model="data.personPerVehicleMax"
                        type="number"
                        name="text"
                        class="form-control"
                      />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="col-12 row">
                      <p class="col-2">Time & Pricing</p>
                      <div class="mb-3 form-group col-2">
                        <span
                          @click="durationCount(true)"
                          class="btn btn-md btn-info"
                          >Add <i class="fa fa-plus"></i
                        ></span>
                      </div>
                    </div>
                    <div
                      class="col-12 row"
                      v-for="(cnt, key) in data.serviceDuration"
                      :key="key + 'duration'"
                    >
                      <div class="mb-3 form-group col-4">
                        <label> Duration (minutes) </label>
                        <div class="controls">
                          <input
                            v-model="cnt.duration"
                            type="number"
                            name="text"
                            class="form-control"
                          />
                          <div class="help-block"></div>
                        </div>
                      </div>
                      <div class="mb-3 form-group col-4">
                        <label> Price </label>
                        <div class="controls">
                          <input
                            v-model="cnt.price"
                            type="number"
                            name="text"
                            class="form-control"
                          />
                          <div class="help-block"></div>
                        </div>
                      </div>
                      <div class="mb-3 form-group col-2">
                        <span
                          v-if="action == 'insert'"
                          @click="durationDelete(key, false)"
                          class="btn btn-md btn-danger"
                          ><i class="fa fa-trash"></i
                        ></span>
                        <span
                          v-else
                          @click="durationDelete(key, true, cnt.id)"
                          class="btn btn-md btn-danger"
                          ><i class="fa fa-trash"></i
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 class="my-8">Timing</h4>
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
                <div class="col-12 row">
                  <div class="mb-3 form-group col-3">
                    <label> Featured </label>
                    <div class="controls">
                      <div class="form-check form-switch">
                        <input
                          v-model="data.isFeatured"
                          value="yes"
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          checked=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label> Free cancelation </label>
                    <div class="controls">
                      <div class="form-check form-switch">
                        <input
                          v-model="data.isFreeCollection"
                          value="yes"
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          checked=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label> Pick and drop </label>
                    <div class="controls">
                      <div class="form-check form-switch">
                        <input
                          v-model="data.isPickupAndDrop"
                          value="yes"
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          checked=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label> Cash on delivery </label>
                    <div class="controls">
                      <div class="form-check form-switch">
                        <input
                          v-model="data.isCashOnDelivery"
                          value="yes"
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          checked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="controls">
                    <button class="btn btn-md btn-info">Save</button>
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
import Map from "@/components/map";
import moment from "moment";
import FileUpload from "~/components/fileUpload.vue";
import editor1 from "@/components/editor1";
import CKEditor from "~/components/CKEditor.vue";
export default {
  layout: "adminLte",
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
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
      load: false,
      dataTable: null,
      link: "/base/api/services",
      action: "insert",
      id: null,
      data: {
        fees: null,
        titleEn: null,
        titleAr: null,
        imagePath: null,
        descEn: null,
        descAr: null,
        rescheduleFilePathId: null,
        cancelationFilePath: null,
        dateAndTimeId: 1,
        vehicleMaxNumberPerDay: null,
        personPerVehicleMin: null,
        personPerVehicleMax: null,
        description: null,
        serviceTimings: [],
        amenitites: [],
        galleries: [],
        serviceDuration: [
          {
            duration: "0",
            price: 0,
          },
        ],
        isFeatured: null,
        isFreeCollection: null,
        isCashOnDelivery: null,
        isPickupAndDrop: null,
        interestId: null,
        locationId: null,
        adrenalineId: null,
        personalInfoId: null,
        categoryId: null,
        subCategoryId: null,
        whatToExpectId: "",
        vendorId: null,
        pricingTypeId: null,
        offlineCasesId: null,
        address: null,
        latitude: null,
        longitude: null,
        vendoreName: null,
        price: null,
        rate: 5,
        distance: null,
        maxReservations: null,
      },
      subcategories: null,
      categories: null,
      locations: null,
      interests: null,
      adrenalines: null,
      amenitites: null,
      selectedAmenitites: [],
      previousAmenitites: [],
      personals: null,
      pricings: null,
      startH: {},
      startM: {},
      endH: {},
      endM: {},
      duration: 1,
      uploadComponenet: 1,
      days: {
        saturday: 1,
        sunday: 2,
        monday: 3,
        tuesday: 4,
        wednesday: 5,
        thursday: 6,
        friday: 7,
      },
      imagesList: [],
      filesList: [],
      PolicyList: [],
      CancelationList: [],
      previous: [],
      editorNbr: 1,
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
      editorConfig: {
        simpleUpload: {
          uploadUrl: "path_to_image_controller",
          headers: {
            Authorization: "optional_token",
          },
        },
      },
    };
  },
  async mounted() {
    if (!process.client) return;
    this.id = this.$route.params.id;
    if (this.id) {
      await this.getAll().then((response) => {
        this.get(this.id);
      });
      this.action = "update";
    } else {
      await this.getAll();
    }
    this.startH["saturday"] = 0;
    this.startM["saturday"] = 0;
    this.endH["saturday"] = 0;
    this.endM["saturday"] = 0;
    this.applyAll();
  },
  component: {
    Map,
    FileUpload,
    editor1,
    CKEditor,
  },
  methods: {
    deleteAmenity(k) {
      let id = this.selectedAmenitites[k].id;
      let key = Object.keys(this.previousAmenitites).find(
        (key) => this.previousAmenitites[key] === id
      );
      this.selectedAmenitites.splice(k, 1);
      this.previousAmenitites.splice(key, 1);
    },
    setAmenities(e) {
      let value = e.target.value;
      if (!this.previousAmenitites.includes(this.amenitites[value].id)) {
        this.selectedAmenitites.push(this.amenitites[value]);
        this.previousAmenitites.push(this.amenitites[value].id);
      }
    },
    getDuration(id) {
      axios
        .get("/base/api/serviceDurations/ServiceId/" + id, this.config)
        .then((response) => {
          if (response.data.success) {
            this.data.serviceDuration = response.data.response;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    getGallery(id) {
      axios
        .get("/base/api/gallery/service/" + id, this.config)
        .then((response) => {
          if (response.data.success) {
            this.data.galleries = response.data.response;
            this.filesList = response.data.response;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    getAmenities(id) {
      axios
        .get("/base/amenities/service/" + id, this.config)
        .then((response) => {
          if (response.data.success) {
            this.data.amenities = response.data.response;
            this.data.amenities.forEach((item) => {
              this.selectedAmenitites.push(item);
            });
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    },
    getTiming(id) {
      axios
        .get(
          "/base/api/serviceTimings/getByServiceId?serviceId=" + id,
          this.config
        )
        .then((response) => {
          if (response.data.success) {
            this.data.serviceTimings = response.data.response;
            response.data.response.forEach((el) => {
              let from = ["00", "00", "00"];
              let to = ["00", "00", "00"];
              if (el.timeFrom && el.timeTo) {
                from = el.timeFrom.split(":");
                to = el.timeTo.split(":");
              }
              let current = this.getKeyByValue(this.days, el.dayId);
              if (!this.previous.includes(current)) this.previous.push(current);
              this.startH[current] = from[0].toString();
              this.startM[current] = from[1].toString();
              this.endH[current] = to[0].toString();
              this.endM[current] = to[1].toString();
            });
            for (let k in this.days) {
              if (!this.previous.includes(k)) {
                this.startH[k] = "00";
                this.startM[k] = "00";
                this.endH[k] = "00";
                this.endM[k] = "00";
              }
            }
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    get(code) {
      axios
        .get(this.link + "/" + code, this.config)
        .then((response) => {
          if (response.data.success) {
            this.data = response.data.response;
            if (this.data.imagePath)
              this.imagesList = [
                { imgName: "Image", imgPath: this.data.imagePath },
              ];
            if (this.data.cancelationFilePath)
              this.CancelationList = [this.data.cancelationFilePath];
            if (this.data.rescheduleFilePathId)
              this.PolicyList = [this.data.rescheduleFilePathId];
            this.getDuration(this.id);
            this.getTiming(this.id);
            this.getGallery(this.id);
            this.getAmenities(this.id);
            this.load = true;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    async getAll() {
      $(".preloader").show();
      axios
        .all([
          axios.get("/base/categories/all", this.config),
          axios.get("/base/interests/all", this.config),
          axios.get("/branch/locations", this.config),
          axios.get("/branch/adrenalineMeters", this.config),
          axios.get("/base/amenities", this.config),
          axios.get("/base/api/personalInfo", this.config),
          axios.get("/base/api/pricings", this.config),
        ])
        .then(
          axios.spread(
            (
              categories,
              interests,
              locations,
              adrenalines,
              amenitites,
              personals,
              pricings
            ) => {
              this.categories = categories.data.response;
              this.interests = interests.data.response;
              this.locations = locations.data.response;
              this.adrenalines = adrenalines.data.response;
              this.amenitites = amenitites.data.response;
              this.personals = personals.data.response;
              this.pricings = pricings.data.response;
              this.load = true;
              $(".preloader").hide();
            }
          )
        );
    },
    getSubCategories(e) {
      let value = e.target.value;
      axios
        .get("/base/api/subcategories/by-category/" + value, this.config)
        .then((response) => {
          if (response.data.success) {
            this.subcategories = response.data.response;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    validateInput() {
      var error = "";
      if (!this.data.titleEn) error += "Title (En), ";
      if (!this.data.titleAr) error += "Title (Ar), ";
      // if (!this.data.imagePath) error += "Image, ";
      if (!this.data.descEn) error += "Description (En), ";
      if (!this.data.descAr) error += "Description (Fr), ";
      if (!this.data.interestId) error += "Interest, ";
      if (!this.data.locationId) error += "Location, ";
      if (!this.data.adrenalineId) error += "Adrenaline, ";
      if (!this.data.personalInfoId) error += "Personal Info, ";
      if (!this.data.categoryId) error += "Category, ";
      if (!this.data.subCategoryId) error += "Sub Category, ";
      if (!this.data.whatToExpectId) error += "What to Expect, ";
      // if (!this.data.vendorId) error += "Vendor, ";
      if (!this.data.latitude) error += "Lat, ";
      if (!this.data.longitude) error += "Lng, ";
      return error;
    },
    submit() {
      let ame = [];
      for (const key in this.selectedAmenitites) {
        if (this.selectedAmenitites.hasOwnProperty(key)) {
          ame.push({
            amenitiesId: this.amenitites[key].id,
            isActive: true,
            createdBy: 0,
          });
        }
      }
      this.data.amenitites = ame;

      this.data.isCashOnDelivery = this.data.isCashOnDelivery ? 1 : 0;
      this.data.isFeatured = this.data.isFeatured ? 1 : 0;
      this.data.isFreeCollection = this.data.isFreeCollection ? 1 : 0;
      this.data.isPickupAndDrop = this.data.isPickupAndDrop ? 1 : 0;
      for (let k in this.days) {
        this.data.serviceTimings.push({
          dayId: this.days[k],
          timeFrom: moment(
            this.startH[k] + ":" + this.startM[k],
            "HH:mm:ss"
          ).format("HH:mm:ss"),
          timeTo: moment(this.endH[k] + ":" + this.endM[k], "HH:mm:ss").format(
            "HH:mm:ss"
          ),
          isActive: 1,
          locationId: this.data.locationId,
        });
      }
      if (this.data.serviceDuration) {
        if (!this.data.serviceDuration[0]) {
          this.$toast.error("Service Duration is empty").goAway(1500);
          return;
        }
        let min = this.data.serviceDuration[0].price;
        for (let m in this.data.serviceDuration) {
          if (this.data.serviceDuration[m] < min)
            min = this.data.serviceDuration[m];
        }
        this.data.price = min;
      } else this.data.price = null;
      var error = this.validateInput();

      if (error) {
        this.$toast.error("Fields " + error + " Are Required").goAway(2500);
        return;
      }
      const formData = {
        ...this.data,
        serviceId: this.serviceId,
      };
      if (this.action == "insert") {
        axios
          .post(this.link, formData, this.config)
          .then((response) => {
            if (response.data.success == true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.initForm();
              this.$router.push(
                this.localeLocation({
                  path: `/services/list`,
                })
              );
              // this.localeLocation({
              //   name: "services-list",
              // });
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
              this.$toast.success(response.data.messageText).goAway(1500);
              this.initForm();
              this.$router.push(
                this.localeLocation({
                  path: `/services/list`,
                })
              );
            } else this.$toast.error("Error").goAway(1500);
          })
          .catch((error) => {
            if (error.response.data.success == false) {
              this.$toast.error("Error").goAway(1500);
            }
          });
      }
    },
    initForm() {
      this.data = {
        fees: null,
        titleEn: null,
        titleAr: null,
        imagePath: null,
        descEn: null,
        descAr: null,
        rescheduleFilePathId: null,
        cancelationFilePath: null,
        dateAndTimeId: null,
        vehicleMaxNumberPerDay: null,
        personPerVehicleMin: null,
        personPerVehicleMax: null,
        description: null,
        serviceTimings: [],
        amenitites: [],
        galleries: [],
        serviceDuration: [
          {
            duration: "0",
            price: 0,
          },
        ],
        isFeatured: null,
        isFreeCollection: null,
        isCashOnDelivery: null,
        isPickupAndDrop: null,
        interestId: null,
        locationId: null,
        adrenalineId: null,
        personalInfoId: null,
        categoryId: null,
        subCategoryId: null,
        whatToExpectId: "",
        vendorId: null,
        pricingTypeId: null,
        offlineCasesId: null,
        address: null,
        latitude: null,
        longitude: null,
        vendoreName: null,
        price: null,
        rate: 5,
        distance: null,
        maxReservations: null,
      };
      for (let k in this.days) {
        this.startH[k] = "00";
        this.startM[k] = "00";
        this.endH[k] = "00";
        this.endM[k] = "00";
      }
      this.$forceUpdate();
      return false;
    },
    setAddress(address) {
      this.data.address = address.address;
      this.data.latitude = address.lat;
      this.data.longitude = address.lng;
    },
    setWhatToExpect(data) {
      this.data.whatToExpectId = data;
    },
    HandleFileUpload(file) {
      this.data.imagePath = file;
    },
    HandleGalleryUpload(file) {
      this.data.galleries.push({
        imgName: file,
        imgPath: file,
        isActive: 1,
        vendorId: this.data.vendorId,
      });
    },
    HandlePolicyUpload(file) {
      this.data.rescheduleFilePathId = file;
    },
    HandleCancelationUpload(file) {
      this.data.cancelationFilePath = file;
    },
    durationCount(how) {
      this.data.serviceDuration.push({
        duration: "0",
        price: 0,
      });
    },
    durationDelete(how, request, id = null) {
      if (request) {
        this.$confirm("Are you sure you want to perform this action?").then(
          () => {
            this.token = JSON.parse(localStorage.getItem("access_token"));
            axios
              .delete("/base/api/serviceDurations/" + id, this.config)
              .then((response) => {
                if (response.data.success) {
                  this.$toast.success(response.data.message).goAway(1500);
                  this.data.serviceDuration.splice(how, 1);
                  this.getDuration(this.id);
                } else this.$toast.error(response.data.message).goAway(1500);
              })
              .catch((error) => {
                this.$toast.error(error.response.data.messageText).goAway(1500);
              });
          }
        );
      } else this.data.serviceDuration.splice(how, 1);
    },
    applyAll() {
      for (let k in this.days) {
        this.startH[k] = this.startH["saturday"];
        this.startM[k] = this.startM["saturday"];
        this.endH[k] = this.endH["saturday"];
        this.endM[k] = this.endM["saturday"];
      }
      this.$forceUpdate();
      return false;
    },
    pad(n) {
      return n < 10 ? "0" + n : n;
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
.deleteAmenity {
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  width: 17px;
  background: white;
  height: 16px;
  padding: 1px 0;
}
</style>
