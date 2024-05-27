<template>
  <div class="body-wrapper">
    <div class="container-fluid" v-if="load">
      <div class="col-lg-12 align-items-stretch">
        <div class="card w-100">
          <div class="card-body">
            <div class="col-12 row">
              <div class="col-12">
                <h5 class="card-title fw-semibold">Payments Details</h5>
                <p class="card-subtitle">
                  You can follow up with payments details
                </p>
              </div>
            </div>
            <div class="col-12 row">
              <div class="col-8 row">
                <div class="col-12 row">
                  <div class="mt-9 py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-primary-subtle text-primary rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-map-pin fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Service name</h6>
                      <span class="fs-3">{{ service.titleEn }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-danger-subtle text-danger rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-user fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Customer</h6>
                      <span class="fs-3">{{ customer.name }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-danger-subtle text-danger rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-calendar fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Booking Time</h6>
                      <span class="fs-3">{{ getDate(data.bookingTime) }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-success-subtle text-success rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-microphone fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Status</h6>
                      <span
                        v-if="data.status == 1"
                        class="btn btn-sm badge-success"
                        >Active</span
                      >
                      <span v-else class="btn btn-sm badge-danger"
                        >Inactive</span
                      >
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-warning-subtle text-warning rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-building-bank fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Total Price</h6>
                      <span class="fs-3">{{ data.totalPrice }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-info-subtle text-info rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-user fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Number of Guests</h6>
                      <span class="fs-3">{{ data.numberOfGuests }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-warning-subtle text-warning rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-calendar fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">In Date</h6>
                      <span class="fs-3">{{
                        data.inDate ? getDate(data.inDate) : "Uknown"
                      }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-warning-subtle text-warning rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-calendar-time fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Week Day</h6>
                      <span class="fs-3">{{ days[data.dayId] }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-warning-subtle text-warning rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-clock-2 fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Service Timing</h6>
                      <span class="fs-3">{{ data.serviceTimingId }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-blank-subtle text-blank rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-home fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Number of Reservation</h6>
                      <span class="fs-3">{{ data.noOfReservations }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-success-subtle text-success rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-car fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Number of Cars</h6>
                      <span class="fs-3">{{ data.noOfCar }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-info-subtle text-info rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-building-bank fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Payment Status</h6>
                      <span class="fs-3">{{ data.paymentStatus }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-warning-subtle text-warning rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-clock fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Duration Service</h6>
                      <span class="fs-3" v-html="data.durationServiceId"></span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-info-subtle text-info rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-building-bank fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Price Per Type</h6>
                      <span class="fs-3">{{ data.pricePerType }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-info-subtle text-info rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-cast fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Type</h6>
                      <span class="fs-3">{{ data.type }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-danger-subtle text-danger rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-file fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Service Details</h6>
                      <span class="fs-3">{{ data.serviceDetails }}</span>
                    </div>
                  </div>
                  <div class="py-6 d-flex align-items-center col-3">
                    <div
                      class="flex-shrink-0 bg-danger-subtle text-danger rounded-circle round d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-message fs-6"></i>
                    </div>
                    <div class="ms-3">
                      <h6 class="mb-0 fw-semibold">Constraint Message</h6>
                      <span class="fs-3">{{ data.constraintMsg }}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="col-12 row">
                  <div class="col-4">
                    <img
                      class="rounded-2 img-fluid mb-9"
                      :src="service.imagePath"
                      :alt="service.titleEn"
                    />
                    <div class="col-12 row">
                      <h4>Amenities</h4>
                      <div
                        class="col-4"
                        v-for="item in amenities"
                        :key="item.id + 'ame'"
                      >
                        <img
                          class="rounded-2 img-fluid mb-9"
                          :src="item.imagePath"
                          :alt="service.titleEn"
                        />
                        <p class="fs-2 text-center">{{ item.titleEn }}</p>
                      </div>
                      <h4>Adrenaline Meter</h4>
                      <span
                        :class="{
                          'badge-success':
                            adrenaline.titleEn == 'Low Adrenaline',
                          'badge-warning':
                            adrenaline.titleEn == 'Medium Adrenaline',
                          'badge-danger':
                            adrenaline.titleEn == 'High Adrenaline',
                        }"
                        class="btn btn-sm p-2"
                        >{{ adrenaline.titleEn }}</span
                      >
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="col-12" style="position: relative">
                      <h4 style="color: rgb(42, 53, 71); font-weight: 600">
                        {{ service.titleEn }}
                      </h4>
                      <p
                        style="
                          position: absolute;
                          right: 0;
                          top: 0;
                          font-weight: 200;
                        "
                      >
                        Booking No.
                        <span style="font-weight: 500; color: rgb(42, 53, 71)"
                          >#{{ booking.id }}</span
                        >
                      </p>
                    </div>
                    <div class="col-12" style="position: relative">
                      <p style="color: rgb(42, 53, 71)">
                        {{ service.categoryId }}
                      </p>
                      <p style="position: absolute; right: 0; top: 0">
                        Payment No. #{{ data.id }}
                      </p>
                    </div>
                    <hr style="border-top: dashed 2px" />
                    <div class="col-12" style="position: relative">
                      <p class="fs-2">
                        <b style="color: rgb(42, 53, 71)">Created On:</b>
                        {{ getDate(data.paymentDate) }}
                      </p>
                      <p class="fs-2">
                        <b style="color: rgb(42, 53, 71)">Booking Date:</b>
                        {{ getDate(booking.bookingTime) }}
                      </p>
                      <p class="fs-3">
                        <i class="ti ti-user fs-4"></i>
                        {{ data.numberOfGuests }} persons
                      </p>
                      <p
                        :class="{
                          'badge-success': booking.paymentStatus == 'PAID',
                          'badge-warning': booking.paymentStatus == 'PENDING',
                          'badge-info': booking.paymentStatus == 'REFUNDED',
                          'badge-danger':
                            booking.paymentStatus == 'UNPAID' ||
                            booking.paymentStatus == 'CANCELED',
                        }"
                        class="btn btn-sm"
                        style="position: absolute; right: 0; top: 0"
                      >
                        {{ booking.paymentStatus }}
                      </p>
                    </div>
                    <hr style="border-top: dashed 2px" />
                    <div class="col-12" style="position: relative">
                      <p>
                        <span class="fs-3"
                          ><b style="color: rgb(42, 53, 71)">Summarys</b></span
                        ><span style="float: right; color: rgb(93, 135, 255)"
                          ><i class="ti ti-cash fs-7"></i>
                          {{ invoice.paymentMethod }}</span
                        >
                      </p>
                      <p class="mb-1">
                        <span style="color: rgb(42, 53, 71)" class="fs-3"
                          >Activity Fees</span
                        ><span
                          style="
                            float: right;
                            color: rgb(42, 53, 71);
                            font-weight: 450;
                          "
                        >
                          {{ money(invoice.serviceFee) }}</span
                        >
                      </p>
                      <p class="mb-1">
                        <span style="color: rgb(42, 53, 71)" class="fs-3"
                          >Subtotal</span
                        ><span
                          style="
                            float: right;
                            color: rgb(42, 53, 71);
                            font-weight: 450;
                          "
                        >
                          {{ money(invoice.subTotal) }}</span
                        >
                      </p>
                      <p class="mb-1">
                        <span style="color: rgb(42, 53, 71)" class="fs-3"
                          >Price After Discount</span
                        ><span
                          style="
                            float: right;
                            color: rgb(42, 53, 71);
                            font-weight: 450;
                          "
                        >
                          {{ money(invoice.priceAfterDiscount) }}</span
                        >
                      </p>
                      <p class="mb-1">
                        <span style="color: rgb(42, 53, 71)" class="fs-3"
                          >VAT 5%</span
                        ><span
                          style="
                            float: right;
                            color: rgb(42, 53, 71);
                            font-weight: 450;
                          "
                        >
                          {{ money(invoice.vat) }}</span
                        >
                      </p>
                      <p class="mt-4">
                        <span
                          ><b style="color: rgb(42, 53, 71)"
                            >Total Amount</b
                          ></span
                        ><span style="float: right; color: rgb(93, 135, 255)">
                          {{ money(invoice.totalAmount) }}</span
                        >
                      </p>
                    </div>
                    <hr style="border-top: dashed 2px" />
                    <p class="mt-4">
                      <span
                        ><b style="color: rgb(42, 53, 71)"
                          >Amount after split invoice</b
                        ></span
                      ><span style="float: right; color: rgb(93, 135, 255)">
                        {{ money(invoice.totalAmount) }}</span
                      >
                    </p>
                    <hr style="border-top: dashed 2px" />
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="col-12">
                  <div class="col-12" style="margin-bottom:1em;">
                    <b>Customer Information</b>
                  </div>
                  <div
                    class="d-flex align-items-center gap-4 mb-4 position-relative"
                  >
                    <div class="sendMessage" style="right: 0">
                      <i class="ti ti-eye"></i>
                    </div>
                    <div class="">
                      <div
                        class="border border-2 border-primary rounded-circle"
                      >
                        <img
                          :src="customer.imgPath"
                          class="rounded-circle m-1"
                          style="height: 4.3em"
                          :alt="customer.name"
                          width="60"
                        />
                      </div>
                    </div>
                    <div class="">
                      <h5 class="fw-semibold">
                        <span class="text-dark">{{ customer.name }}</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div>
                  <p>{{ customer.email + " | " + customer.phone }}</p>
                  <p><i class="ti ti-map-pin"></i>{{ customer.address }}</p>
                </div>
                <hr />
                <div class="row mb-4 col-12" style="margin: 0 3px; gap: 0px">
                  <a
                    class="btn btn-sm btn-block badge-info fs-3"
                    style="color: white; width: 48%"
                    :href="
                      'https://www.google.com/maps/@' +
                      service.latitude +
                      ',' +
                      service.longitude +
                      ',15z'
                    "
                    target="_blank"
                  >
                    <i class="ti ti-map"></i> Show on map
                  </a>
                  <button
                    class="btn btn-sm btn-block badge-info fs-3"
                    style="color: white; width: 48%; margin-left: 4%"
                  >
                    <i class="ti ti-printer"></i> Print Invoice
                  </button>
                </div>
                <div
                  class="col-12 position-relative"
                  style="
                    padding: 0.5em;
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
                      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                  "
                >
                  <div class="sendMessage" style="right: 3px; top: 3px">
                    <i class="ti ti-eye"></i>
                  </div>
                  <div class="">
                    <p class="fw-semibold text-black">Booking Logs</p>
                  </div>
                  <table class="table-responsive">
                    <tbody class="fs-3">
                      <tr>
                        <td class="w-60">
                          The customer change time and date after one hour
                        </td>
                        <td style="text-align: right; vertical-align: top">
                          23-02-2024 10:30
                        </td>
                      </tr>
                      <tr>
                        <td class="w-60">
                          The customer change time and date after one hour
                        </td>
                        <td style="text-align: right; vertical-align: top">
                          23-02-2024 10:30
                        </td>
                      </tr>
                      <tr>
                        <td class="w-60">
                          The customer change time and date after one hour
                        </td>
                        <td style="text-align: right; vertical-align: top">
                          23-02-2024 10:30
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-100">
          <div class="card-body">
            <div class="col-12 row">
              <div class="col-12">
                <h5 class="card-title fw-semibold">
                  Reviews ({{ reviews.totalElements }})
                </h5>
                <p class="card-subtitle">
                  You can follow up with booking's reviews
                </p>
              </div>
            </div>
            <div class="col-12 row">
              <div class="table-responsive">
                <table
                  id=""
                  class="table search-table align-middle text-nowrap"
                >
                  <thead class="header-item">
                    <th>ID</th>
                    <th>Image</th>
                    <th>Banner Type</th>
                    <th>Published</th>
                    <th>URL</th>
                    <th>Title</th>
                    <th>Branch</th>
                    <th>Service</th>
                    <th>Booking</th>
                    <th>Rate</th>
                    <th class="text-end">Action</th>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in reviews.content"
                      :key="'reviews-' + item.id"
                    >
                      <td>{{ item.id }}</td>
                      <td>
                        <img
                          height="50"
                          width="50"
                          :src="item.imagePath"
                          :alt="item.title"
                        />
                      </td>
                      <td>
                        {{ item.bannerType }}
                      </td>
                      <td>
                        <span
                          v-if="item.published == 'Yes'"
                          class="btn btn-sm badge-success"
                          >Yes</span
                        >
                        <span v-else class="btn btn-sm badge-danger">No</span>
                      </td>
                      <td>{{ item.url }}</td>
                      <td>{{ item.title }}</td>
                      <td>{{ item.branchId }}</td>
                      <td>{{ item.serviceId }}</td>
                      <td>{{ item.bookingId }}</td>
                      <td>{{ item.rate }}</td>
                      <td>
                        <div class="action-btn">
                          <a
                            @click="
                              performAction(
                                item.id,
                                '/branch/api/reviews/' + item.id
                              )
                            "
                            href="javascript:void(0)"
                            class="text-dark ms-2"
                          >
                            <i class="ti ti-trash fs-5"></i>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Booking | Detail",
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
  name: "profile",
  data() {
    return {
      dataTable: null,
      link: "/base/api/payments",
      load: false,
      action: "insert",
      username: "user",
      data: {
        id: null,
        bookingId: null,
        customerId: null,
        splitPaymentId: null,
        invitationId: null,
        amount: null,
        status: null,
        paymentDate: null,
        type: null,
        paymentMethod: null,
      },
      amenities: [],
      service: {
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
        whatToExpectId: null,
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
      booking: {
        id: null,
        customerId: null,
        serviceId: null,
        bookingTime: null,
        status: null,
        totalPrice: null,
        numberOfGuests: null,
        inDate: null,
        dayId: null,
        serviceTimingId: null,
        noOfReservations: null,
        noOfCar: null,
        paymentStatus: null,
        durationServiceId: null,
        pricePerType: null,
        type: null,
        serviceDetails: null,
        constraintMsg: null,
      },
      customer: {
        id: null,
        imgPath: null,
        name: null,
        phone: null,
        email: null,
        date: null,
        isActive: null,
        lastLogin: null,
        isPhoneVerified: null,
        walletBalance: null,
        loyalityPoint: null,
        refferedCode: null,
        refferedBy: null,
        branchId: null,
        isGlobal: null,
      },
      adrenaline: {
        titleAr: null,
        titleEn: null,
        priority: null,
        branchId: null,
        isActive: null,
      },
      reviews: [],
      days: {
        1: "sunday",
        2: "monday",
        3: "tuesday",
        4: "wednesday",
        5: "thursday",
        6: "friday",
        7: "saturday",
      },
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
      invoice: {
        totalAmount: 0,
        discountPercentage: 0,
        pricingTypeId: 0,
        bookingId: 0,
        pricePerPerson: 0,
        pricePerReservation: 0,
        subTotal: 0,
        serviceFee: 0,
        vat: 0,
        splittingAmount: 0,
        noOfReservation: 0,
        noOfPersons: 0,
        priceAfterDiscount: 0,
      },
    };
  },
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  async mounted() {
    if (!process.client) return;
    if (!this.id) {
      this.localeLocation({
        path: "booking-manage",
      });
      return;
    }
    this.get();
  },
  component: {},
  methods: {
    money(amount) {
      const formatter = new Intl.NumberFormat("ae-AE", {
        style: "currency",
        currency: "AED",
      });

      return formatter.format(amount);
    },
    performAction(id = null, link = null) {
      this.$confirm("Are you sure you want to perform this action?").then(
        () => {
          if (!link) link = this.link;
          this.token = JSON.parse(localStorage.getItem("access_token"));
          axios
            .delete(this.link + "/" + id, this.config)
            .then((response) => {
              if (response.data.success) {
                this.$toast.success(response.data.response.msg).goAway(1500);
                this.getAll();
              } else this.$toast.error(response.data.response.msg).goAway(1500);
            })
            .catch((error) => {
              this.$toast.error(error.response.data.messageText).goAway(1500);
            });
        }
      );
    },
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    getService(id) {
      axios.all([axios.get("/base/api/services/" + id, this.config)]).then(
        axios.spread((service) => {
          this.service = service.data.response;
          this.getAmenities(this.service.id);
          this.getAdrenaline(this.service.adrenalineId);
        })
      );
    },
    getReviews(id) {
      axios
        .all([axios.get("/branch/api/reviews/booking/" + id, this.config)])
        .then(
          axios.spread((reviews) => {
            this.reviews = reviews.data.response;
          })
        );
    },
    getAdrenaline(id) {
      axios
        .all([axios.get("/branch/adrenalineMeters/" + id, this.config)])
        .then(
          axios.spread((adrenaline) => {
            this.adrenaline = adrenaline.data.response;
          })
        );
    },
    getAmenities(id) {
      axios.all([axios.get("/base/amenities/service/" + id, this.config)]).then(
        axios.spread((amenities) => {
          this.amenities = amenities.data.response;
        })
      );
    },
    getBooking(id) {
      axios.all([axios.get("/base/api/bookings/" + id, this.config)]).then(
        axios.spread((booking) => {
          this.booking = booking.data.response;
          this.getService(this.booking.serviceId);
          this.getInvoice(this.booking.id);
        })
      );
    },
    getCustomer(id) {
      axios
        .get("/branch/api/customers/" + id, this.config)
        .then((response) => {
          if (response.data.success) {
            this.customer = response.data.response;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    getServiceTiming(id) {
      axios
        .get("/branch/api/customers/" + id, this.config)
        .then((response) => {
          if (response.data.success) {
            this.data.customerId = response.data.response.name;
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    getServiceDuration(id) {
      if (id) {
        axios
          .get("/base/api/serviceDurations/" + id, this.config)
          .then((response) => {
            if (response.data.success) {
              this.data.durationServiceId =
                "<p><span>Duration: " +
                response.data.response.duration +
                "</span>  -  <span>Price: " +
                response.data.response.price +
                "</span></p>";
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      } else {
        this.data.durationServiceId = "Unknown";
      }
    },
    getInvoice(id) {
      if (id) {
        axios
          .get("/base/api/payments/bookingReview/" + id, this.config)
          .then((response) => {
            if (response.data.success) {
              this.invoice = response.data.response;
            } else this.$toast.error(response.data.message).goAway(1500);
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
      } else {
        this.data.durationServiceId = "Unknown";
      }
    },
    get() {
      $(".preloader").show();
      axios.all([axios.get(this.link + "/" + this.id, this.config)]).then(
        axios.spread((customer) => {
          this.data = customer.data.response;
          this.getBooking(this.data.bookingId);
          this.getReviews(this.data.bookingId);
          this.getCustomer(this.data.customerId);
          this.getServiceDuration(this.data.durationServiceId);
          if (!this.data.imgPath)
            this.data.imgPath = "/assets/Modernize/images/profile/user-1.jpg";
          if (customer.data.success == true) {
            setTimeout(() => {
              this.load = true;
              $(".preloader").hide();
            }, 500);
          }
        })
      );
    },
    goto(code) {
      this.$router.push(
        this.localeLocation({
          name: "customers-detail",
          params: { id: code },
        })
      );
    },
  },
};
</script>
<style scoped>
.sendMessage {
  position: absolute;
  right: 0;
  top: 0;
  color: rgb(55, 136, 216);
  border: 2px solid rgb(55, 136, 216);
  padding: 3px;
  border-radius: 8px;
  width: 2em;
  height: 2em;
  cursor: pointer;
}
.sendMessage i {
  margin: 5px 1px;
  font-size: 17px;
}
</style>
