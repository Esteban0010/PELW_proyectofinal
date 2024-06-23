
function agregarAlCarrito(producto) {
    let memoriaCart = JSON.parse(localStorage.getItem("paquetes"));
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
function eliminardelCarrito(id) {
    const memoriaCart = JSON.parse(localStorage.getItem("paquetes"));
    const indice = memoriaCart.findIndex(item => item.id === id);
    if (indice !== -1) {
        memoriaCart.splice(indice, 1);
        localStorage.setItem("paquetes",JSON.stringify(memoriaCart))
        console.log('Elemento eliminado correctamente.');
      } else {
        console.log('No se encontró ningún elemento con ese ID.');
      }
      actualizarNumCarrito()
      cargarCartShop()
}

function actualizarNumCarrito(){
    const cuentaCarritoElement = document.getElementById("cuenta-carrito")
    const memoriaCart = JSON.parse(localStorage.getItem("paquetes"));
    const cuenta= memoriaCart.length;
    cuentaCarritoElement.innerText = cuenta

}
