<script setup lang="ts">
import { useWebAppTheme, useWebApp } from 'vue-tg'
import { onMounted, ref, watch } from 'vue';
import { Popover, PopoverButton, PopoverPanel, RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const { setHeaderColor, setBackgroundColor } = useWebAppTheme()
const { isReady } = useWebApp()

const isDark = ref<boolean>(true)
const formData = ref<string>('')
const isCopied = ref<boolean>(false)

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

watch(formData, () => {
  isCopied.value = false
})

const selected = ref<{ label: string, value: string, icon: string }>(variants[0])

const copyToClipBoard = () => {
  navigator.clipboard.writeText(formData.value);
  isCopied.value = true
}

onMounted(() => {
  setHeaderColor('#333333')
  if (isReady) {
    setBackgroundColor('#333333')
  }
})

</script>

<template>
  <main class="bg-main text-white h-screen relative overflow-hidden">
    <nav class="bg-main/80 backdrop-blur-lg sticky top-0 py-3 px-3 z-20 text-white">
      <div class="flex justify-between items-center">
        <button
          class="invisible h-10 w-10 bg-secondary transition-all duration-150 ease-in hover:bg-zinc-900 rounded-lg justify-center items-center flex text-xl text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height=" 26px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 6h18M3 12h18M3 18h18"></path>
          </svg>
        </button>
        <h1 class="font-bold">
          你能行的，宝贝~ ！
        </h1>

        <Popover class="relative" v-slot="{ open }">

          <PopoverButton
            class="h-10 w-10 bg-secondary transition-all duration-150 ease-in hover:bg-zinc-900 rounded-lg justify-center items-center flex text-xl text-center">

            <Transition name="slide-up" mode="out-in">
              <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
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
          </PopoverButton>



          <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
            <PopoverPanel
              class="absolute top-10 right-0 z-10 mt-3 w-screen max-w-[431px] rounded-lg border border-zinc-800">
              <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div class="bg-main/95 backdrop-blur-sm p-4 flex flex-col">
                  <h3 class="font-medium text-sm">Accessibility Features</h3>
                  <div class="flex justify-between mt-3 items-center">
                    <RadioGroup v-model="selected">
                      <div class="flex gap-2">
                        <RadioGroupOption as="template" v-for="plan in variants" :key="plan.label" :value="plan"
                          v-slot="{ active, checked }">
                          <div :class="[
                            active
                              ? 'ring-2 ring-transparent ring-offset-2 ring-offset-accent/60'
                              : '',
                            checked ? 'bg-secondary text-white ' : 'bg-none',
                          ]" class="relative flex cursor-pointer rounded-lg px-2 py-1.5 focus:outline-none">
                            <div class="flex w-full items-center justify-between">
                              <div class="flex items-center">
                                <div class="text-sm">
                                  <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-white'"
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
                    <button v-if="isDark" class="text-xs bg-secondary px-2 py-1.5 rounded-lg flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm0 6q.425 0 .8-.05t.75-.15q.1-.025.3-.375q.025-.125-.037-.25t-.188-.2q-1.2-.8-1.912-2.1T11 12q0-1.575.713-2.875t1.912-2.1q.125-.1.188-.213t.037-.237q-.025-.125-.1-.225t-.2-.15q-.375-.1-.75-.15T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z" />
                      </svg>
                      Dark mode
                    </button>
                    <button v-else class="text-xs bg-secondary px-2 py-1.5 rounded-lg flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="m7 22l4-7.5l-8-1L15 2h2l-4 7.5l8 1L9 22H7Zm5.55-6.175l4.025-3.85l-6.725-.85L11.425 8.2l-4 3.85l6.7.825l-1.575 2.95ZM12 12Z" />
                      </svg>
                      Light mode
                    </button>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

      </div>
    </nav>
    <section class="h-fit p-2 mx-3 mt-4 rounded-lg">
      <div class="bg-secondary rounded-lg p-2">
        <textarea v-model="formData"
          class="text-white bg-transparent border-none text-sm transition-all duration-150 ease-in rounded-lg focus:ring-accent w-full h-[260px] resize-none"
          placeholder="Type something. Let's magic happend.." />
        <div class="flex flex-col px-2 py-1 items-end">
          <span class="text-button my-2 block">{{ formData.length }} / 636</span>
          <button @click="copyToClipBoard()" :class="[
            isCopied ? 'text-green-300 border border-green-300 bg-green-300/20 hover:bg-green-300/30' : 'text-white border border-button'
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
        class="bg-accent hover:bg-accent/80 transition-all duration-150 ease-in my-3 rounded-lg text-black w-full font-medium py-2">Translate</button>
    </section>

  </main>
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
