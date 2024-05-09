<!--
Global header template
-->
<template>
  <nav class="bg-white border-gray-200 dark:bg-[#005EB8]">
    <ul class="max-w-screen-xl flex items-center justify-between mx-auto p-3">
      <!-- Home button -->
      <li class="w-48">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <Icon name="medical-icon:i-cardiology" color="white"/>
        </a>
      </li>
      <!-- Doctors on Hand title shown in the middle of the screen -->
      <li class="flex-1 flex items-center justify-center">
        <span class="text-2xl font-semibold text-white">Doctors On Hand</span>
      </li>
      <!-- My account button. This will change to "Sign in" if the user is not signed in -->
      <li class="w-48 flex items-center justify-end">
        <a @click="headerUrl"
           class="text-white max-sm:hidden font-medium pr-4 content-center items-center mx-auto justify-end hover:text-gray-300">
          {{ isLoggedIn ? 'My Account' : 'Sign in' }}
          <Icon name="mdi:account" color="white" class="w-8 h-8 rounded-full"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import {authStore} from "~/store/auth";
import {navigateTo} from "#app";

const isLoggedIn = ref() // Reactive variable to determine if the user is logged in

onMounted(() => {
  isLoggedIn.value = authStore().hasToken() // Value is deterministic of whether the user is logged in or not
})

/**
 * Updating the header redirect based on the isLoggedIn status
 */
const headerUrl = () => {
  if (isLoggedIn.value) {
    navigateTo("/account")
  } else {
    navigateTo("/login")
  }
}

</script>