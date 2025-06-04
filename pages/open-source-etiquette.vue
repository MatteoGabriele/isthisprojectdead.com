<script setup lang="ts">
import etiquette from "~/assets/etiquette.json";

useSeoMeta({
  title: "Open source etiquette - Is this project dead?",
});
</script>

<template>
  <div>
    <h1 class="font-secondary font-extrabold text-3xl mb-12">
      Open Source Etiquette Tips
    </h1>

    <ul class="space-y-1">
      <li
        class="text-xl text-purple-200"
        v-for="(item, index) in etiquette"
        :key="index"
      >
        - {{ item }}
      </li>
    </ul>

    <div class="mt-12">
      <h2 class="text-purple-200">Want to add more?</h2>
      <p>
        Consider
        <a
          class="underline hover:text-teal-300"
          href="https://github.com/MatteoGabriele/isthisprojectdead.com"
        >
          making a Pull Request
        </a>
        to this project.
      </p>
      <p>It's open source, after all!</p>
    </div>
  </div>
</template>
