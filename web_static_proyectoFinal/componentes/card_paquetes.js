const contenedorCartas = document.getElementById('wrapper_card');
let i = 0;

while (i < paquetesLuna.length && i < 3) {
  const paquete = paquetesLuna[i];
  const carta = document.createElement('div');


  const contenido = `
    <div class="card_package">
    <video  autoplay muted loop  >
    <source src=${paquete.video} type="video/mp4">
    Tu navegador no admite el formato de video MP4.
</video>
      <div class="info">
        <h1>${paquete.nombre}</h1>
        <p>${paquete.descripcion}</p>
        <button>comprar</button>
      </div>
    </div>
  `;

  carta.innerHTML = contenido;
  contenedorCartas.appendChild(carta);
  carta.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(paquete))
  i++;
}



