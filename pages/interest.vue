<template>
  <div class="h-screen">
    <NavLanding />
    <div class="h-full pt-16">
      <div class="grid w-full h-full grid-cols-2">
        <div class="w-full h-full overflow-y-auto bg-gray-200 border-r border-gray-300">
          <div class="flex flex-col items-center w-full h-full">
            <div class="static w-[70%] mt-4 overflow-hidden bg-white border rounded-lg drop-shadow-md">
              <div>
                <img src="/profile.png" alt="profilepic" class="w-full h-1/2">
              </div>
            </div>
            <div class="w-[70%] p-4 mt-3 rounded-md flex justify-center items-center bg-white">
              <p class="text-2xl">
                John Mayer
              </p>
            </div>
            <div class="w-[70%] mt-3 rounded-md flex justify-center items-center">
              <button class="p-4 w-1/2 rounded-xl text-xl text-white hover:bg-[#414276] bg-[#6667ba]">
                Save
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full h-full bg-gray-200 border">
          <div class="w-[70%] p-4 mt-3 rounded-md flex flex-col items-center bg-white">
            <div class="relative w-full h-12 m-2 bg-white border border-b rounded-lg">
              <div class="flex w-full p-3">
                <div class="flex w-full">
                  <div class="max-w-sm mx-auto">
                    <label class="inline-flex items-center">
                      <input class="w-4 h-4 mr-2 text-indigo-500 border border-gray-300 rounded focus:ring-indigo-400 focus:ring-opacity-25" type="checkbox">
                      Interest
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
