import { configure } from "vue-gtag";

export default defineNuxtPlugin({
  name: "gtag",
  setup() {
    if (import.meta.dev) {
      return;
    }

    const router = useRouter();

    configure({
      tagId: "G-8WYNKRSSTP",
      pageTracker: {
        router,
      },
    });
  },
});
