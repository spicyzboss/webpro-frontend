<template>
  <div class="bg-[#6667ba] fixed w-full z-10 top-0 drop-shadow-xl z-20">
    <nav class="flex justify-between py-2 mx-4">
      <nuxt-link to="/" class="focus:outline-none">
        <img class="w-40 h-12" src="/patty-logo.png" alt="patty-logo">
      </nuxt-link>
      <div v-if="isObjectEmpty(user)" class="hidden gap-8 sm:flex">
        <nuxt-link to="/login" class="text-white hover:underline place-self-center focus:underline focus:outline-none">
          Login
        </nuxt-link>
        <nuxt-link to="/register" class="px-4 py-2 text-black bg-white rounded-full place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          Sign Up
        </nuxt-link>
      </div>
      <div v-else class="items-center hidden gap-4 sm:flex">
        <div type="button" class="flex items-center gap-4 px-2 py-1 text-black rounded-full cursor-pointer group place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          <img class="w-8 h-8 rounded-full" src="/profile.png" alt="profilepic">
          <p class="text-white group-hover:text-black group-focus:text-black">
            {{ user.firstname }}
          </p>
        </div>
        <button type="button" class="px-4 py-2 text-black bg-white rounded-full place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200" @click="logout">
          Logout
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
          <img class="w-8 h-8 rounded-full" src="/profile.png" alt="profilepic">
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
