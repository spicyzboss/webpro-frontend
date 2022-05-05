<template>
  <div class="static z-0 w-full mt-4 bg-white border rounded-lg drop-shadow-md">
    <div class="flex w-full p-3">
      <div class="flex">
        <div
          class="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-500 rounded-full "
        >
          <img src="/profile.png" alt="profilepic">
        </div>
      </div>
      <div v-if="!posting" class="w-full ml-2">
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
          @click="
            () => {
              openPostDetail();
            }
          "
        >
          What you want create a party
        </button>
      </div>
      <div v-else class="flex flex-col w-full px-2">
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
              select interest
            </button>
          </div>
        </div>
        <ul
          v-if="toggleFilter"
          id="dropdown"
          class="absolute z-10 overflow-y-scroll bg-white divide-y divide-gray-100 rounded shadow  h-28 w-44 dark:bg-gray-700"
        >
          <li v-for="(interest, index) in interestFilter" :key="interest.name">
            <div class="form-check">
              <input
                id="flexCheckDefault"
                class="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer  form-check-input checked:bg-indigo-700 checked:border-indigo-700 focus:outline-none"
                type="checkbox"
                :value="interest.name"
                :checked="condition[index] == true"
                @click="insertToList(interest.name, index)"
              >
              <label
                class="inline-block text-gray-800 form-check-label"
                for="flexCheckDefault"
              >
                {{ interest.name }}
              </label>
            </div>
          </li>
        </ul>
        <div class="w-full mt-2">
          <textarea
            ref="description"
            v-model="description"
            type="description"
            name="description"
            placeholder="Description..."
            class="
              w-full
              h-16
              px-4
              py-2
              text-left text-gray-600
              bg-gray-100
              resize-none
              placeholder:text-[#6B6B6B]
              rounded-xl
            "
          />
        </div>
        <div class="w-full">
          <input
            ref="date"
            v-model="date"
            type="date"
            name="date"
            placeholder="date"
            class="w-full px-4 py-2 text-left text-gray-600 bg-gray-100  rounded-xl"
          >
        </div>
        <div class="flex justify-end w-full gap-4 mt-4">
          <button
            class="text-gray-600 hover:underline"
            @click="cancelPostDetail"
          >
            Cancel
          </button>
          <button
            class="
              bg-[#6667ba]
              hover:bg-[#494a86]
              text-white
              py-2
              px-6
              rounded-full
              font-bold
            "
            @click="createPost"
          >
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
      toggleFilter: false,
      interestFilter: [],
      selectedList: [],
      condition: [],
      selectedId: [],
      description: '',
      date: '',
      posting: false,
    };
  },
  async created() {
    const request = await this.$axios.$get(
      // "http://localhost:5500/get_interest",
      'https://api.pattycommunity.com/get_interest',
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );

    this.interestFilter = [...request.interestName];

    this.condition = Array(this.interestFilter.length).fill(false);
  },
  methods: {
    openPostDetail() {
      this.posting = true;
    },
    cancelPostDetail() {
      this.posting = false;
      this.description = '';
      this.date = '';
    },
    insertToList(bname, index) {
      this.selectedList.push({ name: bname });
      this.condition[index] = true;
    },
    async createPost() {
      const reqone = await this.$axios.$post(
        'http://localhost:5500/get_idbypost',
        // "https://api.pattycommunity.com/get_idbypost",
        {
          interest: this.selectedList,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      console.log(reqone.interestId);
      this.selectedId = [...reqone.interestId];
      console.log(this.selectedId);
      const reqtwo = await this.$axios.$post(
        'http://localhost:5500/post',
        // "https://api.pattycommunity.com/post",
        {
          post_by: this.$auth.user.id,
          content: this.description,
          finish_at: new Date(this.date).toISOString(),
          interest: this.selectedId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      this.posting = false;
    },
  },
};
</script>
