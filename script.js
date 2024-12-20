import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);
camera.position.set(0, 1, 5); // Adjust camera position for better view

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // White light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Load the .glb model
const loader = new GLTFLoader();
loader.load(
    'untitled.glb', // Path to your GLB file
    function (gltf) {
        const model = gltf.scene;

        // Adjust model's position and scale
        model.position.set(0, -1, 0); // Center the model
        model.scale.set(1, 1, 1); // Adjust if needed

        scene.add(model);

        console.log('Model loaded successfully!');
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Log loading progress
    },
    function (error) {
        console.error('An error occurred while loading the model:', error);
    }
);

// Handle resizing
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
