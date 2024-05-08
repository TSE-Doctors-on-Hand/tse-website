<template>

  <div v-if="loading" class="py-10 flex justify-center text-center">
    <ProgressSpinner/>
    <p class="text-bold py-2">Finding your Doctors...</p>
  </div>

  <div v-else>

    <div class="card">
      <Toolbar>
        <template #start class="flex align-items-center">
          <p class="pr-3">Symptoms:</p>
          <MultiSelect
              v-model="selectedSymptoms"
              :options="symptoms"
              filter
              optionLabel="name"
              placeholder="Select your Symptoms"
              :max-selected-labels="1"
              class="w-full md:w-20rem"
              @selectall-change="onSelectAllChange($event)"
              @change="onChange($event)"
              :virtualScrollerOptions="{ itemSize: 44 }"
          />


          <div class="pl-5">
            <ToggleButton v-model="atHome" class="h-12 w-36" onLabel="At Home" offLabel="Not At Home"/>
          </div>
          <p v-if="!atHome" class="pl-2">Postcode:</p>
          <div v-if="!atHome" class="pl-2">

            <InputText type="text" id="postcode" v-model="postcode" v-if="!atHome"/>
          </div>


          <div class="pl-10">
            <Slider v-model="distance" class="w-96" :step="5" :min=5 :max=100 />
            <p class="mx-3"> {{ distance }} (km)</p>
          </div>
        </template>

        <template #end>
          <Button label="Get Doctors" @click="handleNewParameters"></Button>
        </template>
      </Toolbar>
    </div>

    <ScrollTop/>

    <div class="text-center justify-center flex py-10">
      <p>Doctors Found: {{ doctors.length }}</p>
    </div>


    <div class="flex justify-center">
      <div class="flex-col">
        <div class="max-w-lg rounded border py-5" v-for="doctor in doctors">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Dr. {{ doctor.forename }} {{ doctor.surname }}</div>
            <p class="text-gray-700 text-base">
              {{ doctor.aboutMe }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                v-for="specialty in doctor.specialties">{{ specialty }}</span>
          </div>

          <div class="border-t">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Practice: {{ doctor.practiceName }}</div>
              <p class="text-gray-700 text-base">
                {{ doctor.practiceAddress }}
              </p>
              <p class="text-gray-700 text-base">Email: {{ doctor.email }}</p>
              <p class="text-gray-700 text-base">Telephone: {{ doctor.phone }}</p>
              <div class="py-2">
                <p class="text-gray-700 text-base py-2">Distance: {{ doctor.distance.toFixed(1) }}km</p>
                <p class="text-gray-700 text-base py-2">Similarity: {{ (doctor.similarity * 100).toFixed(2) }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">

import {type MatchedDoctor} from "~/types/api/doctor/doctor";
import type {MatchRequest} from "~/types/api/doctor/match";
import {apiFetch} from "~/composables/api";
import {authStore} from "~/store/auth";
import type {Ref} from "vue";
import type {Symptom} from "~/types/api/symptom/symptom";

/**
 * MenuBar at top of page
 */

const selectedSymptoms: Ref<Symptom[]> = ref([])
const symptoms: Ref<Symptom[] | undefined> = ref()
const selectAll = ref()
const distance = ref()
const atHome = ref()
const postcode: Ref<string | null> = ref(null)

const route = useRoute()

let doctors = [] as MatchedDoctor[]

let loading = ref(true);


onMounted(() => {

  const matchRequest: MatchRequest = JSON.parse(route.params.doctors as string) as MatchRequest

  // Get Symptoms and set all previous filters
  apiFetch('/api/symptom/all').then((response) => {
    symptoms.value = response as Symptom[]
  }).then(() => {
    // put the symptoms in a second time
    for (let symptom of symptoms.value as Symptom[]) {
      if (matchRequest.symptoms.includes(symptom.id)) {
        selectedSymptoms.value.push(symptom as never)
      }
    }
  })

  atHome.value = matchRequest.postcode == null
  if (matchRequest.postcode != null) {
    postcode.value = matchRequest.postcode
  }

  distance.value = matchRequest.range

  apiFetch('/api/doctor/match', {
    method: 'POST',
    body: matchRequest,
    headers: {
      Token: authStore().hasToken() ? authStore().getToken()!! : ""
    }
  }).then((response) => {
    const data = response as MatchedDoctor[]
    doctors = data.sort((a, b) => b.similarity - a.similarity)
  })

  setTimeout(() => {
    loading.value = false
  }, 1000)
})

const handleNewParameters = () => {

  const newRequest: MatchRequest = {
    symptoms: selectedSymptoms.value.map((item) => item.id),
    postcode: postcode.value,
    range: distance.value,
    limit: null
  }

  const newParams = encodeURIComponent(JSON.stringify(newRequest))

  navigateTo({
    path: `/service/doctors/${newParams}`
  })

}

const onSelectAllChange = (event: any) => {
  selectedSymptoms.value = event.checked ? (symptoms.value as Symptom[]) : [];
  selectAll.value = event.checked;
};
const onChange = (event: any) => {
  selectAll.value = event.value.length === (symptoms.value as Symptom[]).length;
}

</script>

<style scoped>


</style>