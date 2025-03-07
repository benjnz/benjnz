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

// Initialize the map
const map = L.map('map').setView([51.5415, -0.1424], 16); // Centered on Camden Lock

// Add a tile layer (using OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add titles (replace with your actual coordinates and content)
const title1 = L.marker([51.5410, -0.1420]).addTo(map) 
  .bindPopup('<a href="#" data-lightbox="lightbox1">Title 1</a>'); 

const title2 = L.marker([51.5418, -0.1430]).addTo(map)
  .bindPopup('<a href="#" data-lightbox="lightbox2">Title 2</a>'); 

const title3 = L.marker([51.5405, -0.1415]).addTo(map)
  .bindPopup('<a href="#" data-lightbox="lightbox3">Title 3</a>'); 

// Lightbox functionality (same as before)
const lightboxes = document.querySelectorAll('.camden-lightbox');
const triggers = document.querySelectorAll('.camden-title'); // This might need adjustment
const closeButtons = document.querySelectorAll('.camden-lightbox-close');

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

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        restartGif(); // Restart GIF whenever it becomes visible
      }
    });
  }, { threshold: 0.1 }); // Detect when at least 10% of the footer is visible

  function restartGif() {
    const gifSrc = gif.src;
    gif.src = ""; // Clear the src
    setTimeout(() => {
      gif.src = gifSrc; // Restore the src to restart GIF
    }, 100); // Small delay ensures a proper reset
  }

  observer.observe(document.getElementById("footer"));
});

document.addEventListener('DOMContentLoaded', function () {
    const drawingThumbnails = document.querySelectorAll('.civil-drawing-thumbnail');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeFullscreenButton = document.getElementById('close-fullscreen');

    // Open fullscreen when a drawing is clicked
    drawingThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            fullscreenImage.src = this.src; // Set the source of the fullscreen image
            fullscreenOverlay.classList.remove('hidden'); // Show the overlay
        });
    });

    // Close fullscreen when the close button is clicked
    closeFullscreenButton.addEventListener('click', function () {
        fullscreenOverlay.classList.add('hidden'); // Hide the overlay
        fullscreenImage.src = ''; // Clear the image source
    });

    // Close fullscreen when clicking outside the image
    fullscreenOverlay.addEventListener('click', function (e) {
        if (e.target === fullscreenOverlay) { // Ensure only clicks outside the image close it
            fullscreenOverlay.classList.add('hidden'); // Hide the overlay
            fullscreenImage.src = ''; // Clear the image source
        }
    });
});

