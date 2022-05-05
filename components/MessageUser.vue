<template>
  <div class="relative w-auto bg-white cursor-pointer pointer-events-auto hover:bg-gray-200">
    <div class="flex w-full p-3">
      <div class="flex w-full">
        <div class="flex items-center justify-center overflow-hidden bg-gray-500 rounded-full w-14 h-14">
          <img :src="user.profile" alt="profilepic">
        </div>
        <div class="flex flex-col justify-center ml-2">
          <p class="font-bold">
            {{ user.firstname }} {{ user.lastname }}
          </p>
          <p class="text-gray-500 truncate">
            {{ user.lastMessage }}
          </p>
        </div>
      </div>
    </div>
    <p class="absolute top-0 right-0 m-3 text-gray-500">
      {{ user.lastMessageTime }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MessageUser',
  props: ['user'],
};
</script>
