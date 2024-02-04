import * as THREE from 'three';
import { myCube } from './objects/cubo';
import { myCuadricula } from './objects/cuadricula';

//Quitar los scrollbars
document.body.style.overflow = 'hidden';
document.body.style.margin = '0';


// Obtener referencia al botón "Jugar"
const playButton = document.getElementById('playButton');
// Obtener referencia al texto de bienvenida
const infoText = document.getElementById('info');


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Posicionar el cubo y la cuadrícula en la escena
scene.add(myCube);
scene.add(myCuadricula);

// Configurar la cámara
camera.position.z = 5;

// Configurar luz ambiental
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Configurar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 5, 5);
scene.add(directionalLight);

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Escuchar el evento 'click' en el botón "Jugar"
playButton!.addEventListener('click', () => {
  startGame();  
});

//Definir Matriz de la Cuadrícula 6*6 es un juego como puyo puyo
//Los cubos se generan en la parte superior de la cuadrícula y caen hacia abajo teniendo como limite en x el 

//Posicion inicial del cubo
myCube.position.x = .5;
myCube.position.y = .5;

//Iniciar el juego
const startGame = () => {
  // Ocultar el texto de bienvenida y el botón "Jugar"
  infoText!.style.display = 'none';
  playButton!.style.display = 'none';



  //Si presionamos la tecla de la flecha izquierda
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      moveCube(myCube, 'left');
    }
    else if (event.key === 'ArrowRight') {
      moveCube(myCube, 'right');
    }else if (event.key === 'ArrowDown') {
      moveCube(myCube, 'down');
    }
  });

}


//Funcion para mover un cubo en la cuadricula
const moveCube = (cube: THREE.Mesh, direction: string) => {
  if (direction === 'left') {
    cube.position.x -= 1.2;
  } else if (direction === 'right') {
    cube.position.x += 1.2;
  }else if (direction === 'down') {
    //Mover el cubo hacia abajo
   //Si el cubo no ha llegado al limite de la cuadricula y = -3
    if(cube.position.y > -3){
      cube.position.y -= 1.2;
    }
  }
}

// //Funcion para generar un cubo en la cuadricula
// const generateCube = () => {

// }