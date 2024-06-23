function cargarCartShop(){
  memoriaCart = JSON.parse(localStorage.getItem("paquetes"));
console.log(memoriaCart)
  const contCartasShop = document.getElementById('wrapper_cards_CartShop');
  contCartasShop.innerHTML = ''
  let i = 0;
  if(memoriaCart.length >0){
    while (i < memoriaCart.length && i < 5) {
      let paquete = memoriaCart[i];
      let cartaShop = document.createElement('div');
    
     
      let contenido = `
        <div class="card_shop_paquete">
         
            <h1>${paquete.nombre}</h1>
            <p>Duracion: ${paquete.duracion}</p>
            <p>${paquete.descripcion}</p>
           <button class="btn_eliminar"><img src="../assets/eliminar.png" class="icon_eliminar"/></button>
          
        </div>
      `;
      cartaShop.innerHTML = contenido;
    contCartasShop.appendChild(cartaShop);
    cartaShop.getElementsByTagName("button")[0].addEventListener("click",()=>eliminardelCarrito(paquete.id))
    i++;
  }
  }else{
    let cartaShop = document.createElement('div');
    let contenido = `
      <div class="card_shop_paquete">
       
          <h1>No hay elementos agregados al carrito</h1>
          
        
      </div>
    `;
    cartaShop.innerHTML = contenido;
    contCartasShop.appendChild(cartaShop);
  }
}



cargarCartShop()
  
