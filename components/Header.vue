<template>
  <nav class="bg-white border-gray-200 dark:bg-[#005EB8]">
    <ul class="max-w-screen-xl flex items-center justify-between mx-auto p-3">
      <li class="w-48">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <Icon name="medical-icon:i-cardiology" color="white"/>
        </a>
      </li>
      <li class="flex-1 flex items-center justify-center">
        <span class="text-2xl font-semibold text-white">Doctors On Hand</span>
      </li>
      <li class="w-48 flex items-center justify-end">
        <a v-if="!isLoggedIn" href="/login"
           class="text-white max-sm:hidden font-medium pr-4 content-center items-center mx-auto justify-end">
          Sign In
          <Icon name="mdi:account" color="white" class="w-8 h-8 rounded-full"/>
        </a>
        <a v-if="isLoggedIn" href="/"
           class="text-white max-sm:hidden font-medium pr-4 content-center items-center mx-auto justify-end">
          My Account
          <Icon name="mdi:account" color="white" class="w-8 h-8 rounded-full"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">

import {authStore} from "~/store/auth";

export default {

  data: () => {
    return {
      isLoggedIn: false
    }
  },
  mounted() {
    this.isLoggedIn = authStore().hasToken()
  }
}

</script>