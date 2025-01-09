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

document.addEventListener("DOMContentLoaded", () => {
    const initialImage = document.getElementById("initial-image");
    const zoomedImage = document.getElementById("zoomed-image");

    let isZoomed = false;

    // Initial Image click handler (Zoom in)
    initialImage.addEventListener("click", () => {
        if (!isZoomed) {
            // Apply zoom-in effect to the initial image
            initialImage.classList.add("zoomed-in");
            initialImage.classList.remove("unzoomed");

            // Hide the initial image and show the zoomed-in image after zoom-in effect
            setTimeout(() => {
                initialImage.classList.add("mesh-hidden");
                zoomedImage.classList.remove("mesh-hidden");
                zoomedImage.classList.add("zoomed-in");
                zoomedImage.classList.remove("unzoomed");
            }, 400); // Matches the transition duration for zoom effect
        }

        // Toggle zoom state
        isZoomed = !isZoomed;
    });

    // Zoomed Image click handler (Zoom out)
    zoomedImage.addEventListener("click", () => {
        if (isZoomed) {
            // Apply zoom-out effect (return to original state)
            zoomedImage.classList.remove("zoomed-in");
            zoomedImage.classList.add("unzoomed");

            // Hide the zoomed image and show the initial image after zoom-out effect
            setTimeout(() => {
                zoomedImage.classList.add("mesh-hidden");
                initialImage.classList.remove("mesh-hidden");
                initialImage.classList.add("unzoomed");
            }, 400); // Matches the transition duration for zoom effect
        }

        // Toggle zoom state
        isZoomed = !isZoomed;
    });
});


