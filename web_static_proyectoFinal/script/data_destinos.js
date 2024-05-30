const paquetesLuna = [
  {
    nombre: "Aventura en Mare Tranquillitatis",
    descripcion: "Explora el histórico sitio de alunizaje del Apolo 11 en el Mar de la Tranquilidad. Disfruta de visitas guiadas, caminatas espaciales y vistas impresionantes.",
    atracciones: ["Museo Lunar", "Caminata Espacial Guiada", "Vista del Alunizaje"],
    img: "./assets/cañon.jpg",
    video:"./assets/base_lunar.mp4",
    duracion: "2 días",
    precio: "$500,000",
    incluye: ["Transporte Espacial", "Alojamiento", "Comidas", "Equipo de Exploración"]
  },
  {
    nombre: "Escapada a Rupes Recta",
    descripcion: "Descubre la famosa 'Pared Recta' y disfruta de actividades de trekking y observación de estrellas en uno de los paisajes más impresionantes de la luna.",
    atracciones: ["Excursión Fotográfica", "Trekking Lunar", "Observación de Estrellas"],
    img: "./assets/cañon.jpg",
    video:"./assets/base_lunar.mp4",
    duracion: "3 días",
    precio: "$600,000",
    incluye: ["Transporte Espacial", "Alojamiento", "Comidas", "Equipo de Exploración"]
  },
  {
    nombre: "Exploración del Cráter Tycho",
    descripcion: "Adéntrate en el vasto interior del Cráter Tycho y participa en actividades de escalada y exploración de cuevas, disfrutando de las vistas del pico central.",
    atracciones: ["Escalada Lunar", "Exploración de Cuevas", "Pico Central"],
    img: "./assets/cañon.jpg",
    video:"./assets/base_lunar.mp4",
    duracion: "4 días",
    precio: "$750,000",
    incluye: ["Transporte Espacial", "Alojamiento", "Comidas", "Equipo de Exploración"]
  },
  {
    nombre: "Expedición al Valle Taurus-Littrow",
    descripcion: "Visita el último sitio de alunizaje tripulado del Apolo 17 y disfruta de espectaculares vistas del valle, con actividades educativas y recreativas.",
    atracciones: ["Tour Histórico del Apolo 17", "Vistas Panorámicas", "Centro de Visitantes"],
    img: "./assets/cañon.jpg",
    video:"./assets/base_lunar.mp4",
    duracion: "3 días",
    precio: "$650,000",
    incluye: ["Transporte Espacial", "Alojamiento", "Comidas", "Equipo de Exploración"]
  },
  {
    nombre: "Relajación en Mare Imbrium",
    descripcion: "Disfruta de un entorno tranquilo en el Mar de las Lluvias, con paseos en rover lunar, picnics y observación del horizonte en un paisaje sereno.",
    atracciones: ["Paseos en Rover Lunar", "Picnic Lunar", "Observación del Horizonte"],
    img: "./assets/cañon.jpg",
    video:"./assets/base_lunar.mp4",
    duracion: "2 días",
    precio: "$550,000",
    incluye: ["Transporte Espacial", "Alojamiento", "Comidas", "Equipo de Exploración"]
  },
  {
    nombre: "Aventura Polar en Cráter Shackleton",
    descripcion: "Explora el Polo Sur de la luna en el Cráter Shackleton, observa depósitos de hielo y disfruta de la vista constante de la Tierra.",
    atracciones: ["Visita al Hielo Lunar", "Observación Terrestre", "Exploración del Polo Sur"],
    img: "./assets/cañon.jpg",
    video:"./assets/base_lunar.mp4",
    duracion: "5 días",
    precio: "$900,000",
    incluye: ["Transporte Espacial", "Alojamiento", "Comidas", "Equipo de Exploración"]
  },
  {
    nombre: "Desafío en Montes Apenninus",
    descripcion: "Aventura en la cadena montañosa más espectacular de la luna, con actividades de escalada, caminatas panorámicas y fotografía de altura.",
    atracciones: ["Escalada de Montañas", "Caminatas Panorámicas", "Fotografía de Altura"],
    img: "./assets/cañon.jpg",
    video:"./assets/base_lunar.mp4",
    duracion: "4 días",
    precio: "$800,000",
    incluye: ["Transporte Espacial", "Alojamiento", "Comidas", "Equipo de Exploración"]
  }
];

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
        
      </div>
    </div>
  `;

  carta.innerHTML = contenido;
  contenedorCartas.appendChild(carta);
  i++;
}

{/* <p><strong>Atracciones:</strong> ${paquete.atracciones.join(', ')}</p> */}

