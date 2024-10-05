import * as THREE from './three.module.min.js';
import { STLLoader } from './STLLoader.js';

// Crear la escena y la cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crear el renderer y añadirlo al DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Añadir luz a la escena
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Cargar los modelos STL
const loader = new STLLoader();

function cargarModelo(url) {
    loader.load(url, function (geometry) {
        // Eliminar todos los objetos previos de la escena para evitar duplicados
        while (scene.children.length > 1) {
            scene.remove(scene.children[1]);
        }

        // Crear el material y el mesh del objeto
        const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Ajustar la posición de la cámara
        camera.position.z = 100;
        animate();
    });
}

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Cargar el primer modelo como predeterminado
cargarModelo('./Alineador1/Models/Tooth_1.stl');

// Añadir eventos para los botones
document.getElementById('botonAlineador1').addEventListener('click', function () {
    cargarModelo('./Alineador1/Models/Tooth_1.stl');
});

document.getElementById('botonAlineador2').addEventListener('click', function () {
    cargarModelo('./Alineador2/Models/Tooth_1.stl');
});

document.getElementById('botonAlineador3').addEventListener('click', function () {
    cargarModelo('./Alineador3/Models/Tooth_1.stl');
});

document.getElementById('botonAlineador4').addEventListener('click', function () {
    cargarModelo('./Alineador4/Models/Tooth_1.stl');
});

// Actualizar el tamaño del visor cuando se cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
