<template>
  <h3 class="text-3xl font-bold text-center text-[#005EB8] py-5">Why use Doctors on hand?</h3>

  <div class="flex justify-center">
    <a v-for="box in boxes" class="p-6 block max-w-sm p-6 bg-[#E8EDEE] border border-[#002EB8] rounded-lg shadow mr-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-[#005EB8]">{{ box.header }}</h5>
      <p class="font-normal text-[#768692] text-center"> {{ box.text }} </p>
    </a>
  </div>
</template>

<script setup lang="ts">

const boxes = [
  {
    header: "Convenience",
    text: "Doctors on Hand offers unparalleled convenience by allowing\n" +
        "        users to access medical assistance from the comfort of their own homes. Rather than having to schedule and\n" +
        "        travel to appointments, users can receive professional medical advice and support virtually, saving time and\n" +
        "        eliminating the hassle of transportation."
  },
  {
    header: "Specialised matching",
    text: "Doctors on Hand employs advanced algorithms to match users\n" +
        "        with the most suitable medical professionals based on their symptoms and needs. This ensures that users\n" +
        "        receive personalized care tailored to their specific conditions, leading to more accurate diagnoses and\n" +
        "        effective treatment plans."
  },
  {
    header: "Efficient appointment",
    text: "With Doctors on Hand, users can schedule appointments with\n" +
        "        medical specialists seamlessly and efficiently. The platform streamlines the scheduling process by offering\n" +
        "        flexible appointment times that accommodate users' availability, reducing wait times and ensuring timely\n" +
        "        access to healthcare services."
  }
]

</script>