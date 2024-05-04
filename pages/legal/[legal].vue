<template>
  <div class="px-6 container max-w-5xl mx-auto gap-x-12 ">
    <LegalHeader
        :title="data.title"
        :date="data.date"
    />
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
import type {LegalPolicy} from '~/types/legal'

const {path} = useRoute()

const {data: doc} = await useAsyncData(`legal-${path}`, () => queryContent(path).findOne())

const data = computed<LegalPolicy>(() => {
  return {
    title: doc.value?.title || 'no-title available',
    date: doc.value?.date || 'not-date-available'
  }
})

</script>