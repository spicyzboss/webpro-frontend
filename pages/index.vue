<template>
  <div>
    <div v-if="!isObjectEmpty(user)">
      <p>{{ user }}</p>
    </div>
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
