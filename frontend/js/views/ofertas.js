// js/views/ofertas.js
// Algunos inputs contienen ids y clases iguales a las otras vistas.

function mostrarListadoOfertas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header">
        <h2 class="view-header__title">Listado de ofertas</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Ofertas</span>
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
                    <th>Cod.</th>
                    <th>Descripción del Objeto</th>
                    <th>Proveedor</th>
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
                        No hay ofertas registradas todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Offers')
        })
}

function mostrarFormularioOfertas() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nueva oferta</h2>
        <p class="view-header__subtitle">Completa los campos para crear un nueva oferta.</p>
    </div>

    <form id="form-ofertas" class="view-form">
        <div class="form-layout-2col">
            <!-- Columna izquierda -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="objeto">Objeto</label>
                    <input class="form-input" type="text" id="objeto"
                            placeholder="Buscar el material a asignar" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="proveedor">Proveedor</label>
                    <input class="form-input" type="text" id="proveedor"
                            placeholder="Buscar el proveedor del material" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="unidad">Unidad</label>
                    <input class="form-input" type="text" id="unidad"
                            placeholder="Buscar la unidad a asignar" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="moneda">Moneda</label>
                    <input class="form-input" type="text" id="moneda"
                            placeholder="Buscar el tipo de moneda" />
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="cantidad">Cantidad</label>
                    <input class="form-input" type="number" id="cantidad"
                            placeholder="Ingresa la cantidad" min="0" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="descuento">Descuento</label>
                    <input class="form-input" type="number" id="descuento"
                            placeholder="0" min="0" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="precio-lista">Precio de lista</label>
                    <input class="form-input" type="number" id="precio-lista"
                            placeholder="Ingresa el precio de lista del proveedor" min="0" />
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
            navegar('/general/DataBase/List/Offers')
        })
}