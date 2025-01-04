document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

  // Handle mouseover event
  logo.addEventListener("mouseover", () => {
    if (logo.classList.contains("playing")) return;

    const gifSrc = logo.getAttribute("data-gif");
    const duration = parseInt(logo.getAttribute("data-duration"), 10);
    const staticSrc = logo.src;

    logo.src = `${gifSrc}?t=${new Date().getTime()}`;
    logo.classList.add("playing");

    setTimeout(() => {
      logo.src = staticSrc;
      logo.classList.remove("playing");
    }, duration);
  });

  // Refresh the GIF source every 10 seconds (if necessary)
  setInterval(function() {
    const gifImage = document.querySelector('.logo-img');
    if (!gifImage) return; // Prevent errors if the element doesn't exist
    const src = gifImage.src;

    // Force reloading the GIF by appending a unique timestamp
    gifImage.src = ''; // Reset the image source
    gifImage.src = src + '?' + new Date().getTime(); // Reassign the same source with a unique timestamp to force reload
  }, 10000); // 10000 ms = 10 seconds
});
