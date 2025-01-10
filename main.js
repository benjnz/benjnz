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

// Helper function to reset GIF animation
function resetGif(gifElement, playReverse = false) {
    gifElement.src = ""; // Reset GIF by clearing src
    gifElement.src = playReverse ? "../media/meshanimation_reverse.gif" : "../media/meshanimation.gif";
}

// Event listener for the initial image
initialImage.addEventListener("click", () => {
    // Hide the initial image
    initialImage.classList.add("mesh-hidden");

    // Reset and show the GIF
    resetGif(animationGif);
    animationGif.classList.remove("mesh-hidden");
    animationGif.classList.add("mesh-visible");

    // Show the zoomed image after a short delay
    setTimeout(() => {
        zoomedImage.classList.remove("mesh-hidden");
        zoomedImage.classList.add("mesh-visible");
    }, 100);

    // Automatically hide the GIF after it finishes (assuming 2s duration)
    setTimeout(() => {
        animationGif.classList.remove("mesh-visible");
        animationGif.classList.add("mesh-hidden");
    }, 2000); // Replace 2000 with the exact duration of the GIF in milliseconds
});

// Event listener for the zoomed image
zoomedImage.addEventListener("click", () => {
    // Hide the zoomed-in image
    zoomedImage.classList.add("mesh-hidden");
    zoomedImage.classList.remove("mesh-visible");

    // Reset and show the GIF in reverse
    resetGif(animationGif, true);
    animationGif.classList.remove("mesh-hidden");
    animationGif.classList.add("mesh-visible");

    // Show the initial image after a short delay
    setTimeout(() => {
        initialImage.classList.remove("mesh-hidden");
    }, 100);

    // Automatically hide the GIF after it finishes (assuming 2s duration)
    setTimeout(() => {
        animationGif.classList.remove("mesh-visible");
        animationGif.classList.add("mesh-hidden");
    }, 2000); // Replace 2000 with the exact duration of the reverse GIF in milliseconds
});
