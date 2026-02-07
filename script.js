const revealElements = document.querySelectorAll(
  ".fleet, .steps, .deals, .contact, .car-card, .step, .deal-card, .contact-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el, index) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${index * 0.08}s`;
  observer.observe(el);
});

const hero = document.querySelector(".hero");
const heroBg = document.querySelectorAll(".hero-bg span");

window.addEventListener("mousemove", (event) => {
  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 20;
  const y = (event.clientY / innerHeight - 0.5) * 20;

  heroBg.forEach((shape, index) => {
    const depth = (index + 1) * 0.6;
    shape.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
  });
});
