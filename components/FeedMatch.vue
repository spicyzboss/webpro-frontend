<template>
  <di>
    <div
      v-for="(item, index) in itemAll"
      :key="item.id"
      class="
        static
        w-[80%]
        mt-4
        overflow-hidden
        bg-white
        border
        rounded-lg
        drop-shadow-md
      "
    >
      <div>
        <img :src="item.profile_image" alt="profilepic" class="w-full h-1/2" />
      </div>
      <div class="p-4">
        <p class="text-2xl">
          <span class="font-bold">Name:</span>
          {{ item.firstname }}&nbsp; &nbsp;{{ item.lastname }}
        </p>
        <!-- <p class="text-2xl">
          <span class="font-bold">Age:</span>
          21
        </p> -->
        <p class="text-2xl">
          <span class="font-bold">Gender:</span>
          {{ item.gender }}
        </p>
        <!-- <p class="text-2xl">
          <span class="font-bold">Interest:</span>
          <span class="p-1 m-1 bg-[#b66db0] rounded-2xl text-white"
            >Guitar</span
          >
        </p> -->
      </div>
      <div class="pb-14" />
      <div class="absolute inset-x-0 bottom-0 w-full h-12">
        <button
          :class="[
            'w-full h-12 text-white z-auto',
            checkInterested
              ? 'pointer-events-none bg-gray-300'
              : 'bg-[#6667ba] hover:bg-[#494a86]',
          ]"
          @click="addFriend(item.id, index)"
        >
          Interest
        </button>
      </div>
    </div>
  </di>
</template>
<script>
/* eslint-disable no-restricted-syntax */

export default {
  data() {
    return {
      checkInterested: false,
      userList: [],
      userItem: [],
      memberItem: [],
      itemAll: [],
      interestId: [],
      interestName: [],
      condition: [],
    };
  },
  async created() {
    const request = await this.$axios.$post(
      "/get_usameint",
      {
        id: this.$auth.user.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    this.userList = [...request.ListUser];
    const reqPic = await this.$axios.$post(
      "/get_profilebyid",
      {
        post: this.userList,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    this.userItem = [...reqPic.userPic];
    this.memberItem = [...reqPic.memberItem];
    for (const user of this.userList) {
      for (const item of this.userItem) {
        for (const member of this.memberItem) {
          if (
            user.id === item.id &&
            user.id === member.id &&
            item.id === member.id
          ) {
            this.itemAll.push({
              id: user.id,
              profile_image: item.profile_image,
              firstname: member.firstname,
              lastname: member.lastname,
              gender: member.gender,
            });
          }
        }
      }
      this.condition = Array(this.itemAll.length).fill(true);
      console.log(this.condition);
    }

    // const reqint = await this.$axios.$post(
    //   "/get_intbyid",
    //   {
    //     member: this.ListUser,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }
    // );
    // this.interestId = [...reqint.memeberInterest];
    // console.log(this.interestId);
  },
  methods: {
    async addFriend(idt, index) {
      await this.$axios.$post(
        "/add_match",
        {
          userid: this.$auth.user.id,
          id: idt,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      this.condition[index] = false;
      this.itemAll.splice(index, 1);
      console.log(this.itemAll);
    },
  },
};
</script>
