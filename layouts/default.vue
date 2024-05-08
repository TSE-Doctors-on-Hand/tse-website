<template>
  <div class="global-container font-spacegrotesk mx-auto bg-white text-black">
    <main>
      <Header />
      <MainEmergencyBanner />
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