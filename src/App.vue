<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue';

</script>

<template>
  <div>
    <Navbar />
    <router-view />
    <NotificationGroup group="generic">
      <div class="fixed inset-0 z-[200] flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
        <div class="w-full max-w-sm">
          <Notification v-slot="{ notifications }" enter="transform ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0" leave="transition ease-in duration-500"
            leave-from="opacity-100" leave-to="opacity-0" move="transition duration-500" move-delay="delay-300">

            <div v-for="notification in notifications" :key="notification.id">
              <div v-if="notification.type === 'error'"
                class="flex w-full max-w-sm mx-auto backdrop-blur-lg mt-4 items-center px-2 overflow-hidden bg-red-500/20 border border-red-600/20 rounded-lg shadow-md">
                <div class="flex items-center justify-center w-10 rounded-lg h-10 bg-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z"
                      opacity=".3" />
                    <path fill="currentColor"
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z" />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-white">{{ notification.title }}</span>
                    <p class="text-sm text-gray-400">{{ notification.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>
  </div>
</template>


<style>
body {
  @apply bg-main dark:bg-main text-black dark:text-white
}
</style>

