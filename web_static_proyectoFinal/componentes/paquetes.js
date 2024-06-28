
function CargarPaquetesD(){
    const paquetesCont = document.getElementById('cont-paquetes');
    let i = 0;
    let contenidoPaquetes = '';

    while (i < paquetesLuna.length) {
        let paquete = paquetesLuna[i];

        let atracciones = paquete.atracciones;
        let datoAtracciones = atracciones.join(', ');

        let incluye = paquete.incluye;
        let datoIncluye = incluye.join(', ');

        let div = document.createElement('div');
        div.className = 'cont_prod';
        div.innerHTML = `
            <div class="cont_descrip_paquetes">
                <h2>${paquete.nombre}</h2>
                <p>${paquete.descripcion}</p>
                <p>Atracciones: ${datoAtracciones}</p>
                <p>Duración: ${paquete.duracion}</p>
                <p>Incluye: ${datoIncluye}</p>
                <p>Precio: ${paquete.precio} $</p>
                <button>Agregar</button>
                <button>Quitar</button>
            </div>
        `;

        div.getElementsByTagName('button')[0].addEventListener('click', () => agregarAlCarrito(paquete));
        div.getElementsByTagName('button')[1].addEventListener('click', () => eliminardelCarrito(paquete.id));

        paquetesCont.appendChild(div);
        i++;
    }
}
CargarPaquetesD()
