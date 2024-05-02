<template>
    <div>
      <Header />
      <div class="flex justify-center">
        <div class="max-w-md w-full">
          <div class="mb-6"></div>
          <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="relative inline-block text-left">
              <!-- Dropdown button -->
              <button @click="toggleDropdown" aria-haspopup="true" aria-expanded="true" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Select Symptoms
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div class="mb-4"></div>
  
              <!-- Dropdown menu -->
              <div v-if="isDropdownOpen" id="dropdownSearch" class="z-10 absolute top-full bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                <div class="p-3">
                  <label for="input-group-search" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <input type="text" id="input-group-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search symptoms">
                  </div>
                </div>
                <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                  <li v-for="(user, index) in users" :key="index">
                    <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input :id="'checkbox-item-' + index" type="checkbox" :value="user.name" v-model="selectedUsers" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label :for="'checkbox-item-' + index" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{ user.name }}</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
  
            <!-- Other form fields -->
            <div class="mb-6">
              <label for="symptom-duration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">How long have your symptoms been present?</label>
              <input type="text" id="symptom-duration" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 placeholder-black text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter duration" required>
            </div>
            <div class="">
                <p>Are you at home?</p>
            </div>
            <div class="mb-6"></div>
            <div class="mb-6">
              <input id="checkbox1" type="radio" name="location" value="home" v-model="location" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox1" class="ms-2 text-sm font-medium text-gray-900 dark:text-black-300">Yes, I am at home</label>
            </div>
            <div class="mb-6">
              <input id="checkbox2" type="radio" name="location" value="not_home" v-model="location" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox2" class="ms-2 text-sm font-medium text-gray-900 dark:text-black-300">Not home/New location</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
  
            <!-- Address input fields -->
            <div v-if="isAddressInputVisible" class="mb-6">
              <label for="address-line-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Address Line 1</label>
              <input type="text" id="address-line-1" v-model="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Address Line 1">
            </div>
            <div v-if="isAddressInputVisible" class="mb-6">
              <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">City</label>
              <input type="text" id="city" v-model="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City">
            </div>
            <div v-if="isAddressInputVisible" class="mb-6">
              <label for="postcode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Postcode</label>
              <input type="text" id="postcode" v-model="postcode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Postcode">
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDropdownOpen: false,
        selectedUsers: [],
        users: [
          { name: 'Fever' },
          { name: 'Cough' },
          { name: 'Shortness of Breath' },
          { name: 'Muscle Aches' },
          { name: 'Headache' },
          { name: 'Sore Throat' },
          { name: 'Nausea or Vomiting' },
          { name: 'Diarrhea' },
        ],
        isAddressInputVisible: false,
        address: '',
        addressLine1: '',
        city: '',
        postcode: '',
        location: 'home', // Default location is 'home'
      };
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
      }
    }
  }
  </script>
  