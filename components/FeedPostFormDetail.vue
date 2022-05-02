<template>
  <div class="mt-4 rounded-lg bg-white w-full border drop-shadow-md static">
    <div class="w-full flex p-3">
      <div class="flex">
        <div class="rounded-full h-10 w-10 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic">
        </div>
      </div>
      <div class="flex flex-col w-full p-2">
        <div class="ml-2 w-full">
            <input
                id="topic"
                v-model="topic"
                type="text"
                name="topic"
                placeholder="Topic..."
                class="bg-gray-100 text-gray-600 py-2 px-4 w-full text-left rounded-full"
            >
        </div>
        <div class="ml-2 mt-2 w-full">
            <textarea
                id="description"
                v-model="description"
                type="description"
                name="description"
                placeholder="Description..."
                class="resize-none bg-gray-100 h-16 text-gray-600 py-2 px-4 w-full text-left rounded-2xl"
            >
            </textarea>
        </div>
        <div class="ml-2 mt-1 w-full">
            <input
                id="date"
                v-model="date"
                type="date"
                name="date"
                placeholder="date"
                class="bg-gray-100 text-gray-600 py-2 px-4 w-full text-left rounded-full"
            >
        </div>
        <div class="ml-2 mt-2 w-full flex flex-row items-center">
            <div class="ml-2 mt-1 flex flex-row items-center mr-8">
                <p>StartTime:</p>
                <input
                    id="time"
                    v-model="time"
                    type="time"
                    name="time"
                    placeholder="time"
                    class="bg-gray-100 text-gray-600 py-2 px-4 w-full text-left rounded-full"
                >
            </div>
            <div class="ml-2 mt-1 flex flex-row items-center">
                <p>FinishTime:</p>
                <input
                    id="time"
                    v-model="time"
                    type="time"
                    name="time"
                    placeholder="time"
                    class="bg-gray-100 text-gray-600 py-2 px-4 w-full text-left rounded-full"
                >
            </div>
        </div>
        <div class="ml-2 mt-4 w-full flex justify-between">
            <div class="w-1/3">
                <button class="bg-[#6667ba] hover:bg-[#494a86] text-white py-2 px-4 w-full rounded-full">
                Post
                </button>
            </div>
            <div class="w-1/3">
                <button class="bg-gray-100 hover:bg-gray-300 text-gray-600 py-2 px-4 w-full rounded-full" @click="togglePost = true">
                Cancel
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
