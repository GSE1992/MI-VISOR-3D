var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer').appendChild(renderer.domElement);

// Loader para los modelos STL
var loader = new THREE.STLLoader();

var maxilla, mandible;
var alignerNumber = 1;
var maxAligners = 10;

function loadAligner(alignerNumber) {
    // Cargar el maxilar
    loader.load(`models/aligner_${alignerNumber}_maxilla.stl`, function (geometry) {
        if (maxilla) scene.remove(maxilla);  // Eliminar el modelo anterior
        var material = new THREE.MeshBasicMaterial({ color: 0xB395F9 });
        maxilla = new THREE.Mesh(geometry, material);
        scene.add(maxilla);
    });

    // Cargar la mandíbula
    loader.load(`models/aligner_${alignerNumber}_mandible.stl`, function (geometry) {
        if (mandible) scene.remove(mandible);  // Eliminar el modelo anterior
        var material = new THREE.MeshBasicMaterial({ color: 0xF77F00 });
        mandible = new THREE.Mesh(geometry, material);
        scene.add(mandible);
    });
}

// Inicializa la cámara
camera.position.z = 5;
loadAligner(1);

var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

// Control Slider para seleccionar los alineadores
document.getElementById('alignerSlider').addEventListener('input', function (event) {
    alignerNumber = event.target.value;
    document.getElementById('alignerValue').innerText = alignerNumber;
    loadAligner(alignerNumber);
});

// Mostrar/ocultar maxilar
document.getElementById('showMaxilla').addEventListener('click', function () {
    if (scene.getObjectByName(maxilla.name)) {
        scene.remove(maxilla);
    } else {
        scene.add(maxilla);
    }
});

// Mostrar/ocultar mandíbula
document.getElementById('showMandible').addEventListener('click', function () {
    if (scene.getObjectByName(mandible.name)) {
        scene.remove(mandible);
    } else {
        scene.add(mandible);
    }
});
