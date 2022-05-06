<template>
  <div>
    <NavLanding />
    <div class="h-screen pt-16">
      <div class="grid w-full h-full xl:grid-cols-1">
        <template v-if="post">
          <div class="flex flex-col w-full h-full overflow-y-auto border xl:col-span-3">
            <div class="flex items-center justify-between p-3 bg-white">
              <div class="flex items-center">
                <div class="flex flex-col ml-4">
                  <p class="text-2xl font-bold">
                    {{ post.content }}
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <input
                  v-if="toggleReport"
                  id="report"
                  v-model="report"
                  type="report"
                  name="report"
                  placeholder=""
                  class="
            w-lg
            h-10
            border
            rounded-md
            focus:outline-none focus:ring-2 focus:ring-[#ee4545]
          "
                >
                <button v-if="toggleReport" class="flex justify-center p-2 mx-2 text-white bg-red-500 rounded-lg">
                  Report
                </button>
                <svg class="h-6 cursor-pointer fill-current text-grey-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="toggleReport = !toggleReport"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
              </div>
            </div>
            <div ref="message" class="flex flex-col w-full h-full pb-4 overflow-y-scroll">
              <template v-for="chat in chats">
                <SentMessage v-if="chat.from === $auth.user.id" :key="chat.id">
                  {{ chat.content }}
                </SentMessage>
                <ReceiveMessage v-else :key="chat.id">
                  {{ chat.content }}
                </ReceiveMessage>
              </template>
            </div>
            <div class="flex items-center justify-center w-full p-4 bg-white">
              <div class="flex items-center w-full">
                <input
                  v-model="message"
                  class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-200"
                  type="text"
                  name="message"
                  placeholder="Aa"
                  @keypress="(e) => {
                    if (e.key === 'Enter') {
                      sendMessage();
                    }
                  }"
                >
              </div>
              <button class="flex justify-center ml-2 focus:outline-none focus:text-gray-400 hover:text-gray-400" @click="sendMessage">
                <svg
                  class="h-8 transform rotate-90 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

// const socket = io('wss://api.pattycommunity.com');
const socket = io('ws://localhost:9999');

export default {
  data() {
    return {
      routeID: this.$route.params.id,
      post: null,
      chats: [],
      message: '',
    };
  },
  async beforeMount() {
    const postRequest = await this.$axios.get(`/get_postbid/${this.routeID}`);
    if (postRequest.data.status.code === 200) {
      this.post = postRequest.data.post;
    }
    const chatRequest = await this.$axios.get(`/get_groupChat/${this.routeID}`);
    if (chatRequest.data.status.code === 200) {
      this.chats = chatRequest.data.chat;
    }
  },
  created() {
    socket.on('groupChat', (data) => {
      if (data.group_id === this.routeID) {
        this.chats.push(data.groupChat);
      }
    });
  },
  methods: {
    sendMessage() {
      socket.emit('groupChat', {
        group_id: this.routeID,
        groupChat: {
          from: this.$auth.user.id,
          content: this.message,
          post_id: this.routeID,
        },
        sender: this.$auth.user,
      });
      this.message = '';
    },
  },
};
</script>
