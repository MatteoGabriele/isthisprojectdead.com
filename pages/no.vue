<script setup lang="ts">
import etiquette from "~/assets/etiquette.json";

const randomNumber = useState("random_number", () => {
  return Math.floor(Math.random() * etiquette.length);
});

const randomReason = computed<string>(() => {
  return etiquette[randomNumber.value];
});
</script>

<template>
  <div class="flex flex-col items-center">
    <h1
      class="text-[60vw] leading-[50vw] lg:text-[60vh] lg:leading-[50vh] font-secondary font-bold"
    >
      NO
    </h1>
    <h2 class="text-xl mt-4">Friendly etiquette tip:</h2>
    <p
      class="text-2xl font-extralight text-center text-balance text-stone-300 mt-1"
    >
      {{ randomReason }}
    </p>

    <div
      class="mt-12 text-center flex flex-col items-center gap-2 border-t pt-8 border-stone-800"
    >
      <div class="flex gap-2 items-baseline">
        <Icon name="mdi-sparkles" class="text-sm" />
        <Icon name="mdi-book-open-page-variant" class="text-2xl" />
        <Icon name="mdi-sparkles" class="text-sm rotate-180" />
      </div>
      <p class="text-stone-300 text-balance">
        Check out these awesome tips for working in open source!
      </p>
      <a
        target="_blank"
        href="https://opensource.guide/"
        class="underline hover:text-teal-300"
      >
        Open Source Guides
      </a>
    </div>
  </div>
</template>
