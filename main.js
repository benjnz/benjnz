document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  
  if (loadingScreen) {
    // After the page is fully loaded, fade out the loading screen
    window.addEventListener('load', function() {
      loadingScreen.style.opacity = '0'; // Fade out by setting opacity to 0
      setTimeout(function() {
        loadingScreen.style.display = 'none'; // Hide the loading screen completely
      }, 500); // Make sure this matches the transition time in CSS
    });
  } else {
    console.error("Loading screen not found.");
  }
});


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

  // Refresh the GIF every 10 seconds
  setInterval(() => {
    const gifSrc = logo.getAttribute("data-gif");
    const staticSrc = logo.src;

    // Force reload the GIF by appending a timestamp to the source
    logo.src = `${gifSrc}?t=${new Date().getTime()}`;
    logo.classList.add("playing");

    // Reset to static image after the GIF duration (if you know the duration of the gif)
    setTimeout(() => {
      logo.src = staticSrc;
      logo.classList.remove("playing");
    }, parseInt(logo.getAttribute("data-duration"), 10));
  }, 10000); // 10000 ms = 10 seconds
});

// Select elements
const initialImage = document.getElementById("initial-image");
const zoomedImage = document.getElementById("zoomed-image");
const animationGif = document.getElementById("animation-gif");

// Add event listener for the initial image
initialImage.addEventListener("click", () => {
    // Hide the initial image
    initialImage.classList.add("mesh-hidden");

    // Show the GIF
    animationGif.classList.remove("mesh-hidden");
    animationGif.classList.add("mesh-visible");

    // Show the zoomed image after a small delay for better sync
    setTimeout(() => {
        zoomedImage.classList.remove("mesh-hidden");
        zoomedImage.classList.add("mesh-visible");
    }, 100); // Adjust the delay (in ms) as needed
});

// Add event listener for the zoomed-in image
zoomedImage.addEventListener("click", () => {
    // Hide the zoomed image
    zoomedImage.classList.add("mesh-hidden");
    zoomedImage.classList.remove("mesh-visible");

    // Reverse the GIF
    animationGif.classList.remove("mesh-visible");
    animationGif.classList.add("mesh-hidden");

    // Show the initial image after a small delay
    setTimeout(() => {
        initialImage.classList.remove("mesh-hidden");
    }, 100); // Adjust the delay (in ms) as needed
});
