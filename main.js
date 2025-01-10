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

document.addEventListener("DOMContentLoaded", function () {
    const initialImage = document.getElementById("initial-image");
    const zoomedImage = document.getElementById("zoomed-image");
    const animationGif = document.getElementById("animation-gif");

    let isZoomedIn = false;

    const playGif = (reverse = false, callback) => {
        animationGif.classList.remove("mesh-hidden");
        animationGif.classList.add("mesh-visible");

        // Use the appropriate GIF file based on the reverse parameter
        animationGif.src = reverse
            ? "../media/meshanimation-reverse.gif" // Reverse GIF file
            : "../media/meshanimation.gif"; // Forward GIF file

        // Hide GIF after animation duration
        setTimeout(() => {
            animationGif.classList.remove("mesh-visible");
            animationGif.classList.add("mesh-hidden");
            if (callback) callback(); // Trigger callback after GIF finishes playing
        }, 1000); // Adjust to the length of your GIF animation
    };

    initialImage.addEventListener("click", () => {
        if (!isZoomedIn) {
            // Hide the initial image immediately
            initialImage.classList.remove("mesh-visible");
            initialImage.classList.add("mesh-hidden");

            // Play the forward GIF and fade in zoomed image
            playGif(false, () => {
                zoomedImage.classList.remove("mesh-hidden");
                zoomedImage.classList.add("mesh-visible");
            });
            isZoomedIn = true;
        }
    });

    zoomedImage.addEventListener("click", () => {
        if (isZoomedIn) {
            // Fade out zoomed image
            zoomedImage.classList.remove("mesh-visible");
            zoomedImage.classList.add("mesh-hidden");

            // Play the reverse GIF and show initial image
            playGif(true, () => {
                initialImage.classList.remove("mesh-hidden");
                initialImage.classList.add("mesh-visible");
            });
            isZoomedIn = false;
        }
    });
});
