<template>
  <div class="h-screen">
    <NavLanding />
    <div class="flex justify-center mx-8 pt-28">
      <div class="hidden mr-16 lg:max-w-lg lg:block">
        <p class="text-4xl font-bold text-[#f3799e]">
          <span class="text-6xl text-[#6667ba]">Sometime</span> we don't want
          romantic relationship, we just want friend.<br><br><span
            class="text-6xl text-[#b66db0]"
          >But</span><span class="text-[#ffc568]"> sometimes it can't be forced.</span>
        </p>
      </div>
      <div>
        <FormRegister />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  auth: 'guest',
};
</script>
