<template>
  <div class="h-screen">
    <NavLanding />
    <div class="h-full pt-16">
      <div class="grid w-full h-full lg:grid-cols-4">
        <div class="hidden w-full h-full overflow-y-auto bg-gray-200 border-r border-gray-300 lg:block">
          <div class="relative w-auto max-w-sm m-4 bg-white border border-b rounded-lg cursor-pointer pointer-events-auto hover:bg-gray-400">
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
        </div>
        <div class="flex flex-col items-center w-full h-full overflow-y-auto bg-gray-200 border lg:items-start lg:col-span-3">
          <AdminReport />
          <AdminReport />
          <AdminReport />
          <AdminReport />
          <AdminReport />
          <AdminReport />
        </div>
      </div>
    </div>
  </div>
</template>
