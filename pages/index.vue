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
    <div class="h-screen bg-gray-100">
      <div class="h-max bg-white">
        <NavFeed />
      </div>
      <div class="h-[90vh] my-0 p-5 max-w-xl mx-auto flex flex-col overflow-y-scroll">
        <div>
          <FeedPost />
        </div>
        <div>
          <FeedPost />
        </div><div>
          <FeedPost />
        </div><div>
          <FeedPost />
        </div><div>
          <FeedPost />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
