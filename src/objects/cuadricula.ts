import * as THREE from 'three';

// Crear la geometría de la cuadrícula
const gridHelper = new THREE.GridHelper(10, 6, 0xdddddd, 0xdddddd); // Ajustar 'size' y 'divisions'

// Cambiar el material de la cuadrícula (puedes usar MeshBasicMaterial o LineBasicMaterial)
gridHelper.material.color.set(0xffffff);

// Rotar y ajustar la escala para que la cuadrícula sea de 6x10
gridHelper.rotation.x = Math.PI / 2.5; // Rotar 90 grados
gridHelper.scale.set(1, 1.6, 1); // Ajustar la escala en X para hacer la cuadrícula más larga


// Posicionar la cuadrícula
gridHelper.position.y = 1;
gridHelper.position.z = -3;


// Exportar la cuadrícula como una variable
export const myCuadricula = gridHelper;
