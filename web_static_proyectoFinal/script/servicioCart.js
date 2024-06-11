
function agregarAlCarrito(producto) {
    const memoriaCart = JSON.parse(localStorage.getItem("paquetes"));
    console.log(memoriaCart)
    if (!memoriaCart) {
        const nuevoProducto = producto;
        localStorage.setItem("paquetes", JSON.stringify([nuevoProducto]))
    } else {
        const indiceProduct = memoriaCart.findIndex(e => e.id === producto.id);
        console.log(indiceProduct,"indice prod",producto.id)
        if (indiceProduct === -1) {
            const nuevaMemoria = memoriaCart;
            nuevaMemoria.push(producto)
            localStorage.setItem("paquetes",JSON.stringify(nuevaMemoria))
        }else{
            alert("Ya incluyo en su viaje ese paquete")
        }
    }
    actualizarNumCarrito()
}

function actualizarNumCarrito(){
    const cuentaCarritoElement = document.getElementById("cuenta-carrito")
    const memoriaCart = JSON.parse(localStorage.getItem("paquetes"));
    const cuenta= memoriaCart.length;
    cuentaCarritoElement.innerText = cuenta

}