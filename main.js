document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

  logo.addEventListener("mouseover", () => {
    // Add a unique query string to force replay of the GIF
    const animatedGif = `${logo.getAttribute("data-animated")}?t=${new Date().getTime()}`;
    logo.src = animatedGif;
  });

  logo.addEventListener("mouseout", () => {
    // Revert to the static frame
    logo.src = logo.getAttribute("data-static");
  });
});
