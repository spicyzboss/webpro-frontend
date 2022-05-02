<template>
  <div>
    <NavLanding />
    <div class="pt-16">
      <div v-if="isObjectEmpty(user)">
        สวัสดีครับท่านสมาชิก
      </div>
      <div v-else class="pb-4 bg-gray-100">
        <div class="flex flex-col h-full max-w-xl mx-auto">
          <FeedPostForm />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </div>
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
    };
  },
  methods: {
    isObjectEmpty(obj) {
      return _.isEmpty(obj);
    },
  },
};
</script>
