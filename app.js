// Configurar la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer-container').appendChild(renderer.domElement);

// Añadir luz a la escena
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Posicionar la cámara
camera.position.z = 5;

// Cargar el STLLoader
const loader = new THREE.STLLoader();

// Función para cargar y mostrar los archivos STL
function cargarAlineador(ruta) {
    loader.load(ruta, function (geometry) {
        const material = new THREE.MeshPhongMaterial({ color: 0xAAAAAA });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        renderer.render(scene, camera);
    });
}

// Eventos de clic para cargar diferentes alineadores
document.getElementById('botonAlineador1').onclick = function() {
    cargarAlineador('Alineador 1/Models/Tooth_1.stl');
};

document.getElementById('botonAlineador2').onclick = function() {
    cargarAlineador('Alineador 2/Models/Tooth_1.stl');
};

document.getElementById('botonAlineador3').onclick = function() {
    cargarAlineador('Alineador 3/Models/Tooth_1.stl');
};

document.getElementById('botonAlineador4').onclick = function() {
    cargarAlineador('Alineador 4/Models/Tooth_1.stl');
};
