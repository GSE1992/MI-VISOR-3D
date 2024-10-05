// Variables para los alineadores
const alignerFiles = [
    "Tooth_2.stl", "Tooth_3.stl", "Tooth_4.stl", "Tooth_5.stl", "Tooth_6.stl", 
    "Tooth_7.stl", "Tooth_8.stl", "Tooth_9.stl", "Tooth_10.stl", "Tooth_11.stl",
    "Tooth_12.stl", "Tooth_13.stl", "Tooth_14.stl", "Tooth_15.stl", "Tooth_18.stl", 
    "Tooth_19.stl", "Tooth_20.stl", "Tooth_21.stl", "Tooth_22.stl", "Tooth_23.stl", 
    "Tooth_24.stl", "Tooth_25.stl", "Tooth_26.stl", "Tooth_27.stl", "Tooth_28.stl", 
    "Tooth_29.stl", "Tooth_30.stl", "Tooth_31.stl", "Tooth_LowerJaw.stl", "Tooth_UpperJaw.stl"
];

// Cargar los archivos STL
function loadSTLFiles(alignerIndex) {
    const alignerPath = `Alineador ${alignerIndex + 1}/Models/`; // ruta de los alineadores

    alignerFiles.forEach((file) => {
        const filePath = alignerPath + file;
        // Aquí iría tu código para cargar los archivos STL
        console.log(`Cargando: ${filePath}`);
        // Utiliza tu función de carga de STL en esta parte
        loadSTLModel(filePath);
    });
}

// Función para cargar el modelo STL (utiliza tu motor 3D como Three.js o X3DOM)
function loadSTLModel(path) {
    // Aquí se debe incluir el código que carga el archivo STL en el visor 3D
    // Por ejemplo, si usas Three.js, deberías utilizar el STLLoader:
    const loader = new THREE.STLLoader();
    loader.load(path, function (geometry) {
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh); // `scene` sería la escena donde añades los modelos 3D
        console.log(`Modelo ${path} cargado`);
    });
}

// Inicializar la escena 3D con Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer').appendChild(renderer.domElement);

// Agregar luz a la escena
const ambientLight = new THREE.AmbientLight(0x404040); // Luz ambiental suave
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);

// Función de animación para renderizar la escena
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Evento cuando cambia el valor del slider
document.getElementById('slider').addEventListener('input', function (event) {
    const alignerIndex = parseInt(event.target.value) - 1;
    loadSTLFiles(alignerIndex);
});

// Inicializar la primera carga
loadSTLFiles(0);

// Control de botones (maxilar, mandíbula, oclusión, etc.)
document.getElementById('maxilar').addEventListener('click', function () {
    // Función para cargar solo el maxilar
    console.log("Cargando maxilar...");
});

document.getElementById('mandibula').addEventListener('click', function () {
    // Función para cargar solo la mandíbula
    console.log("Cargando mandíbula...");
});

document.getElementById('oclusion').addEventListener('click', function () {
    // Función para cargar la oclusión
    console.log("Cargando oclusión...");
});

document.getElementById('reset').addEventListener('click', function () {
    // Función para resetear la vista 3D
    console.log("Reseteando vista 3D...");
});
