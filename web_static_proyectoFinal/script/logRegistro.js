
function loguin(){
    let usuario = document.getElementById('usuarioL').value;
    let contraseña = document.getElementById('contraseñaL').value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let userCoincidencia = false;
    let i = 0;
    while (!userCoincidencia && usuarios.length >i) {
        let usuarioRegistro = usuarios[i];
        if(usuarioRegistro.usuario == usuario && usuarioRegistro.contraseña == contraseña){
            userCoincidencia =true;
            // let usuarioRegistrado = {"nombre":usuario,"contraseña":contraseña};
            localStorage.setItem("usuario",JSON.stringify(usuarioRegistro));
        }
        usuarioRegistro.usuario
        i++
    }
    if(userCoincidencia){
        cerrarModal()
        montarHeader()
    }else{
        alert("Datos de usuario incorrecto")
    }
    return userCoincidencia;
}
function cerrarSecion(){
    localStorage.removeItem("usuario")
    montarHeader()
}


function ocultarRegistro(){
    let main = document.getElementById("main")
    main.classList.remove("panel-activo-derecho");
}

function mostrarRegistro(){
    let main = document.getElementById("main")
    main.classList.add("panel-activo-derecho");
}
function mostrarModal() {
document.getElementById('miModal').style.display = 'flex';
}

function cerrarModal() {
document.getElementById('miModal').style.display = 'none';
}
