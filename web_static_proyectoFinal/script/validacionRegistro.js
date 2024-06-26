
function agregarErrores(error) {
    const contenedorError = document.getElementById('errores');
    let mensajeError = '';

    for (const prop in error) {
        if (error.hasOwnProperty(prop)) {
            mensajeError += `${error[prop]}\n`;
        }
    }

    contenedorError.innerText = mensajeError;
}
     



function validarFecha(dia, mes, anio) {
    let msj = null;
let fechaUsuario = new Date(anio, mes - 1, dia); 
let fechaActual = new Date();
    if (fechaUsuario > fechaActual  ) {
        msj ="La fecha no debe superar la fecha actual.";
    }else if(anio< 1924){
msj="Anio no debe ser menor a 1924"
      
    }else if(mes > 12 || mes < 1){
        msj ="EL mes no debe ser mayor a 12 o menor a 1"
    }else if(dia < 1){
        msj= "Dia no puede ser unValor negativo"
}else {
        if (mes == 2) {
    
            if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 == 0)) {
                if (dia > 29) {
                   
                    msj="Día inválido para febrero en año bisiesto";
                }
            } else {
                if (dia > 28) {
                    msj="Día inválido para febrero en año no bisiesto";
                }
            }
        } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
            msj = "En este mes el dia no puede ser mayor a 30";
        } else if (dia > 31) {
            msj = "En este mes el dia no puede ser mayor a 31";
        }
    }

    return msj;
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

    const datos={}
    datos.usuario = document.getElementById('nombreU').value.toLowerCase();
    datos.contraseña = document.getElementById('contraseña').value;
    datos.documento = document.getElementById('doc').value;
    datos.nombre = document.getElementById('nombre').value.toLowerCase();
    datos.apellido = document.getElementById('apellido').value.toLowerCase();
    datos.email = document.getElementById('email').value;
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const anio = document.getElementById("anio").value;
    datos.fechaNacimiento = dia + "/" + mes + "/" + anio;


    let memoriaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(!memoriaUsuarios){
        localStorage.setItem("usuarios",JSON.stringify([]));
        memoriaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    let i = 0;
    let userCoincidencia = false;
    while(!userCoincidencia && memoriaUsuarios && memoriaUsuarios.length >i ){
        let usuarioEnMemoria=memoriaUsuarios[i];
        if(usuarioEnMemoria.usuario == datos.usuario){
            error.usuario = "Nombre de Usuario ya existente";
            userCoincidencia =true;
        }
        if(usuarioEnMemoria.documento == datos.documento){
            error.documento = "Este documento pertence a un usuario ya registrado"
            userCoincidencia =true;
        }
        if(usuarioEnMemoria.email == datos.email){
            error.email = "Email ya registrado"
            userCoincidencia =true;
        }
    }



    if (!datos.nombre) {
        error.nombre = "-El campo nombre es obligatorio"
    } else if (datos.nombre) {
        if (!valNombre.test(datos.nombre)) {
            error.nombre = "nombre debe cumplir con el formato permitido"
        }
    }

    if (!datos.apellido) {
        error.apellido = "-El campo apellido es obligatorio"
    } else if (datos.apellido) {
        if (!valNombre.test(datos.apellido)) {
            error.apellido = "apellido debe cumplir con el formato permitido"
        }
    }

    if (!datos.email) {
        error.email = "-El campo email es obligatorio"
    } else if (datos.email) {
        if (!valEmail.test(datos.email)) {
            error.email = "Email debe cumplir con el formato de correo Electronico"
        }
    }
    if (!dia || !mes || !anio) {
        error.fecha = "-Debe completar su fecha de nacimiento"
    } else if (dia && mes && anio) {
        error.fecha = validarFecha(dia, mes, anio)
        if (error.fecha === null) {
            delete error.fecha;
        }
    }
    if (Object.keys(error).length>0) {
        console.log(error)
        pintarInput(error)
        agregarErrores(error)
    } else {
        memoriaUsuarios.push(datos);
        localStorage.setItem("usuarios",JSON.stringify(memoriaUsuarios));
        let usuarioRegistrado = datos;
            localStorage.setItem("usuario",JSON.stringify(usuarioRegistrado));
        alert("Los datos fueron correctos");
        cerrarModalr()
        montarHeader()
    }
 

}
