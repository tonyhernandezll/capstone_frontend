<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/products">All Kicks</router-link>|
      <router-link to="/users">All Users</router-link>|
      <router-link to="/signup">Signup</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/logout">Logout</router-link>|
    </div>-->
    <!-- Navigation-->
    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">Welcome To $neaker City</div>
        <!-- <div class="masthead-heading text-uppercase">It's Nice To Meet You</div> -->
        <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/home">Tell me more</a> -->
      </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <h2>$NEAKER City</h2>
          <!-- <img src="/assets/img/navbar-logo.svg" /> -->
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ml-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item"></li>
            <li v-if="!jwt" class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/products">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/products/new">create product</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/users">Users</a>
            </li>
            <li v-if="!jwt" class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/signup">Signup</a>
            </li>
            <li v-if="!jwt" class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/login">Login</a>
            </li>
            <li v-if="jwt" class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/logout">Logout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/carted_products">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
          <div class="col-lg-4 my-3 my-lg-0"></div>
          <div class="col-lg-4 text-lg-right">
            <a class="mr-3" href="#!">Privacy Policy</a>
            <a href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>

    <div>
      <beautiful-chat
        :participants="participants"
        :titleImageUrl="titleImageUrl"
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
        :newMessagesCount="newMessagesCount"
        :isOpen="isChatOpen"
        :close="closeChat"
        :icons="icons"
        :open="openChat"
        :showEmoji="true"
        :showFile="true"
        :showTypingIndicator="showTypingIndicator"
        :showLauncher="true"
        :showCloseButton="true"
        :colors="colors"
        :alwaysScrollToBottom="alwaysScrollToBottom"
        :messageStyling="messageStyling"
        @onType="handleOnType"
        @edit="editMessage"
      />
    </div>
  </div>
</template>

<style></style>
<script>
import CloseIcon from "vue-beautiful-chat/src/assets/close-icon.png";
import OpenIcon from "vue-beautiful-chat/src/assets/logo-no-bg.svg";
import FileIcon from "vue-beautiful-chat/src/assets/file.svg";
import CloseIconSvg from "vue-beautiful-chat/src/assets/close.svg";

export default {
  name: "app",
  data() {
    return {
      jwt: null,
      icons: {
        open: {
          img: OpenIcon,
          name: "default",
        },
        close: {
          img: CloseIcon,
          name: "default",
        },
        file: {
          img: FileIcon,
          name: "default",
        },
        closeSvg: {
          img: CloseIconSvg,
          name: "default",
        },
      },
      participants: [
        {
          id: "user1",
          name: "Tony",
          imageUrl: "https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png",
        },
        {
          id: "user2",
          name: "Carlos",
          imageUrl: "https://wallpaperaccess.com/full/1567008.jpg",
        },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: "https://wallpaperaccess.com/full/1153664.jpg",
      messageList: [
        { type: "text", author: `me`, data: { text: `are you open for a trade?` } },
        { type: "text", author: `user1`, data: { text: `depends on the shoe.` } },
        { type: "text", author: `me`, data: { text: `i have a pair of Jordan 1 Royals ` } },
        { type: "text", author: `user1`, data: { text: `let me think about it` } },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        launcher: {
          bg: "#4e8cff",
        },
        messageList: {
          bg: "#ffffff",
        },
        sentMessage: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867",
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  mounted: function () {
    this.setJwt();
    setuptheme();
  },
  methods: {
    setJwt: function () {
      this.jwt = localStorage.jwt;
    },
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.onMessageWasSent({ author: "support", type: "text", data: { text } });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log("Emit typing event");
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
  },
};
</script>
