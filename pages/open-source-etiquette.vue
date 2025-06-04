<script setup lang="ts">
import etiquette from "~/assets/etiquette.json";

useSeoMeta({
  title: "Open source etiquette - Is this project dead?",
});
</script>

<template>
  <div>
    <h1 class="sr-only">Open Source Etiquette</h1>

    <ul class="space-y-4">
      <li
        class="text-center text-lg text-indigo-200"
        v-for="(item, index) in etiquette"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>

    <div class="mt-12 text-center">
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
