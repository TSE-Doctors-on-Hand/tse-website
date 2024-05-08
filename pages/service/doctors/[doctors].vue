<template>

  {{ route.params }}

  {{ route.params.doctors }}

</template>

<script setup lang="ts">

const route = useRoute()

</script>

<style scoped>



</style>