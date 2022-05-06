<template>
  <div class="relative w-1/4 m-4 bg-white border border-b rounded-lg">
    <div class="flex w-full p-3">
      <div class="flex w-full">
        <div class="flex items-center justify-center overflow-hidden bg-gray-500 rounded-full w-14 h-14">
          <img :src="member.profile_image" alt="profilepic">
        </div>
        <div class="flex flex-col w-3/4 ml-2">
          <div class="w-[70%]">
            <p class="text-lg font-bold">
              {{ member.id }}
            </p>
          </div>
          {{ member.reason }}
        </div>
      </div>
    </div>
    <div class="pb-14" />
    <div class="absolute inset-x-0 bottom-0 w-full h-12">
      <button class="w-full h-12 text-white bg-red-500 rounded-b-lg hover:bg-red-700" @click="$emit('unban')">
        Unblacklist
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['member'],
};
</script>
