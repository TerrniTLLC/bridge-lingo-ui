<script setup lang="ts">

</script>
<template>
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

            <div v-else-if="notification.type === 'warning'"
              class="flex w-full max-w-sm mx-auto backdrop-blur-lg mt-4 items-center px-2 overflow-hidden bg-amber-500/20 border border-amber-600/20 rounded-lg shadow-md">
              <div class="flex items-center justify-center w-10 rounded-lg h-10 bg-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white fill-current" viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path
                      d="M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91Z"
                      opacity=".2" />
                    <path
                      d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72Zm-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72ZM120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
                  </g>
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-white">{{ notification.title }}</span>
                  <p class="text-sm text-gray-400">{{ notification.text }}</p>
                </div>
              </div>
            </div>

            <div v-else-if="notification.type === 'modest'"
              class="flex w-full max-w-sm mx-auto backdrop-blur-lg mt-4 items-center px-2 overflow-hidden bg-zinc-500/20 border border-zinc-600/20 rounded-lg shadow-md">
              <div class="flex items-center justify-center w-10 rounded-lg h-10 bg-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 fill-current" viewBox="0 0 16 16">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M5.75 1.75h4.5v3.5h-4.5zm4 11.05l1.5 1.5l3-2.5m-9-9h-2.5v11.5h4.5m6-5V2.8h-2.5" />
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
</template>

