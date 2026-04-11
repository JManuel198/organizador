// js/views/servicios.js

function mostrarListadoServicios() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header">
        <h2 class="view-header__title">Listado de servicios</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Servicios</span>
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
                    <th>Desc. del servicio</th>
                    <th>Tipo</th>
                    <th>Moneda</th>
                    <th>Precio de lista</th>
                    <th>Cantidad</th>
                    <th>Descuento</th>
                    <th>Precio total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="8" class="table__empty">
                        No hay servicios registrados todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    `

    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Services')
        })
}


function mostrarFormularioServicios() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nuevo servicio</h2>
        <p class="view-header__subtitle">Completa los campos para crear un nuevo servicio.</p>
    </div>

    <form id="form-servicio" class="view-form">

        <!-- Layout B: campo completo arriba + dos columnas -->
        <div class="form-layout-top-2col">

            <!-- Campo completo: descripción -->
            <div class="form-layout-top-2col__full">
                <div class="form-group">
                    <label class="form-label" for="descripcion">Descripción</label>
                    <input class="form-input" type="text" id="descripcion"
                            placeholder="Ingresa la descripción del servicio" />
                </div>
            </div>

            <!-- Columna izquierda -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="cod-fabrica">Código de fábrica</label>
                    <input class="form-input" type="text" id="cod-fabrica"
                            placeholder="Ingresa el código de fábrica del servicio" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="tipo-servicio">Tipo de servicio</label>
                    <input class="form-input" type="text" id="tipo-servicio"
                            placeholder="Buscar el tipo de servicio" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="cantidad">Cantidad</label>
                    <input class="form-input" type="number" id="cantidad"
                            placeholder="Ingresa la cantidad del servicio" min="0" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="unidad">Unidad</label>
                    <input class="form-input" type="text" id="unidad"
                            placeholder="Buscar la unidad a asignar" />
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="precio-lista">Precio de lista</label>
                    <input class="form-input" type="number" id="precio-lista"
                            placeholder="Ingresa el precio de lista" min="0" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="moneda">Moneda</label>
                    <input class="form-input" type="text" id="moneda"
                            placeholder="Buscar el tipo de moneda" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="descuento">Descuento</label>
                    <input class="form-input" type="number" id="descuento"
                            placeholder="0" min="0" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="precio-total">Precio total</label>
                    <input class="form-input form-input--readonly"
                            type="text" id="precio-total"
                            placeholder="Esperando a que termine los otros inputs"
                            readonly />
                </div>

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
            navegar('/general/DataBase/List/Services')
        })
}
