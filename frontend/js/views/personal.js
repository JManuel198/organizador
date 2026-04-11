// js/views/personal.js
// Algunos de los inputs del formulario son los mismos que servicios.js y epps.js
// Evitar tener problemas con clases o id

function mostrarListadoPersonal() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header">
        <h2 class="view-header__title">Listado de personal</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Personal</span>
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
                    <th>Desc. del personal</th>
                    <th>Unidad</th>
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
                        No hay personal registrado todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    `

    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Staff')
        })
}

function mostrarFormularioPersonal() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nuevo personal</h2>
        <p class="view-header__subtitle">Completa los campos para crear un nuevo personal.</p>
    </div>

    <form id="form-personal" class="view-form">
        <div class="form-layout-2col">
            <!-- Columna izquierda antes de la tabla -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="descripcion">Descripción</label>
                    <input class="form-input" type="text" id="descripcion"
                            placeholder="Ingresa la descripción del servicio" />
                </div>
            </div>

            <!-- Columna derecha antes de la tabla -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="salario-mensual">Salario mensual</label>
                    <input class="form-input" type="text" id="salario-mensual"
                            placeholder="Ingresa el salario mensual del personal" />
                </div>
            </div>

            <!-- 
            (tabla para cargar epps)
            Epps: Botón "Cargar Epps Básicos"
            -->
            <!-- 
            Tabla con columnas: Tipo, Epp, Precio, Moneda, Cantidad/Año 
            Contiene 9 filas: Botas, camisa, pantalón, polo, chaleco, casco, orejeras, guantes y lentes.
            Cada fila tiene un pleaceholder según la columna.
            En tipo va el nombre de las filas antes nombradas.
            En epp se busca, dice "Buscar las/los/el (nombre del tipo) que usará el personal".
            En precio solo dice "Seleccione el epp".
            En moneda solo dice "Seleccione el epp".
            La cantidad/año es un input tipo number.
            -->

            <!-- Columna izquierda luego de la tabla -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="costo-bruto">Costo bruto</label>
                    <input class="form-input form-input--readonly"
                            type="text" id="costo-bruto"
                            placeholder="Esperando a que ingrese el salario mensual"
                            readonly />
                </div>
                <div class="form-group">
                    <label class="form-label" for="costo-dia">Costo del dia</label>
                    <input class="form-input form-input--readonly"
                            type="text" id="costo-dia"
                            placeholder="Esperando a que ingrese el salario mensual"
                            readonly />
                </div>
                <div class="form-group">
                    <label class="form-label" for="costo-horas">Costo por horas</label>
                    <input class="form-input form-input--readonly"
                            type="text" id="costo-horas"
                            placeholder="Esperando a que ingrese el salario mensual"
                            readonly />
                </div>
                <div class="form-group">
                    <label class="form-label" for="descuento">Descuento</label>
                    <input class="form-input" type="number" id="descuento"
                            placeholder="0" min="0" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="precio-lista">Precio de lista</label>
                    <input class="form-input" type="number" id="precio-lista"
                            placeholder="Ingresa el precio de lista" min="0" />
                </div>
            </div>

            <!-- Columna derecha luego de la tabla-->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="moneda">Moneda</label>
                    <input class="form-input" type="text" id="moneda"
                            placeholder="Buscar el tipo de moneda" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="cantidad">Cantidad</label>
                    <input class="form-input" type="number" id="cantidad"
                            placeholder="Ingresa la cantidad del personal" min="0" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="unidad">Unidad</label>
                    <input class="form-input" type="text" id="unidad"
                            placeholder="Buscar la unidad a asignar" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="cod-fabrica">Código de fábrica</label>
                    <input class="form-input" type="text" id="cod-fabrica"
                            placeholder="Ingresa el código de fábrica del epp" />
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
            navegar('/general/DataBase/List/Staff')
        })
}