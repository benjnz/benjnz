let isPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

  logo.addEventListener("mouseover", () => {
    if (!isPlaying) {
      isPlaying = true;
      const animatedGif = logo.getAttribute("data-animated");
      logo.src = `${animatedGif}?t=${new Date().getTime()}`;
    }
  });

  logo.addEventListener("mouseout", () => {
    const staticFrame = logo.getAttribute("data-static");
    logo.src = staticFrame;

    // Allow playback after a delay
    setTimeout(() => {
      isPlaying = false;
    }, 3000); // Adjust delay based on GIF duration
  });
});
