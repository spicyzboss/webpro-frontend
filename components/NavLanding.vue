<template>
  <div class="bg-[#6667ba]">
    <nav class="flex justify-between py-2 mx-8 2xl:mx-auto xl:max-w-screen-2xl">
      <nuxt-link to="/" class="focus:outline-none">
        <img class="h-12" src="patty-logo.png" alt="patty-logo">
      </nuxt-link>
      <div class="hidden gap-8 sm:flex">
        <nuxt-link to="/login" class="text-white hover:underline place-self-center focus:underline focus:outline-none">
          Login
        </nuxt-link>
        <nuxt-link to="/ReGister" class="px-4 py-2 text-black bg-white rounded-full place-self-center hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          Sign Up
        </nuxt-link>
      </div>
      <div class="block sm:hidden">
        hello
      </div>
    </nav>
  </div>
</template>
