<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useDark, useToggle } from '@vueuse/core'
import { useWebAppTheme, useWebApp } from 'vue-tg';
import { notify } from 'notiwind';

const variants: { label: string, value: string, icon: string }[] = [
  {
    label: 'Chinese',
    icon: '',
    value: 'ch'
  },
  {
    label: 'Korean',
    icon: '',
    value: 'ko'
  },
  {
    label: 'English',
    icon: '',
    value: 'ru'
  }
]

const { setHeaderColor } = useWebAppTheme()
const { isReady } = useWebApp()

const isDark = useDark()

const toggleDark = useToggle(isDark)

const selected = ref<{ label: string, value: string, icon: string }>(variants[0])
const isOpenMenu = ref<boolean>(false)
const isOpenFeatures = ref<boolean>(false)

onMounted(() => {
  if (isReady) {
    if (isDark.value) {
      setHeaderColor('#111111')
    } else {
      setHeaderColor('#f1f1f1')
    }
  }
})
</script>

<template>
  <nav class="dark:bg-main-dark/[98] bg-main/80 dark:text-white text-zinc-700 backdrop-blur-xl sticky top-0 py-3 z-20">
    <div class="flex justify-between items-center px-3">
      <button @click="isOpenFeatures = false; isOpenMenu = !isOpenMenu"
        class="h-10 w-10 dark:bg-secondary-dark bg-secondary transition-all duration-150 ease-in hover:dark:bg-zinc-900 hover:bg-zinc-400 rounded-lg justify-center items-center flex text-xl text-center">
        <Transition name="slide-up" mode="out-in">
          <svg v-if="!isOpenMenu" xmlns="http://www.w3.org/2000/svg" width="24px" height="26px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 6h18M3 12h18M3 18h18"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
          </svg>
        </Transition>
      </button>
      <h1 class="font-bold">
        <!-- 你能行的，宝贝~ ！ -->
        BridgeLingo
      </h1>
      <button @click="isOpenMenu = false; isOpenFeatures = !isOpenFeatures"
        class="h-10 w-10 dark:bg-secondary-dark bg-secondary transition-all duration-150 ease-in hover:dark:bg-zinc-900 hover:bg-zinc-400 rounded-lg justify-center items-center flex text-xl text-center">
        <Transition name="slide-up" mode="out-in">
          <svg v-if="!isOpenFeatures" xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M0 0h24v24H0z" />
              <path fill="currentColor"
                d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34zm-1.051 6.844a1 1 0 0 0-1.152-.663l-.113.03l-2.684.895l-2.684-.895l-.113-.03a1 1 0 0 0-.628 1.884l.109.044L11 12.22v.976l-1.832 2.75l-.06.1a1 1 0 0 0 .237 1.21l.1.076l.101.06a1 1 0 0 0 1.21-.237l.076-.1L12 15.303l1.168 1.752l.07.093a1 1 0 0 0 1.653-1.102l-.059-.1L13 13.196v-.977l2.316-.771l.109-.044a1 1 0 0 0 .524-1.221zM12 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" />
            </g>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
          </svg>
        </Transition>
      </button>
    </div>
    <div v-if="isOpenMenu"
      class="bg-main/95 border-b border-zinc-600 dark:bg-main-dark/95 backdrop-blur-sm absolute w-full h-fit min-h-[90vw] top-[56px] left-0 px-4">
      <div class="mx-auto w-full rounded-2xl mt-4">
        <router-link to="/" @click="isOpenMenu = false"
          class="flex w-full rounded-lg bg-secondary dark:bg-secondary-dark px-2 py-2 text-left text-md font-medium text-black dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent/75 focus-visible:dark:ring-accent-dark/75">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-zinc-300 mr-2"
            viewBox="0 0 256 256">
            <g fill="currentColor">
              <path
                d="M216 115.54V208a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-92.46a8 8 0 0 1 2.62-5.92l80-75.54a8 8 0 0 1 10.77 0l80 75.54a8 8 0 0 1 2.61 5.92Z"
                opacity=".2" />
              <path
                d="m218.83 103.77l-80-75.48a1.14 1.14 0 0 1-.11-.11a16 16 0 0 0-21.53 0l-.11.11l-79.91 75.48A16 16 0 0 0 32 115.55V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-92.45a16 16 0 0 0-5.17-11.78ZM208 208H48v-92.45l.11-.1L128 40l79.9 75.43l.11.1Z" />
            </g>
          </svg>
          <span>Home</span>
        </router-link>
        <Disclosure as="div" class="mt-3" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full rounded-lg hover:bg-secondary hover:dark:bg-secondary-dark transition-all duration-150 ease-in px-2 py-2 text-left text-md font-medium text-black dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent/75 focus-visible:dark:ring-accent-dark/75">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-zinc-300 mr-2"
              :class="open ? 'rotate-180 transform' : ''" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z" />
            </svg>
            <span>Features</span>
          </DisclosureButton>
          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <DisclosurePanel class="px-4 pt-4 text-sm text-gray-500">
              <router-link to="/"
                @click="notify({ group: 'generic', type: 'warning', title: 'Ops! Something went wrong', text: 'This feature is in development' }, 2000); isOpenMenu = false"
                class="flex w-full rounded-lg hover:bg-secondary mt-1 hover:dark:bg-secondary-dark transition-all durations-150 ease-in px-3 py-2 items-center text-center text-md font-medium text-black dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent/75 focus-visible:dark:ring-accent-dark/75">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-zinc-300 mr-3"
                  viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path d="M200 72v112a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
                      opacity=".2" />
                    <path
                      d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7ZM192 184H32V72h160v112Zm48-22.95l-32-21.33v-23.44L240 95Z" />
                  </g>
                </svg>
                <span>Movie list</span>
              </router-link>
              <router-link to="/"
                @click="notify({ group: 'generic', type: 'warning', title: 'Ops! Something went wrong', text: 'This feature is in development' }, 2000); isOpenMenu = false"
                class="flex w-full rounded-lg hover:bg-secondary mt-1 hover:dark:bg-secondary-dark transition-all durations-150 ease-in px-3 py-2 items-center text-center text-md font-medium text-black dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent/75 focus-visible:dark:ring-accent-dark/75">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-zinc-300 mr-3"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56c-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4a7.987 7.987 0 0 0 4.33 3.56A15.65 15.65 0 0 1 8.03 16H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8a8.03 8.03 0 0 0-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4A8.03 8.03 0 0 0 18.92 16h-2.95a15.65 15.65 0 0 1-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z"
                    opacity=".3" />
                  <path fill="currentColor"
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                </svg>
                <span>Saved translations</span>
              </router-link>

              <router-link to="/"
                @click="notify({ group: 'generic', type: 'warning', title: 'Ops! Something went wrong', text: 'This feature is in development' }, 2000); isOpenMenu = false"
                class="flex w-full rounded-lg hover:bg-yellow-400/30 mt-1 hover:dark:bg-yellow-400/20 transition-all durations-150 ease-in px-3 py-2 items-center text-center text-md font-medium text-black dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent/75 focus-visible:dark:ring-accent-dark/75">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 dark:text-yellow-400 ml-0.5 mr-4"
                  viewBox="0 0 24 24">
                  <g fill="none">
                    <path fill="currentColor"
                      d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873L12 2Z"
                      opacity=".16" />
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                      d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873L12 2Z" />
                  </g>
                </svg>
                <span class="text-yellow-500 dark:text-yellow-400">Easter egg</span>
              </router-link>
            </DisclosurePanel>
          </transition>
        </Disclosure>

        <router-link to="/help" @click="isOpenMenu = false"
          class="flex w-full rounded-lg hover:bg-secondary mt-3 hover:dark:bg-secondary-dark transition-all duration-150 ease-in px-2 py-2 text-left text-md font-medium text-black dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent/75 focus-visible:dark:ring-accent-dark/75">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-zinc-300 mr-2"
            viewBox="0 0 256 256">
            <path fill="currentColor"
              d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z"
              opacity=".2" />
            <path fill="currentColor"
              d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1ZM140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm24-72a36 36 0 0 1-28 35.1v.9a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8a20 20 0 1 0-20-20a8 8 0 0 1-16 0a36 36 0 0 1 72 0Z" />
          </svg>
          <span>Support</span>
        </router-link>

        <button @click="isOpenMenu = false"
          class="flex w-full rounded-lg hover:bg-secondary mt-3 hover:dark:bg-secondary-dark transition-all duration-150 ease-in px-2 py-2 text-left text-md font-medium text-black dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent/75 focus-visible:dark:ring-accent-dark/75">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-black dark:text-zinc-300 mr-2 hover:rotate-90 transition-all ease-in duration-300 transform"
            viewBox="0 0 256 256">
            <g fill="currentColor">
              <path
                d="m230.1 108.76l-31.85-18.14c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61 104.61 0 0 0 162 32l-32 17.89h-4L94 32a104.58 104.58 0 0 0-34.11 19.25l-.16 36c-.7 1.12-1.37 2.26-2 3.41l-31.84 18.1a99.15 99.15 0 0 0 0 38.46l31.85 18.14c.64 1.16 1.31 2.29 2 3.41l.12 36A104.61 104.61 0 0 0 94 224l32-17.87h4L162 224a104.58 104.58 0 0 0 34.08-19.25l.16-36c.7-1.12 1.37-2.26 2-3.41l31.84-18.1a99.15 99.15 0 0 0 .02-38.48ZM128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"
                opacity=".2" />
              <path
                d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm109.94-52.79a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.91 111.91 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.92 111.92 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.47 106.47 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.91 111.91 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.91 7.91 0 0 0 3.9 1a8.09 8.09 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.47 106.47 0 0 0-.03-41.52Zm-15 34.91l-28.57 16.25a8 8 0 0 0-3 3c-.58 1-1.19 2.06-1.81 3.06a7.94 7.94 0 0 0-1.22 4.21l-.15 32.25a95.89 95.89 0 0 1-25.37 14.3L134 199.13a8 8 0 0 0-3.91-1h-3.83a8.1 8.1 0 0 0-4.1 1l-28.84 16.1A96 96 0 0 1 67.88 201l-.11-32.2a8 8 0 0 0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09 8.09 0 0 0-3-3.06l-28.6-16.29a90.49 90.49 0 0 1 0-28.26l28.52-16.28a8 8 0 0 0 3-3c.58-1 1.19-2.06 1.81-3.06a7.94 7.94 0 0 0 1.22-4.21l.15-32.25a95.89 95.89 0 0 1 25.37-14.3L122 56.87a8 8 0 0 0 4.1 1h3.64a8 8 0 0 0 4.1-1l28.84-16.1A96 96 0 0 1 188.12 55l.11 32.2a8 8 0 0 0 1.22 4.22c.62 1 1.23 2 1.8 3.06a8.09 8.09 0 0 0 3 3.06l28.6 16.29a90.49 90.49 0 0 1 .05 28.29Z" />
            </g>
          </svg>
          <span>Settings</span>
        </button>
      </div>

      <div class="mb-8 mt-16 px-3 bottom-4">
        <div class="flex items-center gap-x-3">
          <a href="https://github.com/terrnit" target="_blank"
            class="text-black dark:text-white hover:underline underline-offset-4 transition-all duration-150 ease-in">Created
            by
            TerrniT
          </a>
          <img src="../../assets/terrnit.jpg" width="50" height="50" class="h-8 w-8 rounded-full" alt="creator picture" />
        </div>
        <span class="flex text-xs mt-4 gap-x-2 text-black dark:text-white">Terms of use <p
            class="dark:text-zinc-400 text-green-800">
            and</p> Privacy
          Policy</span>
      </div>
    </div>

    <div v-if="isOpenFeatures"
      class="bg-main/95 dark:bg-main-dark/95 backdrop-blur-sm p-4 absolute flex flex-col w-full top-[56px] left-0">
      <h3 class="font-medium text-md">Accessibility Features</h3>
      <div class="flex justify-between mt-3 items-center">
        <RadioGroup v-model="selected">
          <div class="flex gap-2">
            <RadioGroupOption as="template" v-for="plan in variants" :key="plan.label" :value="plan"
              v-slot="{ active, checked }">
              <div :class="[
                active
                  ? 'ring-2 ring-transparent ring-offset-2 ring-offset-accent/60 dark:ring-offset-accent-dark/60 text-black dark:text-white'
                  : '',
                checked ? 'bg-secondary dark:bg-secondary-dark text-black ' : 'bg-none',
              ]" class="relative flex cursor-pointer rounded-lg px-2 py-1.5 focus:outline-none">
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <RadioGroupLabel as="p"
                        :class="checked ? 'text-black dark:text-white' : 'text-black dark:text-white'"
                        class="font-medium text-xs">
                        {{ plan.label }}
                      </RadioGroupLabel>
                    </div>
                  </div>
                </div>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
        <div>
          <Transition name="slide-up" mode="out-in">
            <button v-if="isDark" class="text-xs bg-secondary-dark px-2 py-1 rounded-lg flex gap-2 items-center w-[105px]"
              @click="toggleDark()">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm0 6q.425 0 .8-.05t.75-.15q.1-.025.3-.375q.025-.125-.037-.25t-.188-.2q-1.2-.8-1.912-2.1T11 12q0-1.575.713-2.875t1.912-2.1q.125-.1.188-.213t.037-.237q-.025-.125-.1-.225t-.2-.15q-.375-.1-.75-.15T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z" />
              </svg>
              Dark mode
            </button>
            <button v-else class="text-xs bg-secondary text-black px-2 py-1 rounded-lg flex gap-2 items-center w-[105px]"
              @click="toggleDark()">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m7 22l4-7.5l-8-1L15 2h2l-4 7.5l8 1L9 22H7Zm5.55-6.175l4.025-3.85l-6.725-.85L11.425 8.2l-4 3.85l6.7.825l-1.575 2.95ZM12 12Z" />
              </svg>
              Light mode
            </button>
          </Transition>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 1;
}

.slide-up-leave-to {
  opacity: 0;
}
</style>
