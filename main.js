document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

  logo.addEventListener("mouseover", () => {
    if (logo.classList.contains("playing")) return; // Prevent overlapping animations

    const gifSrc = logo.getAttribute("data-gif");
    const duration = parseInt(logo.getAttribute("data-duration"), 10); // GIF duration in ms
    const staticSrc = logo.src;

    // Set the GIF source and mark it as playing
    logo.src = `${gifSrc}?t=${new Date().getTime()}`;
    logo.classList.add("playing");

    // Reset to static PNG after the GIF finishes
    setTimeout(() => {
      logo.src = staticSrc; // Reset to static image
      logo.classList.remove("playing");
    }, duration);
  });
});
