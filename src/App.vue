<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue';
import NotificationContext from './context/NotificationContext.vue';

</script>

<template>
  <div>
    <Navbar />
    <router-view />
    <NotificationContext />
  </div>
</template>


<style>
body {
  @apply bg-main dark:bg-main text-black dark:text-white
}
</style>

