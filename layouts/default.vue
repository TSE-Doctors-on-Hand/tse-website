<template>
  <div class="global-container font-spacegrotesk">
    <header class="fixed w-full">
      <Header />
      <MainEmergencyBanner />
    </header>
    <main>
      <div class="p-7" />
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.global-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
<script setup lang="ts">

</script>