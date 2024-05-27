<template>
  <div class="body-wrapper">
    <div class="container-fluid">
      <div class="card overflow-hidden chat-application">
        <div
          class="d-flex align-items-center justify-content-between gap-3 m-3 d-lg-none"
        >
          <button
            class="btn btn-primary d-flex"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#chat-sidebar"
            aria-controls="chat-sidebar"
          >
            <i class="ti ti-menu-2 fs-5"></i>
          </button>
          <form class="position-relative w-100">
            <input
              type="text"
              class="form-control search-chat py-2 ps-5"
              id="text-srh"
              placeholder="Search Contact"
            />
            <i
              class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"
            ></i>
          </form>
        </div>
        <div class="d-flex">
          <div class="w-30 d-none d-lg-block border-end user-chat-box">
            <div class="px-4 pt-9 pb-6">
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <div class="d-flex align-items-center">
                  <div class="position-relative">
                    <img
                      src="/Modernize/images/allout.svg"
                      alt="user1"
                      width="54"
                      height="54"
                      class="rounded-circle"
                    />
                    <!-- <span
                      class="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success"
                    >
                      <span class="visually-hidden">New alerts</span>
                    </span> -->
                  </div>
                  <div class="ms-3">
                    <h6 class="fw-semibold mb-2">AllOut Customer Support</h6>
                  </div>
                </div>
              </div>
              <form class="position-relative mb-4">
                <input
                  type="text"
                  class="form-control search-chat py-2 ps-5"
                  id="text-srh"
                  placeholder="Search Contact"
                />
                <i
                  class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"
                ></i>
              </form>
              <div class="dropdown">
                <a
                  class="text-muted fw-semibold d-flex align-items-center"
                  href="javascript:void(0)"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recent Chats<i class="ti ti-chevron-down ms-1 fs-5"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="javascript:void(0)"
                      >Sort by time</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item border-bottom"
                      href="javascript:void(0)"
                      >Sort by Unread</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0)"
                      >Hide favourites</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="app-chat">
              <ul
                class="chat-users simplebar-scrollable-y"
                style="height: calc(100vh - 350px)"
                data-simplebar="init"
              >
                <div class="simplebar-wrapper" style="margin: 0px">
                  <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                  </div>
                  <div class="simplebar-mask">
                    <div
                      class="simplebar-offset"
                      style="right: 0px; bottom: 0px"
                    >
                      <div
                        class="simplebar-content-wrapper"
                        tabindex="0"
                        role="region"
                        aria-label="scrollable content"
                        style="height: 100%; overflow: hidden scroll"
                      >
                        <div class="simplebar-content" style="padding: 0px">
                          <li v-for="item in listing" :key="item.id + 'chat'">
                            <a
                              href="javascript:void(0)"
                              class="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user text-bg-light"
                              id="chat_user_1"
                              data-user-id="1"
                              @click="getMessages(item)"
                            >
                              <div class="d-flex align-items-center">
                                <span class="position-relative">
                                  <img
                                    src="/Modernize/images/profile/user-1.jpg"
                                    alt="user1"
                                    width="48"
                                    height="48"
                                    class="rounded-circle"
                                  />
                                  <!-- <span
                                    class="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success"
                                  >
                                    <span class="visually-hidden"
                                      >New alerts</span
                                    >
                                  </span> -->
                                </span>
                                <div class="ms-3 d-inline-block w-75">
                                  <h6
                                    class="mb-1 fw-semibold chat-title"
                                    data-username="James Anderson"
                                  >
                                    Customer {{ item.chatRoomId }}
                                  </h6>
                                  <span
                                    v-if="item.sender == me"
                                    class="fs-3 text-truncate text-body-color d-block"
                                    >You: {{ item.content }}...</span
                                  >
                                  <span
                                    v-else
                                    class="fs-3 text-truncate text-body-color d-block"
                                    >{{ item.content }}...</span
                                  >
                                </div>
                              </div>
                              <p class="fs-2 mb-0 text-muted">
                                {{ ago(item.timestamp) }}
                              </p>
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="simplebar-placeholder"
                    style="width: 336px; height: 560px"
                  ></div>
                </div>
                <div
                  class="simplebar-track simplebar-horizontal"
                  style="visibility: hidden"
                >
                  <div
                    class="simplebar-scrollbar"
                    style="width: 0px; display: none"
                  ></div>
                </div>
                <div
                  class="simplebar-track simplebar-vertical"
                  style="visibility: visible"
                >
                  <div
                    class="simplebar-scrollbar"
                    style="
                      height: 25px;
                      transform: translate3d(0px, 0px, 0px);
                      display: block;
                    "
                  ></div>
                </div>
              </ul>
            </div>
          </div>
          <div class="w-70 w-xs-100 chat-container">
            <div class="chat-box-inner-part h-100">
              <div class="chat-not-selected h-100 d-none">
                <div
                  class="d-flex align-items-center justify-content-center h-100 p-5"
                >
                  <div class="text-center">
                    <span class="text-primary">
                      <i class="ti ti-message-dots fs-10"></i>
                    </span>
                    <h6 class="mt-2">Open chat from the list</h6>
                  </div>
                </div>
              </div>
              <div class="chatting-box d-block">
                <div
                  class="p-9 border-bottom chat-meta-user d-flex align-items-center justify-content-between"
                >
                  <div class="hstack gap-3 current-chat-user-name">
                    <div class="position-relative">
                      <img
                        src="/Modernize/images/profile/user-1.jpg"
                        alt="user1"
                        width="48"
                        height="48"
                        class="rounded-circle"
                      />
                      <!-- <span
                        class="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success"
                      >
                        <span class="visually-hidden">New alerts</span>
                      </span> -->
                    </div>
                    <div class="">
                      <h6 class="mb-1 name fw-semibold">
                        Customer {{ this.roomId }}
                      </h6>
                      <p class="mb-0">Away</p>
                    </div>
                  </div>
                  <ul class="list-unstyled mb-0 d-flex align-items-center">
                    <li>
                      <!-- <a class="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5 " href="javascript:void(0)" type="button" data-bs-toggle="offcanvas" data-bs-target="#app-chat-offcanvas" aria-controls="offcanvasScrolling">
                                          <i class="ti ti-menu-2"></i>
                                        </a> -->
                      <a
                        class="chat-menu text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5"
                        href="javascript:void(0)"
                      >
                        <i class="ti ti-menu-2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="position-relative overflow-hidden d-flex">
                  <div class="position-relative d-flex flex-grow-1 flex-column">
                    <div
                      class="chat-box p-9"
                      style="height: calc(100vh - 300px)"
                      data-simplebar="init"
                    >
                      <div class="simplebar-wrapper" style="margin: -20px">
                        <div class="simplebar-height-auto-observer-wrapper">
                          <div class="simplebar-height-auto-observer"></div>
                        </div>
                        <div class="simplebar-mask">
                          <div
                            class="simplebar-offset"
                            style="right: 0px; bottom: 0px"
                          >
                            <div
                              class="simplebar-content-wrapper"
                              tabindex="0"
                              role="region"
                              aria-label="scrollable content"
                              style="height: 100%; overflow: hidden scroll"
                            >
                              <div
                                class="simplebar-content"
                                style="padding: 20px"
                              >
                                <!-- 2 -->
                                <div
                                  class="chat-list active"
                                  v-if="chatListing.length > 0"
                                >
                                  <div
                                    class="hstack gap-3 align-items-start mb-7"
                                    :class="{
                                      'justify-content-start':
                                        item.sender != me,
                                      'justify-content-end': item.sender == me,
                                    }"
                                    v-for="item in chatListing"
                                    :key="item.id + 'chat'"
                                  >
                                    <div
                                      class=""
                                      style="display: flex; gap: 1em"
                                      v-if="item.sender != me"
                                    >
                                      <img
                                        src="/Modernize/images/profile/user-8.jpg"
                                        alt="user8"
                                        width="40"
                                        height="40"
                                        class="rounded-circle"
                                      />
                                      <div>
                                        <h6 class="fs-2 text-muted">
                                          Customer {{ item.id }},
                                          {{ ago(item.timestamp) }}
                                        </h6>
                                        <div
                                          class="p-2 text-bg-light rounded-1 d-inline-block text-dark fs-3"
                                        >
                                          {{ item.content }}
                                        </div>
                                      </div>
                                    </div>
                                    <div class="text-end" v-else>
                                      <h6 class="fs-2 text-muted">
                                        {{ ago(item.timestamp) }}
                                      </h6>
                                      <div
                                        class="p-2 bg-info-subtle text-dark rounded-1 d-inline-block fs-3"
                                      >
                                        {{ item.content }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="chat-list active" v-else>
                                  <p
                                    style="
                                      position: absolute;
                                      bottom: 0;
                                      right: 35%;
                                      color: rgba(0, 0, 0, 0.6);
                                    "
                                  >
                                    No message, you can write anything!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="simplebar-placeholder"
                          style="width: auto; height: 577px"
                        ></div>
                      </div>
                      <div
                        class="simplebar-track simplebar-horizontal"
                        style="visibility: hidden"
                      >
                        <div
                          class="simplebar-scrollbar"
                          style="width: 0px; display: none"
                        ></div>
                      </div>
                      <div
                        class="simplebar-track simplebar-vertical"
                        style="visibility: visible"
                      >
                        <div
                          class="simplebar-scrollbar"
                          style="
                            height: 263px;
                            transform: translate3d(0px, 0px, 0px);
                            display: block;
                          "
                        ></div>
                      </div>
                    </div>
                    <div class="px-9 py-6 border-top chat-send-message-footer">
                      <div
                        class="d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center gap-2 w-85">
                          <a
                            class="position-relative nav-icon-hover z-index-5"
                            href="javascript:void(0)"
                          >
                            <i
                              class="ti ti-mood-smile text-dark bg-hover-primary fs-7"
                            ></i>
                          </a>
                          <input
                            type="text"
                            v-on:keyup.enter="sendMessage"
                            class="form-control message-type-box text-muted border-0 p-0 ms-2"
                            v-model="message"
                            placeholder="Type a Message"
                            fdprocessedid="0p3op"
                          />
                        </div>
                        <ul
                          class="list-unstyledn mb-0 d-flex align-items-center"
                        >
                          <li>
                            <a
                              class="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5"
                              href="javascript:void(0)"
                              @click="sendMessage"
                              ><i class="ti ti-send"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
export default {
  layout: "adminLte",
  head() {
    return {
      title: "Dashboard | Support",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "/assets/Modernize/js/apps/chat.js",
          body: true,
        },
        {
          src: "/assets/Modernize/vendor/fullcalendar/index.global.min.js",
          defer: true,
          body: true,
          callback: this.onScriptLoaded,
        },
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
    };
  },
  name: "usertype",
  data() {
    return {
      link: "/branch/api/chats",
      dataTable: null,
      stompClient: null,
      me: 2,
      // id: null,
      room: null,
      message: null,
      roomId: null,
      chatListing: [],
      load: false,
      listing: [],
    };
  },
  async mounted() {
    if (!process.client) return;
    this.roomId = this.$route.params.id;
    if (this.roomId) {
      this.initiateSocket(this.roomId);
      await this.getAll();
      // this.roomId = this.id;
    } else {
      await this.getAll();
    }
  },
  component: {},
  methods: {
    ago(dating) {
      let now = new Date();
      let startDate = new Date(dating);
      const timeDiffMilliseconds = now.getTime() - startDate.getTime();
      const timeDiffSeconds = timeDiffMilliseconds / 1000;
      const timeDiffMinutes = timeDiffSeconds / 60;
      const timeDiffHours = timeDiffMinutes / 60;
      const timeDiffDays = timeDiffHours / 24;

      if (timeDiffSeconds < 60) {
        return `${Math.floor(timeDiffSeconds)} seconds ago`;
      } else if (timeDiffMinutes < 60) {
        return `${Math.floor(timeDiffMinutes)} minutes ago`;
      } else if (timeDiffHours < 24) {
        return `${Math.floor(timeDiffHours)} hours ago`;
      } else if (timeDiffDays < 7) {
        return `${Math.floor(timeDiffDays)} days ago`;
      } else {
        return `${new Date(timeDiffMilliseconds).toISOString().substr(11, 8)}`;
      }
    },
    getAll() {
      axios.all([axios.get(this.link + "/allrooms", this.config)]).then(
        axios.spread((listing) => {
          this.listing = listing.data.response;
          if (listing.data.success == true) {
            setTimeout(() => {
              this.load = true;
            }, 500);
          }
        })
      );
    },
    getMessages(room) {
      axios
        .get(
          this.link +
            "/byRoomID?roomId=" +
            room.chatRoomId +
            "&receiver=" +
            this.me,
          this.config
        )
        .then((response) => {
          if (response.data.success) {
            let chat = response.data.response;
            if (chat) this.chatListing = chat;
            else this.chatListing = [];
            this.roomId = room.chatRoomId;
            this.room = room;
            this.initiateSocket(room.chatRoomId);
          } else this.$toast.error(response.data.message).goAway(1500);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.messageText).goAway(1500);
        });
    },
    initiateSocket(room) {
      const socket = new SockJS("/branch/ws");
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, (frame) => {
        this.stompClient.subscribe(`/topic/${room}`, this.onMessageReceived);
      });
    },
    onMessageReceived(message) {
      this.chatListing.push(JSON.parse(message.body));
      this.getAll();
    },
    setUsername() {
      this.username = this.inputUsername;
    },
    sendMessage() {
      // const message = { username: this.username, text: this.message };
      // this.stompClient.send(
      //   `/app/chat.${this.roomId}.sendMessage`,
      //   {},
      //   JSON.stringify(message)
      // );
      // this.chatListing.push(message);
      // this.inputMessage = "";
      var messageContent = this.message;
      if (messageContent && this.stompClient) {
        var chatMessage = {
          roomId: this.roomId,
          sender: this.me,
          receiver: this.roomId,
          content: messageContent,
          type: "CHAT",
        };
        this.stompClient.send(
          "/app/chat." + this.roomId + ".sendMessage",
          {},
          JSON.stringify(chatMessage)
        );
        this.message = "";
        this.getAll();
      }
      // event.preventDefault();
    },
  },
};
</script>
