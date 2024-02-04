import * as THREE from 'three';

const cube = new THREE.BoxGeometry();
const textureLoader = new THREE.TextureLoader();

// Cargar las tres imágenes
const texture = textureLoader.load('src/textures/glass/glass_texture.jpg');
const roughnessMap = textureLoader.load('src/textures/glass/Glass_Blocks_001_roughness.jpg');
const normalMap = textureLoader.load('src/textures/glass/glass.jpg');

// Crear el material con las tres texturas
const material = new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    roughness: .5, // Es un material rugoso
    metalness: .7, // No metálico
    transparent: true, // Habilitar transparencia
    opacity: .8, // Ajustar opacidad según sea necesario
    color: 0x00FF00,
    side: THREE.DoubleSide, // Doble cara

});

// Hacer mas pequeño el cubo
cube.scale(0.7, 0.7, 0.7);

// Crear el cubo con la geometría y el material
const mycube = new THREE.Mesh(cube, material);

// Exportar el cubo como una variable
export const myCube = mycube;
