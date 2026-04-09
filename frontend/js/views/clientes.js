// js/views/clientes.js

function mostrarListadoClientes() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del listado de clientes -->
    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Customer')
        })
}

function mostrarFormularioClientes() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `
        <!-- HTML del formulario de clientes -->
    `
    document.getElementById('btn-cancelar')
        .addEventListener('click', function() {
            navegar('/general/DataBase/List/Customer')
        })
}