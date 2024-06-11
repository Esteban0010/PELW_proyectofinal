

const contenedorHeader = document.getElementById('wrapper_header');
const header = document.createElement('div');

const contenidoHeader = `
<header>
<a href="#" class="logo">Logo</a>
<ul class="menu">
    <li><a href="/">Inicio</a></li>
    <li><a href="/page/paquetes.html">Paquetes</a></li>
    <li><a href="/page/nosotros.html">Nosotros</a></li>
    <li><a href="#">???</a></li>
    <li><a href="#">Perfil</a></li>
    <li><a href="/page/carritoCompras.html"><img class="cart-icon" src="../assets/cart-shop.png"/><div id="cuenta-carrito" class="cuenta">0</div></a></li>
</ul>
</header>
`;

header.innerHTML = contenidoHeader;
contenedorHeader.appendChild(header);

