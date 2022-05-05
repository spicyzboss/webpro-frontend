<template>
  <div
    class="relative z-10 max-w-xl mx-auto bg-white border rounded-lg  xl:mt-4 xl:ml-4 xl:absolute drop-shadow-md"
  >
    <div class="flex w-full p-3">
      <div class="flex w-full">
        <button
          class="
            w-full
            px-4
            py-2
            text-left text-[#6B6B6B]
            bg-gray-100
            rounded-xl
            hover:bg-gray-300
          "
          @click="toggleFilter = !toggleFilter"
        >
          Filter By Interest
        </button>
      </div>
    </div>
    <ul
      v-if="toggleFilter"
      id="dropdown"
      class="absolute z-10 overflow-y-scroll bg-white divide-gray-100 rounded shadow  ulide-y h-28 w-44 dark:bg-gray-700"
    >
      <li v-for="interest in interestFilter" :key="interest.name">
        <a
          href="#"
          class="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          @click="selected(interest)"
        >{{ interest.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleFilter: false,
      interestFilter: [],
      interestSelected: '',
    };
  },
  async created() {
    const request = await this.$axios.$get(
      // "http://localhost:5500/get_interest",
      'https://api.pattycommunity.com/get_interest',
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    this.interestFilter = [...request.interestName];
  },
  methods: {
    selected(itr) {
      this.interestSelected = itr.name;
    },
  },
};
</script>
