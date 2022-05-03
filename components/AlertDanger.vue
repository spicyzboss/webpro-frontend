<template>
  <div v-if="message" class="z-10 max-w-lg p-4 mx-auto my-2 text-white bg-red-400 shadow rounded-xl">
    <div class="flex gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>
