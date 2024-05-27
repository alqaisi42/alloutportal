<template>
  <div>
    <div class="row">
      <div class="mb-3 form-group col-12">
        <label>{{ title }} <span class="text-danger">*</span></label>
        <div
          class="uploadingzone bg-gray-100 h-36"
          ref="fileform"
          v-on:click="$refs.file.click()"
          @dragenter.prevent="ondragenter"
          @dragover.prevent="ondragenter"
          @dragleave.prevent="ondragleave"
          @drop.prevent="ondragleave"
          :class="{ 'border-blue': isDrag, 'border-gray': !isDrag }"
        >
          <div class="uploaddetails m-auto">
            <div class="flex text-center my-auto">
              <p
                class="font-pop font-medium text-gray-500"
                :style="`font-size: ${{ fs }}em`"
              >
                {{ this.text }}
              </p>
            </div>

            <input
              type="file"
              ref="file"
              :multiple="multiple"
              v-on:change="handleFileUpload()"
              id="triggered-file"
              style="display: none"
            />
          </div>
        </div>
      </div>
      <!-- <div class="file-listing-container h-24 flex gap-4"> -->
      <!-- <div v-for="(file, key) in files" class="file-listing h-24" :key="key">
          <img class="preview h-24" v-bind:ref="'preview' + parseInt(key)" />
          {{ file.name }}
          <div class="remove-container">
            <i
              class="ti ti-trash fs-3 delete"
              v-on:click="removeFile(key, true)"
            ></i>
          </div>
        </div> -->
      <div
        class="col-12 file-listing-container h-24 flex gap-4"
        v-if="fileType != 'img' && images != null"
      >
        <div
          v-for="(file, key) in images"
          class="file-listing-file h-24"
          :key="key + 'preview'"
        >
          <a class="previewFile h-24" target="_blank" :href="file"
            v-bind:ref="'preview' + parseInt(key)"
            ><div class="viewIconDiv">
              <i class="ti ti-eye fs-3 viewIcon"></i>
            </div>
            <p style="margin: 5px">Preview</p>
          </a>

          <div class="remove-container-file">
            <i
              class="ti ti-trash fs-6 delete"
              v-on:click="removeFile(key, true)"
            ></i>
          </div>
        </div>
      </div>
      <div
        class="col-12 file-listing-container h-24 flex gap-4"
        v-if="fileType == 'img' && images != null"
      >
        <div
          v-for="(file, key) in images"
          class="file-listing h-24"
          :key="'preview' + key"
        >
          <img
            class="preview h-24"
            :src="file.imgPath"
            v-bind:ref="'preview' + parseInt(key)"
          />
          {{ file.name.slice(0,50) }}
          <div class="remove-container">
            <i
              class="ti ti-trash fs-3 delete"
              v-on:click="removeFile(key, true)"
            ></i>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <div class="flex relative mt-2" v-if="uploadPercentage > 0">
        <div class="flex gap-5 mt-2">
          <progress
            max="100"
            class="rounded-full bg-gray-200 h-2 mt-2"
            :value.prop="uploadPercentage"
          ></progress>
          <p class="percentageindicator font-pop font-medium text-sm">
            {{ uploadPercentage }} %
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    fs: {
      type: Number,
      default: 1.5,
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
    request: false,
    fileList: null,
    upload: null,
    fileType: {
      type: String,
      default: "img",
    },
    params: null,
    multiple: false,
  },
  data() {
    return {
      uploadPercentage: 0,
      file: null,
      isDrag: false,
      title: "Image",
      text: "Drop your file here Or Browse",
      files: [],
      images: [],
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  mounted() {
    if (!process.client) return;
    this.dragAndDropCapable = this.determineDragAndDropCapable();
    if (this.dragAndDropCapable) {
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop",
      ].forEach(
        function (evt) {
          this.$refs.fileform.addEventListener(
            evt,
            function (e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this),
            false
          );
        }.bind(this)
      );

      this.$refs.fileform.addEventListener(
        "drop",
        function (e) {
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            this.images.push(e.dataTransfer.files[i]);
            this.getImagePreviews();
          }
        }.bind(this)
      );
    }
    if (!Array.isArray(this.fileList)) this.images = [this.fileList];
    if (this.params == "Cancelation" || this.params == "Reschedule")
      this.title = "File";
    else this.title = "Image";
  },
  component: {},
  methods: {
    ondragenter() {
      this.text = "You may drop to upload";
      this.isDrag = true;
    },
    ondragleave() {
      this.text = "Drop your file here Or Browse";
      this.isDrag = false;
    },
    determineDragAndDropCapable() {
      /*
                Create a test element to see if certain events
                are present that let us do drag and drop.
              */
      var div = document.createElement("div");

      /*
                Check to see if the `draggable` event is in the element
                or the `ondragstart` and `ondrop` events are in the element. If
                they are, then we have what we need for dragging and dropping files.

                We also check to see if the window has `FormData` and `FileReader` objects
                present so we can do our AJAX uploading
              */
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },
    handleFileUpload() {
      const fileInputRef = this.isMultiple
        ? "fileInputMultiple"
        : "fileInputSingle";
      const fileInput = this.$refs[fileInputRef];
      this.images = this.$refs.file.files;
      const uploadFile = (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("type", this.params);

        return axios.post("/base/files/upload", formData, {
          ...this.config,
          onUploadProgress: (progressEvent) => {
            this.uploadPercentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          },
        });
      };
      const uploadSequentially = async () => {
        for (let i = 0; i < this.images.length; i++) {
          try {
            const response = await uploadFile(this.images[i]);
            if (response.data.success === true) {
              this.$toast.success(response.data.messageText).goAway(1500);
              this.images.push({
                imgPath: response.data.response.msg,
                imgName: "Image ",
              });

              this.$emit("upload", this.file);
            } else {
              this.$toast.error("Error").goAway(1500);
            }
          } catch (error) {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          }
        }
      };
      if (this.upload) {
        uploadSequentially();
      } else {
        this.$emit("upload", this.images);
      }
      this.getImagePreviews();
    },
    removeFile(key, isRequest = false) {
      if (this.request) {
        if (this.images) this.images.splice(key, 1);
      } else {
        if (this.images.length > 1) this.images.splice(key, 1);
        else {
          this.file = null;
          this.images = [];
        }
      }
    },
    getImagePreviews() {
      for (let i = 0; i < this.images.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.images[i].name)) {
          let reader = new FileReader();
          reader.addEventListener(
            "load",
            function () {
              this.$refs["preview" + parseInt(i)][0].src = reader.result;
            }.bind(this),
            false
          );
          reader.readAsDataURL(this.images[i]);
        } else {
          this.$nextTick(function () {
            this.$refs["preview" + parseInt(i)][0].src = "/images/file.png";
          });
        }
      }
    },
    triggerFile(id) {
      $(id).click();
    },
  },
};
</script>
<style>
.border-gray {
  border: 2px dashed rgba(41, 45, 50, 35%);
}

