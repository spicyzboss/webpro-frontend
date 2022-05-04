<template>
  <div class="static w-full mt-4 bg-white border rounded-lg drop-shadow-md z-0">
    <div class="flex w-full p-3">
      <div class="flex">
        <div class="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-500 rounded-full">
          <img src="/profile.png" alt="profilepic">
        </div>
      </div>
      <div v-if="!posting" class="w-full ml-2">
        <button class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-300" @click="openPostDetail">
          What you want create a party
        </button>
      </div>
      <div v-else class="flex flex-col w-full px-2">
        <div class="w-full">
          <input
            ref="topic"
            v-model="topic"
            type="text"
            name="topic"
            placeholder="Topic..."
            class="w-full px-4 py-2 text-left text-gray-600 bg-gray-100 rounded-xl placeholder:text-[#6B6B6B]"
          >
        </div>
        <div class="w-full mt-2">
          <textarea
            ref="description"
            v-model="description"
            type="description"
            name="description"
            placeholder="Description..."
            class="w-full h-16 px-4 py-2 text-left text-gray-600 bg-gray-100 resize-none placeholder:text-[#6B6B6B] rounded-xl"
          />
        </div>
        <div class="w-full">
          <input
            ref="date"
            v-model="date"
            type="date"
            name="date"
            placeholder="date"
            class="w-full px-4 py-2 text-left text-gray-600 bg-gray-100 rounded-xl"
          >
        </div>
        <div class="flex flex-row items-center w-full gap-4 mt-2">
          <div class="flex flex-col w-full">
            <p>Start</p>
            <input
              ref="startTime"
              v-model="startTime"
              type="time"
              name="startTime"
              class="w-full px-4 py-2 text-left text-gray-600 bg-gray-100 rounded-xl"
            >
          </div>
          <div class="flex flex-col w-full">
            <p>Finish</p>
            <input
              ref="finishTime"
              v-model="finishTime"
              type="time"
              name="finishTime"
              class="w-full px-4 py-2 text-left text-gray-600 bg-gray-100 rounded-xl"
            >
          </div>
        </div>
        <div class="flex justify-end w-full gap-4 mt-4">
          <button class="text-gray-600 hover:underline" @click="cancelPostDetail">
            Cancel
          </button>
          <button class="bg-[#6667ba] hover:bg-[#494a86] text-white py-2 px-6 rounded-full font-bold">
            Post
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
      topic: '',
      description: '',
      date: '',
      startTime: '',
      finishTime: '',
      posting: false,
    };
  },
  methods: {
    openPostDetail() {
      this.posting = true;
      this.$nextTick(() => {
        this.$refs.topic.focus();
      });
    },
    cancelPostDetail() {
      this.posting = false;
      this.topic = '';
      this.description = '';
      this.date = '';
      this.startTime = '';
      this.finishTime = '';
    },
  },
};
</script>
