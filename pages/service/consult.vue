<template>
  <div>
    <div class="flex justify-center text-center">
      <div class="max-w-md w-full">
        <div class="mb-6"></div>
        <form @submit.prevent="submitForm" class="bg-white pt-6">
          <div class="">

            <p class="font-bold text-center py-3">Find a Doctor</p>

            <div class="max-w-md w-full ">
              <div class="card flex justify-content-center">
                <MultiSelect
                    v-model="selectedSymptoms"
                    :options="symptoms"
                    filter
                    optionLabel="name"
                    placeholder="Select your Symptoms"
                    display="chip"
                    class="w-full md:w-20rem"
                    @selectall-change="onSelectAllChange($event)"
                    @change="onChange($event)"
                    :virtualScrollerOptions="{ itemSize: 44 }"
                />
              </div>
            </div>
            <!-- Other form fields -->
            <div class="pt-5">
              <p>Are you at home?</p>
              <ToggleButton v-model="home" class="h-12 w-full pt-3" onLabel="At Home" offLabel="Not At Home"/>
            </div>


            <div v-if="!home" class="pt-5">
              <p>Please enter your current postcode:</p>
              <InputText v-model="postcode" class="w-full"/>
            </div>

            <div class="card pt-5">
              <p>Distance to Doctors (km):</p>
              <InputText v-model.number="distance" class="mb-3 w-full"/>
            </div>
            <div class="pt-2">
              <Slider v-model="distance" :min="5" :max="50" :step="5" class="w-full"/>
            </div>
          </div>

          <div class="pt-5">
            <button :on-click="submitForm"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 text-center w-full">
              Next
            </button>
          </div>
        </form>

      </div>
    </div>

  </div>


</template>

<script setup lang="ts">
import type {MatchRequest} from "~/types/api/doctor/match";

definePageMeta({
  middleware: 'user-only'
})

import {type Ref, ref} from 'vue';
import type {Symptom} from "~/types/api/symptom/symptom";

const selectedSymptoms: Ref<Symptom[]> = ref([])
const symptoms: Ref<Symptom[] | undefined> = ref()
const selectAll = ref()
const distance = ref(5)
const home = ref()
const postcode: Ref<string | null> = ref(null)

onMounted(() => {
  apiFetch('/api/symptom/all').then((response) => {
    symptoms.value = response as Symptom[]
  })
})

const submitForm = () => {

  const request: MatchRequest = {
    symptoms: selectedSymptoms.value.map((item) => item.id),
    postcode: postcode.value,
    range: distance.value,
    limit: null
  }

  const params = encodeURIComponent(JSON.stringify(request))

  navigateTo({
    path: `/service/doctors/${params}`
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

<style>
.top-100 {
  top: 100%
}

.bottom-100 {
  bottom: 100%
}

.max-h-select {
  max-height: 300px;
}
</style>