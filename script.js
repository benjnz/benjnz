// Import Three.js and GLTFLoader (via module import or CDN)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Load the .glb model
const loader = new GLTFLoader();
loader.load(
    'untitled.glb', // Path to the GLB file (directly in the root folder)
    function (gltf) {
        // Add the loaded 3D model to the scene
        const model = gltf.scene;
        scene.add(model);

        // Adjust model's position, scale, and rotation to ensure it's centered
model.scale.set(0.5, 0.5, 0.5); // Example for a large model
camera.position.set(0, 1, 10); // Move the camera back

        model.rotation.set(0, 0, 0); // Reset rotation

        // Optional: Move the camera closer or further based on the model size
        camera.position.set(0, 1, 5); // Adjust for better framing
    },
    undefined, // Optional: Progress callback
    function (error) {
        console.error('An error occurred while loading the model:', error);
    }
);

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
