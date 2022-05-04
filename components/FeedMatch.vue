<template>
  <div class="static w-[80%] mt-4 overflow-hidden bg-white border rounded-lg drop-shadow-md">
    <div>
      <img src="/profile.png" alt="profilepic" class="w-full h-1/2">
    </div>
    <div class="p-4">
      <p class="text-2xl">
        <span class="font-bold">Name:</span>
        Supachai Meason
      </p>
      <p class="text-2xl">
        <span class="font-bold">Age:</span>
        21
      </p>
      <p class="text-2xl">
        <span class="font-bold">Gender:</span>
        Male
      </p>
      <p class="text-2xl">
        <span class="font-bold">Interest:</span>
        <span class="p-1 m-1 bg-[#b66db0] rounded-2xl text-white">Guitar</span><span class="p-1 m-1 bg-[#f3799e] rounded-2xl text-white">Football</span><span class="p-1 m-1 bg-[#ffc568] rounded-2xl text-white">Dev</span>
      </p>
    </div>
    <div class="pb-14" />
    <div class="absolute inset-x-0 bottom-0 w-full h-12">
      <button :class="['w-full h-12 text-white z-auto', checkInterested ? 'pointer-events-none bg-gray-300': 'bg-[#6667ba] hover:bg-[#494a86]']">
        Interest
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkInterested: false,
    };
  },
  methods: {
  },
};
</script>
