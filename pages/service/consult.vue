<template>
  <div>
    <div class="flex justify-center">
      <div class="max-w-md w-full">
        <div class="mb-6"></div>
        <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="relative inline-block text-left">

            <div class="max-w-md w-full ">
              <div class="card flex justify-content-center">
                <MultiSelect
                    v-model="selectedSymptoms"
                    :options="symptoms"
                    filter
                    optionLabel="name"
                    placeholder="Select your Symptoms"
                    display="chip"

                    max-selected-labels="3"
                    class="w-full md:w-20rem"
                    @selectall-change="onSelectAllChange($event)"
                    @change="onChange($event)"
                    :virtualScrollerOptions="{ itemSize: 44 }"
                />
              </div>
            </div>


            <!-- Other form fields -->
            <div class="">
              <p>Are you at home?</p>
            </div>
            <div class="card flex justify-content-center">
              <div class="card flex justify-content-center">
                <SelectButton v-model="home" :options="options" option-label="name" aria-labelledby="basic"/>
              </div>
            </div>

            <div v-if="!home.state">
              <p>Please enter your current postcode:</p>
              <FloatLabel>
                <InputText v-model="postcode"/>
                <label for="postcode">Postcode</label>
              </FloatLabel>
            </div>
            <div class="mb-6"></div>

            <div class="card flex justify-content-center py-6">
              <div class="w-14rem">
                <p>Distance to Doctors (km):</p>
                <InputText v-model.number="distance" class="w-full mb-3" />
                <Slider v-model="distance" :min="5" :max="50" :step="5" class="w-full" />
              </div>
            </div>

            <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Next
            </button>
          </div>
        </form>

      </div>
    </div>

  </div>


</template>

<script>
definePageMeta({
  middleware: 'user-only'
})

import {ref} from 'vue';

const selectedSymptoms = ref()

export default {

  data: () => ({
    options: [{state: true, name: "Yes, at home"}, {state: false, name: "No, somewhere else"}],
    selectedSymptoms: null,
    isDropdownOpen: false,
    selectedUsers: [],
    users: [
      {name: 'Fever'},
      {name: 'Cough'},
      {name: 'Shortness of Breath'},
      {name: 'Muscle Aches'},
      {name: 'Headache'},
      {name: 'Sore Throat'},
      {name: 'Nausea or Vomiting'},
      {name: 'Diarrhea'},
    ],
    symptoms: [],
    home: {state: true, name: ""},
    postcode: "",
    distance: 5,
    isAddressInputVisible: false,

  }),
  mounted() {
    apiFetch('/api/symptom/all').then((response) => {
      this.symptoms = response
    })
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    submitForm() {
      if (this.location === 'not_home') {
        // Show address input fields
        this.isAddressInputVisible = true;
      } else {
        // Handle form submission for home location
        // You can add your logic here
        console.log('Submitting form for home location');
      }
    },

    onSelectAllChange(event) {
      this.selectedItems = event.checked ? this.items.map((item) => item.value) : [];
      this.selectAll = event.checked;
    },
    onChange(event) {
      this.selectAll = event.value.length === this.items.length;
    }
  }
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