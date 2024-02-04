import * as THREE from 'three';

// Crear la geometría de la cuadrícula
const gridHelper = new THREE.GridHelper(8, 6, 0xdddddd, 0xdddddd); // Ajustar 'size' y 'divisions'

// Cambiar el material de la cuadrícula (puedes usar MeshBasicMaterial o LineBasicMaterial)
gridHelper.material.color.set(0xffffff);

// Rotar la cuadrícula
gridHelper.rotation.x = Math.PI / 2
//alejar la cuadricula
gridHelper.position.z = -1.5;
// Exportar la cuadrícula como una variable
export const myCuadricula = gridHelper;
