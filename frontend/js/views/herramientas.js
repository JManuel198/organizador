// js/views/herramientas.js

function mostrarListadoHerramientas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del listado de herramientas -->
    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Tools')
        })
}

function mostrarFormularioHerramientas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del formulario de herramientas -->
    `
    document.getElementById('btn-cancelar')
        .addEventListener('click', function() {
            navegar('/general/DataBase/List/Tools')
        })
}