<script setup lang="ts">
import etiquette from "~/assets/etiquette.json";

const search = ref<string>("");
const hasResponse = ref<boolean>(false);

const randomNumber = Math.floor(Math.random() * etiquette.length);
const randomReason = etiquette[randomNumber];

function onFormSubmit(): void {
  if (!search.value) {
    return;
  }

  hasResponse.value = true;
}
</script>

<template>
  <div
    v-if="hasResponse"
    aria-live="polite"
    role="status"
    class="flex flex-col items-center"
  >
    <h1
      class="text-[60vw] leading-[60vw] lg:text-[60vh] lg:leading-[50vh] font-secondary font-bold"
      aria-label="No, this project is not dead."
    >
      NO
    </h1>
    <p>The project is not dead!</p>
    <p class="text-2xl text-stone-400 mt-1">{{ randomReason }}</p>

    <NuxtLink
      to="/open-source-etiquette"
      class="mt-12 underline hover:text-teal-300"
    >
      Open-source etiquette
    </NuxtLink>
  </div>

  <div v-else class="max-w-4xl 2xl:max-w-7xl">
    <header class="flex flex-col gap-4 text-center">
      <h1
        class="font-secondary font-bold text-5xl md:text-8xl 2xl:text-9xl text-balance"
      >
        Is this project dead?
      </h1>
      <p class="text-xl md:text-2xl font-extralight text-balance">
        Answering the world’s most annoying question in open source*
      </p>
    </header>

    <form
      @submit.prevent="onFormSubmit"
      class="max-w-xl mx-auto mt-12 w-full flex flex-col md:flex-row"
      aria-describedby="formDescription"
    >
      <p id="formDescription" class="sr-only">
        After submitting, you'll receive a message about open source maintenance
      </p>
      <label for="projectName" class="sr-only">Project name</label>
      <input
        id="projectName"
        placeholder="Is this project dead? Let’s see!"
        class="border outline-stone-300 flex-1 px-4 py-4 placeholder:text-center md:placeholder:text-left"
        type="text"
        v-model="search"
        required
      />
      <button
        class="border text-center mt-2 py-2 md:m-0 md:py-0 md:border-l-0 px-4 hover:bg-stone-900"
      >
        Unveil the Truth
      </button>
    </form>
  </div>
</template>
