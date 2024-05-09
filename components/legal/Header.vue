<!--
Legal header template

Responsible for displaying the title and date for all legal documents
such as Privacy Policies, Cookie policy etc.
-->

<script setup lang="ts">
interface Props {
  title: string
  date: string
}

// Setting default values
withDefaults(defineProps<Props>(), {
  title: 'no-title',
  date: 'no-date'
})
</script>

<template>
  <!-- Displays the title and date in the centre of the page -->
  <div class="container">
    <h1 class="text-xlS md:text-3xl lg:text-4xl m-7 font-bold text-center">
      {{ title || '' }}
    </h1>
    <div class="flex w-full justify-center text-xs md:text-base my-5">
      <p>{{ date || '' }}</p>
    </div>
  </div>
</template>