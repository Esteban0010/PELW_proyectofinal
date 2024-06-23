function montarHeader(){
    const contenedorHeader = document.getElementById('wrapper_header');
    contenedorHeader.innerHTML = ''
    const header = document.createElement('div');
    const user = JSON.parse(localStorage.getItem("usuario"));
    console.log(user)
    
    const contenidoHeader = `
    <header>
        <a href="#" class="logo">Logo</a>
        <ul class="menu">
            <li><a href="/">Inicio</a></li>
            <li><a href="/page/paquetes.html">Paquetes</a></li>
            <li><a href="/page/nosotros.html">Nosotros</a></li>
            <li><a href="#">???</a></li>
            <li>${user ? '<a href="/page/perfil.html">Perfil</a>' : '<button class="abrir-modal" onclick="mostrarModal()">Ingresar</button>'}</li>
            ${user ?'<li><a href="#"><button class="abrir-modal" onclick="cerrarSecion()">salir</button></li>':""}
            <li><a href="/page/carritoCompras.html"><img class="cart-icon" src="../assets/cart-shop.png"/><div id="cuenta-carrito" class="cuenta">0</div></a></li>
        </ul>
    </header>
    `;
    
    header.innerHTML = contenidoHeader;
    contenedorHeader.appendChild(header);
    actualizarNumCarrito()
}
montarHeader()

