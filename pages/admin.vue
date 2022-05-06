<template>
  <div class="h-screen">
    <NavLanding />
    <div class="h-full pt-16">
      <div class="grid w-full h-full lg:grid-cols-4">
        <div class="hidden w-full h-full overflow-y-auto bg-gray-200 border-r border-gray-300 lg:block">
          <div :class="['relative w-auto max-w-sm m-4 border border-b rounded-lg cursor-pointer pointer-events-auto hover:bg-gray-500', showpage ? 'bg-gray-400':'bg-white']" @click="showpage = true">
            <div class="flex w-full p-3">
              <div class="flex w-full">
                <div class="flex flex-col w-3/4 ml-2">
                  <p class="text-xl font-bold">
                    Report
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div :class="['relative w-auto max-w-sm m-4 border border-b rounded-lg cursor-pointer pointer-events-auto hover:bg-gray-500', showpage ? 'bg-white':'bg-gray-400']" @click="showpage = false">
            <div class="flex w-full p-3">
              <div class="flex w-full">
                <div class="flex flex-col w-3/4 ml-2">
                  <p class="text-xl font-bold">
                    Black List
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showpage" class="flex flex-col items-center w-full h-full overflow-y-auto bg-gray-200 border lg:items-start lg:col-span-3">
          <div class="relative w-auto max-w-lg m-4 bg-white border border-b rounded-lg">
            <div class="flex w-full p-3">
              <div class="flex w-full">
                <div class="flex items-center justify-center overflow-hidden bg-gray-500 rounded-full w-14 h-14">
                  <img src="/profile.png" alt="profilepic">
                </div>
                <div class="flex flex-col w-3/4 ml-2">
                  <div class="w-[70%]">
                    <p class="text-lg font-bold">
                      Nathan Korlin
                    </p>
                  </div>
                  <div class="w-[100%]">
                    <p class="text-sm text-red-500">
                      Report : Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic dolorum et voluptatem saepe sunt, placeat cumque vitae maiores reprehenderit ullam impedit quas mollitia temporibus, at quos, beatae culpa! Labore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pb-14" />
            <div class="absolute inset-x-0 bottom-0 w-full h-12">
              <button class="w-full h-12 text-white bg-red-500 rounded-b-lg hover:bg-red-700">
                Black List
              </button>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col items-center w-full h-full overflow-y-auto bg-gray-200 border lg:items-start lg:col-span-3">
          <div class="relative w-1/4 m-4 bg-white border border-b rounded-lg">
            <div class="flex w-full p-3">
              <div class="flex w-full">
                <div class="flex items-center justify-center overflow-hidden bg-gray-500 rounded-full w-14 h-14">
                  <img src="/profile.png" alt="profilepic">
                </div>
                <div class="flex flex-col w-3/4 ml-2">
                  <div class="w-[70%]">
                    <p class="text-lg font-bold">
                      Nathan Korlin
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pb-14" />
            <div class="absolute inset-x-0 bottom-0 w-full h-12">
              <button class="w-full h-12 text-white bg-red-500 rounded-b-lg hover:bg-red-700">
                Unblacklist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showpage: true,
    };
  },
  async beforeCreate() {
    const admin = await this.$axios.$get('/get_admin');
    if (admin.status.code !== 200) {
      this.$router.push('/');
    }
  },
};
</script>
