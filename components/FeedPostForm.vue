<template>
  <div class="mt-4 rounded-lg bg-white w-full border drop-shadow-md static">
    <div class="w-full flex p-3">
      <div class="flex">
        <div class="rounded-full h-10 w-10 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic">
        </div>
      </div>
      <div class="ml-2 w-full">
          <button class="bg-gray-100 hover:bg-gray-300 text-gray-600 py-2 px-4 w-full text-left rounded-full" @click="togglePost = false">
            What you want create a party
        </button>
      </div>
    </div>
  </div>
</template>
