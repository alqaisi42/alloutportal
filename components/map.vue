<template>
  <l-map v-if="load" :zoom="13" :center="[data.lat, data.lng]">
    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
    <l-marker
      :lat-lng="[data.lat, data.lng]"
      :draggable="true"
      @dragend="onMarkerDragEnd"
    ></l-marker>
  </l-map>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      load: false,
      data: {
        lat: 25.3220616,
        lng: 55.376553,
      },
    };
  },
  mounted() {
    this.load = true;
  },
  methods: {
    onMarkerDragEnd(event) {
      const updatedLatLng = event.target.getLatLng();
      axios
        .get(
          "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
            updatedLatLng.lat +
            "&lon=" +
            updatedLatLng.lng,
          this.config
        )
        .then((response) => {
          if (response.data) {
            this.data.address = response.data.display_name;
            this.data.lat = updatedLatLng.lat;
            this.data.lng = updatedLatLng.lng;
            this.sendData(this.data);
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    sendData(data) {
      this.$emit("address", data);
    },
  },
};
</script>
