const els = document.querySelectorAll("[data-reveal]");

const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

els.forEach((el) => io.observe(el));

requestAnimationFrame(() => {
  document.documentElement.classList.add("hero-loaded");
});
