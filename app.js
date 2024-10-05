// Importar STLLoader desde el CDN correctamente
import { STLLoader } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/examples/jsm/loaders/STLLoader.js';

// Crear escena, cámara y renderizador
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer').appendChild(renderer.domElement);

// Establecer luz
let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Posicionar la cámara
camera.position.z = 150;

// Cargar archivos STL
const loader = new STLLoader();
let models = [];
let modelPaths = [
    'Alineador 1/Models/Tooth_2.stl',
    'Alineador 1/Models/Tooth_3.stl',
    'Alineador 1/Models/Tooth_4.stl',
    // Incluye las demás rutas a los archivos STL aquí
];

function loadSTLFiles() {
    modelPaths.forEach(path => {
        loader.load(path, geometry => {
            let material = new THREE.MeshLambertMaterial({ color: 0xffffff });
            let model = new THREE.Mesh(geometry, material);
            models.push(model);
            scene.add(model);
        });
    });
}

// Llamar la función para cargar los archivos
loadSTLFiles();

// Función de renderizado
function animate() {
    requestAnimationFrame(animate);

    // Animación o rotación de los modelos (si lo deseas)
    models.forEach(model => {
        model.rotation.x += 0.01;
        model.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}
animate();
