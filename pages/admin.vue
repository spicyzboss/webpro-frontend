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
          <ReportCard v-for="rp in report" :key="rp.id" :report="rp" @ban="ban(rp.id, rp.content)" />
        </div>
        <div v-else class="flex flex-col items-center w-full h-full overflow-y-auto bg-gray-200 border lg:items-start lg:col-span-3">
          <BlackListCard v-for="list in blacklist" :key="list.id" :member="list" @unban="unban(list.id)" />
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
      blacklist: [],
      report: [],
    };
  },
  async beforeCreate() {
    const admin = await this.$axios.$get('/get_admin');
    if (admin.status.code !== 200) {
      this.$router.push('/');
    }
  },
  async beforeMount() {
    this.getBlacklist();

    this.getReport();
  },
  methods: {
    unban(id) {
      this.$axios.$delete(`/blacklist/${id}`).then((res) => {
        if (res.status.code === 200) {
          this.blacklist = this.blacklist.filter((list) => list.id !== id);
        }
      });
    },
    ban(id, reason) {
      this.$axios.$post('/ban', {
        member_id: id,
        reason,
      }).then((res) => {
        if (res.status.code === 200) {
          this.$nextTick(() => {
            this.getBlacklist();
          });
        }
      });
    },
    async getBlacklist() {
      const blacklist = await this.$axios.$get('/get_blacklists');
      if (blacklist.status.code === 200) {
        this.blacklist = blacklist.blacklists;
      }
    },
    async getReport() {
      const report = await this.$axios.$get('/reports');
      if (report.status.code === 200) {
        this.report = report.reports;
      }
    },
  },
};
</script>
