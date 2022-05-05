<template>
  <div>
    <NavLanding />
    <div class="pt-16">
      <div v-if="isObjectEmpty(user)">
        <LandingPage />
      </div>
      <div v-else>
        <div class="relative pb-4 bg-gray-100">
          <div class="h-2 xl:h-0" />
          <FeedFilter />
          <div class="flex flex-col h-full max-w-xl min-h-screen mx-auto">
            <FeedPostForm />
            <FeedPost />
          </div>
        </div>
        <div class="pb-4 bg-gray-100">
          <div
            class="flex flex-col items-center h-full max-w-xl min-h-screen mx-auto "
          >
            <FeedMatch />
          </div>
        </div>
      </div>
      <!-- <div v-else class="h-[96vh] pb-4 overflow-hidden bg-gray-100">
        <FeedChat />
      </div> -->
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
