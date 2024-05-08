<template>

  <div class="flex flex-col px-6 mx-auto max-w-5xl justify-content-center items-center">
    <div class="">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Your Details</h2>
    </div>

    <div class="flex justify-center">
      <div class="flex-col">
        <div class="max-w-lg rounded py-5">
          <div class="px-6 py-4 border">
            <div class="font-bold text-xl mb-2">{{ data.forename }} {{ data.surname }}</div>
            <p class="text-gray-700 text-base"><b>Username:</b> {{ data.username }}</p>
            <p class="text-gray-700 text-base"><b>Email:</b> {{ data.username }}</p>
            <p class="text-gray-700 text-base"><b>Phone:</b> {{ data.phone }}</p>
            <p class="text-gray-700 text-base"><b>Postcode:</b> {{ data.postcode }}</p>
          </div>

          <div class="border">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Your Details</div>
              <p class="text-gray-700 text-base"><b>Sex:</b> {{ getSex() }}</p>
              <p class="text-gray-700 text-base"><b>Date of Birth:</b> {{ getDateOfBirth() }}</p>
              <p class="text-gray-700 text-base"><b>Next of Kin:</b> {{ data.nextOfKin }}</p>
            </div>
          </div>
          <div class="border-t py-6">
            <Button @click="logout" class="w-full">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {navigateTo} from "#app";

definePageMeta({
  middleware: 'user-only'
})

import {user} from "~/composables/user.js";

export default {

  data: () => ({
    data: {}
  }),
  mounted() {
    this.getUserData()
  },
  methods: {

    getSex() {
      if (this.data.sex == 0) {
        return "Male"
      } else {
        return "Female"
      }
    },

    getDateOfBirth() {

      const date = new Date(this.data.dateOfBirth)

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },

    getUserData() {
      try {
        user().get().then((response) => {
          this.data = response as {}
        })
      } catch (exception) {
      }
    },

    logout() {
      console.log("logging out")
      auth().logout()
      navigateTo("/")
    }

  }
}

</script>