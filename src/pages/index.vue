<script setup lang="ts">
import { ref, watch } from 'vue';
import { notify } from 'notiwind'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const formData = ref<string>('')
const isCopied = ref<boolean>(false)

const isLoading = ref<boolean>(false)

const languages = [
  { title: 'English', code: 'en' },
  { title: 'Chinese', code: 'zh' },
  { title: 'Korean', code: 'ko' },
  { title: 'Russian', code: 'ru' }
]
const targetLang = ref(languages[0])
const sourceLang = ref(languages[1])

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
  if (formData.value.length === 0) {
    translationData.value = null
  }
})

const copyToClipBoard = (text: string) => {
  if (text) {
    navigator.clipboard.writeText(text);
    notify({ group: 'generic', type: 'modest', title: 'Copied!', text: `Text in buffer: ${text}` }, 3000)
  }
}

const getData = async () => {
  isLoading.value = true
  if (!sourceLang.value.code && !targetLang.value.code) return
  await fetch('https://nw6usm5uha.us.aircode.run/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'text': formData.value,
      'source_lang': sourceLang.value.code,
      'target_lang': targetLang.value.code
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
      <div class="flex gap-x-2 w-full mb-3">
        <Listbox v-model="sourceLang" class="w-1/2">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-lg dark:bg-black/50 bg-white/50 dark:text-white text-black shadow-lg backdrop-blur-sm border border-zinc-700 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark sm:text-sm">
              <span class="block truncate">{{ sourceLang.title }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md  shadow-lg backdrop-blur-sm border border-zinc-700 dark:bg-black/50 bg-white/50 py-1 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="item in languages" :key="item.title" :value="item"
                  :disabled="item.code === targetLang.code" as="template">
                  <li :class="[
                    active ? 'bg-zinc-400/80 dark:bg-secondary/10 dark:text-zinc-300 text-zinc-900' : 'text-zinc-900 dark:text-zinc-600',
                    'relative cursor-default select-none py-2 pl-10 pr-4 duration-150 transition-all ease-linear',
                    item.code === targetLang.code ? 'dark:bg-green-300/10 border dark:border-green-700/30 text-green-600 bg-green-600/20 border-green-400' : '',
                  ]">
                    <span :class="[
                      selected ? 'font-medium' : 'font-normal',
                      item.code === targetLang.code ? 'text-green-800 line-through' : '',
                      'block truncate'
                    ]">{{ item.title }}</span>
                    <span v-if="item.code === targetLang.code"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <svg class="h-4 w-4 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="m10.6 16.2l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z">
                        </path>
                      </svg>
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox v-model="targetLang" class="w-1/2">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-lg dark:bg-black/50 bg-white/50 dark:text-white text-black shadow-lg backdrop-blur-sm border border-zinc-700 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark sm:text-sm">
              <span class="block truncate">{{ targetLang.title }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md  shadow-lg backdrop-blur-sm border border-zinc-700 dark:bg-black/50 bg-white/50 py-1 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="item in languages" :key="item.title" :value="item"
                  :disabled="item.code === sourceLang.code" as="template">
                  <li :class="[
                    active ? 'bg-zinc-400/80 dark:bg-secondary/10 dark:text-zinc-300 text-zinc-900' : 'text-zinc-900 dark:text-zinc-600',
                    'relative cursor-default select-none py-2 pl-10 pr-4 duration-150 transition-all ease-linear',
                    item.code === sourceLang.code ? 'dark:bg-green-300/10 border dark:border-green-700/30 text-green-600 bg-green-600/20 border-green-400' : '',
                  ]">
                    <span :class="[
                      selected ? 'font-medium' : 'font-normal',
                      item.code === sourceLang.code ? 'text-green-800 line-through' : '',
                      'block truncate',
                    ]">{{ item.title }}</span>
                    <span v-if="item.code === sourceLang.code"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <svg class="h-4 w-4 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="m10.6 16.2l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z">
                        </path>
                      </svg>
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div class="bg-secondary dark:bg-secondary-dark rounded-lg p-3">
        <textarea v-model="formData"
          class="text-black dark:text-white font-medium bg-transparent border-none text-sm transition-all duration-150 ease-in rounded-lg focus:ring-accent focus:dark:ring-accent-dark w-full h-[260px] resize-none"
          placeholder="Type something. Let's magic happend.." />
        <div class="flex flex-col px-2 py-1 items-start">
          <span class="text-button my-2 block">{{ formData.length }} / 636</span>
          <div class="flex w-full gap-x-3">
            <button @click="copyToClipBoard(formData)"
              class="text-xs w-fit bg-button hover:bg-button/80 duration-150 transiton-all ease-in px-2 py-1.5 rounded-lg flex gap-2 items-center">
              <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">
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

            <!-- TODO: Create page of saved translations and in notify show that pair when copy -->
            <button
              @click="notify({ group: 'generic', type: 'modest', title: 'Saved!', text: 'Pair of this translation added to list' }, 3000)"
              class="text-xs w-fit bg-button hover:bg-button/80 duration-150 transiton-all ease-in px-2 py-1.5 rounded-lg flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20">
                <path fill="currentColor"
                  d="M2 3.5a1.5 1.5 0 0 0 1 1.415v6.17A1.5 1.5 0 1 0 4.915 13H7v2.085A1.5 1.5 0 1 0 8.915 17h6.17A1.5 1.5 0 1 0 17 15.085v-6.17A1.5 1.5 0 1 0 15.085 7H13V4.915A1.5 1.5 0 1 0 11.085 3h-6.17A1.5 1.5 0 0 0 2 3.5ZM8.915 16A1.504 1.504 0 0 0 8 15.085V13h3.085A1.5 1.5 0 1 0 13 11.085V8h2.085c.151.426.489.764.915.915v6.17a1.508 1.508 0 0 0-.915.915h-6.17ZM4 11.085v-6.17c.426-.151.764-.489.915-.915h6.17c.151.426.489.764.915.915V7H8.915A1.5 1.5 0 1 0 7 8.915V12H4.915A1.504 1.504 0 0 0 4 11.085Zm8 0a1.508 1.508 0 0 0-.915.915H8V8.915c.426-.151.764-.489.915-.915H12v3.085Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button
        class="transition-all duration-150 ease-in mt-6 rounded-lg flex items-center justify-center text-center w-full font-bold py-4"
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
          <span class="text-black dark:text-white">{{ translationData.data }}</span>
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
            class="bg-zinc-600/50 backdrop-blur-lg dark:bg-secondary-dark  border-2 border-dashed border-zinc-600 rounded-lg px-3 py-4 flex gap-x-3 flex-wrap items-center">
            <span v-for="(item, k) in translationData.alternatives" :key="k + item"
              class="text-zinc-500/90 dark:text-zinc-600">{{ `${k}): ` + item }}</span>
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
