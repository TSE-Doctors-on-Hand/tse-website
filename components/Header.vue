<template>

<nav class="bg-white border-gray-200 dark:bg-[#005EB8]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/home_screen" class="flex items-center space-x-3 rtl:space-x-reverse">
    <Icon name="medical-icon:i-cardiology" color="white" /> 
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a href="/" class="text-white max-sm:hidden font-medium pr-4 content-center items-center mx-auto justify-between ">My Account</a>
        <Icon name="mdi:account" color="white" class="w-8 h-8 rounded-full" />
  </div>

  <div class="text-white text-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <span class="text-2xl font-semibold ">Doctors On Hand</span>

    
  </div>
  </div>
</nav>

</template>