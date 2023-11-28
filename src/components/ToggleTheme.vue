<template>
  <div>
    <Transition name="slide-up" mode="out-in">
      <button v-if="isDark" class="text-xs bg-dark-secondary px-2 py-1 rounded-lg flex gap-2 items-center w-[105px]"
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
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useWebAppTheme, useWebApp } from 'vue-tg'
import { onMounted } from 'vue'

const { setHeaderColor } = useWebAppTheme()
const { isReady } = useWebApp()

const isDark = useDark({
  onChanged(dark: boolean) {
    if (dark) {
      setHeaderColor('#111111')
    } else {
      setHeaderColor('#f1f1f1')

    }
  }
})

const toggleDark = useToggle(isDark)



onMounted(() => {
  console.log(isDark.value, 'theme')
  if (isReady) {
    if (isDark.value) {
      setHeaderColor('#111111')
    } else {
      setHeaderColor('#f1f1f1')
    }
  }
})

</script>


<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 1;
  translate: 0 5px
}

.slide-up-leave-to {
  opacity: 0;
  translate: 0 5px
}
</style>
