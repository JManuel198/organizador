// js/views/epps.js

function mostrarListadoEpps() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del listado de epps -->
    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Epps')
        })
}

function mostrarFormularioEpps() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del formulario de epps -->
    `
    document.getElementById('btn-cancelar')
        .addEventListener('click', function() {
            navegar('/general/DataBase/List/Epps')
        })
}