import * as THREE from 'three';
import { myCube } from './objects/cubo';
import { myCuadricula } from './objects/cuadricula';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Posicionar el cubo y la cuadrícula en la escena
scene.add(myCube);
myCube.rotation.x = Math.PI / 4;
scene.add(myCuadricula);

// Configurar la cámara
camera.position.z = 5;

// Configurar luz ambiental
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Configurar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();

// Obtener referencia al botón "Jugar"
const playButton = document.getElementById('playButton');

// Obtener referencia al texto de bienvenida
const infoText = document.getElementById('info');

// Escuchar el evento 'click' en el botón "Jugar"
playButton!.addEventListener('click', () => {
  // Ocultar el texto de bienvenida y el botón "Jugar"
  infoText!.style.display = 'none';
  playButton!.style.display = 'none';
});
