<template>
  <form action="" class="p-12 bg-white border shadow-xl rounded-xl">
    <div>
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="hello@emample.com"
        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
      >
      <span class="hidden text-xs tracking-wide text-red-600">Email field is required </span>
    </div>
    <div class="mt-4">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
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
      <button class="w-2/3 h-12 mt-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-800 focus:bg-indigo-800">
        Login
      </button>
      <button class="w-2/3 h-12 mt-4 text-gray-500 transition-colors duration-150 bg-white border rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-gray-100">
        Register
      </button>
    </div>
  </form>
</template>
