// js/views/ofertas.js

function mostrarListadoOfertas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del listado de ofertas -->
    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Offers')
        })
}

function mostrarFormularioOfertas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del formulario de ofertas -->
    `
    document.getElementById('btn-cancelar')
        .addEventListener('click', function() {
            navegar('/general/DataBase/List/Offers')
        })
}