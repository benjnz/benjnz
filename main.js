document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-img");

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

  setInterval(function() {
  var gifImage = document.getElementById('gifImage');
  var src = gifImage.src; // Get the current source

  // Refresh the GIF by appending a random query parameter to the URL
  gifImage.src = ''; // Reset the image source
  gifImage.src = src + '?' + new Date().getTime(); // Reassign the same source with a unique timestamp to force reload
}, 10000); // 10000 ms = 10 seconds

  
});
