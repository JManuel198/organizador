// js/views/herramientas.js
// También contiene ids y clases iguales a las otras vistas !!

function mostrarListadoHerramientas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header">
        <h2 class="view-header__title">Listado de herramientas</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Herramientas</span>
    </div>

    <div class="view-subheader">
        <button class="btn btn--primary btn--sm" id="btn-nuevo">
            + Nuevo
        </button>
        <input class="form-input view-subheader__search"
                type="text" placeholder="Buscar..." disabled />
        <div class="view-subheader__pagination">
            <button class="btn btn--secondary btn--sm" disabled>&#8249;</button>
            <span class="view-subheader__page">Página 1</span>
            <button class="btn btn--secondary btn--sm" disabled>&#8250;</button>
        </div>
    </div>

    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr>
                    <th>Cód.</th>
                    <th>Desc. de la Herramienta</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Cant. Ofertas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="5" class="table__empty">
                        No hay herramientas registradas todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Tools')
        })
}

function mostrarFormularioHerramientas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nueva herramienta</h2>
        <p class="view-header__subtitle">Completa los campos para crear un nueva herramienta.</p>
    </div>

    <form id="form-herramienta" class="view-form">
        <div class="form-layout-2col">
            <!-- Columna izquierda -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="descripcion">Descripción</label>
                    <input class="form-input" type="text" id="descripcion"
                            placeholder="Ingresa la descripción de la herramienta" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="modelo-herramienta">Modelo</label>
                    <input class="form-input" type="text" id="modelo-herramienta"
                            placeholder="Ingresa el modelo de la herramienta" />
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="nombre-herramienta">Nombre producto</label>
                    <input class="form-input" type="text" id="nombre-herramienta"
                            placeholder="Ingresa el nombre de la herramienta" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="marca">Marca</label>
                    <input class="form-input" type="text" id="marca"
                            placeholder="Ingresa la marca de la herramienta" />
                </div>

                <!-- Una lista de Ofertas igual que en la seccion de materiales:
                Columnas de la lista de ofertas: N°, Proveedor, Objeto, Unidad, Precio, Cantidad, Descuento, Precio final y Acciones.
                Tiene una fila que dice "agregar oferta".
                No sé qué campos extras además de las columnas pedirá al clickear "agregar oferta".
                -->

                <!-- Botones -->
                <div class="form-actions">
                    <button class="btn btn--secondary" type="button" id="btn-cancelar">
                        Cancelar
                    </button>
                    <button class="btn btn--primary" type="submit">
                        Crear
                    </button>
                </div>
            </div>

        </div>
    </form>

    `
    document.getElementById('btn-cancelar')
        .addEventListener('click', function() {
            navegar('/general/DataBase/List/Tools')
        })
}