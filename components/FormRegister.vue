<template>
  <div class="p-12 bg-white border shadow-xl rounded-xl">
    <div>
      <p class="text-5xl font-bold">
        Register
      </p>
    </div>
    <div v-if="stateCheck">
      <div class="mt-5">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="hello@emample.com"
          class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
        >
        <span class="hidden text-xs tracking-wide text-red-600">Email field is required </span>
      </div>
      <div class="mt-4">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="password"
          class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
        >
      </div>
      <div class="mt-4 flex flex-col items-center">
        <button class="w-2/3 h-12 mt-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-800 focus:bg-indigo-800" @click="isNext">
          next
        </button>
      </div>
    </div>
    <div v-if="!stateCheck">
      <div class="mt-5">
        <label for="fname">First Name</label>
        <input
          id="fname"
          v-model="fname"
          type="fname"
          name="fname"
          placeholder="first name"
          class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
        >
      </div>
      <div class="mt-5">
        <label for="fname">Last Name</label>
        <input
          id="lname"
          v-model="lname"
          type="text"
          name="lname"
          placeholder="last name"
          class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
        >
      </div>
      <div class="flex flex-row justify-between">
        <div class="mt-5 w-28">
          <label for="gender">Gender</label>
          <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba] text-center inline-flex items-center" type="button" @click="toggleDrop = !toggleDrop">
            {{ gender }}<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <!-- Dropdown menu -->
          <div v-if="toggleDrop" id="dropdown" class="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="selectGender('male')">Male</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="selectGender('female')">Female</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="selectGender('Other')">Other</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5 w-28">
          <label for="age">Age</label>
          <input
            id="age"
            v-model="age"
            type="number"
            name="age"
            placeholder=""
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6667ba]"
          >
        </div>
      </div>
      <div class="mt-4 flex flex-col items-center">
        <button class="w-2/3 h-12 mt-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-800 focus:bg-indigo-800">
          submit
        </button>
      </div>
      <div class="mt-1 flex flex-col items-center">
        <button class="w-2/3 h-12 mt-4 text-gray-500 transition-colors duration-150 bg-white border rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-gray-100" @click="stateCheck = !stateCheck">
          back
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      fname: '',
      lname: '',
      gender: 'male',
      age: '',
      stateCheck: true,
      toggleDrop: false,
    };
  },
  methods: {
    isNext() {
      this.stateCheck = false;
    },
    selectGender(gen) {
      this.gender = gen;
      this.toggleDrop = false;
    },
  },
};
</script>
