<!-- components/HorizontalCalendar.vue -->
<template>
  <div class="col-12">
    <h4>Choose Date</h4>
    <div class="col-12 dating row">
      <div class="mb-4 col-6">
        <label for="datefrom" class="form-label fw-semibold">Date From</label>
        <input
          @change="updateDates()"
          v-model="from"
          type="date"
          class="form-control"
          id="datefrom"
        />
      </div>
      <div class="mb-4 col-6">
        <label for="dateto" class="form-label fw-semibold">Date To</label>
        <input
          @change="updateDates()"
          v-model="to"
          type="date"
          class="form-control"
          id="dateto"
        />
      </div>
    </div>
    <div class="horizontal-calendar">
      <div class="scroll-container" ref="scrollContainer">
        <div
          class="calendar-items"
          :style="{ transform: `translateX(${scrollPosition}px)` }"
        >
          <div
            v-for="n in days"
            :key="n.getMonth() + '-' + makeid()"
            class="calendar-item"
            :class="{ activeDay: isCurrentDay(n) }"
            @click="generateTiming(n, n.getDay)"
          >
            <div class="top">{{ months[n.getMonth()] }}</div>
            <div class="medium">{{ n.getDate() }}</div>
            <div class="bottom">{{ daysOfWeek[n.getDay()] }}</div>
          </div>
        </div>
      </div>
      <button class="arrow-left" @click="scrollRight">
        <i class="ti ti-arrow-left"></i>
      </button>
      <button class="arrow-right" @click="scrollLeft">
        <i class="ti ti-arrow-right"></i>
      </button>
    </div>
    <h3>Choose Time</h3>
    <p>Please choose the appropriate and available time</p>
    <div class="col-12" v-if="generatedTimings.length == 0">
      <p><i>No available timing found on this day.</i></p>
    </div>
    <div class="col-12 row" v-else>
      <div class="col-3" v-for="timing in generatedTimings" :key="timing">
        <div class="timing badge badge-info" style="color: white">
          {{ timing }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  props: {
    booking: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      scrollPosition: 0,
      generatedTimings: [],
      from: null,
      to: null,
      days: [],
      activeDay: new Date(),
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
    this.days = this.generateCalendar(this.booking.inDate);
    const today = moment(this.booking.inDate);
    this.generateTiming(new Date(this.booking.inDate), today.day());
    this.scrollToToday();
  },
  methods: {
    getDate(timing, type = false) {
      if (type) return moment.utc(timing).format("YYYY-MM-DD");
      return moment.utc(timing).format("MMMM DD, YYYY");
    },
    generateTiming(date, dayId = null) {
      var bodyFormData = new FormData();
      bodyFormData.append("dayId", 1);
      bodyFormData.append("serviceId", 13);
      axios
        .get("/base/api/serviceTimings/getByDayIdAndServiceId", {
          params: bodyFormData,
          ...this.config,
        })
        .then((response) => {
          if (response.data.success) {
            let timing = response.data.response;
            if (timing) {
              for (n in timing) {
                timings.push({ from: n.timeFrom, to: n.timeTo, id: n.id });
              }
              this.generatedTimings = timings;
            }
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });

      this.activeDay = date;
    },
    makeid(length = 10) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    },
    updateDates() {
      this.days = this.generateCalendar(this.from, this.to);
    },
    generateCalendar(from = null, to = null) {
      const days = [];
      let currentDate = null;
      if (from == null) {
        currentDate = moment();
        this.from = this.getDate(currentDate.clone(), true);
      } else {
        currentDate = moment(from);
      }
      let oneMonthForwardDate = null;
      if (to == null) {
        oneMonthForwardDate = moment().add(1, "months");
        this.to = this.getDate(oneMonthForwardDate.clone(), true);
      } else {
        oneMonthForwardDate = moment(to);
      }
      let currentDateClone = currentDate.clone();
      while (currentDateClone.isSameOrBefore(oneMonthForwardDate, "day")) {
        days.push(currentDateClone.clone().toDate());
        currentDateClone.add(1, "day");
      }

      return days;
    },
    scrollLeft() {
      this.scrollPosition -= 100; 
    },
    scrollRight() {
      const containerWidth = this.$refs.scrollContainer.offsetWidth;
      const itemsWidth = this.$refs.scrollContainer.scrollWidth;
      const maxScroll = itemsWidth - containerWidth;
      this.scrollPosition += 100; 
    },
    scrollToToday() {
      const today = new Date();
      const todayIndex = this.days.findIndex((item) => {
        return (
          item.getDate() === today.getDate() &&
          item.getMonth() === today.getMonth() &&
          item.getFullYear() === today.getFullYear()
        );
      });

      if (todayIndex !== -1) {
        const containerWidth = this.$refs.scrollContainer.offsetWidth;
        const itemWidth = 100;
        const scrollTo =
          todayIndex * itemWidth - containerWidth / 2 + itemWidth / 2;
        this.scrollPosition = Math.max(
          0,
          Math.min(
            scrollTo,
            this.$refs.scrollContainer.scrollWidth - containerWidth
          )
        );
      }
    },
    isCurrentDay(date) {
      const today = this.activeDay;
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
  },
};
</script>

<style scoped>
.scroll-container {
  height: 9em;
}
.badge {
  margin: 5px;
}
.arrow-left,
.arrow-right {
  position: absolute;
  top: 24px;
  background: none;
  border: 1px solid rgb(55, 136, 216);
  color: rgb(55, 136, 216);
}
.arrow-left {
  left: 0px;
}
.arrow-right {
  right: 0px;
}
.horizontal-calendar {
  overflow: hidden;
  position: relative;
}

.calendar-items {
  display: flex;
  transition: transform 0.3s ease;
}

.calendar-item {
  flex: 0 0 auto;
  width: 100px; /* Adjust the width of each calendar item as needed */
  padding: 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  box-sizing: border-box;
  text-align: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.top,
.bottom {
  font-size: 14px;
  font-weight: 400;
}
.medium {
  font-size: 24px;
  font-weight: 700;
}
.activeDay {
  background-color: rgb(55, 136, 216);
  color: white;
}

button {
  margin-top: 10px;
}
.timing {
  padding: 1em;
  color: white;
}
</style>
