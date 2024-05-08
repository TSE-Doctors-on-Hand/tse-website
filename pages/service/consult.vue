<!--
Page for initial patient consult - They enter their details before first doctor fetch takes place.
-->
<template>
  <div>
    <div class="flex justify-center text-center">
      <div class="max-w-md w-full">
        <div class="mb-6"></div>
        <form @submit.prevent="submitForm" class="bg-white pt-6">
          <div class="">

            <p class="font-bold text-center py-3">Find a Doctor</p>

            <!-- Symptoms Dropdown box with search function -->
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

            <!-- This section finds out if the patient is near their home, if such, they will not be asked for a postcode. -->
            <div class="pt-5">
              <p>Are you at home?</p>
              <ToggleButton v-model="home" class="h-12 w-full pt-3" onLabel="At Home" offLabel="Not At Home"/>
            </div>


            <!-- If they are not at home, ask them for their postcode -->
            <div v-if="!home" class="pt-5">
              <p>Please enter your current postcode:</p>
              <InputText v-model="postcode" class="w-full"/>
            </div>

            <!-- Slider for the distance from the postcode inputted / their postcode -->
            <div class="card pt-5">
              <p>Distance to Doctors (km):</p>
              <InputText v-model.number="distance" class="mb-3 w-full"/>
            </div>
            <div class="pt-2">
              <Slider v-model="distance" :min="5" :max="100" :step="5" class="w-full"/>
            </div>
          </div>

          <div class="pt-5">
            <!-- Button to move them to the doctors page -->
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
definePageMeta({
  middleware: 'user-only'
})

/**
 * Imports for assorted functions used
 */
import {type Ref, ref} from 'vue';
import type {Symptom} from "~/types/api/symptom/symptom";
import type {MatchRequest} from "~/types/api/doctor/match";

/**
 * References to user data inputted
 */
const selectedSymptoms: Ref<Symptom[]> = ref([])
const symptoms: Ref<Symptom[] | undefined> = ref()
const selectAll = ref()
const distance = ref(5)
const home = ref()
const postcode: Ref<string | null> = ref(null)

/**
 * Fetch data on page load for symptoms in the dropdown bar
 */
onMounted(() => {
  apiFetch('/api/symptom/all').then((response) => {
    symptoms.value = response as Symptom[]
  })
})

/**
 * Function to submit the form and redirect the user to the slug page and fetch the doctors
 */
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

/**
 * Functions for Select all and Selection attributes on dropdown menu
 */
const onSelectAllChange = (event: any) => {
  selectedSymptoms.value = event.checked ? (symptoms.value as Symptom[]) : [];
  selectAll.value = event.checked;
};
const onChange = (event: any) => {
  selectAll.value = event.value.length === (symptoms.value as Symptom[]).length;
}

</script>