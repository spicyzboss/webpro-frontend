<template>
  <div class="bg-[#6667ba] fixed w-full top-0 drop-shadow-xl z-20">
    <nav class="flex justify-between py-2 mx-4">
      <nuxt-link to="/" class="focus:outline-none focus:brightness-125">
        <img class="w-40 h-12 select-none" src="/patty-logo.png" alt="patty-logo">
      </nuxt-link>
      <div v-if="!isObjectEmpty(user)" class="flex justify-between w-1/5 h-full">
        <nuxt-link to="/" class="focus:outline-none focus:brightness-125 hover:bg-[#3d3e72]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </nuxt-link>
        <nuxt-link to="/message" class="focus:outline-none focus:brightness-125 hover:bg-[#3d3e72]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </nuxt-link>
      </div>
      <div v-if="isObjectEmpty(user)" class="hidden gap-8 sm:flex">
        <nuxt-link to="/login" class="text-white hover:underline place-self-center focus:underline focus:outline-none">
          Login
        </nuxt-link>
        <nuxt-link to="/register" class="px-4 py-2 text-black bg-white rounded-full place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          Sign Up
        </nuxt-link>
      </div>
      <div v-else class="items-center hidden gap-4 sm:flex">
        <template v-if="!user.premium">
          <nuxt-link to="/payment" class="font-bold text-white select-none focus:outline-none group">
            <span class="group-hover:underline group-focus:underline">Get Premium</span>
            <span>✨</span>
          </nuxt-link>
        </template>
        <template v-else>
          <div>
            <span class="font-bold text-white select-none focus:outline-none">Premium</span>
            <span>✨</span>
          </div>
        </template>
        <button type="button" class="flex items-center gap-4 px-2 py-1 text-black rounded-full cursor-pointer group place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          <img class="object-cover w-8 h-8 rounded-full select-none" :src="user.profile_image" alt="profilepic">
          <p class="text-white select-none group-hover:text-black group-focus:text-black">
            {{ user.firstname }}
          </p>
        </button>
        <button type="button" class="px-4 py-2 text-black bg-white rounded-full place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200" @click="logout">
          <span class="select-none">Logout</span>
        </button>
      </div>
      <div class="flex sm:hidden">
        <div v-if="isObjectEmpty(user)" class="flex gap-8">
          <nuxt-link to="/login" class="text-white hover:underline place-self-center focus:underline focus:outline-none">
            Login
          </nuxt-link>
          <nuxt-link to="/register" class="px-4 py-2 text-black bg-white rounded-full place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
            Sign Up
          </nuxt-link>
        </div>
        <div v-else type="button" class="flex items-center gap-4 px-2 py-1 text-black rounded-full cursor-pointer group place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          <img class="w-8 h-8 rounded-full" :src="user.profile_image" alt="profilepic">
          <p class="text-white group-hover:text-black group-focus:text-black">
            {{ user.firstname }}
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    };
  },
  methods: {
    isObjectEmpty(obj) {
      return _.isEmpty(obj);
    },
    logout() {
      this.$auth.logout().then(() => {
        this.$router.go(this.$router.currentRoute);
      });
    },
  },
};
</script>
