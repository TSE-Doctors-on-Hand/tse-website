<template>

  <div class="flex min-h-full flex-col px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register with Doctors on
        Hand</h2>
    </div>

    <form class=" sm:mx-auto sm:w-full sm:max-w-md py-12" @submit.prevent="handleRegister">
      <div class="grid gap-12 mb-4">

        <InputGroup>
          <FloatLabel>
            <InputText id="username" v-model="username"/>
            <label for="username">Username</label>
          </FloatLabel>

          <FloatLabel>
            <Password id="password" v-model="password">
              <label for="password">Password</label>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer>
                <Divider/>
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </Password>
            <label for="password">Password</label>
          </FloatLabel>

        </InputGroup>

        <InputGroup>
          <FloatLabel>
            <InputText v-model="fname"/>
            <label for="fname">First Name</label>
          </FloatLabel>

          <FloatLabel>
            <InputText v-model="lname"/>
            <label for="lname">Last Name</label>
          </FloatLabel>

        </InputGroup>


        <InputGroup>
          <FloatLabel>
            <InputText v-model="email"/>
            <label for="lname">Email Address</label>
          </FloatLabel>
          <FloatLabel>
            <SelectButton v-model="sex" :options="sexes" aria-labelledby="basic"/>
          </FloatLabel>
        </InputGroup>


        <InputGroup>
          <FloatLabel>
            <Calendar v-model="dob" inputId="birth_date" date-format="dd/mm/yy" />
            <label for="birth_date">Birth Date</label>
          </FloatLabel>
          <FloatLabel>
            <InputText placeholder="Next of Kin" v-model="nok"/>
            <label for="nok">Next of Kin</label>
          </FloatLabel>

        </InputGroup>

        <InputGroup>
          <FloatLabel>
            <InputText placeholder="Pronouns" v-model="pronouns"/>
            <label for="nok">Pronouns</label>
          </FloatLabel>
          <FloatLabel>
            <InputMask id="basic" v-model="phone" mask="+44 9999-999-999" placeholder="+44 0000-000-000"/>
            <label for="phone">Phone Number</label>
          </FloatLabel>
        </InputGroup>

        <InputGroup>
          <FloatLabel>
            <InputText v-model="postcode"/>
            <label for="postcode">Postcode</label>
          </FloatLabel>
        </InputGroup>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign Up</button>
      </div>

    </form>

  </div>

</template>

<script lang="ts">

import type {LoginRequest} from "~/types/api/auth/login.js";
import {auth} from "~/composables/auth.js";
import type {RegisterRequest} from "~/types/api/auth/register";

const PHONE_REGEX = RegExp("(?:\\+44|0) ?(?:\\d{3} ?\\d{3} ?\\d{4}|\\d{4} ?\\d{3} ?\\d{3}|\\d{2} ?\\d{4} ?\\d{4})")

const registerFail = ref()

export default {

  data: () => ({
    sexes: [{ ordinal: 0, name: "Male"}, {ordinal: 1, name:"Female"}],
    username: "",
    password: "",
    fname: "",
    lname: "",
    sex: { ordinal: 0, name: "" },
    dob: "",
    email: "",
    nok: "",
    pronouns: "",
    phone: "",
    postcode: "",

  }),
  methods: {


    handleRegister() {

      const date = new Date(this.dob)

      const request: RegisterRequest = {
        username: this.username,
        password: this.password,
        forename: this.fname,
        surname: this.lname,
        dateOfBirth: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        sex: this.sex.ordinal,
        pronouns: this.pronouns.split("/"),
        email: this.email,
        phone: this.phone,
        postcode: this.postcode,
        nextOfKin: this.nok
      }

      auth().register(request).then((bool) => {
        registerFail.value = bool
      })

    }


  }
}

</script>