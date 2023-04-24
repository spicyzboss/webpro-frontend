<template>
  <div :class="['select-none flex justify-start p-4 overflow-x-hidden', selected === user.id ? 'bg-blue-100' : 'cursor-pointer  bg-white hover:bg-gray-200']" @click="$emit('selected')">
    <img :src="user.profile_image" alt="profilepic" class="flex-shrink-0 object-cover rounded-full w-14 h-14">
    <div class="flex flex-col justify-center w-full ml-2">
      <p class="font-bold">
        {{ user.firstname }} {{ user.lastname }}
      </p>
      <div v-if="latestChat" class="flex w-full gap-2 text-gray-500 truncate">
        <p v-if="latestChat" class="truncate" style="max-width: 40%">
          {{ latestChat.content }}
        </p>
        <p>-</p>
        <p class="w-min">
          {{ relativeTime }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageUser',
  props: ['user', 'selected', 'chat'],
  computed: {
    latestChat() {
      const chat = this.chat.filter((v) => v.to === this.user.id || v.from === this.user.id) || [];
      return chat.length ? chat[chat.length - 1] : null;
    },
    relativeTime() {
      const msPerMinute = 60 * 1000;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerMonth = msPerDay * 30;
      const msPerYear = msPerDay * 365;

      if (!this.latestChat) return '';

      const elapsed = Date.now() - new Date(this.latestChat.created_at).getTime();

      if (elapsed < msPerMinute) {
        return 'seconds ago';
      }

      if (elapsed < msPerHour) {
        return `${Math.round(elapsed / msPerMinute)} minutes ago`;
      }

      if (elapsed < msPerDay) {
        return `${Math.round(elapsed / msPerHour)} hours ago`;
      }

      if (elapsed < msPerMonth) {
        return `${Math.round(elapsed / msPerDay)} days ago`;
      }

      if (elapsed < msPerYear) {
        return `${Math.round(elapsed / msPerMonth)} months ago`;
      }

      return `${Math.round(elapsed / msPerYear)} years ago`;
    },
  },
};
</script>
