<template>
  <div class="grid w-full h-full grid-cols-4">
    <div class="w-full overflow-y-scroll border border-r">
      <div class="w-auto col-auto m-4 bg-white border rounded-lg">
        <div class="flex w-full p-3">
          <div class="flex w-full">
            <input
              id="search"
              v-model="search"
              class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-200"
              type="search"
              name="search"
              placeholder="search"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mt-2 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full border border-b" />
      <div class="relative w-auto m-4 bg-white border border-b rounded-lg cursor-pointer pointer-events-auto hover:bg-gray-200">
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
              <div class="w-[70%]">
                <p class="text-gray-500 truncate">
                  kid ta mai taung
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="absolute top-0 right-0 m-3 text-gray-500">
          12:34
        </p>
      </div>
      <div class="relative w-auto m-4 bg-white border border-b rounded-lg cursor-pointer pointer-events-auto hover:bg-gray-200">
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
              <div class="w-[70%]">
                <p class="text-gray-500 truncate">
                  kid ta mai taung
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="absolute top-0 right-0 m-3 text-gray-500">
          12:34
        </p>
      </div>
    </div>
    <div class="relative hidden w-full h-full col-span-2 overflow-y-scroll border border-x xl:block">
      <div class="fixed z-10 flex items-center justify-between w-1/2 p-3 bg-white">
        <div class="flex items-center">
          <div class="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-500 rounded-full">
            <img src="/profile.png" alt="profilepic">
          </div>
          <div class="flex flex-col ml-4">
            <p class="text-2xl font-bold">
              Nathan Korlin
            </p>
          </div>
        </div>
        <svg class="h-6 cursor-pointer fill-current text-grey-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
      </div>
      <div class="pt-16" />
      <div class="flex flex-col w-full h-full overflow-y-scroll">
        <div class="flex justify-start mx-4 mt-4">
          <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-white rounded shadow">
            <span class="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div class="flex justify-end mx-4 mt-4">
          <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-white rounded shadow">
            <span class="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div class="flex justify-end mx-4 mt-4">
          <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-white rounded shadow">
            <span class="block">ok
            </span>
          </div>
        </div>
      </div>
      <div class="fixed inset-x-0 bottom-0 z-10 flex items-center justify-center w-1/2 p-3 mx-auto bg-white">
        <div class="flex items-center w-[95%]">
          <input
            id="message"
            v-model="message"
            class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-200"
            type="message"
            name="message"
            placeholder="message"
          >
        </div>
        <button class="w-[5%] ml-2 flex justify-center rounded-full hover:bg-gray-400">
          <svg
            class="h-8 transform rotate-90 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="relative hidden w-full h-full col-auto border border-l xl:block">
      <div class="relative w-auto max-w-sm m-4 bg-white border border-b rounded-lg cursor-pointer pointer-events-auto hover:bg-gray-200">
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
              <div class="w-[70%]">
                <p class="text-sm">
                  <span class="p-1 m-1 bg-[#b66db0] rounded-2xl text-white">Guitar</span><span class="p-1 m-1 bg-[#f3799e] rounded-2xl text-white">Football</span><span class="p-1 m-1 bg-[#ffc568] rounded-2xl text-white">Dev</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
