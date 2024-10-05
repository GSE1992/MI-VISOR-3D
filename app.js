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

// Función para cargar y mostrar **todos los archivos STL** en una carpeta
function cargarAlineador(carpeta) {
    const archivos = [
        'Tooth_2.stl', 'Tooth_3.stl', 'Tooth_4.stl', 'Tooth_5.stl', 'Tooth_6.stl', 'Tooth_7.stl',
        'Tooth_8.stl', 'Tooth_9.stl', 'Tooth_10.stl', 'Tooth_11.stl', 'Tooth_12.stl', 'Tooth_13.stl',
        'Tooth_14.stl', 'Tooth_15.stl', 'Tooth_16.stl', 'Tooth_17.stl', 'Tooth_18.stl', 'Tooth_19.stl',
        'Tooth_20.stl', 'Tooth_21.stl', 'Tooth_22.stl', 'Tooth_23.stl', 'Tooth_24.stl', 'Tooth_25.stl',
        'Tooth_26.stl', 'Tooth_27.stl', 'Tooth_28.stl', 'Tooth_29.stl', 'Tooth_30.stl', 'Tooth_31.stl',
        'Tooth_LowerJaw.stl', 'Tooth_UpperJaw.stl'// Agrega todos los archivos STL que desees cargar
    ];

    archivos.forEach(function(archivo) {
        const ruta = carpeta + '/' + archivo;
        loader.load(ruta, function (geometry) {
            const material = new THREE.MeshPhongMaterial({ color: 0x0055ff, specular: 0x111111, shininess: 200 });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            renderer.render(scene, camera);
        });
    });
}

// Eventos de clic para cargar diferentes alineadores
document.getElementById('botonAlineador1').onclick = function () {
    cargarAlineador('Alineador 1/Models'); // Cargar todos los archivos STL en Alineador 1
};
document.getElementById('botonAlineador2').onclick = function () {
    cargarAlineador('Alineador 2/Models'); // Cargar todos los archivos STL en Alineador 2
};
document.getElementById('botonAlineador3').onclick = function () {
    cargarAlineador('Alineador 3/Models'); // Cargar todos los archivos STL en Alineador 3
};
document.getElementById('botonAlineador4').onclick = function () {
    cargarAlineador('Alineador 4/Models'); // Cargar todos los archivos STL en Alineador 4
};

// Renderizar la escena
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
