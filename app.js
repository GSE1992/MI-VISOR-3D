function cargarAlineador(ruta) {
    const loader = new THREE.STLLoader();
    loader.load(ruta, function (geometry) {
        const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        renderer.render(scene, camera);
    });
}

// Eventos de clic para cargar diferentes alineadores
document.getElementById("botonAlineador1").addEventListener("click", function () {
    cargarAlineador("Alineador 1/Models/Tooth_1.stl"); // Ruta corregida con espacio
});
document.getElementById("botonAlineador2").addEventListener("click", function () {
    cargarAlineador("Alineador 2/Models/Tooth_1.stl"); // Ruta corregida con espacio
});
document.getElementById("botonAlineador3").addEventListener("click", function () {
    cargarAlineador("Alineador 3/Models/Tooth_1.stl"); // Ruta corregida con espacio
});
document.getElementById("botonAlineador4").addEventListener("click", function () {
    cargarAlineador("Alineador 4/Models/Tooth_1.stl"); // Ruta corregida con espacio
});
