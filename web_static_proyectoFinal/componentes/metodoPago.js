function montarMetodoPago() {
    const contenedorPago = document.getElementById('wrapper_MetodoPago');
    const user = JSON.parse(localStorage.getItem("usuario"));
    contenedorPago.innerHTML = ''
    
    const contenidoMetodoPago = `
           <div class="datos_tarjeta" >
             <h2>Motodo de Pago</h2>
          <div class="cont_imgVisa" id='cont_imgVisa'>
                ${user && user.numTarjeta ? `<div class="datos_enTarjeta">
                    <p id="cod_tarjeta">${user.codigoTarjeta}</p>
                    <p id="expira_Tarjeta">${user.expira}</p>
                    <p id="num_Tarjeta">${user.numTarjeta}</p>
                    <p id="nombre_Tarjeta">${user.nombre.toUpperCase() + " " + user.apellido.toUpperCase()}</p>
                </div>`
            : `<div class="datos_enTarjeta">
                    <p id="cod_tarjeta">XXX</p>
                    <p id="expira_Tarjeta"> MM/AAAA</p>
                    <p id="num_Tarjeta">---- ---- ---- ----</p>
                    <p id="nombre_Tarjeta"> nombre apellido</p>
                </div>`}
                <img src="../assets/visa.PNG" alt="visa" class="visa_cartS"></img>
            </div>
            <form action="">
                <div class="cont_inputT">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombreT" required oninput="ActualizarDatosTarjeta()">
                    <label for="numTarjeta">Número de tarjeta</label>
                    <input type="text" id="numTarjetaT" pattern="\d{16}" required oninput="ActualizarDatosTarjeta()">
                    <label for="documento">Documento</label>
                    <input type="text" id="documentoT" pattern="\d{8}" required oninput="ActualizarDatosTarjeta()">
                    <label for="codigo">Código</label>
                    <input type="text" id="codigoT" pattern="\d{3}" required placeholder="ej: 123" oninput="ActualizarDatosTarjeta()">
                    <label for="expira">Expira</label>
                    <input type="text" min="2024-06" id="expiraT" required placeholder="MM/AA" oninput="ActualizarDatosTarjeta()">
                </div>
                <div id="errores_tarjeta"></div>
                <button type="submit" onclick="validarDatosTarjeta()">Comprar</button>
            </form>
        </div>
    `;

    contenedorPago.innerHTML = contenidoMetodoPago;
    actualizarNumCarrito()
   
}
montarMetodoPago()

function ActualizarDatosTarjeta() {
    const contDatosTarj = document.getElementById('cont_imgVisa');
    contDatosTarj.innerHTML = ''
   
    const user = JSON.parse(localStorage.getItem("usuario"));
    let codT = document.getElementById("codigoT")
    let expiraT = document.getElementById("expiraT")
    let numTarjeta = document.getElementById("numTarjetaT")
    let nombreTarjeta = document.getElementById("nombreT")
    console.log(codT.value,"123")
    const datosTarj = ` 
  
            <div class="cont_imgVisa">
                ${user && user.numTarjeta ? `<div class="datos_enTarjeta">
                    <p id="cod_tarjeta">${user.codigoTarjeta}</p>
                    <p id="expira_Tarjeta">${user.expira}</p>
                    <p id="num_Tarjeta">${user.numTarjeta}</p>
                    <p id="nombre_Tarjeta">${user.nombre.toUpperCase() + " " + user.apellido.toUpperCase()}</p>
                </div>`
            : `<div class="datos_enTarjeta">
                    <p id="cod_tarjeta">${codT.value ? codT.value : "XXX"}</p>
                    <p id="expira_Tarjeta">${expiraT.value ? expiraT.value : "MM/AAAA"}</p>
                    <p id="num_Tarjeta">${numTarjeta.value ? numTarjeta.value : "---- ---- ---- ----"}</p>
                    <p id="nombre_Tarjeta">${nombreTarjeta.value ? nombreTarjeta.value.toUpperCase() : `nombre apellido`}</p>
                </div>`}
                <img src="../assets/visa.PNG" alt="visa" class="visa_cartS"></img>
                `
                contDatosTarj.innerHTML = datosTarj
}
