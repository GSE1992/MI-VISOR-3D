// Inicializa la escena, la cámara y el renderizador
let scene, camera, renderer;

// Función para inicializar la escena
function init() {
    // Crear la escena
    scene = new THREE.Scene();

    // Crear la cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Crear el renderizador
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Añadir luces
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
}

// Función para renderizar la escena
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Función para cargar diferentes alineadores
function cargarAlineador(alineador) {
    console.log(`Cargando Alineador ${alineador}`); // Ver mensaje en la consola
    scene.clear(); // Limpia la escena actual

    const loader = new THREE.STLLoader();
    loader.load(`./Alineador${alineador}/Models/Tooth_1.stl`, function (geometry) {
        console.log('Archivo STL cargado exitosamente'); // Ver mensaje en la consola
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    }, undefined, function (error) {
        console.error('Error al cargar el STL:', error); // Ver error en la consola si falla
    });
}

// Escuchar los botones de alineadores
document.getElementById('botonAlineador1').addEventListener('click', () => cargarAlineador(1));
document.getElementById('botonAlineador2').addEventListener('click', () => cargarAlineador(2));
document.getElementById('botonAlineador3').addEventListener('click', () => cargarAlineador(3));
document.getElementById('botonAlineador4').addEventListener('click', () => cargarAlineador(4));

// Inicializar y ejecutar la animación
init();
animate();
