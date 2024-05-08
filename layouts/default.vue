<!--
 Template for the entire Website
 This allows us to define the Header, Footer and Emergency banner
 across the entire site without the need to call it more than once.
 -->
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