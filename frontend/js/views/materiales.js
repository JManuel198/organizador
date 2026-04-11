// js/views/materiales.js
// Algunos inputs contienen ids y clases que son iguales a los de otras vistas !!

function mostrarListadoMateriales() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header">
        <h2 class="view-header__title">Listado de materiales</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Materiales</span>
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
                    <th>Descripción</th>
                    <th>Cant. Detalles Téc.</th>
                    <th>Cant. Ofertas</th>
                    <th>Cód. de Fab.</th>
                    <th>Marca</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="6" class="table__empty">
                        No hay materiales registrados todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    `
    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Materials')
        })
}

function mostrarFormularioMateriales() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nuevo material</h2>
        <p class="view-header__subtitle">Completa los campos para crear un nuevo material.</p>
    </div>

    <form id="form-material" class="view-form">

        <!-- Layout B: campo completo arriba + dos columnas -->
        <div class="form-layout-top-2col">

            <!-- Campo completo: descripción -->
            <div class="form-layout-top-2col__full">
                <div class="form-group">
                    <label class="form-label" for="descripcion">Descripción</label>
                    <input class="form-input" type="text" id="descripcion"
                            placeholder="Ingresa la descripción del material" />
                </div>
            </div>

            <!-- Columna izquierda -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="nombre-material">Nombre producto</label>
                    <input class="form-input" type="text" id="nombre-material"
                            placeholder="Ingresa el nombre del material" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="modelo-material">Modelo</label>
                    <input class="form-input" type="text" id="modelo-material"
                            placeholder="Ingresa el modelo del material" />
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="cod-fabrica">Código de fábrica</label>
                    <input class="form-input" type="text" id="cod-fabrica"
                            placeholder="Ingresa el código de fábrica del material" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="marca">Marca</label>
                    <input class="form-input" type="text" id="marca"
                            placeholder="Ingresa la marca del material" />
                </div>

                <!-- Dos listas:
                Columnas de la primera lista de material: N°, Detalle técnico y Acciones.
                Justo debajo de las columnas, donde deberían ir las filas, hay solo una que dice "agregar material".
                Al hacer click en esa fila aún no sé qué campos hay que rellenar.

                Columnas de la segunta lista de oferta: N°, Proveedor, Objeto, Unidad, Precio, Cantidad, Descuento, Precio final y Acciones.
                Tiene la misma fila que la anterior pero con "agregar oferta"
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
            navegar('/general/DataBase/List/Materials')
        })
}