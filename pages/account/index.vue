<template>

</template>

<script lang="ts">

import { user } from "~/composables/user.js";

export default {
  data: () => ({
    data: ref()
  }),
  mounted () {
    this.getUserData()
  },
  methods: {

    getUserData() {
      user().get().then((response) => {
        this.data.value = response
        console.log(this.data)
      })
    }

  }
}

</script>

<style scoped>

</style>