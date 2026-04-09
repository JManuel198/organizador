// js/views/materiales.js

function mostrarListadoMateriales() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del listado de materiales -->
    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Materials')
        })
}

function mostrarFormularioMateriales() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del formulario de materiales -->
    `
    document.getElementById('btn-cancelar')
        .addEventListener('click', function() {
            navegar('/general/DataBase/List/Materials')
        })
}