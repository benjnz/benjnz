document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

  logo.addEventListener("mouseover", () => {
    const gifSrc = logo.getAttribute("data-gif");
    logo.src = `${gifSrc}?t=${new Date().getTime()}`; // Force reload of GIF
  });

  logo.addEventListener("mouseout", () => {
    const staticSrc = logo.getAttribute("src").replace(/\?.*$/, ""); // Remove query string
    logo.src = staticSrc; // Reset to static PNG
  });
});
