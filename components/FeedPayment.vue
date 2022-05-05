<template>
  <div class="flex flex-col items-center w-full">
    <div v-if="(nextToggle == 0)" class="static w-[80%] mt-4 overflow-hidden bg-white border rounded-lg drop-shadow-md">
      <div>
        <img src="/profile.png" alt="profilepic" class="w-full h-1/2">
      </div>
      <div class="flex items-center justify-center w-full h-12 my-4">
        <button class="flex items-center justify-center w-1/2 p-4 rounded-lg ] h-12 text-white bg-[#6667ba] hover:bg-[#494a86]" @click="nextInsert">
          Next
        </button>
      </div>
    </div>
    <div v-else class="static w-[80%] mt-4 overflow-hidden bg-white border rounded-lg drop-shadow-md">
      <div class="flex flex-col items-center p-10 ">
        <p for="transactioNumber">
          Transaction Number
        </p>
        <input
          id="transactionNumber"
          v-model="transactionNumber"
          type="transactionNumber"
          name="transactionNumber"
          placeholder="0"
          class="
              w-full
              px-4
              py-2
              mt-2
              border
              rounded-md
              focus:outline-none focus:ring-2 focus:ring-[#6667ba]
            "
        >
        <div class="flex items-center justify-center w-full h-12 my-4">
          <button class="flex items-center justify-center w-1/2 p-4 rounded-lg ] h-12 text-white bg-[#6667ba] hover:bg-[#494a86]" @click="nextInsert">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nextToggle: 0,
    };
  },
  methods: {
    nextInsert() {
      this.nextToggle = 1;
    },
  },
};
</script>
