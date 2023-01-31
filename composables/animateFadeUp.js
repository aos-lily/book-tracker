import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

export function animateFadeUp(el) {
  const ctx = ref();

  onMounted(() => {
    ctx.value = gsap.context(() => {
      const books = el.value.children;

      for (let item of books) {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
          }
        });
      }
    }, el.value);
  });

  onUnmounted(() => {
    ctx.value.revert();
  });
}
