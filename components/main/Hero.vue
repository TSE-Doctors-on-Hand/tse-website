<!--
Hero template

Shows hero for the index page, also links to the Enter symptoms page
-->
<template>
  <div class="bg-center bg-no-repeat bg-cover bg-[url('/hero.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <!-- Main title -->
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">Get help
        fast with Doctors on hand</h1>
      <!-- Motto paragraph -->
      <p class="mb-8 text-lg font-normal text-[#E8EDEE] lg:text-xl sm:px-16 xl:px-48 ">Doctors on hand aims to
        revolutionise the way GP appointments are booked matching you to your symptoms to a suited specialist.</p>
      <!-- Redirect to enter symptoms page -->
      <a href="/service/consult"
         class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-[#005EB8] bg-gray-100 rounded-full ">
        <span class="text-lg font-medium px-4 py-1.5 mr-3">Enter your symptoms</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </div>

</template>
