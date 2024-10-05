// Configuración del fondo blanco
scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Fondo blanco

// Configuración de la cámara y luces
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Añadir controles de órbita para que el usuario pueda rotar la vista 3D
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// Cargar modelos de los alineadores

const loader = new THREE.STLLoader(); // Asegúrate de que tienes cargada la librería STLLoader

// Función para cargar y mostrar los dientes
function cargarDientes(alineadorNum) {
  const teethFiles = [
    `Alineador ${alineadorNum}/Models/Tooth_2.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_3.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_4.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_5.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_6.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_7.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_8.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_9.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_10.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_11.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_12.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_13.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_14.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_15.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_16.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_17.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_18.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_19.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_20.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_21.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_22.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_23.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_24.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_25.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_26.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_27.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_28.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_29.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_30.stl`,
    `Alineador ${alineadorNum}/Models/Tooth_31.stl`
  ];

  teethFiles.forEach(function (file) {
    loader.load(file, function (geometry) {
      var toothMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Blanco para los dientes
      var mesh = new THREE.Mesh(geometry, toothMaterial);
      scene.add(mesh);
    }, undefined, function (error) {
      console.error('Error cargando archivo STL: ', file, error);
    });
  });

  // Cargar encías (mandíbula superior e inferior)
  loader.load(`Alineador ${alineadorNum}/Models/Tooth_UpperJaw.stl`, function (geometry) {
    var gumMaterial = new THREE.MeshBasicMaterial({ color: 0xff9999 }); // Rosa para las encías
    var mesh = new THREE.Mesh(geometry, gumMaterial);
    scene.add(mesh);
  }, undefined, function (error) {
    console.error('Error cargando archivo STL: ', `Alineador ${alineadorNum}/Models/Tooth_UpperJaw.stl`, error);
  });

  loader.load(`Alineador ${alineadorNum}/Models/Tooth_LowerJaw.stl`, function (geometry) {
    var gumMaterial = new THREE.MeshBasicMaterial({ color: 0xff9999 }); // Rosa para las encías
    var mesh = new THREE.Mesh(geometry, gumMaterial);
    scene.add(mesh);
  }, undefined, function (error) {
    console.error('Error cargando archivo STL: ', `Alineador ${alineadorNum}/Models/Tooth_LowerJaw.stl`, error);
  });
}

// Inicializar con el Alineador 1
cargarDientes(1);

// Controlar los alineadores con un slider
var slider = document.getElementById('slider');
slider.addEventListener('input', function () {
  var alineadorNum = this.value;
  scene.clear(); // Limpiar la escena antes de cargar los nuevos modelos
  cargarDientes(alineadorNum);
});

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Actualizar controles de órbita
  renderer.render(scene, camera);
}
animate();
