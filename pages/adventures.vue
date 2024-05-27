<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="col-md-12">
        <!-- --------------------- start Tab with Underline ---------------- -->
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <h5>Adventures</h5>
              <p class="mb-3 card-subtitle">
                Here you can manage Adventures, you may add, edit, or delete
                data related to Adventures
              </p>
            </div>
            <ul class="nav nav-underline" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" id="active-tab" data-bs-toggle="tab" href="#english" role="tab"
                  aria-controls="active" aria-expanded="true" aria-selected="true">
                  <span>English</span>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="link1-tab" data-bs-toggle="tab" href="#arabic" role="tab" aria-controls="link1"
                  aria-selected="false" tabindex="-1">
                  <span>Arabic</span>
                </a>
              </li>
            </ul>
            <div class="tab-content tabcontent-border py-3" id="myTabContent">
              <div role="tabpanel" class="tab-pane fade active show" id="english" aria-labelledby="active-tab">
                <div class="row">
                  <form class="mt-4 col-12 row" novalidate="">
                    <div class="mb-3 form-group col-12">
                      <label>
                        Product Name (EN)
                        <span class="text-danger">*</span>
                      </label>
                      <div class="controls">
                        <input type="text" name="text" class="form-control" required=""
                          data-validation-required-message="This field is required" aria-invalid="false" />
                        <div class="help-block"></div>
                      </div>
                    </div>
                  </form>
                  <div class="col-4"></div>
                </div>
              </div>
              <div class="tab-pane fade" id="arabic" role="tabpanel" aria-labelledby="link1-tab">
                <form class="mt-4 col-12 row" novalidate="">
                  <div class="mb-3 form-group col-12">
                    <label>
                      Product Name (JO)
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 form-group col-12">
                <label>
                  Description (EN)
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <!-- <client-only placeholder="Loading Text Editor..."> -->
                  <div class="quill-editor" :content="content" v-quill:myQuillEditor="editorOption"></div>
                  <!-- </client-only> -->
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-12">
                <label>
                  Details (EN)
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <editor1 />
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="col-12">
                <h5>Pricing & Others</h5>
                <div class="col-12 row">
                  <div class="mb-3 form-group col-3">
                    <label>
                      Unit Price (JOD)
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Minimum No. Of Persons
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="numeric" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Max No. Of Persons
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="numeric" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Discount type
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Flat</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Discount Amount (JOD)
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="numeric" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Tax Amount (%)
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="numeric" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Tax Calculation
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Include with product</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Price / Adult (JOD)
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="numeric" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <h5>General Setup</h5>
                <div class="col-12 row">
                  <div class="mb-3 form-group col-3">
                    <label>
                      Category
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Select category</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Sub Category
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Select sub category</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Sub Sub Category
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Select Sub Sub Category</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Product Type
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Physical</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-3">
                    <label>
                      Vendor
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Jordan Aviation</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-12">
                    <label>
                      Search Tags
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required="" placeholder="Enter Tags"
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <h5>Product Variation Setup</h5>
                <div class="col-12 row">
                  <div class="mb-3 form-group col-4">
                    <label>
                      Select Duration
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required="" placeholder="Write here"
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-8">
                    <label>
                      Durations
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-4">
                    <label>
                      Amenities
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <select name="select" id="select" required="" class="form-control" aria-invalid="false">
                        <option value="">Select Amenities</option>
                      </select>
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-8">
                    <label>
                      Chosen Amenities
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>

                  <div class="mb-3 form-group col-4">
                    <label>
                      Booking Time
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required="" placeholder="Write here"
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                  <div class="mb-3 form-group col-8">
                    <label>
                      Times
                      <span class="text-danger">*</span>
                    </label>
                    <div class="controls">
                      <input type="text" name="text" class="form-control" required=""
                        data-validation-required-message="This field is required" aria-invalid="false" />
                      <div class="help-block"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-group col-12">
                <label>
                  What to expect (EN)
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <input type="text" name="text" class="form-control" required=""
                    data-validation-required-message="This field is required" aria-invalid="false" />
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-12">
                <div class="controls">
                  <div id="map-wrap" style="height: 50vh">
                    <client-only>
                      <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
                        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                        <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
                      </l-map>
                    </client-only>
                  </div>

                  <div class="help-block"></div>
                </div>
              </div>
              <div class="mb-3 form-group col-12">
                <label>
                  What to expect (EN)
                  <span class="text-danger">*</span>
                </label>
                <div class="controls">
                  <editor2 />
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="text-xs-right">
                <button type="submit" class="btn btn-info rounded-pill px-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <table id="" class="table table-striped table-bordered" style="width: 100%">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Sub Category</th>
                  <th>Location</th>
                  <th>Product Type</th>
                  <th>Discount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
              <tfoot>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Sub Category</th>
                  <th>Location</th>
                  <th>Product Type</th>
                  <th>Discount</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import editor1 from "@/components/editor1";
import editor2 from "@/components/editor2";
import map from "@/components/map";
export default {
  layout: "adminLte",
  metaInfo() {
    return {
      script: [
        {
          src: "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",
          defer: true,
          body: true,
          callback: this.onScriptLoaded,
        },
        {
          src: "https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js",
          body: true,
          skip: !this.externalLoaded,
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    };
  },
  head: {
    title: "Adventures | management",
  },
  name: "adventures",
  data() {
    return {
      dataTable: null,
      content: "<p>I am Example</p>",
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
          ],
        },
      },
    };
  },
  async mounted() { },
  component: {
    editor1,
    editor2,
    map,
  },
  methods: {},
};
</script>
<style scoped>
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
