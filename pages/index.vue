<script setup lang="ts">
import loading from "~/assets/loading.json";
import { LOADER_INTERVAL_DELAY } from "~/constants";

const loadingTruth = ref<boolean>(false);

async function fetchTruth(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, LOADER_INTERVAL_DELAY * loading.length);
  });
}

async function onFormSubmit(): Promise<void> {
  loadingTruth.value = true;

  await fetchTruth();

  useRouter().push("/result");
}
</script>

<template>
  <Loader v-if="loadingTruth" />
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
        required
      />
      <button
        class="md:border text-center mt-2 py-2 md:m-0 md:py-0 md:border-l-0 px-4 hover:bg-stone-900"
      >
        Unveil the Truth
      </button>
    </form>
  </div>
</template>
