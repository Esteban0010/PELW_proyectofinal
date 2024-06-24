function ejecutarCompra(datosTarjeta) {


    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let validacionExpiracion = "^\\d{2}\\/\\d{2}$";

    if (usuario) {
        let memoriaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        let i = 0
        let userCoincidencia = false;
        while (!userCoincidencia && memoriaUsuarios.length > i) {
            let usuarioEnMemoria = memoriaUsuarios[i];
            if (usuarioEnMemoria.usuario == usuario.nombre) {
                error.usuario = "Nombre de Usuario ya existente";
                userCoincidencia = true;
                const indice = memoriaUsuarios.findIndex((objeto) => objeto.nombre === usuario.nombre);
                memoriaUsuarios[indice].nombreTarjeta = datosTarjeta.nombre.toUpperCase();
                memoriaUsuarios[indice].numTarjeta = datosTarjeta.numeroTarjeta;
                memoriaUsuarios[indice].doc = datosTarjeta.documento;
                memoriaUsuarios[indice].codigoTarjeta = datosTarjeta.codigo;
                memoriaUsuarios[indice].expira = datosTarjeta.expira;
            }
        }


    } else {
        alert("Debe estar registrado para finalizar su compra")
    }
}

function validarDatosTarjeta() {
    const error = {}
    let datosTarjeta = {}
    let valNumTarjeta = /^\d{16}$/
    let valDoc = /^\d{8}$/
    let valCodigo = /^\d{3}$/
    datosTarjeta.nombre = document.getElementById('nombreT').value;
    datosTarjeta.numeroTarjeta = document.getElementById('numTarjetaT').value;
    datosTarjeta.documento = document.getElementById('documentoT').value;
    datosTarjeta.codigo = document.getElementById('codigoT').value;
    datosTarjeta.expira = document.getElementById('expiraT').value;
    if (!datosTarjeta.nombre) {
        error.nombre = "-El campo nombre es obligatorio"
    } else if (datos.nombre) {
        if (!valNombre.test(datosTarjeta.nombre)) {
            error.nombre = "nombre debe cumplir con el formato permitido"
        }
    }
    if (!datosTarjeta.numeroTarjeta) {
        error.numT = "-El campo numero de tarjeta es obligatorio"
    } else if (datos.nombre) {
        if (!valNumTarjeta.test(datosTarjeta.numeroTarjeta)) {
            error.numT = "el numero de tarjeta debe ser de 16 digitos"
        }
    }
    if (!datosTarjeta.documento) {
        error.doc = "-El campo documento es obligatorio"
    } else if (datos.nombre) {
        if (!valDoc.test(datosTarjeta.documento)) {
            error.doc = "el numero de tarjeta debe ser de 16 digitos"
        }
    }
    if (!datosTarjeta.codigo) {
        error.codigo = "-El campo codigo es obligatorio"
    } else if (datosTarjeta.codigo) {
        if (!valCodigo.test(datosTarjeta.codigo)) {
            error.codigo = "el codigo debe ser de 3 digitos"
        }
    }
    if (!datosTarjeta.expira) {
        error.expira = "-El campo codigo es obligatorio"
    } else if (datosTarjeta.expira) {
        const fechaExpiracion = datosTarjeta.expira;
        const [mesExpiracion, añoExpiracion] = fechaExpiracion.split('/').map(Number);
        const fechaActual = new Date();
        const mesActual = fechaActual.getMonth() + 1; // Sumamos 1 porque los meses se indexan desde 0
        const añoActual = fechaActual.getFullYear();
        
        // Comparamos los valores de mes y año
        if (añoExpiracion < añoActual || (añoExpiracion === añoActual && mesExpiracion < mesActual)){
            error.expira = "La fecha de expiracion debe ser mayor a la fecha actual"
        }
    }

    if (error) {

    } else {
        ejecutarCompra(datosTarjeta)
    }
}

