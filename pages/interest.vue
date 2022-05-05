<template>
  <div class="h-screen">
    <NavLanding />
    <div class="h-full pt-16">
      <div class="grid w-full h-full grid-cols-4">
        <div class="w-full h-full col-span-2 overflow-y-auto bg-gray-200 border-r border-gray-300">
          <div class="relative flex items-center justify-center w-full h-12 bg-white border border-b">
            <div class="flex items-center justify-between w-full">
              <p class="text-xl font-bold">
                Interest
              </p>
              <button class="flex items-center justify-center h-8 w-14 p-2 m-2 rounded-lg text-white bg-[#6667ba] hover:bg-[#494a86]">
                Save
              </button>
            </div>
          </div>
          <div class="relative w-auto m-4 bg-white border border-b rounded-lg hover:bg-gray-400">
            <div class="flex w-full p-3">
              <div class="flex w-full">
                <div class="flex flex-col w-3/4 ml-2">
                  <p class="text-xl">
                    Selected
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative w-auto m-4 bg-white border border-b rounded-lg hover:bg-gray-400">
            <div class="flex w-full p-3">
              <div class="flex w-full">
                <div class="flex flex-col w-3/4 ml-2">
                  <p class="text-xl">
                    Selected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full h-full col-span-2 overflow-y-auto bg-gray-200 border">
          <SelectInterest />
          <SelectInterest />
          <SelectInterest />
          <SelectInterest />
          <SelectInterest />
        </div>
      </div>
    </div>
  </div>
</template>
