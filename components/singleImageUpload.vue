<template>
  <div>
    <div class="row">
      <div class="mb-3 form-group col-12" >
        <div class="uploadingzone bg-gray-100 h-36" ref="fileform" @click="triggerFileInput"  
        @dragenter.prevent="ondragenter" @dragover.prevent="ondragenter" @dragleave.prevent="ondragleave"
        @drop.prevent="ondragleave" :class="{ 'border-blue': isDrag, 'border-gray': !isDrag }">
          <div class="uploaddetails">
            <div class="flex text-center my-auto" style="display: flex; align-items: center;" >
              <p class="font-pop font-medium text-gray-500" >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 70px;">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path opacity="0.5"
                      d="M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z"
                      fill="#396ce8"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM19.5303 5.46967L18.0303 3.96967C17.7374 3.67678 17.2626 3.67678 16.9697 3.96967L15.4697 5.46967C15.1768 5.76256 15.1768 6.23744 15.4697 6.53033C15.7626 6.82322 16.2374 6.82322 16.5303 6.53033L16.75 6.31066V8.5C16.75 8.91421 17.0858 9.25 17.5 9.25C17.9142 9.25 18.25 8.91421 18.25 8.5V6.31066L18.4697 6.53033C18.7626 6.82322 19.2374 6.82322 19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967Z"
                      fill="#396ce8"></path>
                  </g>
                </svg>
              <div style="text-align: left;">
                {{ this.text }}
                <span style="display: block;" >Or click to select manually</span>
              </div>
              </p>
            </div>         
              <input type="file" ref="fileInputSingle" @change="handleFileSelect" style="display: none"/>
          </div>
        </div>
      </div>
    
      <div class="col-12 file-listing-container h-24 flex gap-4" v-if="imagePreview">
        <div class="file-listing h-24">
          <img class="preview h-24" :src="imagePreview" />
          <div class="remove-container">
            <i class="ti ti-trash fs-3 delete" @click="removeImage"></i>
          </div>
          <div v-if="isUploading" class="loading-spinner">
             <div class="spinner"></div>
          </div>
      
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    imagePath: String,
    params: String,
  },
  data() {
    return {
      imagePreview: this.imagePath || null,
      isDrag: false,
      isUploading: false,
      text: "Drag your image here",
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  watch: {
    imagePath(newVal) {
      this.imagePreview = newVal;
    },
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
            this.imagePreview = URL.createObjectURL(e.dataTransfer.files[0]);
            this.uploadFile(e.dataTransfer.files[0]);
        }.bind(this)
      );
    }
  },
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
      var div = document.createElement("div");
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },
    triggerFileInput() {
      this.$refs.fileInputSingle.click();
    },
    handleFileSelect(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
        this.uploadFile(file);
      }
    },
    uploadFile(file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", this.params);

      this.isUploading = true;

      axios
        .post("/base/files/upload", formData, {
          ...this.config,
        })
        .then((response) => {
          this.isUploading = false;
          this.$emit("upload", response.data.response.msg);
        })
        .catch((error) => {
          this.isUploading = false;
          console.error("Upload failed:", error);
        });
    },
    removeImage() {
      this.imagePreview = null;
      this.$emit("upload", null);
    },
  },
};
</script>
<style>
.border-gray {
  border: 1px solid rgb(41 45 50 / 9%);
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
  cursor: pointer;
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

.loading-spinner {
  position: absolute;
  top: 100%;
  display: flex;
  margin-left: 25%;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
