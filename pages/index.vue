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

const saEvent = inject<(event: string) => void>("saEvent");

async function onFormSubmit(): Promise<void> {
  saEvent?.("form_submitted");

  loadingTruth.value = true;

  await fetchTruth();

  useRouter().push("/no");
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
        Answering the world's most annoying question in open source*
      </p>
    </header>

    <form
      @submit.prevent="onFormSubmit"
      class="max-w-xl mx-auto mt-12 w-full flex flex-col md:flex-row hover:shadow-2xl"
      aria-describedby="formDescription"
    >
      <p id="formDescription" class="sr-only">
        After submitting, you'll receive a message about the status of the
        project
      </p>
      <label for="projectName" class="sr-only">Project name</label>
      <input
        id="projectName"
        placeholder="Type the project name"
        class="border transition-colors outline-stone-300 flex-1 px-6 py-4 placeholder:text-center md:placeholder:text-left"
        type="text"
        required
      />
      <button
        class="md:border transition-colors hover:text-white text-center mt-2 py-2 md:m-0 md:py-0 md:border-l-0 px-6 md:hover:bg-purple-300 border-purple-300 md:hover:text-black"
      >
        Unveil the Truth
      </button>
    </form>
  </div>
</template>
