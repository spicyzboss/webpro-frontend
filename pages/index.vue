<template>
  <div>
    <div v-if="false">
      <div class="h-max bg-white">
        <NavLanding />
      </div>
      <div class="h-[60vh] mx-auto bg-white flex justify-center items-center">
        <HelloWorld />
      </div>
      <div class="h-[60vh] mx-auto bg-gray-100 flex justify-center items-center">
        <HelloWorld />
      </div>
      <div class="h-[60vh] mx-auto bg-white flex justify-center items-center">
        <HelloWorld />
      </div>
    </div>
    <div class="h-full bg-gray-100">
      <div class="h-max bg-white fixed top-0 inset-x-0 z-50">
        <NavFeed />
      </div>
      <div class="h-full p-5 mt-12 max-w-xl mx-auto flex flex-col">
        <FeedPostForm v-if="togglePost" />
        <FeedPostFormDetail v-if="!togglePost"/>
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      togglePost: true,
    };
  },
};
</script>
