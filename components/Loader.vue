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
  <div class="text-center opacity-0 animate-fade-in" role="status">
    <Icon
      aria-hidden="true"
      name="mdi:cloud-download"
      class="text-2xl animate-pulse"
    />
    <Transition name="message" mode="out-in">
      <p
        :key="messageIndex"
        aria-live="polite"
        class="transition-all duration-300"
      >
        {{ message }}
      </p>
    </Transition>
  </div>
</template>

<style>
/* Message transitions */
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease;
}

.message-enter-from {
  opacity: 0;
  transform: rotateX(30deg) translateY(6px);
}

.message-leave-to {
  opacity: 0;
  transform: rotateX(-30deg);
}

.message-enter-to,
.message-leave-from {
  opacity: 1;
  transform: rotateX(0deg);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out forwards;
}
</style>
