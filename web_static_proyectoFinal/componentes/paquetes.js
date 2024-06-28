
function CargarPaquetesD(){
    const paquetesCont = document.getElementById('cont-paquetes');
    let i = 0;
    let contenidoPaquetes =``;
    
    while (i < paquetesLuna.length ) {
      let paquete = paquetesLuna[i];
    
      let atracciones =paquete.atracciones
      let datoAtracciones="";
      atracciones.forEach(element => {
        datoAtracciones+=" ,"+element;
      });

      let incluye =paquete.incluye
      let datoIncluye="";
      incluye.forEach(element => {
        datoIncluye+=" ,"+element;
      });
      let contenido = `
        <div class="cont_prod">
            <div class="cont_descrip_paquetes">
                <h2>${paquete.nombre}</h2>
                <p> ${paquete.descripcion}</p>
                <p>atracciones:${datoAtracciones}</p>
                <p>${paquete.duracion}</p>
                <p>incluye: ${datoIncluye}</p>
                <p>precio ${paquete.precio} $</p>
                <button onClick="agregarAlCarrito()">Agregar</button>
                <button onClick="eliminardelCarrito()">quitar</button>
            </div>
        </div>
        
      `;
      console.log("222")
      contenidoPaquetes+=contenido;
     
      i++;
    }
    paquetesCont.innerHTML = contenidoPaquetes;
    console.log("11")
}
CargarPaquetesD()
