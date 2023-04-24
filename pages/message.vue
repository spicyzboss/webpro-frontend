<template>
  <div class="h-screen">
    <NavLanding />
    <div class="h-full pt-16">
      <div class="grid w-full h-full xl:grid-cols-4">
        <div class="hidden w-full h-full overflow-y-auto xl:flex xl:flex-col">
          <div class="flex w-full p-4 border-b">
            <div class="relative flex w-full">
              <input
                v-model="search"
                class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-200"
                type="text"
                name="search"
                placeholder="search"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mt-2 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div class="flex flex-col h-full overflow-y-scroll">
            <MessageUser
              v-for="user in filteredUser"
              :key="user.id"
              :user="user"
              :selected="selectedUser"
              :chat="chats"
              @selected="selectUser(user.id)"
            />
          </div>
        </div>
        <template v-if="selectedUserData">
          <div class="flex flex-col w-full h-full overflow-y-auto border xl:col-span-3">
            <div class="flex items-center justify-between p-3 bg-white">
              <div class="flex items-center">
                <div class="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-500 rounded-full">
                  <img :src="selectedUserData.profile_image" alt="profilepic">
                </div>
                <div class="flex flex-col ml-4">
                  <p class="text-2xl font-bold">
                    {{ selectedUserData.firstname }} {{ selectedUserData.lastname }}
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
              <template v-if="selectedChat.length">
                <template v-for="chat in selectedChat">
                  <SentMessage v-if="chat.from === $auth.user.id" :key="chat.id">
                    {{ chat.content }}
                  </SentMessage>
                  <ReceiveMessage v-else :key="chat.id">
                    {{ chat.content }}
                  </ReceiveMessage>
                </template>
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

// const socket = io('wss://api.pattycommunity.com/');
const socket = io('ws://localhost:9999/');

export default {
  data() {
    return {
      search: '',
      message: '',
      selectedUser: null,
      chats: [],
      users: [],
      toggleReport: false,
    };
  },
  computed: {
    selectedChat() {
      return this.chats.filter((chat) => chat.to === this.selectedUser || chat.from === this.selectedUser) || [];
    },
    filteredUser() {
      return this.users.filter((user) => `${user.firstname} ${user.lastname}`.toLowerCase().includes(this.search)) || [];
    },
    selectedUserData() {
      return this.users.filter((v) => v.id === this.selectedUser)[0] || null;
    },
  },
  async created() {
    const { chat, user, status } = await this.$axios.$get('/chat');
    if (status.code === 200) {
      this.chats = chat;
      this.users = user.filter((v) => v?.id !== this.$auth.user.id);
      this.selectedUser = this.users[0]?.id ? this.users[0] : null;
    }
  },
  mounted() {
    socket.on('chat', (data) => {
      this.chats.push(data.chat);
      this.$nextTick(() => {
        if (this.message) {
          this.$refs.message.scrollTop = this.$refs.message.scrollHeight;
        }
      });
      this.users.push(data.user);
    });
  },
  methods: {
    async sendMessage() {
      if (this.message.length > 0) {
        socket.emit('chat', {
          chat: {
            from: this.$auth.user.id,
            to: this.selectedUser,
            content: this.message,
            created_at: new Date().toISOString(),
          },
          user: {
            id: this.$auth.user.id,
            firstname: this.$auth.user.firstname,
            lastname: this.$auth.user.lastname,
            profile_image: this.$auth.user.profile_image,
          },
        });
        this.message = '';
      }
    },
    selectUser(id) {
      this.selectedUser = id;
      this.$nextTick(() => {
        if (this.message) {
          this.$refs.message.scrollTop = this.$refs.message.scrollHeight;
        }
      });
    },
  },
};
</script>
