<template>
  <div>
    <NavLanding />
    <div :class="['pt-16', isChat ? 'overflow-hidden h-screen':'']">
      <div v-if="isObjectEmpty(user)">
        สวัสดีครับท่านสมาชิก
      </div>
      <div v-else-if="false" class="relative pb-4 bg-gray-100 ">
        <div class="h-2 xl:h-0" />
        <FeedFilter />
        <div class="flex flex-col h-full max-w-xl min-h-screen mx-auto">
          <FeedPostForm />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </div>
      </div>
      <div v-else-if="0" class="pb-4 bg-gray-100">
        <div class="flex flex-col items-center h-full max-w-xl min-h-screen mx-auto">
          <FeedMatch />
          <FeedMatch />
          <FeedMatch />
          <FeedMatch />
          <FeedMatch />
        </div>
      </div>
      <div v-else class="h-[96vh] pb-4 overflow-hidden bg-gray-100">
        <FeedChat />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'IndexPage',
  auth: 'guest',
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
      isChat: true,
    };
  },
  methods: {
    isObjectEmpty(obj) {
      return _.isEmpty(obj);
    },
  },
};
</script>
