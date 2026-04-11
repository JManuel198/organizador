// js/views/contactos.js

function mostrarListadoContactos() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header">
        <h2 class="view-header__title">Listado de contactos</h2>
        <span class="view-header__breadcrumb">Base de datos &gt; Contactos</span>
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
                    <th>Nombre completo</th>
                    <th>Empresa</th>
                    <th>Puesto de trabajo</th>
                    <th>Número de tel.</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="5" class="table__empty">
                        No hay contactos registrados todavía.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    `

    document.getElementById('btn-nuevo')
        .addEventListener('click', function() {
            navegar('/general/DataBase/Create/Contacts')
        })
}


function mostrarFormularioContactos() {
    const contenido = document.getElementById('content')
    contenido.innerHTML = `

    <div class="view-header view-header--form">
        <h2 class="view-header__title">Crear nuevo contacto</h2>
        <p class="view-header__subtitle">Completa los campos para crear un nuevo contacto.</p>
    </div>

    <form id="form-contacto" class="view-form">
        <div class="form-layout-2col">

            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="nombre">Nombre</label>
                    <input class="form-input" type="text" id="nombre"
                            placeholder="Ingresa el nombre del contacto" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="apellidos">Apellidos</label>
                    <input class="form-input" type="text" id="apellidos"
                            placeholder="Ingresa el apellido del contacto" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="cargo">Cargo</label>
                    <input class="form-input" type="text" id="cargo"
                            placeholder="Buscar un cargo para el contacto" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="empresa">Empresa</label>
                    <input class="form-input" type="text" id="empresa"
                            placeholder="Buscar la empresa del contacto" />
                </div>
            </div>

            <div class="form-col">
                <div class="form-group">
                    <label class="form-label" for="tel-personal">Teléfono personal</label>
                    <input class="form-input" type="text" id="tel-personal"
                            placeholder="Ingresa el número personal del contacto" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="tel-trabajo">Teléfono de trabajo</label>
                    <input class="form-input" type="text" id="tel-trabajo"
                            placeholder="Ingresa el número de trabajo del contacto" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="correo-personal">Correo personal</label>
                    <input class="form-input" type="email" id="correo-personal"
                            placeholder="Ingresa el correo personal del contacto" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="correo-trabajo">Correo de trabajo</label>
                    <input class="form-input" type="email" id="correo-trabajo"
                            placeholder="Ingresa el correo de trabajo del contacto" />
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
            navegar('/general/DataBase/List/Contacts')
        })
}
