<script setup lang="ts">
import etiquette from "~/assets/etiquette.json";

const randomNumber = Math.floor(Math.random() * etiquette.length);
const randomReason = etiquette[randomNumber];
</script>

<template>
  <div aria-live="polite" role="status" class="flex flex-col items-center">
    <h1
      class="text-[60vw] leading-[60vw] lg:text-[60vh] lg:leading-[50vh] font-secondary font-bold"
      aria-label="No, this project is not dead."
    >
      NO
    </h1>
    <p>The project is not dead!</p>
    <p class="text-2xl text-center text-balance text-stone-400 mt-1">
      {{ randomReason }}
    </p>

    <NuxtLink
      to="/open-source-etiquette"
      class="mt-12 underline hover:text-teal-300"
    >
      Open-source etiquette
    </NuxtLink>
  </div>
</template>
