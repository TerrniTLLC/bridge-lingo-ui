<script setup lang="ts">
import { ref, watch } from 'vue';
import { notify } from 'notiwind'

const formData = ref<string>('')
const isCopied = ref<boolean>(false)

const isLoading = ref<boolean>(false)

interface IResponse {
  code: number,
  data: string,
  message: string,
  source_lang: string,
  target_lang: string,
  alternatives: string[]
}
const translationData = ref<IResponse | null>(null)

watch(formData, () => {
  isCopied.value = false
  if (formData.value.length === 0) {
    translationData.value = null
  }
})

const copyToClipBoard = (text: string) => {
  navigator.clipboard.writeText(text);
  isCopied.value = true
}

const getData = async () => {
  isLoading.value = true
  await fetch('https://nw6usm5uha.us.aircode.run/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'text': formData.value,
      /* 'source_lang': 'zh',
      'target_lang': 'en' */
      'source_lang': 'en',
      'target_lang': 'zh'
    })
  }).then(res => res.json()).then((response) => {
    translationData.value = response
    isLoading.value = false
  }).catch((error) => {
    if (error) notify({ group: 'generic', type: 'error', title: 'Server Error 502', text: "Cant't get result from deepl translation" }, 4000)
    isLoading.value = false
  })
}

</script>

<template>
  <main class="dark:bg-main-dark bg-main text-white h-screen relative overflow-hidden">
    <section class="h-fit p-2 mx-3 mt-4 rounded-lg">
      <div class="bg-secondary dark:bg-secondary-dark rounded-lg p-3">
        <textarea v-model="formData"
          class="text-black dark:text-white font-medium bg-transparent border-none text-sm transition-all duration-150 ease-in rounded-lg focus:ring-accent focus:dark:ring-accent-dark w-full h-[260px] resize-none"
          placeholder="Type something. Let's magic happend.." />
        <div class="flex flex-col px-2 py-1 items-start">
          <span class="text-button my-2 block">{{ formData.length }} / 636</span>
          <button @click="copyToClipBoard(formData)" :class="[
            isCopied ? 'dark:text-green-300 border dark:border-green-300 dark:bg-green-300/20 hover:dark:bg-green-300/30 text-green-600 border-green-600 bg-green-600/30 hover:bg-green-500/20' : 'text-white border border-button'
          ]"
            class="text-xs w-fit bg-button hover:bg-button/80 duration-150 transiton-all ease-in px-2 py-1.5 rounded-lg flex gap-2 items-center">
            <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </g>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
                d="M19.548 7.267a2 2 0 1 0-3.096-2.533L8.666 14.25L6.2 12.4a2 2 0 0 0-2.4 3.2l3.233 2.425a3 3 0 0 0 4.122-.5l8.393-10.258Z" />
            </svg>
          </button>
        </div>
      </div>
      <button
        class="transition-all duration-150 ease-in mt-6 rounded-lg flex items-center justify-center text-center w-full font-bold py-3"
        :class="[(!formData && 'bg-accent/50 dark:bg-accent-dark/50 dark:text-zinc-600 text-zinc-300'), (formData && 'bg-accent dark:bg-accent-dark hover:dark:bg-accent-dark/70 hover:bg-accent/70 text-white dark:text-black'), (isLoading && 'dark:bg-zinc-400 dark:text-white bg-zinc-200 text-zinc-600 hover:dark:bg-zinc-500 hover:bg-zinc-300')]"
        @click="getData()" :disabled="!formData">
        <svg v-if="isLoading" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-600 fill-current"
          viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
            <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3"
              d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
            </path>
            <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
              <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                values="0 12 12;360 12 12" />
            </path>
          </g>
        </svg>
        <span v-else>
          Translate
        </span>
      </button>

    </section>
    <Transition name="slide-fade">
      <section class="h-fit p-2 mx-3 mt-4 rounded-lg" v-if="translationData">
        <h3 class="font-semibold text-black dark:text-white text-base mb-2">Translation to <span
            class="text-accent font-bold dark:text-accent-dark">Chinese</span>
        </h3>
        <div class="bg-secondary dark:bg-secondary-dark rounded-lg px-3 py-4 mb-4 flex items-center justify-between">
          <span>{{ translationData.data }}</span>
          <button @click="copyToClipBoard(translationData.data)"
            class="bg-button rounded-lg text-center flex items-center justify-center p-1.5 ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </g>
            </svg>
          </button>
        </div>

        <template v-if="translationData.alternatives && translationData.alternatives.length > 0">
          <h3 class="font-semibold text-black dark:text-white text-base mb-2">
            Alternatives
          </h3>
          <div
            class="bg-zinc-600/50 backdrop-blur-lg dark:bg-secondary-dark  border-2 border-dashed border-zinc-600 rounded-lg px-3 py-4 flex gap-x-3 items-center">
            <span v-for="(item, k) in translationData.alternatives" :key="k + item"
              class="text-zinc-300 dark:text-zinc-600">{{ `${k}): ` + item }}</span>
          </div>
        </template>

      </section>
    </Transition>
  </main>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
