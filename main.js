
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

  logo.addEventListener("mouseover", () => {
    logo.src = logo.getAttribute("data-animated"); // Switch to animated GIF
  });

  logo.addEventListener("mouseout", () => {
    logo.src = logo.getAttribute("data-static"); // Revert to static frame
  });
});
