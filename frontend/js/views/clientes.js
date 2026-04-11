// js/views/clientes.js

function mostrarListadoClientes() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header">
        <h2 class="view-header__title">Listado de clientes</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Clientes</span>
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
                    <th>Razón social</th>
                    <th>Nombre comercial</th>
                    <th>RUC</th>
                    <th>Condición</th>
                    <th>Agente retenedor</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="6" class="table__empty">
                        No hay clientes registrados todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    `

    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Customer')
        })
}


function mostrarFormularioClientes() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nuevo cliente</h2>
        <p class="view-header__subtitle">Completa los campos para crear un nuevo cliente.</p>
    </div>

    <form id="form-cliente" class="view-form">

        <!-- Layout B: campo completo arriba + dos columnas -->
        <div class="form-layout-top-2col">

            <!-- Campo completo: N° RUC -->
            <div class="form-layout-top-2col__full">
                <div class="form-group">
                    <label class="form-label" for="ruc">N° RUC</label>
                    <input class="form-input" type="text" id="ruc"
                            placeholder="Ingresa el RUC de la empresa" />
                </div>
            </div>

            <!-- Columna izquierda -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="razon-social">Razón social</label>
                    <input class="form-input" type="text" id="razon-social"
                            placeholder="Ingresa la razón social" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="estado">Estado</label>
                    <input class="form-input" type="text" id="estado"
                            placeholder="Ingresa el estado de la empresa" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="condicion">Condición</label>
                    <input class="form-input" type="text" id="condicion"
                            placeholder="Ingresa la condición de la empresa" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="agente-retenedor">Agente retenedor</label>
                    <select class="form-input" id="agente-retenedor">
                        <option value="">Selecciona si es agente retenedor</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label" for="direccion">Dirección</label>
                    <input class="form-input" type="text" id="direccion"
                            placeholder="Ingresa la dirección de la empresa" />
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="distrito">Distrito</label>
                    <input class="form-input" type="text" id="distrito"
                            placeholder="Ingresa el distrito de la empresa" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="provincia">Provincia</label>
                    <input class="form-input" type="text" id="provincia"
                            placeholder="Ingresa la provincia de la empresa" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="departamento">Departamento</label>
                    <input class="form-input" type="text" id="departamento"
                            placeholder="Ingresa el departamento de la empresa" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="tipo-empresa">Tipo de empresa</label>
                    <select class="form-input" id="tipo-empresa">
                        <option value="">Selecciona el tipo de empresa</option>
                        <option value="ejemplo-1">Ejemplo 1</option>
                        <option value="ejemplo-2">Ejemplo 2</option>
                        <option value="ejemplo-3">Ejemplo 3</option>
                        <option value="ejemplo-4">Ejemplo 4</option>
                        <option value="otra">Otra</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label" for="nombre-comercial">Nombre comercial</label>
                    <input class="form-input" type="text" id="nombre-comercial"
                            placeholder="Ingresa el nombre comercial de la empresa" />
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
            navegar('/general/DataBase/List/Customer')
        })
}
