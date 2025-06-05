<script setup lang="ts">
import loading from "~/assets/loading.json";
import { LOADER_INTERVAL_DELAY } from "~/constants";

const messageIndex = ref<number>(0);
const message = computed<string>(() => {
  return loading[messageIndex.value];
});

let interval: NodeJS.Timeout;

onMounted(() => {
  interval = setInterval(() => {
    if (messageIndex.value >= loading.length - 1) {
      messageIndex.value = 0;
    } else {
      messageIndex.value++;
    }
  }, LOADER_INTERVAL_DELAY);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="text-center">
    <Icon name="mdi:cloud-download" class="text-2xl animate-pulse" />
    <p>{{ message }}</p>
  </div>
</template>
