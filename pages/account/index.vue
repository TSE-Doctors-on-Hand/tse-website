<template>

  <div class="flex flex-col px-6 mx-auto max-w-5xl justify-content-center items-center">
    <div class="">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Your Details</h2>
    </div>

    <div class="py-5">
      <p>Forename: {{ data.forename }}</p>
      <p>Surname: {{ data.surname }}</p>
      <p>Username: {{ data.username }} (UID: {{ data.id }})</p>
      <p>Email: {{ data.email }}</p>
      <p>Sex: {{ getSex() }}</p>
      <p>Date of Birth: {{ getDateOfBirth() }}</p>
      <!-- <p>Pronouns: {{ data?.pronouns.join("/") }}</p> -->
      <p>Phone: {{ data.phone }}</p>
      <p>Postcode {{ data.postcode }}</p>
      <p>Next of Kin: {{ data.nextOfKin }}</p>,
    </div>

    <Button :on-click="logout">Logout</Button>

  </div>


</template>

<script lang="ts">
definePageMeta({
  middleware: 'user-only'
})

import {user} from "~/composables/user.js";

export default {

  data: () => ({
    data: {},
    items: [
      {label: "Your Details"},
      {label: "Your Appointments"}
    ],
    settings: ""
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
      return "Alien"
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
      auth().logout()
    }

  }
}

</script>

<style scoped>

</style>