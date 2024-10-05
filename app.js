var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1); // Cambia el fondo a blanco
document.getElementById('viewer').appendChild(renderer.domElement);

var loader = new THREE.STLLoader();
var alignerNumber = 1; // Inicializar con el primer alineador

// Función para cargar el alineador
function loadAligner(alignerNumber) {
    loader.load('models/aligner_' + alignerNumber + '.stl', function (geometry) {
        var material = new THREE.MeshBasicMaterial({ color: 0xB395F9 });
        var mesh = new THREE.Mesh(geometry, material);
        scene.clear();
        scene.add(mesh);
        animate();
    });
}

camera.position.z = 5;
loadAligner(1); // Cargar el primer alineador

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

document.getElementById('alignerRange').addEventListener('input', function (event) {
    alignerNumber = event.target.value;
    document.getElementById('alignerNumber').textContent = alignerNumber + " / 10 Alineadores";
    loadAligner(alignerNumber);
});

document.getElementById('play').addEventListener('click', function () {
    var interval = setInterval(function () {
        if (alignerNumber < 10) {
            alignerNumber++;
        } else {
            alignerNumber = 1;
        }
        document.getElementById('alignerRange').value = alignerNumber;
        document.getElementById('alignerNumber').textContent = alignerNumber + " / 10 Alineadores";
        loadAligner(alignerNumber);
    }, 1000);
});

document.getElementById('mostrarMaxilar').addEventListener('click', function () {
    // Código para mostrar solo el maxilar
});
document.getElementById('mostrarOclusion').addEventListener('click', function () {
    // Código para mostrar ambas arcadas en oclusión
});
document.getElementById('mostrarMandibula').addEventListener('click', function () {
    // Código para mostrar solo la mandíbula
});
