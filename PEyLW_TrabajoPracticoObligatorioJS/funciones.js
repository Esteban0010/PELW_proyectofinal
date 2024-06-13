
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
     



function validarFecha(dia, mes, anio) {
    let validacion = true;
console.log(mes)
    if (anio > 2024 || anio < 1924 || mes > 12 || mes < 1 || dia< 1) {
        validacion = false;
        console.log("primerif")
    } else {
        if (mes == 2) {
            if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 == 0)) {
                console.log("anio")
                // Año bisiesto
                if (dia > 29) {
                    validacion = false;
                    console.log("Día inválido para febrero en año bisiesto");
                }
            } else {
                // Año no bisiesto
                if (dia > 28) {
                    validacion = false;
                    console.log("Día inválido para febrero en año no bisiesto");
                }
            }
        } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
            validacion = false;
        } else if (dia > 31) {
            validacion = false;
        }
    }

    return validacion;
}


function pintarInput(error){
    if(error.nombre){
        document.getElementById("nombre").classList.add("input_error");
    }else{
        document.getElementById("nombre").classList.remove("input_error");
    }
    
    if(error.apellido){
        document.getElementById("apellido").classList.add("input_error");
    }else{
        document.getElementById("apellido").classList.remove("input_error");
    }

    if(error.email){
        document.getElementById("email").classList.add("input_error");
    }else{
        document.getElementById("email").classList.remove("input_error");   
    }
  
    if(error.obraSocial){
        document.getElementById("obras_sociales").classList.add("input_error");
    }else{
        document.getElementById("obras_sociales").classList.remove("input_error");
    }
    if(error.dia ){
        document.getElementById("dia").classList.add("input_error");
    }else{
        document.getElementById("dia").classList.remove("input_error");
    }
    if(error.mes ){
        document.getElementById("mes").classList.add("input_error");
    }else{
        document.getElementById("mes").classList.remove("input_error");
    }
    if(error.anio ){
        document.getElementById("anio").classList.add("input_error");
    }else{
        document.getElementById("anio").classList.remove("input_error");
    }
}

function validar() {

    const error = {}
    const valNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]{3,}$/;
    const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;


    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const obraSocial = document.getElementById("obras_sociales").value;
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
        const val = validarFecha(dia, mes, anio)
        if (!val) {
            error.fecha = "debe cumplir con el formato de fecha"
        }
    }

    if (error) {
        pintarInput(error)
        agregarErrores(error)
    } else {
        alert("Los datos fueron correctos")
    }

}
