<!--
Template for all Legal Documents
This system works with slugs and nuxt-content to dynamically register the markdown files in ~/content to allow for editing from
non-development based staff.
-->
<template>
  <div class="px-6 container max-w-5xl mx-auto gap-x-12 ">
    <!-- Put the legal header before rending the markdown file -->
    <LegalHeader
        :title="data.title"
        :date="data.date"
    />
    <!-- Renders the markdown file -->
    <div>
      <ContentRenderer v-show="doc" :value="doc">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </div>
</template>


<script setup lang="ts">

/**
 * Import the LegalPolicy type to ensure that the markdown file is formatted correctly.
 */
import type {LegalPolicy} from '~/types/legal'

// Get the Slug path
const {path} = useRoute()

// Fetch the markdown file based on the slug (ie, /legal/cookies/ will fetch cookies.md in /content/legal
const {data: doc} = await useAsyncData(`legal-${path}`, () => queryContent(path).findOne())

// Compute the data and return it to the ContentRenderer
const data = computed<LegalPolicy>(() => {
  return {
    title: doc.value?.title || 'no-title available',
    date: doc.value?.date || 'not-date-available'
  }
})
</script>