<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Popover, PopoverButton, PopoverPanel, RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { useDark, useToggle } from '@vueuse/core'
import { useWebAppTheme, useWebApp } from 'vue-tg';

const { setHeaderColor } = useWebAppTheme()
const { isReady } = useWebApp()

const isDark = useDark()

const toggleDark = useToggle(isDark)

onMounted(() => {
  if (isReady) {
    if (isDark.value) {
      setHeaderColor('#111111')
    } else {
      setHeaderColor('#f1f1f1')
    }
  }
})

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

const selected = ref<{ label: string, value: string, icon: string }>(variants[0])

</script>

<template>
  <nav
    class="dark:bg-main-dark/[98] bg-main/80 dark:text-white text-zinc-700 backdrop-blur-lg sticky top-0 py-3 px-3 z-20">
    <div class="flex justify-between items-center">
      <button
        class="h-10 w-10 dark:bg-secondary-dark bg-secondary transition-all duration-150 ease-in hover:dark:bg-zinc-900 hover:bg-zinc-400 rounded-lg justify-center items-center flex text-xl text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="26px" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 6h18M3 12h18M3 18h18"></path>
        </svg>
      </button>
      <h1 class="font-bold">
        你能行的，宝贝~ ！
      </h1>
      <Popover class="relative" v-slot="{ open }">
        <PopoverButton
          class="h-10 w-10 dark:bg-secondary-dark bg-secondary transition-all duration-150 ease-in hover:dark:bg-zinc-900 hover:bg-zinc-400 rounded-lg justify-center items-center flex text-xl text-center">
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
            class="absolute -right-0 top-10 z-10 mt-3 w-screen min-[375px]:max-w-[350px] min-[320px]:max-w-[296px] rounded-lg border border-zinc-800">
            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
              <div class="bg-main/95 dark:bg-main-dark/95 backdrop-blur-sm p-4 flex flex-col">
                <h3 class="font-medium text-sm">Accessibility Features</h3>
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
                      <button v-if="isDark"
                        class="text-xs bg-secondary-dark px-2 py-1 rounded-lg flex gap-2 items-center w-[105px]"
                        @click="toggleDark()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm0 6q.425 0 .8-.05t.75-.15q.1-.025.3-.375q.025-.125-.037-.25t-.188-.2q-1.2-.8-1.912-2.1T11 12q0-1.575.713-2.875t1.912-2.1q.125-.1.188-.213t.037-.237q-.025-.125-.1-.225t-.2-.15q-.375-.1-.75-.15T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z" />
                        </svg>
                        Dark mode
                      </button>
                      <button v-else
                        class="text-xs bg-secondary text-black px-2 py-1 rounded-lg flex gap-2 items-center w-[105px]"
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
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

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
