<template>
 <div class="static z-0 w-full mt-4 bg-white border rounded-lg drop-shadow-md">
    <div class="flex w-full p-3">
      <div class="flex">
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
          class="absolute z-10 overflow-y-scroll bg-white divide-y divide-gray-100 rounded shadow h-28 w-44 dark:bg-gray-700"
        >
          <li v-for="(interest, index) in interestFilter" :key="interest.name">
            <div class="form-check">
              <input
                id="flexCheckDefault"
                class="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-indigo-700 checked:border-indigo-700 focus:outline-none"
                type="checkbox"
                :value="interest.name"
                :checked="condition[index] == true"
                @click="insertToList(interest.name, index)"
              />
              <label
                class="inline-block text-gray-800 form-check-label"
                for="flexCheckDefault"
              >
                {{ interest.name }}
              </label>
            </div>
          </li>
        </ul>
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
<script>


export default ({
    data() {
        return {
     toggleFilter: false,
      interestFilter: [],
        }
    },
    methods:{
        insertToList(bname, index) {
      this.selectedList.push({ name: bname });
      this.condition[index] = true;
    },
        async createInterest(){
            await this.$axios.$post(
        "/add_memberinterest",
        {
          id: this.$auth.user.id
          interest: 
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
        }
    }
    async created() {
    const request = await this.$axios.$get("/get_interest", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    this.interestFilter = [...request.interestName];

    this.condition = Array(this.interestFilter.length).fill(false);
    this.userImage = this.$auth.user.profile_image;
})
</script>
