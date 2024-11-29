// Fade-in Animations
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".fade-in", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power1.out",
  });

  gsap.from(".project.card", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    ease: "power1.out",
  });
});
