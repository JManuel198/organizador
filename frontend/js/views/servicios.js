// js/views/servicios.js

function mostrarListadoServicios() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del listado de servicios -->
    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Services')
        })
}

function mostrarFormularioServicios() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del formulario de servicios -->
    `
    document.getElementById('btn-cancelar')
        .addEventListener('click', function() {
            navegar('/general/DataBase/List/Services')
        })
}