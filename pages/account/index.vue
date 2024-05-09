<!--
Represents the /account page
This is where the user can view their details and logout of the site
-->
<template>

  <div class="flex flex-col px-6 mx-auto max-w-5xl justify-content-center items-center">
    <div class="">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Your Details</h2>
    </div>

    <div class="flex justify-center">
      <div class="flex-col">
        <div class="max-w-lg rounded py-5">
          <div class="px-6 py-4 border">
            <!-- General Information about the user which is not sensitive -->
            <div class="font-bold text-xl mb-2">{{ data.forename }} {{ data.surname }}</div>
            <p class="text-gray-700 text-base"><b>Username:</b> {{ data.username }}</p>
            <p class="text-gray-700 text-base"><b>Email:</b> {{ data.username }}</p>
            <p class="text-gray-700 text-base"><b>Phone:</b> {{ data.phone }}</p>
            <p class="text-gray-700 text-base"><b>Postcode:</b> {{ data.postcode }}</p>
          </div>

          <div class="border">
            <div class="px-6 py-4">
              <!-- Sensitive Data about the user - Sex, Date of Birth and Next of Kin-->
              <div class="font-bold text-xl mb-2">Your Details</div>
              <p class="text-gray-700 text-base"><b>Sex:</b> {{ getSex() }}</p>
              <p class="text-gray-700 text-base"><b>Date of Birth:</b> {{ getDateOfBirth() }}</p>
              <p class="text-gray-700 text-base"><b>Next of Kin:</b> {{ data.nextOfKin }}</p>
            </div>
          </div>
          <div class="border-t py-6">
            <!-- A button to allow the user to logout of the website -->
            <Button @click="logout" class="w-full justify-center">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

/**
 * Imports for assorted functions used
 */
import {navigateTo} from "#app";
import {user} from "~/composables/user";

/**
 * Prevents non-logged in users from accessing the page
 */
definePageMeta({
  middleware: 'user-only'
})

export default {

  // Represents the Users Data
  data: () => ({
    data: {}
  }),
  /**
   * Fetch data on page load for the user
   */
  mounted() {
    this.getUserData()
  },
  methods: {

    /**
     * Take the Sex Ordinal and turn it into a human-readable format
     */
    getSex() {
      if (this.data.sex == 0) {
        return "Male"
      } else {
        return "Female"
      }
    },

    /**
     * Take the Date Of Birth timestamp and turn it into a human-readable format
     */
    getDateOfBirth() {

      const date = new Date(this.data.dateOfBirth)

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },

    /**
     * Function to fetch the users' data on page load
     */
    getUserData() {
      user().get().then((response) => {
        this.data = response as {}
      })
    },

    /**
     * Function to quick-access removing the users' data and return them to home
     */
    logout() {
      console.log("logging out")
      auth().logout()
      navigateTo("/")
    }

  }
}

</script>