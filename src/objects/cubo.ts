import * as THREE from 'three';

const cube = new THREE.BoxGeometry();
const textureLoader = new THREE.TextureLoader();

// Cargar las tres imágenes
const texture = textureLoader.load('src/textures/glass/Glass_Blocks_001_glass.jpg');
const roughnessMap = textureLoader.load('src/textures/glass/Glass_Blocks_001_roughness.jpg');
const normalMap = textureLoader.load('src/textures/glass/Glass_Blocks_001_normal.jpg');

// Crear el material con las tres texturas
const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughnessMap: roughnessMap,
    normalMap: normalMap,
    roughness: 1, // Es un material rugoso
    metalness: 0.5, // No metálico
    transparent: true, // Habilitar transparencia
    opacity: .6, // Ajustar opacidad según sea necesario
    color: 0x00ff00, // Color de la luz,
    side: THREE.DoubleSide // Doble cara
});




// Crear el cubo con la geometría y el material
const mycube = new THREE.Mesh(cube, material);

// Exportar el cubo como una variable
export const myCube = mycube;
