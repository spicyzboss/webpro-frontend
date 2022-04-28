<template>
  <div>
    <NavLanding :user="user" />
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
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    };
  },
};
</script>
