<template>
  <div class="h-screen overflow-y-hidden">
    <NavLanding />
    <div class="pt-16" />
    <div>
      <div class="flex flex-col items-center h-full max-w-lg min-h-screen mx-auto">
        <FeedPayment />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$auth.user.premium) {
      this.$router.push('/');
    }
  },
};
</script>
