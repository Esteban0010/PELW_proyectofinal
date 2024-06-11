
function agregarErrores(error) {
    const contenedorError = document.getElementById('divUsoOpcional');
    let mensajeError = '';

    for (const prop in error) {
        if (error.hasOwnProperty(prop)) {
            mensajeError += `${error[prop]}\n`; // Agrega cada mensaje de error
        }
    }

    contenedorError.innerText = mensajeError; // Asigna el texto al contenedor
}

function validar() {

    const error = {}
    const valNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]{3,}$/;
    const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;


    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const obraSocial = document.getElementById('obras_sociales').value;
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const anio = document.getElementById("anio").value;
    const fecha = dia + "/" + mes + "/" + anio;


    if (!nombre) {
        error.nombre = "-El campo nombre es obligatorio"
    } else if (nombre) {
        if (!valNombre.test(nombre)) {
            error.nombre = "nombre debe cumplir con el formato permitido"
        }
    }

    if (!apellido) {
        error.apellido = "-El campo apellido es obligatorio"
    } else if (apellido) {
        if (!valNombre.test(apellido)) {
            error.apellido = "apellido debe cumplir con el formato permitido"
        }
    }

    if (!email) {
        error.email = "-El campo email es obligatorio"
    } else if (email) {
        if (!valEmail.test(email)) {
            error.email = "Email debe cumplir con el formato de correo Electronico"
        }
    }

    if (!obraSocial) {
        error.obraSocial = "-Debe seleccionar su obra social"
    }

    if (!dia || !mes || !anio) {
        error.fecha = "-Debe completar su fecha de nacimiento"
    } else if (dia && mes && anio) {
        if (!valFecha.test(fecha)) {
            error.fecha = "debe cumplir con el formato de fecha"
        }
    }
    console.log(error, "asdas")
    if (error) {
        
        agregarErrores(error)
    } else {
        alert("Los datos fueron correctos")
    }

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);

}
