<template>
  <div class="p-12 bg-white border shadow-xl rounded-xl">
    <AlertDanger :message="error" />
    <div v-if="stateCheck">
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="hello@emample.com"
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
      </div>
      <div class="relative mt-4">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          :type="showPassword ? 'password' : 'text'"
          name="password"
          placeholder="password"
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
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-3 mt-8 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="[showPassword ? 'block' : 'hidden', 'w-6 h-6']"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            @click="showPassword = !showPassword"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="[showPassword ? 'hidden' : 'block', 'w-6 h-6']"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            @click="showPassword = !showPassword"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </div>
      </div>
      <div class="relative mt-4">
        <label for="password">Confirm Password</label>
        <input
          id="confirmPassword"
          v-model="confirmPassword"
          :type="showConfirmPassword ? 'password' : 'text'"
          name="confirmPassword"
          placeholder="Confirm Password"
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
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-3 mt-8 text-sm leading-5 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="[showConfirmPassword ? 'block' : 'hidden', 'w-6 h-6']"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            @click="showConfirmPassword = !showConfirmPassword"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="[showConfirmPassword ? 'hidden' : 'block', 'w-6 h-6']"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            @click="showConfirmPassword = !showConfirmPassword"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-col items-center mt-4">
        <button
          class="w-2/3 h-12 mt-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-800 focus:bg-indigo-800"
          @click="checkRegFirst"
        >
          Next
        </button>
      </div>
    </div>
    <div v-if="!stateCheck">
      <div>
        <label for="fname">First Name</label>
        <input
          id="fname"
          v-model="fname"
          type="fname"
          name="fname"
          placeholder="John"
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
      </div>
      <div class="mt-5">
        <label for="fname">Last Name</label>
        <input
          id="lname"
          v-model="lname"
          type="text"
          name="lname"
          placeholder="Mayer"
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
      </div>
      <div class="flex flex-row justify-between">
        <div class="mt-5 w-36">
          <label for="gender">Gender</label>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            class="
              w-full
              px-4
              py-2
              mt-2
              border
              rounded-md
              focus:outline-none focus:ring-2 focus:ring-[#6667ba]
              text-center
              inline-flex
              items-center
              justify-between
            "
            type="button"
            @click="toggleDrop = !toggleDrop"
          >
            {{ gender
            }}<svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            v-if="toggleDrop"
            id="dropdown"
            class="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="selectGender('MALE')"
                >Male</a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="selectGender('FEMALE')"
                >Female</a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="selectGender('OTHER')"
                >Other</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5 w-36">
          <label for="age">Birth Date</label>
          <input
            id="birthday"
            v-model="birthday"
            type="date"
            name="birthday"
            placeholder=""
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
        </div>
      </div>
      <div class="w-full mt-5">
        <label for="image">Upload Profile Image</label>
        <input
          ref="image"
          type="file"
          accept="image/*"
          name="image"
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
      </div>
      <div class="flex flex-col items-center mt-4">
        <button
          class="w-2/3 h-12 mt-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-800 focus:bg-indigo-800"
          @click="
            () => {
              checkRegLast();
              register();
            }
          "
        >
          Submit
        </button>
      </div>
      <div class="flex flex-col items-center mt-1">
        <button
          class="w-2/3 h-12 mt-4 text-gray-500 transition-colors duration-150 bg-white border rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-gray-100"
          @click="stateCheck = !stateCheck"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createHash } from 'crypto';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      fname: '',
      lname: '',
      gender: 'MALE',
      birthday: '',
      image: null,
      stateCheck: true,
      toggleDrop: false,
      error: '',
      showPassword: true,
      showConfirmPassword: true,
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
    alertMessage(msg) {
      this.error = msg;
      new Promise((resolve) => {
        setTimeout(resolve, 5000);
      }).then(() => {
        this.error = '';
      });
    },
    async checkRegFirst() {
      if (this.email === '') {
        this.alertMessage('Please enter your email.');
      } else {
        const request = await this.$axios.$post(
          '/check_email',
          {
            email: this.email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        if (request.status.code === 400) {
          this.alertMessage(request.status.message);
        }
      }
      if (this.password === '') {
        this.alertMessage('Please enter your password.');
      } else if (this.confirmPassword === '') {
        this.alertMessage('Please enter confirm password.');
      } else if (this.confirmPassword.length < 8) {
        this.alertMessage('Please enter a password of more than 8 characters.');
      } else if (this.password !== this.confirmPassword) {
        this.alertMessage('Confirmed password is incorrect.');
      } else {
        this.isNext();
      }
    },
    checkRegLast() {
      if (this.fname === '') {
        this.alertMessage('Please enter your first name.');
      } else if (this.lname === '') {
        this.alertMessage('Please enter your last name.');
      } else if (this.birthday === '') {
        this.alertMessage('Please enter your birth date.');
      }
    },
    async register() {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append(
        'password',
        createHash('md5').update(this.password).digest('hex'),
      );
      formData.append('firstname', this.fname);
      formData.append('lastname', this.lname);
      formData.append('gender', this.gender);
      formData.append('profile_image', this.$refs.image.files[0]);
      formData.append('birth_date', new Date(this.birthday).toISOString());
      const request = await this.$axios.$post('/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (request.status.code === 200) {
        this.$router.push('/');
      } else {
        this.error = request.status.message;
        new Promise((resolve) => {
          setTimeout(resolve, 3000);
        }).then(() => {
          this.error = '';
        });
      }
    },
  },
};
</script>
