<template>
  <aside class="left-sidebar with-vertical">
    <div>
      +962788398373
      <!-- ---------------------------------- -->
      <!-- Start Vertical Layout Sidebar -->
      <!-- ---------------------------------- -->
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <a href="/" class="text-nowrap logo-img">
          <img
            style="width: 4em; margin: 2em 5em 1em"
            src="/Modernize/images/allout.svg"
            class="dark-logo"
            alt="Logo-Dark"
          />
        </a>
        <a
          href="javascript:void(0)"
          class="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none"
        >
          <i class="ti ti-x"></i>
        </a>
      </div>

      <nav class="sidebar-nav scroll-sidebar" data-simplebar>
        <ul id="sidebarnav">
          <!-- ---------------------------------- -->
          <!-- Home -->
          <!-- ---------------------------------- -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Home</span>
          </li>
          <li class="sidebar-item">
            <nuxt-link to="/home" class="sidebar-link" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Home") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <nuxt-link
              to="/chatbot-requests"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">Chatbot Requests</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Bookings") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/booking/manage" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Manage") }}</span>
                </nuxt-link>
              </li>
<!--              <li class="sidebar-item">-->
<!--                <nuxt-link to="/booking/combo" class="sidebar-link">-->
<!--                  <div-->
<!--                    class="round-16 d-flex align-items-center justify-content-center"-->
<!--                  >-->
<!--                    <i class="ti ti-circle"></i>-->
<!--                  </div>-->
<!--                  <span class="hide-menu">{{ $t("Combo") }}</span>-->
<!--                </nuxt-link>-->
<!--              </li>-->
<!--              <li class="sidebar-item">-->
<!--                <nuxt-link to="/booking/refund" class="sidebar-link">-->
<!--                  <div-->
<!--                    class="round-16 d-flex align-items-center justify-content-center"-->
<!--                  >-->
<!--                    <i class="ti ti-circle"></i>-->
<!--                  </div>-->
<!--                  <span class="hide-menu">{{ $t("Refund") }}</span>-->
<!--                </nuxt-link>-->
<!--              </li>-->
            </ul>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Categories") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/categories" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Manage") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/categories/subcategory" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Subcategories") }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Services Data") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/services/interests" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Interests") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/services/amenities" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Amenities") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/services/adrenaline" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Adrenaline Meter") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/services/personal" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Personal Info") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/services/price" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Price Type") }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <!-- ---------------------------------- -->
          <!-- Dashboard -->
          <!-- ---------------------------------- -->
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Customers") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/customers/list" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("List") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/customers/reviews" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Reviews") }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Settings") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/settings/banner" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Banner") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/settings/branches" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Branches") }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="sidebar-item">
            <nuxt-link to="/vendors" class="sidebar-link" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Vendors") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <nuxt-link to="/gallery" class="sidebar-link" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Gallery") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <nuxt-link
              to="/locations"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Manage Locations") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <nuxt-link
              to="/services/list"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Manage Services") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Payments") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/payments/list" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("List") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/payments/invitations" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Invitations") }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="sidebar-item">
            <nuxt-link to="/deals" class="sidebar-link" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Deals & Offers") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <nuxt-link to="/loyalty" class="sidebar-link" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Loyalty Management") }}</span>
            </nuxt-link>
          </li>
          <!-- <li class="sidebar-item">
            <nuxt-link
              to="/discount"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Discount Management") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <nuxt-link
              to="/notifications"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Notifications") }}</span>
            </nuxt-link>
          </li> -->
          <li class="sidebar-item">
            <nuxt-link to="/coupons" class="sidebar-link" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Coupons") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Notifications") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/notifications" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Notifications List") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/notifications/topic" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Notifications Topic") }}</span>
                </nuxt-link>
              </li>
              <!-- <li class="sidebar-item">
                <nuxt-link to="/notifications/send" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Send Notifications") }}</span>
                </nuxt-link>
              </li> -->
            </ul>
          </li>
          <!-- <li class="sidebar-item">
            <nuxt-link to="/support" class="sidebar-link" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Support") }}</span>
            </nuxt-link>
          </li> -->
          <li class="sidebar-item">
            <nuxt-link
              to="/messages"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">{{ $t("Messages") }}</span>
            </nuxt-link>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span class="d-flex">
                <i class="ti ti-chart-donut-3"></i>
              </span>
              <span class="hide-menu">{{ $t("Business Setup") }}</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <nuxt-link to="/settings/company" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Company Information") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/settings/business" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{
                    $t("Business Information")
                  }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/settings/theme" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Business Theme") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/settings/language" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Manage Language") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/settings/currency" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Manage Currency") }}</span>
                </nuxt-link>
              </li>
              <li class="sidebar-item">
                <nuxt-link to="/settings/fees" class="sidebar-link">
                  <div
                    class="round-16 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-circle"></i>
                  </div>
                  <span class="hide-menu">{{ $t("Manage Fees And VAT") }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- ---------------------------------- -->
      <!-- Start Vertical Layout Sidebar -->
      <!-- ---------------------------------- -->
    </div>
  </aside>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      load: false,
      admin: false,
      user: [],
    };
  },
  mounted() {
    this.load = true;
    if (!process.client) return;
    this.user = JSON.parse(localStorage.getItem("data"));
    if (this.user) this.admin = this.user.admin ? true : false;
  },
  components: {},
};
</script>
