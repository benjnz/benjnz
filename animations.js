// Animate page elements with GSAP
document.addEventListener("DOMContentLoaded", () => {
  // Fade-in for the hero section
  gsap.from("header .hero h1", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("header .hero p", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // Staggered animation for gallery cards
  gsap.from(".project-card", {
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });
});
