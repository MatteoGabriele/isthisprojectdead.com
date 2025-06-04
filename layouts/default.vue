<script setup lang="ts"></script>

<template>
  <div class="h-screen flex flex-col">
    <header
      class="sticky top-0 flex justify-between p-4 bg-stone-950 shadow-2xl shadow-stone-950"
    >
      <NuxtLink
        class="text-xl text-stone-600 hover:text-teal-300"
        to="/"
        aria-label="Home page"
      >
        <Icon aria-hidden="true" name="mdi:skull" />
      </NuxtLink>

      <a
        class="text-xl text-stone-600 hover:text-teal-300"
        target="_blank"
        href="https://github.com/MatteoGabriele/isthisprojectdead.com"
        aria-label="github repository of this website"
      >
        <Icon aria-hidden="true" name="mdi:github" />
      </a>
    </header>

    <main class="p-4 md:p-8 flex flex-col items-center justify-center flex-1">
      <slot />
    </main>

    <footer
      class="sticky bottom-0 flex flex-col justify-center md:flex-row items-center gap-6 md:justify-between p-4 bg-stone-950 shadow-2xl shadow-stone-950"
    >
      <p class="text-stone-600 text-sm text-center md:text-left">
        * This website is a humorous nudge on how to be a better part of
        <a
          href="https://en.wikipedia.org/wiki/Open-source_software_development"
          class="hover:text-teal-300 underline underline-offset-2"
          target="_blank"
        >
          open source
        </a>
        —because asking nicely is always better.
      </p>

      <div class="flex text-sm shrink-0 items-center gap-1 text-stone-600">
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
