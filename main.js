console.log("THREE is:", THREE);

// Check if GLTFLoader is accessible
console.log("GLTFLoader is:", THREE.GLTFLoader);

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Load the .glb model
const loader = new THREE.GLTFLoader();
loader.load(
    './untitled.glb',
    function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.set(0, -1, 0);
        console.log("Model loaded successfully!");
    },
    undefined,
    function (error) {
        console.error("Error loading the model:", error);
    }
);

// Position camera
camera.position.set(0, 1, 5);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
