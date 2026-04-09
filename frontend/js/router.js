// router.js
// Cerebro de la navegación.

function navegar(ruta) {
    history.pushState({ ruta: ruta }, '', ruta)
    cargarVista(ruta)
}

function cargarVista(ruta) {

    // El mapa se define acá adentro, no afuera.
    // Para cuando esta función se llama, todos los
    // scripts ya cargaron y las funciones existen.
    const rutas = {
        '/general/DataBase/List/Contacts':   mostrarListado,
        '/general/DataBase/Create/Contacts': mostrarFormulario,
    }

    const vista = rutas[ruta]

    if (vista) {
        vista()
    } else {
        document.getElementById('content').innerHTML = `
            <p style="padding: 2rem; color: var(--color-text-muted)">
                Vista no encontrada.
            </p>
        `
    }
}

window.addEventListener('popstate', function(evento) {
    if (evento.state && evento.state.ruta) {
        cargarVista(evento.state.ruta)
    }
})

window.addEventListener('DOMContentLoaded', function() {
    const rutaActual = window.location.pathname

    if (rutaActual !== '/') {
        cargarVista(rutaActual)
    }
})