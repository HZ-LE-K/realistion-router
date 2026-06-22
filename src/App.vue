<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-shell">
    <NavBar />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
