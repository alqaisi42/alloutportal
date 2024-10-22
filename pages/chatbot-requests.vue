<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="card card-body" v-if="load">
        <div>
          <h1 class="heading">Chatbot Details</h1>
          <p class="sub-heading">You can follow up with chatbot details below</p>
        </div>
        <div>
          <div class="section-header">
            <h3 class="section-title">List</h3>
            <p class="section-description">You can follow up with the chatbot request details.</p>
          </div>
          <div class="table-responsive">
            <table class="table search-table align-middle text-nowrap">
              <thead class="header-item">
              <tr>
                <th>ID</th>
                <th>Service</th>
                <th>Customer</th>
                <th>N.Reservations</th>
                <th>N.Users</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr class="search-items" v-for="item in listing.content" :key="'booking-' + item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.serviceName }}</td>
                <td>{{ item.customerName }}</td>
                <td>{{ item.noReservations }}</td>
                <td>{{ item.numOfUsers }}</td>
                <td>{{ getDate(item.dateAndTime) }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>
                  <select v-model="item.status" class="form-control">
                    <option value="1">Solved</option>
                    <option value="2">Cancelled</option>
                    <option value="3">Pending</option>
                    <option value="4">Postponed</option>
                  </select>
                </td>
                <td>
                  <button
                      @click="updateStatus(item.id, item.status)"
                      class="btn btn-primary btn-sm"
                  >
                    Update
                  </button>
                  <a @click="goto(item.id)" href="javascript:void(0)" class="btn btn-info btn-sm ml-2">
                    View
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
            <ul class="pagination">
              <li class="page-item" v-if="listing.number > 0">
                <a class="page-link link" @click="pagination($event, listing.number - 1)" href="" aria-label="Previous">
                  <span aria-hidden="true"><i class="ti ti-chevrons-left fs-4"></i></span>
                </a>
              </li>
              <li
                  class="page-item"
                  v-for="page in listing.totalPages"
                  :class="{ active: page == listing.number + 1 }"
                  :key="page + 'pag'"
              >
                <a class="page-link link" @click="pagination($event, page - 1)" href="">{{ page }}</a>
              </li>
              <li class="page-item" v-if="!listing.last">
                <a class="page-link link" @click="pagination($event, listing.number + 1)" href="" aria-label="Next">
                  <span aria-hidden="true"><i class="ti ti-chevrons-right fs-4"></i></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for viewing chatbot request details -->
    <div class="modal fade" id="getChatbotRequestDeatils" tabindex="-1" role="dialog"
         aria-labelledby="getChatbotRequestDeatilsTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Chatbot Request Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-bordered details-table">
              <tbody>
              <tr>
                <th>Customer Name</th>
                <td>{{ data.customerName }}</td>
              </tr>
              <tr>
                <th>Service Name</th>
                <td>{{ data.serviceName }}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{{ data.phoneNumber }}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{{ data.location }}</td>
              </tr>
              <tr>
                <th>No. Reservations</th>
                <td>{{ data.noReservations }}</td>
              </tr>
              <tr>
                <th>No. of Users</th>
                <td>{{ data.numOfUsers }}</td>
              </tr>
              <tr>
                <th>Service ID</th>
                <td>{{ data.serviceId }}</td>
              </tr>
              <tr>
                <th>User ID</th>
                <td>{{ data.userId }}</td>
              </tr>
              <tr>
                <th>Date and Time</th>
                <td>{{ formatDate(data.dateAndTime) }}</td>
              </tr>
              <tr>
                <th>Created At</th>
                <td>{{ formatDate(data.createdAt) }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button @click="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
  data() {
    return {
      dataTable: null,
      link: "/base/api/chatbotrequests",
      load: false,
      listing: {
        content: [],
        number: 0,
        totalPages: 1,
        last: true,
      },
      data: {
        id: null,
        customerName: "X",
        serviceName: "X",
        phoneNumber: "X",
        location: "X",
        noReservations: "X",
        serviceId: "X",
        numOfUsers: "X",
        dateAndTime: "X",
        userId: "X",
        createdAt: "X",
      },
      config: {
        auth: {
          username: "user",
          password: "123456",
        },
      },
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    pagination(e, page) {
      e.preventDefault();
      this.getAll(page);
    },
    getDate(timing) {
      return moment.utc(timing).format("MMMM DD, YYYY HH:mm:ss");
    },
    async getAll(page = 0) {
      this.load = false;
      axios
          .get(this.link + "?page=" + page + "&size=10", this.config)
          .then((response) => {
            if (response.data.success) {
              this.listing = response.data.response;
              this.load = true;
            } else {
              this.listing = {content: []};
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
    goto(id) {
      axios
          .get(this.link + "/" + id, this.config)
          .then((response) => {
            if (response.data.success) {
              this.data = response.data.response;
              $("#getChatbotRequestDeatils").modal("show");
            } else {
              this.$toast.error(response.data.message).goAway(1500);
            }
          })
          .catch((error) => {
            this.$toast.error(error.response.data.messageText).goAway(1500);
          });
    },
    closeModal() {
      $("#getChatbotRequestDeatils").modal("hide");
    },
    updateStatus(id, status) {
      axios
          .put(`${this.link}/${id}/status?newStatus=${status}`, {}, this.config)
          .then((response) => {
            // Check if the update was successful (assuming the response contains a success message)
            if (response.status === 200 || response.data.msg) {
              // Show success toast
              this.$toast.success("Status updated successfully!").goAway(1500);
            } else {
              // Show error toast if something is wrong in the response
              this.$toast.error("Unexpected response. Status not updated.").goAway(1500);
            }
          })
          .catch((error) => {
            // Show error toast if request failed
            this.$toast.error("Error updating status. Please try again.").goAway(1500);
            console.error(error);
          });
    },
    formatDate(dateString) {
      return moment.utc(dateString).format("MMMM DD, YYYY HH:mm:ss");
    },
  },
};
</script>

<style scoped>
.heading {
  font-size: 25px;
  font-weight: 600;
}

.sub-heading {
  margin-bottom: 30px;
  font-size: 14px;
  color: #6c757d;
}

.section-header {
  padding: 16px 16px 0px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
}

.section-description {
  font-size: 14px;
  color: #6c757d;
}

.details-table th {
  font-weight: 600;
  background-color: #f8f9fa;
  width: 30%;
}

.details-table td {
  font-size: 16px;
  padding: 12px;
}

.modal-content {
  padding: 20px;
}
</style>
