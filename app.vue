<script setup lang="ts">
const search = ref<string>("");
const hasResponse = ref<boolean>(false);

const reasons = [
  "Be kind. Maintainers have lives too.",
  "If you see a stale issue, ask if you can help fix it!",
  "Open source is a team sport. Offer help instead of asking for updates.",
  "Maintainers aren’t robots—give them a break!",
  "Instead of complaining, see if you can pitch in.",
  "A stale repo isn’t always dead—maybe it just doesn’t need updates!",
  "Don’t forget to say thank you—maintainers love appreciation.",
  "Be patient—open source runs on spare time, not deadlines.",
  "Ask with kindness, and you’re more likely to get help!",
  "Open source is teamwork—your help makes a difference.",
];

const randomNumber = Math.floor(Math.random() * reasons.length);
const randomReason = reasons[randomNumber];

function onFormSubmit(): void {
  if (!search.value) {
    return;
  }

  hasResponse.value = true;
}
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="p-4 flex justify-end">
      <a
        class="text-lg text-stone-600 hover:text-teal-300"
        target="_blank"
        href="https://github.com/MatteoGabriele/isthisprojectdead.com"
      >
        <Icon name="mdi:github" />
      </a>
    </header>
    <main class="p-4 md:p-8 flex flex-col items-center justify-center flex-1">
      <template v-if="hasResponse">
        <div class="flex flex-col items-center">
          <h1
            class="text-[60vw] leading-[60vw] lg:text-[60vh] lg:leading-[60vh] font-secondary font-bold"
          >
            NO
          </h1>
          <p class="text-xl">{{ randomReason }}</p>
        </div>
      </template>
      <template v-else>
        <div class="max-w-4xl 2xl:max-w-7xl">
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
          >
            <input
              placeholder="The name of your favourite project"
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
    </main>
    <footer
      v-if="!hasResponse"
      class="flex flex-col justify-center md:flex-row items-center gap-6 md:justify-between p-4"
    >
      <p class="text-stone-600 text-sm text-center md:text-left">
        * A humorous nudge on how to be a better part of
        <a
          href="https://en.wikipedia.org/wiki/Open-source_software_development"
          class="hover:text-teal-300 underline underline-offset-2"
          target="_blank"
        >
          open source</a
        >—because asking nicely is always better.
      </p>

      <div class="flex shrink-0 items-center gap-1 text-stone-600">
        Build with <Icon name="ic:sharp-favorite-border" /> by
        <a
          class="hover:text-teal-300 underline underline-offset-2"
          target="_blank"
          href="https://github.com/matteogabriele"
        >
          Matteo Gabriele
        </a>
      </div>
    </footer>
  </div>
</template>
