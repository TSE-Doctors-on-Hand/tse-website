<script setup lang="ts">
interface Props {
  title: string
  date: string
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  date: 'no-date'
})
</script>

<template>
  <div class="container">
    <h1 class="text-xlS md:text-3xl lg:text-4xl m-7 font-bold text-center">
      {{ title || '' }}
    </h1>
    <div class="flex w-full justify-center text-xs md:text-base my-5">
      <p>{{ date || '' }}</p>
    </div>
  </div>
</template>