<template>

  <div class="py-5 border-t-8 border-[#005EB8] bg-[#E8EDEE] mt-5">

    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 sm:grid-cols-1">

        <div class="pt-10 uppercase">
          <p class="px-2 font-bold">Doctors on Hand</p>
        </div>


        <div class="grid gap-8 md:grid-cols-2 sm:grid-cols-1 justify-self-end">
          <div v-for="category in footerLinks">
            <h2 class="mb-6 text-sm font-bold">{{ category.title }}</h2>

            <ul class="font-medium text-gray-700">
              <li v-for="link in category.links">
                <a :href="link.url">{{ link.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const footerLinks = [
  {
    title: "Doctors on Hand",
    links: [
      {title: "Home", url: "/"},
      {title: "NHS UK", url: "https"}
    ]
  },
  {
    title: "Legal",
    links: [
      {title: "Privacy Policy", url: "/legal/privacy"},
      {title: "Accessibility Statement", url: "/legal/privacy"},
      {title: "Cookies", url: "/legal/cookies"}
    ]
  },
]

</script>
