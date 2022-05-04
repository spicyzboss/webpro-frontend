<template>
  <div class="relative z-10 max-w-xl mx-auto bg-white border rounded-lg xl:mt-4 xl:ml-4 xl:absolute drop-shadow-md">
    <div class="flex w-full p-3">
      <div class="flex w-full">
        <button class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-300" @click="toggleFilter = !toggleFilter">
          Filter By Interest
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 mt-1 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
    </div>
    <div
      v-if="toggleFilter"
      id="dropdown"
      class="absolute z-10 overflow-y-scroll bg-white divide-y divide-gray-100 rounded shadow h-28 w-44 dark:bg-gray-700"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="interestFilter = 'Dev'"
          >Dev</a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="interestFilter = 'Football'"
          >Football</a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="interestFilter = 'Photo'"
          >Photo</a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="interestFilter = 'Coffee'"
          >Coffee</a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="interestFilter = 'Party'"
          >Party</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleFilter: false,
      interestFilter: '',
    };
  },
};
</script>
