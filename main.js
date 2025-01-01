document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

  logo.addEventListener("mouseover", () => {
    if (!logo.classList.contains("playing")) {
      logo.classList.add("playing"); // Mark the GIF as playing
      const animatedGif = logo.getAttribute("data-animated");
      logo.src = `${animatedGif}?t=${new Date().getTime()}`; // Reload GIF
    }
  });

  logo.addEventListener("mouseout", () => {
    const staticFrame = logo.getAttribute("data-static");

    // Delay resetting to static frame based on GIF duration (e.g., 3s)
    setTimeout(() => {
      logo.src = staticFrame;
      logo.classList.remove("playing"); // Reset state to allow replay
    }, 3000); // Adjust this delay to match GIF duration
  });
});
