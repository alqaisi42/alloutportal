<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="widget-content searchable-container list">
        <div class="card card-body">
          <h3 style="margin-bottom: 25px">Add Service</h3>
          <div class="row">
            <div class="col-md-12 col-xl-12">
              <form
                class="position-relative col-12 row"
                v-on:submit.prevent="submit"
                novalidate
              >
                <label for="" class="costum_label"
                  >Upload Image for service
                  <span class="required-star">*</span></label
                >
                <SingleImageUpload
                  @upload="handleSingleImageUpload"
                  :imagePath="data.imagePath"
                  :params="'Services'"
                />

                <div class="col-12 row">
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
                          <label for="" class="costum_label"
                            >Service title <span>(EN)</span>
                            <span class="required-star">*</span></label
                          >
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
                          <label for="" class="costum_label"
                            >Description <span>(EN)</span>
                            <span class="required-star">*</span></label
                          >
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
                        <label for="" class="costum_label">
                          Service title <span>(AR)</span>
                          <span class="required-star">*</span></label
                        >
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
                        <label for="" class="costum_label">
                          Description <span>(AR)</span>
                          <span class="required-star">*</span></label
                        >

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
                    <label for="" class="costum_label">
                      Upload Gallaries
                      <span class="required-star">*</span></label
                    >
                    <MultipleImagesUpload
                      @upload="HandleGalleryUpload"
                      @remove-image="HandleRemoveImage"
                      :galleries="data.galleries"
                      :params="'Gallery'"
                    />
                  </div>

                  <div class="mb-3 form-group col-12 row">
                    <div
                      class="d-flex align-items-center"
                      style="padding-bottom: 15px"
                    >
                      <h6 class="heading-with-line">Policies</h6>
                      <div class="line"></div>
                    </div>
                    <div class="col-12">
                      <p>
                        Cancelation Policy <span class="required-star">*</span>
                      </p>
                      <SingleFileUpload
                        @upload="HandleCancelationUpload"
                        :file="data.cancelationFilePath"
                        :params="'Cancelation'"
                      />
                    </div>
                    <div class="col-12 mt-4">
                      <p>
                        Reschedule Policy <span class="required-star">*</span>
                      </p>

                      <SingleFileUpload
                        @upload="HandlePolicyUpload"
                        :file="data.rescheduleFilePathId"
                        :params="'Reschedule'"
                      />
                    </div>
                  </div>

                  <div
                    class="d-flex align-items-center"
                    style="padding-bottom: 15px"
                  >
                    <h6 class="heading-with-line">Details</h6>
                    <div class="line"></div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3 form-group col-12">
                      <label class="costum_label">
                        Category <span class="required-star">*</span>
                      </label>
                      <div class="controls">
                        <select
                          @change="getSubCategories($event)"
                          name="select"
                          id="select"
                          v-model="data.categoryId"
                          required
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option value="" class="default-selected">
                            Select the main category
                          </option>
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
                      <label class="costum_label">
                        Sub Category <span class="required-star">*</span></label
                      >
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
                      <label class="costum_label">
                        Location <span class="required-star">*</span></label
                      >
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
                      <label class="costum_label">
                        Personal information
                        <span class="required-star">*</span></label
                      >
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
                      <label class="costum_label"> Vendor Discount </label>
                      <div class="controls">
                        <input
                          v-model="data.companyFee"
                          type="number"
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
                      <label class="costum_label">
                        Pricing Type <span class="required-star">*</span></label
                      >
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
                      <label class="costum_label">
                        Interest <span class="required-star">*</span></label
                      >
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
                      <label class="costum_label">
                        Adrenaline meter
                        <span class="required-star">*</span></label
                      >
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
                      <label class="costum_label">
                        Amenities <span class="required-star">*</span></label
                      >
                      <div class="controls">
                        <select
                          @change="setAmenities($event)"
                          name="select"
                          id="select"
                          required=""
                          class="form-control"
                          aria-invalid="false"
                        >
                          <option>-- Select Amenities</option>
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
                          class="btn btn-sm col-2 p-2"
                          v-for="(item, k) in selectedAmenitites"
                          :key="'ams' + item.id"
                        >
                          <img
                            height="50"
                            width="50"
                            :src="item.imagePath"
                            :alt="item.titleEn"
                          />
                          <h6 style="width: max-content">{{ item.titleEn }}</h6>
                          <div class="deleteAmenity" @click="deleteAmenity(k)">
                            <span
                              style="
                                background: #80808057;
                                width: 20px;
                                display: block;
                                height: 20px;
                                border-radius: 50%;
                              "
                              >X</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="d-flex align-items-center"
                  style="padding-bottom: 15px"
                >
                  <h6 class="heading-with-line">Location</h6>
                  <div class="line"></div>
                </div>
                <div class="mb-3 form-group col-8">
                  <div class="controls">
                    <div id="map-wrap" style="height: 55vh">
                      <client-only>
                        <Map @address="setAddress" />
                      </client-only>
                    </div>

                    <div class="help-block"></div>
                  </div>
                </div>
                <div class="mb-3 form-group col-4">
                  <div>
                    <label class="costum_label"> Search </label>
                    <input
                      placeholder="search"
                      type="text"
                      name="text"
                      class="form-control"
                    />
                  </div>
                  <div>
                    <label class="costum_label">
                      Location manually
                      <span class="required-star">*</span></label
                    >
                    <input
                      placeholder="location"
                      type="text"
                      name="text"
                      class="form-control"
                    />
                  </div>
                  <div>
                    <label class="costum_label">
                      Notes <span class="required-star">*</span></label
                    >
                    <textarea
                      name=""
                      class="form-control"
                      id=""
                      placeholder="Type your notes.."
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <div class="mb-3 form-group col-12">
                  <div
                    class="d-flex align-items-center"
                    style="padding-bottom: 15px"
                  >
                    <h6 class="heading-with-line" style="width: 200px">
                      Service expectations
                    </h6>
                    <div class="line"></div>
                  </div>
                  <label class="costum_label">
                    What to expect <span class="required-star">*</span></label
                  >
                  <div class="controls">
                    <client-only placeholder="loading...">
                      <CKEditor v-model="data.whatToExpectId" />
                    </client-only>
                    <div class="help-block"></div>
                  </div>
                </div>

                <div
                  class="d-flex align-items-center"
                  style="padding-bottom: 15px"
                >
                  <h6 class="heading-with-line" style="width: 200px">
                    Pricing Structure
                  </h6>
                  <div class="line"></div>
                </div>
                <div class="col-12 row">
                  <div class="mb-3 form-group col-6">
                    <label class="costum_label">
                      Max Reservation Number
                      <span class="required-star">*</span></label
                    >
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
                    <label class="costum_label">
                      Vehicle Max. number per day
                      <span class="required-star">*</span>
                    </label>
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
                    <label class="costum_label">
                      Person Per Vehicle (min)
                      <span class="required-star">*</span>
                    </label>
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
                    <label class="costum_label">
                      Person Per Vehicle (max)
                      <span class="required-star">*</span>
                    </label>
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
                  <div
                    class="d-flex align-items-center"
                    style="padding-bottom: 15px"
                  >
                    <h6 class="heading-with-line" style="width: 200px">
                      Time & Pricing
                    </h6>
                    <div class="line"></div>
                  </div>
                  <div class="col-12">
                    <div class="col-12 row">
                      <!-- <div class="mb-3 form-group col-2">
                        <span @click="durationCount(true)" class="btn btn-md btn-info">Add <i
                            class="fa fa-plus"></i></span>
                      </div> -->
                    </div>
                    <div
                      class="col-12 row align-items-end"
                      v-for="(cnt, key) in data.serviceDuration"
                      :key="key + 'duration'"
                    >
                      <div class="mb-3 form-group col-5">
                        <label class="costum_label">
                          Duration (minutes)
                          <span class="required-star">*</span></label
                        >
                        <div class="controls">
                          <input
                            v-model="cnt.duration"
                            type="number"
                            name="text"
                            class="form-control"
                            placeholder="DD"
                          />
                          <div class="help-block"></div>
                        </div>
                      </div>
                      <div class="mb-3 form-group col-5">
                        <label class="costum_label">
                          Price <span class="required-star">*</span></label
                        >
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
                      <div
                        class="mb-3 form-group col-2"
                        style="display: flex; justify-content: space-around"
                      >
                        <span
                          class="trash-inc"
                          v-if="action == 'insert'"
                          @click="durationDelete(key, false)"
                          ><i class="fa fa-trash"></i
                        ></span>
                        <span
                          class="trash-inc"
                          v-else
                          @click="durationDelete(key, true, cnt.id)"
                          ><i class="fa fa-trash"></i
                        ></span>
                        <span class="plus-inc" @click="durationCount(true)"
                          ><i class="fa fa-plus"></i
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- edits from here -->
                <div
                  class="d-flex align-items-center"
                  style="padding-bottom: 15px"
                >
                  <h6 class="heading-with-line">Timing</h6>
                  <div class="line"></div>
                </div>
                <div class="mb-3 form-group col-12 row">
                  <table class="table">
                    <thead style="margin-bottom: 10px">
                      <tr>
                        <th style="width: 25%"></th>
                        <th style="width: 25%" class="costum_label">From</th>
                        <th style="width: 25%" class="costum_label">To</th>
                        <th style="width: 25%">
                          <a
                            style="
                              width: max-content;
                              padding: 2px 23px;
                              color: #5d87ff;
                            "
                            class="btn btn-md col-12"
                            @click="applyAll()"
                          >
                            <i class="fa fa-check"></i> Apply to all
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(day, k) in days"
                        :key="day + 'day'"
                        class="timing"
                      >
                        <td style="width: 20%">
                          {{ k.charAt(0).toUpperCase() + k.slice(1) }}
                        </td>
                        <td style="width: 25%">
                          <div
                            v-for="(section, index) in data.serviceTimings[k]"
                            :key="index"
                            class="addFromToSection"
                          >
                            <!-- <div class="test-div">
                              {{ String(section.startH) }}
                            </div> -->
                            <div class="timingTd">
                              <select
                                class="form-control"
                                v-model="section.startH"
                                style="width: 4em; padding: 0.4em"
                              >
                                <option
                                  :value="pad(i)"
                                  v-for="(n, i) in 24"
                                  :key="i + 'fromh'"
                                >
                                  {{ pad(i) }}
                                </option>
                              </select>
                              :
                              <select
                                class="form-control"
                                v-model="section.startM"
                                style="width: 4em; padding: 0.4em"
                              >
                                <option
                                  :value="pad(i)"
                                  v-for="(n, i) in 60"
                                  :key="i + 'fromm'"
                                >
                                  {{ pad(i) }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td style="width: 25%">
                          <div
                            v-for="(section, index) in data.serviceTimings[k]"
                            :key="index"
                            class="addFromToSection"
                          >
                            <!-- <div class="test-div">
                              {{ data.serviceTimings[k][index]["endH"] }}
                            </div> -->
                            <div class="timingTd">
                              <select
                                class="form-control"
                                v-model="data.serviceTimings[k][index]['endH']"
                                style="width: 4em; padding: 0.4em"
                              >
                                <option
                                  :value="pad(i)"
                                  v-for="(n, i) in 24"
                                  :key="i + 'toh'"
                                >
                                  {{ pad(i) }}
                                </option>
                              </select>
                              :
                              <select
                                class="form-control"
                                v-model="section.endM"
                                style="width: 4em; padding: 0.4em"
                              >
                                <option
                                  :value="pad(i)"
                                  v-for="(n, i) in 60"
                                  :key="i + 'tom'"
                                >
                                  {{ pad(i) }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td style="width: 25%">
                          <div
                            class="mb-3 gap-3 form-group col-2"
                            style="display: flex; justify-content: space-around"
                          >
                            <span
                              class="trash-inc"
                              v-if="action == 'insert'"
                              @click="removeSection(k, index)"
                              ><i class="fa fa-trash"></i
                            ></span>
                            <span
                              class="trash-inc"
                              v-else
                              @click="removeSection(k, index)"
                              ><i class="fa fa-trash"></i
                            ></span>
                            <span class="plus-inc" @click="addSection(k)"
                              ><i class="fa fa-plus"></i
                            ></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- To here  -->
                <div class="col-12 row">
                  <div class="mb-3 form-group col-3">
                    <div class="latest-bx">
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
                  </div>
                  <div class="mb-3 form-group col-3">
                    <div class="latest-bx">
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
                  </div>
                  <div class="mb-3 form-group col-3">
                    <div class="latest-bx">
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
                  </div>
                  <div class="mb-3 form-group col-3">
                    <div class="latest-bx">
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
                </div>

                <div class="col-12" style="padding-top: 40px">
                  <div class="controls" style="text-align: right">
                    <button class="btn btn-md btn-info save-btn">Save</button>
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
import SingleImageUpload from "~/components/singleImageUpload.vue";
import singleFileUpload from "~/components/singleFileUpload.vue";
import editor1 from "@/components/editor1";
import CKEditor from "~/components/CKEditor.vue";
import MultipleImagesUpload from "../../components/multipleImagesUpload.vue";
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
      // categoryId: null,  // Initialize to null or any other value that does not match the default option
      load: false,
      dataTable: null,
      link: "/base/api/services",
      action: "insert",
      id: null,
      data: {
        companyFee: null,
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
        serviceTimings: {
          saturday: [],
          sunday: [],
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
        },
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
        latitude: "31.95430000",
        longitude: "35.91050000",
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
  },
  component: {
    Map,
    FileUpload,
    SingleImageUpload,
    singleFileUpload,
    MultipleImagesUpload,
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
            console.log(response.data);
            this.data.amenitites = response.data.response;
            this.data.amenitites.forEach((item) => {
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
            const mapOfDayAndDayId = [
              { 1: "saturday" },
              { 2: "sunday" },
              { 3: "monday" },
              { 4: "tuesday" },
              { 5: "wednesday" },
              { 6: "thursday" },
              { 7: "friday" },
            ];

            response.data.response.forEach((el) => {
              let from = ["00", "00", "00"];
              let to = ["00", "00", "00"];
              if (el.timeFrom && el.timeTo) {
                from = el.timeFrom.split(":");
                to = el.timeTo.split(":");
              }

              let indexOfDay =
                mapOfDayAndDayId[el.dayId - 1][el.dayId].toString();

              if (!this.data.serviceTimings[indexOfDay]) {
                this.$set(this.data.serviceTimings, indexOfDay, []);
              }

              this.data.serviceTimings[indexOfDay].push({
                startH: from[0].toString(),
                startM: from[1].toString(),
                endH: to[0].toString(),
                endM: to[1].toString(),
              });
            });

            console.log("timing", this.data.serviceTimings);

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
            this.getDuration(this.id);
            this.getTiming(this.id);
            this.getGallery(this.id);
            this.getAmenities(this.id);
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
      console.log(this.data.subCategoryId);
      return error;
    },

    addSection(day) {
      if (!this.data.serviceTimings[day]) {
        this.$set(this.data.serviceTimings, day, []);
      }
      this.data.serviceTimings[day].push({
        startH: "00",
        startM: "00",
        endH: "00",
        endM: "00",
      });
      console.log("added data", this.data.serviceTimings);
    },
    removeSection(day, index) {
      // Check if the day exists and has at least one element
      if (
        this.data.serviceTimings[day] &&
        this.data.serviceTimings[day].length > 0
      ) {
        this.data.serviceTimings[day].splice(index, 1);
      }
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
      let serviceTimingsList = [];
      for (let day in this.data.serviceTimings) {
        this.data.serviceTimings[day].forEach((timing) => {
          serviceTimingsList.push({
            dayId: this.days[day],
            timeFrom: moment(
              timing.startH + ":" + timing.startM,
              "HH:mm:ss"
            ).format("HH:mm:ss"),
            timeTo: moment(timing.endH + ":" + timing.endM, "HH:mm:ss").format(
              "HH:mm:ss"
            ),
            isActive: 1,
            locationId: this.data.locationId,
          });
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
        serviceTimings: serviceTimingsList,
        serviceId: this.serviceId,
      };

      console.log(formData);

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
    //
    initForm() {
      this.data = {
        companyFee: null,
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
    handleSingleImageUpload(image) {
      this.data.imagePath = image;
    },
    HandleGalleryUpload(file) {
      this.data.galleries.push({
        imgName: file.imageName,
        imgPath: file.imagePath,
        isActive: 1,
        vendorId: this.data.vendorId,
      });
    },
    HandleRemoveImage(index) {
      this.data.galleries = this.data.galleries.filter(
        (item, i) => i !== index
      );
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
      let firstDayWithArray;
      let firstArrayValues;

      // Find the first day with an array in this.data.serviceTimings
      for (let k in this.days) {
        if (
          Array.isArray(this.data.serviceTimings[k]) &&
          this.data.serviceTimings[k].length > 0
        ) {
          firstDayWithArray = k;
          firstArrayValues = JSON.parse(
            JSON.stringify(this.data.serviceTimings[k])
          ); // Make a deep copy of the array values
          break;
        }
      }

      // Update all arrays in this.data.serviceTimings with a deep copy of the first array valuesss
      for (let k in this.days) {
        console.log(k);
        this.data.serviceTimings[k] = firstArrayValues
          ? JSON.parse(JSON.stringify(firstArrayValues))
          : [];
      }

      this.$forceUpdate();
      return false;
    },
    pad(n) {
      let nn = n.toString();
      return nn.length < 2 ? "0" + nn : nn;
    },
  },

  created() {
    this.categoryId = ""; // Set to empty string to select the default option
  },
};
</script>
<style>
.save-btn {
  font-weight: 700;
  font-size: 22px;
  padding: 6px 46px;
}

.latest-bx {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #80808038;
  padding: 10px;
  border-radius: 10px;
}

.form-switch .form-check-input {
  width: 3em;
}

.timing {
  /* border: 0.1px solid #5d87ff61; */
  border: 0.1px solid rgb(235 241 246);
  border-bottom: 0.1px solid rgb(235 241 246);
}

table tbody tr.timing td:first-of-type {
  width: 25%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  font-size: 24px;
  color: black;
}

.blue-day {
  width: 25%;
  background: #5d87ff;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  font-size: 24px;
  color: white;
}

.trash-inc {
  display: inline-block;
  align-content: end;
  background: #fdf2f2;
  border-radius: 8px;
  text-align: center;
  padding: 10px 13px;
  cursor: pointer;
}

.trash-inc i {
  color: #990f0f;
  font-size: 18px;
}

.plus-inc {
  display: inline-block;
  align-content: end;
  background: #5d87ff;
  border-radius: 8px;
  text-align: center;
  padding: 10px 13px;
  cursor: pointer;
}

.plus-inc i {
  color: white;
  font-size: 18px;
}

.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  border-radius: 20px;
}

.heading-with-line {
  color: #c3c3c3;
  margin-bottom: 0px;
  width: 120px;
}

.line {
  width: -webkit-fill-available;
  height: 0.1px;
  background-color: #c3c3c3;
}

.nav-link.active {
  color: #85a5ff !important;
}

.costum_label {
  font-size: 17px;
  font-weight: 700;
  color: black;
  margin-bottom: 8px;
}

.required-star {
  color: red;
}

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
  justify-content: center;
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

.addFromToSection {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.test-div {
  font-size: 100px;
}
</style>
