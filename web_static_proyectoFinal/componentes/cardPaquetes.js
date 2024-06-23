const contCartas = document.getElementById('contenedor_card');
let i = 0;

while (i < paquetesLuna.length && i < 5) {
    console.log(paquetesLuna[i])
  let paquete = paquetesLuna[i];
  const carta = document.createElement('div');


  let contenido = `
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
  contCartas.appendChild(carta);
  carta.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(paquete))
  i++;
}