.border-blue {
  border: 2px dashed #4784d9;
}

.upload-prescription {
  display: flex;
  position: relative;
}

.upload-prescription > p {
  font-size: 27px;
  font-family: Poppins-Medium;
  color: #171717;
  position: absolute;
  left: 4%;
  top: 50px;
}

.uploadingzone {
  border-radius: 13px;
  padding: 8px;
  display: flex;
  cursor: pointer;
}

.uploaddetails {
  position: relative;
  padding-left: 3%;
}

.icon svg {
  margin: 22px;
}

.uploaddetails progress {
  width: 80px;
  position: absolute;
  bottom: 9px;
  height: 7px;
  margin-left: 25%;
}

.uploaddetails .percentageindicator {
  margin: 0;
  position: absolute;
  bottom: 4px;
  font-size: 9px;
  font-family: Poppins-Medium;
  color: #1c1c1c;
  opacity: 100%;
  left: 13%;
}

.preview {
  width: 6em;
  height: 6em;
}

.file-listing-container {
  display: flex;
  gap: 1em;
  height: 9em;
}
.file-listing {
  position: relative;
  width: 6em;
  height: 1.5em;
}
.file-listing img {
  border-radius: 1em;
}
.remove-container {
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: #ff001e;
  width: 1.4em;
  height: 1.4em;
  color: white;
  position: absolute;
  border-radius: 1em;
}
.delete {
  padding: 3px;
}

.file-listing-file {
  position: relative;
  width: 10em;
  height: 1.5em;
}
.previewFile {
  background-color: rgb(71, 132, 217);
  padding: 2px 12px;
  color: white;
  display: block;
  width: 100%;
  height: 2.5em;
  border-radius: 7px;
}
.remove-container-file {
  position: absolute;
  right: -28px;
  top: 6px;
  height: 25px;
  padding: 0 4px;
}
.viewIconDiv {
  border: 1px solid white;
  padding: 0px 4px;
  width: 1.7em;
  border-radius: 5px;
  height: 1.7em;
  float: left;
  margin: 4px 10px 0 0;
}
</style>
