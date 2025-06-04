<script setup lang="ts">
import etiquette from "~/assets/etiquette.json";

useSeoMeta({
  title: "Open source etiquette - Is this project dead?",
});
</script>

<template>
  <div class="flex items-center justify-center h-screen overflow-auto flex-col">
    <ul class="space-y-4">
      <li class="text-2xl" v-for="(item, index) in etiquette" :key="index">
        - {{ item }}
      </li>
    </ul>

    <div>
      <p>You want to add more?</p>
      <a href="">Make a Pull Request to this project. It's open source</a>
    </div>
  </div>
</template>
