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
const renderer = new THREE.WebGLRenderer();
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
    'me.glb', // Path to the GLB file (directly in the root folder)
    function (gltf) {
        // Add the loaded 3D model to the scene
        scene.add(gltf.scene);

        // Optional: Position the camera relative to the model
        gltf.scene.position.set(0, 0, 0);
    },
    undefined, // Optional: Progress callback
    function (error) {
        console.error('An error occurred while loading the model:', error);
    }
);

// Position the camera
camera.position.set(0, 1, 5); // Move the camera to better view the scene

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
