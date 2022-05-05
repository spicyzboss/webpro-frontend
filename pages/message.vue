<template>
  <div class="h-screen">
    <NavLanding />
    <div class="h-full pt-16">
      <div class="grid w-full h-full xl:grid-cols-4">
        <div class="hidden w-full h-full overflow-y-auto xl:block">
          <div class="flex w-full p-4 border-b">
            <div class="flex w-full">
              <input
                v-model="search"
                class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-200"
                type="text"
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
          <div class="flex flex-col h-full overflow-y-scroll">
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[1]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
            <MessageUser :user="user[0]" />
          </div>
        </div>
        <div class="flex flex-col w-full h-full overflow-y-auto border xl:col-span-2">
          <div class="flex items-center justify-between p-3 bg-white">
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
          <div class="flex flex-col w-full h-full pb-4 overflow-y-scroll">
            <ReceiveMessage>Haha</ReceiveMessage>
            <SentMessage>Huh?</SentMessage>
            <SentMessage>Ok</SentMessage>
            <ReceiveMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic dolorum et voluptatem saepe sunt, placeat cumque vitae maiores reprehenderit ullam impedit quas mollitia temporibus, at quos, beatae culpa! Labore?</ReceiveMessage>
            <SentMessage>กระสุนที่เจ้าหน้าที่ใช้คือภาษีผม ผมมีสิทธิ ผมอนุญาติครับ</SentMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
            <ReceiveMessage>กระสุนยางก็มีล็อคเป่ายิงเลยเอาให้มันเข็ดขยาดหลาบจำ ดูต่างประเทศจัดการซะอยู่หมัดเอาให้เดี้ยง</ReceiveMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
            <SentMessage>ห้ามวิจารณ์ 112</SentMessage>
          </div>
          <div class="flex items-center justify-center w-full p-4 bg-white">
            <div class="flex items-center w-full">
              <input
                v-model="message"
                class="w-full px-4 py-2 text-left text-[#6B6B6B] bg-gray-100 rounded-xl hover:bg-gray-200"
                type="text"
                name="message"
                placeholder="Aa"
              >
            </div>
            <button class="flex justify-center ml-2 focus:outline-none focus:text-gray-400 hover:text-gray-400">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      message: '',
      user: [
        {
          profile: 'https://pattycommunity.s3.ap-southeast-1.amazonaws.com/user_profile/astro-1000.png',
          firstname: 'spicyzboss',
          lastname: '',
          lastMessage: 'haha',
          lastMessageTime: '1:00',
        },
        {
          profile: 'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/275950453_4805844002865911_267556758348887507_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHcfioX67rgj0CRuRLggZAX0KNravllLXfQo2tq-WUtd9xkq4shKIQ9-NvFyP1a1rDbwHpwDFQ84vjpkNiV9ebT&_nc_ohc=qo2khDOwCiIAX-Ub1eI&_nc_ht=scontent-sin6-2.xx&oh=00_AT9JjRdsi0D8MBzxn6UQsoBBGgprwLmWo922lFElmRfLLw&oe=62783C5B',
          firstname: 'Chaowat',
          lastname: 'Intarapanit',
          lastMessage: 'กินข้าวยังอ่ะ',
          lastMessageTime: '10:20',
        },
      ],
    };
  },
};
</script>
