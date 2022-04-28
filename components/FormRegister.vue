<template>
  <div class="relative bg-white w-full h-max rounded border shadow-xl flex-col justify-center pb-12">
    <div>
      <p class="text-5xl font-bold text-center mt-[10%]">
        Register
      </p>
    </div>
    <div class="px-[10%] pt-5">
      <form action="">
        <div class="mt-[10%]">
          <div>
            <label class="block" for="username">Username<label>
              <input
                type="text"
                placeholder="Username"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
              <span class="text-xs tracking-wide text-red-600 hidden">Email field is required </span>
            </label></label>
          </div>
          <div class="mt-4">
            <label class="block">Password<label>
              <input
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </label></label>
          </div>
          <div class="mt-4">
            <label class="block">Password<label>
              <input
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </label></label>
          </div>
          <div class="mt-4 w-full">
            <div class="flex justify-center w-full">
              <button class="w-[60%] h-11 px-6 border text-gray-500 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-300">
                register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
