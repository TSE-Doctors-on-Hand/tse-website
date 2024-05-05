<template>

  <div class="flex min-h-full flex-col px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register with Doctors on Hand</h2>
    </div>

    <form class=" sm:mx-auto sm:w-full sm:max-w-md">
      <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" name="username" id="username" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ex. johnb68">
        </div>
        <div>
          <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="text" name="brand" id="brand" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
          <input type="text" name="fname" id="fname" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ex. John">
        </div>
        <div>
          <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
          <input type="text" name="lname" id="lname" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Bloggs">
        </div>
        <div>
          <label for="sex" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex</label>
          <select id="sex" name="sex" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </div>
        <div>
          <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
          <input type="date" name="dob" id="dob" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ex. John">
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="john@somewhere.com">
        </div>
        <div>
          <label for="nok" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Next of Kin</label>
          <input type="text" name="nok" id="nok" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="john@somewhere.com">
        </div>
        <div>
          <label for="pronouns" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pronouns</label>
          <input type="text" maxlength="17" value="" name="pronouns" id="pronouns" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ex. He/Him">
        </div>
        <div>
          <label for="pronouns" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pronouns</label>
          <input type="text" maxlength="17" value="" name="pronouns" id="pronouns" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ex. He/Him">
        </div>
        <div>
          <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
          <input type="tel" maxlength="17" value="" name="telephone" id="telephone" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+44 1234 567 890">
        </div>
        <div>
          <label for="postcode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postcode</label>
          <input type="text" minlength="6" maxlength="7" value="" name="telephone" id="telephone" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="LN6 7DQ">
        </div>
      </div>
    </form>

  </div>

</template>