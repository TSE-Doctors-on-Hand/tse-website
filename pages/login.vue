<!--
Login Page for Patients to be able to access the service
-->
<template>

  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- Form for the user to input their details -->
      <form class="space-y-6" @submit.prevent="handleLogin">

          <div class="mt-2 justify-content-center content-end">

            <div class="card flex">
              <FloatLabel>
                <InputText id="username" v-model="username" />
                <label for="username">Username</label>
              </FloatLabel>
            </div>

            <div class="py-6"></div>

            <div class="card flex justify-content-center">
              <FloatLabel>
                <Password id="password" toggleMask v-model="password" :feedback="false" />
                <label for="password">Password</label>
              </FloatLabel>
            </div>

            <!-- If the login fails, tell them it has failed. -->
            <div class="text-center py-3">
              <div v-if="loggedInFail">
                <p>Incorrect Username or Password!</p>
              </div>
            </div>


          </div>

        <!-- Login button to run the login method below -->
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign in</button>
        </div>

      </form>

      <!-- Subtext to allow them to sign up to the service if they are not registered. -->
      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a href="/register" class="font-semibold leading-6 text-blue-600 hover:text-blue-500">Sign Up</a>
      </p>
    </div>
  </div>

</template>
<script lang="ts" setup>

/**
 * Imports for assorted functions used
 */
import {navigateTo} from "#app";
import type { LoginRequest } from "~/types/api/auth/login";
import { auth } from "~/composables/auth";

/**
 * Middleware to only allow guests to access the login page
 */
definePageMeta({
  middleware: 'guest-only'
})

/**
 * References to hold the users' inputs
 */
const username = ref()
const password = ref()
const loggedInFail = ref()

/**
 * Function to handle the login of the user
 * Formats their data into a LoginRequest and then attempts to authenticate with the backend server
 */
const handleLogin = () => {
  const userData: LoginRequest = {
    username: username.value,
    password: password.value
  }

  auth().login(userData).then((bool) => {

    // If they have logged in, send them to the accounts page, otherwise the error above will display.
    if(!bool) {
      navigateTo("/account")
    }

    loggedInFail.value = bool
  })

}
</script>