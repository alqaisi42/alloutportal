<template>
  <aside class="left-sidebar with-horizontal">
    <!-- Sidebar scroll-->
    <div>
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav scroll-sidebar container-fluid">
        <ul id="sidebarnav">
          <!-- ============================= -->
          <!-- Home -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Home</span>
          </li>
          <!-- =================== -->
          <!-- Dashboard -->
          <!-- =================== -->
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-home-2"></i>
              </span>
              <span class="hide-menu">Dashboard</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="/" class="sidebar-link">
                  <i class="ti ti-aperture"></i>
                  <span class="hide-menu">Modern</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/Index2" class="sidebar-link">
                  <i class="ti ti-shopping-cart"></i>
                  <span class="hide-menu">eCommerce</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/Index3" class="sidebar-link">
                  <i class="ti ti-currency-dollar"></i>
                  <span class="hide-menu">NFT</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/Index4" class="sidebar-link">
                  <i class="ti ti-cpu"></i>
                  <span class="hide-menu">Crypto</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/Index5" class="sidebar-link">
                  <i class="ti ti-activity-heartbeat"></i>
                  <span class="hide-menu">General</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/Index6" class="sidebar-link">
                  <i class="ti ti-playlist"></i>
                  <span class="hide-menu">Music</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- ============================= -->
          <!-- Apps -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Apps</span>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-archive"></i>
              </span>
              <span class="hide-menu">Apps</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="/Modernize/AppCalendar" class="sidebar-link">
                  <i class="ti ti-calendar"></i>
                  <span class="hide-menu">Calendar</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/AppsKanban" class="sidebar-link">
                  <i class="ti ti-layout-kanban"></i>
                  <span class="hide-menu">Kanban</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/AppChat" class="sidebar-link">
                  <i class="ti ti-message-dots"></i>
                  <span class="hide-menu">Chat</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="/Modernize/AppEmail"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-mail"></i>
                  </span>
                  <span class="hide-menu">Email</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/AppContact" class="sidebar-link">
                  <i class="ti ti-phone"></i>
                  <span class="hide-menu">Contact Table</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/AppContact2" class="sidebar-link">
                  <i class="ti ti-list-details"></i>
                  <span class="hide-menu">Contact List</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/AppNotes" class="sidebar-link">
                  <i class="ti ti-notes"></i>
                  <span class="hide-menu">Notes</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/AppInvoice" class="sidebar-link">
                  <i class="ti ti-file-text"></i>
                  <span class="hide-menu">Invoice</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/PageUserProfile" class="sidebar-link">
                  <i class="ti ti-user-circle"></i>
                  <span class="hide-menu">User Profile</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/BlogPosts" class="sidebar-link">
                  <i class="ti ti-article"></i>
                  <span class="hide-menu">Posts</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/BlogDetail" class="sidebar-link">
                  <i class="ti ti-details"></i>
                  <span class="hide-menu">Detail</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ECOShop" class="sidebar-link">
                  <i class="ti ti-shopping-cart"></i>
                  <span class="hide-menu">Shop</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ECOShopDetail" class="sidebar-link">
                  <i class="ti ti-basket"></i>
                  <span class="hide-menu">Shop Detail</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ECOProductList" class="sidebar-link">
                  <i class="ti ti-list-check"></i>
                  <span class="hide-menu">List</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ECOCheckout" class="sidebar-link">
                  <i class="ti ti-brand-shopee"></i>
                  <span class="hide-menu">Checkout</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- ============================= -->
          <!-- PAGES -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">PAGES</span>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link has-arrow"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-notebook"></i>
              </span>
              <span class="hide-menu">Pages</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="/Modernize/PageFAQ" class="sidebar-link">
                  <i class="ti ti-help"></i>
                  <span class="hide-menu">FAQ</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/PageAccountSettings" class="sidebar-link">
                  <i class="ti ti-user-circle"></i>
                  <span class="hide-menu">Account Setting</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/PagePricing" class="sidebar-link">
                  <i class="ti ti-currency-dollar"></i>
                  <span class="hide-menu">Pricing</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/WidgetsCards" class="sidebar-link">
                  <i class="ti ti-cards"></i>
                  <span class="hide-menu">Card</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/WidgetsBanners" class="sidebar-link">
                  <i class="ti ti-ad"></i>
                  <span class="hide-menu">Banner</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/WidgetsCharts" class="sidebar-link">
                  <i class="ti ti-chart-bar"></i>
                  <span class="hide-menu">Charts</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/LandingPage" class="sidebar-link">
                  <i class="ti ti-app-window"></i>
                  <span class="hide-menu">Landing Page</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- ============================= -->
          <!-- UI -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">UI</span>
          </li>
          <!-- =================== -->
          <!-- UI Elements -->
          <!-- =================== -->
          <li class="sidebar-item mega-dropdown">
            <a class="sidebar-link has-arrow" href="#" aria-expanded="false">
              <span class="rounded-3">
                <i class="ti ti-layout-grid"></i>
              </span>
              <span class="hide-menu">UI</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="/Modernize/UIAccordian" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Accordian</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIBadge" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Badge</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIButtons" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Buttons</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIDropdowns" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Dropdowns</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIModals" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Modals</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UITab" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Tab</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UITooltipPopover" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Tooltip & Popover</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UINotification" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Notification</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIProgressbar" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Progressbar</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIPagination" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Pagination</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UITypography" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Typography</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIBootstrap" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Bootstrap UI</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIBreadcrumb" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Breadcrumb</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIOffcanvas" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Offcanvas</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UILists" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Lists</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIGrid" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Grid</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UICarousel" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Carousel</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UIScrollspy" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Scrollspy</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UISpinner" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Spinner</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/UILink" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Link</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- ============================= -->
          <!-- Forms -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Forms</span>
          </li>
          <!-- =================== -->
          <!-- Forms -->
          <!-- =================== -->
          <li class="sidebar-item">
            <a
              class="sidebar-link two-column has-arrow"
              href="#"
              aria-expanded="false"
            >
              <span class="rounded-3">
                <i class="ti ti-file-text"></i>
              </span>
              <span class="hide-menu">Forms</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <!-- form elements -->
              <li class="sidebar-item">
                <a href="/Modernize/FormInputs" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Forms Input</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormInputGroups" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Input Groups</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormInputGrid" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Input Grid</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormCheckboxRadio" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Checkbox & Radios</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  href="/Modernize/FormBootstrapTouchspin"
                  class="sidebar-link"
                >
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Bootstrap Touchspin</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormBootstrapSwitch" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Bootstrap Switch</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormSelect2" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Select2</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormDualListbox" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Dual Listbox</span>
                </a>
              </li>
              <!-- form inputs -->
              <li class="sidebar-item">
                <a href="/Modernize/FormBasic" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Basic Form</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormVertical" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Form Vertical</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormHorizontal" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Form Horizontal</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormActions" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Form Actions</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormRowSeparator" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Row Separator</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormBordered" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Form Bordered</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/FormDetail" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Form Detail</span>
                </a>
              </li>
              <!-- form wizard -->
              <li class="sidebar-item">
                <a href="/Modernize/FormWizard" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Form Wizard</span>
                </a>
              </li>
              <!-- Quill Editor -->
              <li class="sidebar-item">
                <a href="/Modernize/FormEditorQuill" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Quill Editor</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- ============================= -->
          <!-- Tables -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Tables</span>
          </li>
          <!-- =================== -->
          <!-- Bootstrap Table -->
          <!-- =================== -->
          <li class="sidebar-item">
            <a class="sidebar-link has-arrow" href="#" aria-expanded="false">
              <span class="rounded-3">
                <i class="ti ti-layout-sidebar"></i>
              </span>
              <span class="hide-menu">Tables</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="/Modernize/TableBasic" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Basic Table</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/TableDarkBasic" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Dark Basic Table</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/TableSizing" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Sizing Table</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/TableLayoutColoured" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Coloured Table</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/TableDatatableBasic" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Basic Initialisation</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/TableDatatableAPI" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">API</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  href="/Modernize/TableDatatableAdvanced"
                  class="sidebar-link"
                >
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Advanced Initialisation</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- ============================= -->
          <!-- Charts -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Charts</span>
          </li>
          <!-- =================== -->
          <!-- Apex Chart -->
          <!-- =================== -->
          <li class="sidebar-item">
            <a class="sidebar-link has-arrow" href="#" aria-expanded="false">
              <span class="rounded-3">
                <i class="ti ti-chart-pie"></i>
              </span>
              <span class="hide-menu">Charts</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="/Modernize/ChartApexLine" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Line Chart</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ChartApexArea" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Area Chart</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ChartApexBar" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Bar Chart</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ChartApexPie" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Pie Chart</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ChartApexRadial" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Radial Chart</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="/Modernize/ChartApexRadar" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Radar Chart</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- ============================= -->
          <!-- Icons -->
          <!-- ============================= -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Icons</span>
          </li>
          <!-- =================== -->
          <!-- Tabler Icon -->
          <!-- =================== -->
          <li class="sidebar-item">
            <a
              class="sidebar-link sidebar-link"
              href="/Modernize/IconTabler"
              aria-expanded="false"
            >
              <span class="rounded-3">
                <i class="ti ti-archive"></i>
              </span>
              <span class="hide-menu">Icon</span>
            </a>
          </li>
          <!-- multi level -->
          <li class="sidebar-item">
            <a class="sidebar-link has-arrow" href="#" aria-expanded="false">
              <span class="rounded-3">
                <!-- <iconify-icon
                  icon="solar:airbuds-case-minimalistic-line-duotone"
                  class="ti"
                >
                </iconify-icon> -->
              </span>
              <span class="hide-menu">Multi DD</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Page 1</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="#" class="sidebar-link has-arrow">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Page 2</span>
                </a>
                <ul aria-expanded="false" class="collapse second-level">
                  <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                      <i class="ti ti-circle"></i>
                      <span class="hide-menu">Page 2.1</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                      <i class="ti ti-circle"></i>
                      <span class="hide-menu">Page 2.2</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                      <i class="ti ti-circle"></i>
                      <span class="hide-menu">Page 2.3</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                  <i class="ti ti-circle"></i>
                  <span class="hide-menu">Page 3</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>
