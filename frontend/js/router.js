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
        // Clientes
        '/general/DataBase/List/Customer':   mostrarListadoClientes,
        '/general/DataBase/Create/Customer': mostrarFormularioClientes,

        // Contactos
        '/general/DataBase/List/Contacts':   mostrarListadoContactos,
        '/general/DataBase/Create/Contacts': mostrarFormularioContactos,

        // Servicios
        '/general/DataBase/List/Services':   mostrarListadoServicios,
        '/general/DataBase/Create/Services': mostrarFormularioServicios,

        // Epps
        '/general/DataBase/List/Epps':   mostrarListadoEpps,
        '/general/DataBase/Create/Epps': mostrarFormularioEpps,

        // Personal
        '/general/DataBase/List/Staff':   mostrarListadoPersonal,
        '/general/DataBase/Create/Staff': mostrarFormularioPersonal,

        // Materiales
        '/general/DataBase/List/Materials':   mostrarListadoMateriales,
        '/general/DataBase/Create/Materials': mostrarFormularioMateriales,

        // Herramientas
        '/general/DataBase/List/Tools':   mostrarListadoHerramientas,
        '/general/DataBase/Create/Tools': mostrarFormularioHerramientas,

        // Ofertas
        '/general/DataBase/List/Offers':   mostrarListadoOfertas,
        '/general/DataBase/Create/Offers': mostrarFormularioOfertas,
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