var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer').appendChild(renderer.domElement);

var loader = new THREE.STLLoader();
function loadAligner(alignerNumber) {
    loader.load('models/aligner_' + alignerNumber + '.stl', function (geometry) {
        var material = new THREE.MeshBasicMaterial({ color: 0xB395F9 });
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    });
}

camera.position.z = 5;
loadAligner(1);

var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

document.getElementById('alignerRange').addEventListener('input', function (event) {
    var alignerNumber = event.target.value;
    scene.clear();
    loadAligner(alignerNumber);
});
