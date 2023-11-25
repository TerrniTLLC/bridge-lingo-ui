<script setup lang="ts">
</script>

<template>
  <main class="bg-main text-white h-screen relative">
    <nav class="bg-main/80 backdrop-blur-lg sticky top-0 py-3 px-3 z-20 text-white">
      <div class="flex justify-between items-center">
        <button
          class="h-10 w-10 bg-secondary transition-all duration-150 ease-in hover:bg-zinc-900 rounded-lg justify-center items-center flex text-xl text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height=" 26px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 6h18M3 12h18M3 18h18"></path>
          </svg>
        </button>
        <h1 class="font-bold">BridgeLingo</h1>
        <button
          class="h-10 w-10 bg-secondary transition-all duration-150 ease-in hover:bg-zinc-900 rounded-lg justify-center items-center flex text-xl text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M0 0h24v24H0z" />
              <path fill="currentColor"
                d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34zm-1.051 6.844a1 1 0 0 0-1.152-.663l-.113.03l-2.684.895l-2.684-.895l-.113-.03a1 1 0 0 0-.628 1.884l.109.044L11 12.22v.976l-1.832 2.75l-.06.1a1 1 0 0 0 .237 1.21l.1.076l.101.06a1 1 0 0 0 1.21-.237l.076-.1L12 15.303l1.168 1.752l.07.093a1 1 0 0 0 1.653-1.102l-.059-.1L13 13.196v-.977l2.316-.771l.109-.044a1 1 0 0 0 .524-1.221zM12 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" />
            </g>
          </svg>

        </button>
      </div>
      <span class="text-sm mt-4 block font-semibold">
        You got this, babe~ ! / 你能行的，宝贝~ ！
      </span>

    </nav>
    <section class="bg-secondary h-[80vh] p-3 mx-3 mt-4 rounded-lg">
      <textarea
        class="text-white bg-secondary border-none text-sm transition-all duration-150 ease-in rounded-lg focus:ring-accent w-full h-[260px]"
        placeholder="Type something. Let's magic happend.." />
    </section>
  </main>
</template>

