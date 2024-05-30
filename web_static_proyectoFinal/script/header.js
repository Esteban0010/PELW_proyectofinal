

const contenedorHeader = document.getElementById('wrapper_header');
const header = document.createElement('div');

const contenidoHeader = `
<header>
<a href="#" class="logo">Logo</a>
<ul class="menu">
    <li><a href="/">Inicio</a></li>
    <li><a href="/page/nosotros.html">Nosotros</a></li>
    <li><a href="#">Producto</a></li>
    <li><a href="#">Contacto</a></li>
</ul>
</header>
`;

header.innerHTML = contenidoHeader;
contenedorHeader.appendChild(header);

