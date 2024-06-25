function montarMetodoPago() {
    const contenedorPago = document.getElementById('wrapper_MetodoPago');
    const user = JSON.parse(localStorage.getItem("usuario"));
    contenedorPago.innerHTML = ''
    const contenidoMetodoPago = `
           <div class="datos_tarjeta">
            <h2>Motodo de Pago</h2>
            <div class="cont_imgVisa">
                ${user && user.numTarjeta?`<div class="datos_enTarjeta">
                    <p id="cod_tarjeta">${user.codigoTarjeta}</p>
                    <p id="expira_Tarjeta">${user.expira}</p>
                    <p id="num_Tarjeta">${user.numTarjeta}</p>
                    <p id="nombre_Tarjeta">${user.nombre.toUpperCase()+" "+user.apellido.toUpperCase()}</p>
                </div>`
                :`<div class="datos_enTarjeta">
                    <p id="cod_tarjeta">XXX</p>
                    <p id="expira_Tarjeta">MM/AAAA</p>
                    <p id="num_Tarjeta">---- ---- ---- ----</p>
                    <p id="nombre_Tarjeta">esteban pilchuman</p>
                </div>`}
                <img src="../assets/visa.PNG" alt="visa" class="visa_cartS">
            </div>
            <form action="">
                <div class="cont_inputT">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombreT" required onblur="">
                    <label for="numTarjeta">Número de tarjeta</label>
                    <input type="text" id="numTarjetaT" pattern="\d{16}" required>
                    <label for="documento">Documento</label>
                    <input type="text" id="documentoT" pattern="\d{8}" required>
                    <label for="codigo">Código</label>
                    <input type="text" id="codigoT" pattern="\d{3}" required placeholder="ej: 123">
                    <label for="expira">Expira</label>
                    <input type="text" min="2024-06" id="expiraT" required placeholder="MM/AA">
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
