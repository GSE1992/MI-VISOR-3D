var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer').appendChild(renderer.domElement);

var loader = new THREE.STLLoader();
var currentAligner = 1;
var maxAligners = 10;
var isPlaying = false;
var loop = false;
var maxilarMesh, mandibulaMesh;

// Cargar el primer alineador al inicio
loadAligner(currentAligner);

// Función para cargar un alineador específico
function loadAligner(alignerNumber) {
    loader.load(`Alineador ${alignerNumber}/Models/Tooth_UpperJaw.stl`, function (geometry) {
        var material = new THREE.MeshBasicMaterial({ color: 0xff9999 }); // Rosado para encía
        maxilarMesh = new THREE.Mesh(geometry, material);
        scene.add(maxilarMesh);
    });

    loader.load(`Alineador ${alignerNumber}/Models/Tooth_LowerJaw.stl`, function (geometry) {
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Blanco para dientes
        mandibulaMesh = new THREE.Mesh(geometry, material);
        scene.add(mandibulaMesh);
    });
}

// Función para limpiar la escena y cargar nuevo alineador
function changeAligner(alignerNumber) {
    scene.remove(maxilarMesh);
    scene.remove(mandibulaMesh);
    loadAligner(alignerNumber);
}

// Slider para cambiar entre alineadores
document.getElementById('alignerSlider').addEventListener('input', function (event) {
    currentAligner = event.target.value;
    document.getElementById('alignerLabel').innerText = `${currentAligner} / ${maxAligners} Alineadores`;
    changeAligner(currentAligner);
});

// Botones de control de la vista (maxilar, mandíbula, etc.)
document.getElementById('btnMaxilar').addEventListener('click', function () {
    mandibulaMesh.visible = false;
    maxilarMesh.visible = true;
});

document.getElementById('btnMandibula').addEventListener('click', function () {
    maxilarMesh.visible = false;
    mandibulaMesh.visible = true;
});

document.getElementById('btnOclusion').addEventListener('click', function () {
    maxilarMesh.visible = true;
    mandibulaMesh.visible = true;
});

document.getElementById('btn3D').addEventListener('click', function () {
    maxilarMesh.rotation.x += 0.1; // Ejemplo de rotación 3D
    mandibulaMesh.rotation.x += 0.1;
});

// Animar la escena
var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();

