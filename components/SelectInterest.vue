<template>
  <div class="static z-0 w-full mt-4 bg-white border rounded-lg drop-shadow-md">
    <div class="flex w-full p-3">
      <div>
        <div
          v-for="(interest, index) in interestFilter"
          :key="interest.name"
          class="flex flew-row"
        >
          <div class="form-check">
            <input
              id="flexCheckDefault"
              class="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-indigo-700 checked:border-indigo-700 focus:outline-none"
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
        </div>
        <div class="flex justify-end w-full gap-4 mt-4">
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
            @click="createInterest"
          >
            Save
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
      interestId: [],
      condition: [],
      selectedList: [],
      selectedId: [],
    };
  },
  async created() {
    const request = await this.$axios.$get('/get_interest', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    this.interestFilter = [...request.interestName];
    this.condition = Array(this.interestFilter.length).fill(false);
  },
  methods: {
    insertToList(bname, index) {
      this.selectedList.push({ name: bname });
      this.condition[index] = true;
    },
    async createInterest() {
      const reqone = await this.$axios.$post(
        '/get_idbypost',
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

      this.selectedId = [...reqone.interestId];
      await this.$axios.$post(
        '/add_memberinterest',
        {
          id: this.$auth.user.id,
          interest: this.selectedId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      this.$router.push('/');
    },
  },
};
</script>
