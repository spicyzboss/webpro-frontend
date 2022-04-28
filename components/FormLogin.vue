<template>
  <div class="p-12 bg-white border shadow-xl rounded-xl">
    <div>
      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        placeholder="hello@emample.com"
        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
      >
      <span class="hidden text-xs tracking-wide text-red-600">Email field is required </span>
    </div>
    <div class="mt-4">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        name="password"
        placeholder="password"
        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
      >
    </div>
    <div class="flex flex-row-reverse mt-2">
      <nuxt-link to="#" class="text-sm text-blue-600 hover:underline focus:outline-none focus:underline">
        Forgot password?
      </nuxt-link>
    </div>
    <div class="flex flex-col items-center">
      <button class="w-2/3 h-12 mt-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-800 focus:bg-indigo-800" @click="login">
        Login
      </button>
      <button class="w-2/3 h-12 mt-4 text-gray-500 transition-colors duration-150 bg-white border rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-gray-100">
        Register
      </button>
    </div>
  </div>
</template>

<script>
import { createHash } from 'crypto';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const request = await this.$axios.$post('https://api.pattycommunity.com/login', {
        email: this.email,
        password: createHash('md5').update(this.password).digest('hex'),
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (request.status.code === 200) {
        this.$auth.setToken(request.token);
        this.$auth.setUser(request.user);
        this.$router.push('/');
      } else {
        console.log(request.status.message);
      }
    },
  },
};
</script>
