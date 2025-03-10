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

  const gifs = document.querySelectorAll('.gif-container img');
  
  gifs.forEach(gif => {
    gif.addEventListener('load', function() {
      // Force reload on GIF after it finishes playing
      this.src = this.src;
    });
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

function openPDF() {
    // Replace 'path/to/your-paper.pdf' with the actual path or URL to your PDF
    const pdfURL = "/microprintspaper.pdf";
    window.open(pdfURL, "_blank"); // Opens the PDF in a new tab
}

document.addEventListener("DOMContentLoaded", () => {
    // Select the images
    const initialImage = document.getElementById("initial-image");
    const zoomedImage = document.getElementById("zoomed-image");
    const animationGif = document.getElementById("animation-gif");

    // Ensure the GIF and zoomed image are hidden initially
    animationGif.classList.add("mesh-hidden");
    zoomedImage.classList.add("mesh-hidden");

    // Add a click event listener to the initial image
    initialImage.addEventListener("click", () => {
        // Hide the initial image
        initialImage.classList.add("mesh-hidden");

        // Show the zoomed image and GIF
        zoomedImage.classList.remove("mesh-hidden");
        animationGif.classList.remove("mesh-hidden");

        // Reload the GIF to start playing from the beginning
        animationGif.src = animationGif.src;
    });
  
  // Add a click event listener to the zoomed image
    zoomedImage.addEventListener("click", () => {
        // Hide the zoomed image
        zoomedImage.classList.add("mesh-hidden");

        // Show the initial image but not GIF
        animationGif.classList.add("mesh-hidden");
        initialImage.classList.remove("mesh-hidden");
        

});
 
});

// Open Lightbox
document.querySelectorAll('.camden-overlay-title').forEach(title => {
  title.addEventListener('click', () => {
    const lightboxId = title.dataset.lightbox;
    document.getElementById(`camden-lightbox-${lightboxId}`).style.display = 'flex';
  });
});

// Close Lightbox
document.querySelectorAll('.camden-close-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.camden-lightbox').style.display = 'none';
  });
});

// Close Lightbox on Background Click
document.querySelectorAll('.camden-lightbox').forEach(lightbox => {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const gif = document.getElementById("footer-gif");
  let isRestarting = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isRestarting) {
        restartGif();
      }
    });
  }, { threshold: 0.1 });

  function restartGif() {
    if (isRestarting) return;
    isRestarting = true;

    const newGif = new Image();
    newGif.onload = () => {
      gif.src = newGif.src;
      isRestarting = false;
    };
    newGif.src = gif.src + '?t=' + Date.now(); // Force reload by adding timestamp
  }

  observer.observe(document.getElementById("footer"));
});



(function() {
    function setupFullscreenImages() {
        const drawingThumbnails = document.querySelectorAll('.civil-drawing-thumbnail');
        const body = document.body;

        drawingThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();

                const fullscreenImg = document.createElement('img');
                fullscreenImg.src = this.src;
                fullscreenImg.className = 'civil-fullscreen-image';
                
                const overlay = document.createElement('div');
                overlay.className = 'civil-fullscreen-overlay';
                overlay.appendChild(fullscreenImg);
                
                body.appendChild(overlay);
                
                overlay.onclick = function(event) {
                    if (event.target === overlay) {
                        body.removeChild(overlay);
                    }
                };

                fullscreenImg.onclick = function(event) {
                    event.stopPropagation();
                };

                console.log('Fullscreen image created');
            });
        });

        console.log('Fullscreen setup complete');
    }

    // Run the setup immediately
    setupFullscreenImages();

    // Also run it when the DOM is fully loaded (in case the script runs too early)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupFullscreenImages);
    }
})();



