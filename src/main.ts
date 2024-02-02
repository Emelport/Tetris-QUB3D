import * as THREE from 'three';
import { myCube } from './objects/cubo';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(myCube);

camera.position.z = 5;

// Configurar luz
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Configurar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);


const animate = function () {
  requestAnimationFrame(animate);

  myCube.rotation.x += 0.01;
  myCube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();