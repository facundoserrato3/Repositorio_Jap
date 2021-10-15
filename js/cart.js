const CART_INFO2_URL ="https://japdevdep.github.io/ecommerce-api/cart/654.json"

let micarrito=[]
    

function borrar(){
   let productos = document.getElementsByClassName("prod");
   console.log(productos)
   for(let i=0; i<productos.length; i++) {
       let producto = productos[i]
       nuevoCarrito = producto.remove()
   }
   mostrarCarrito(nuevoCarrito);
   

}
function calcularSubtotal() {
    let cantidad= document.getElementsByTagName("input");
    let precio = document.getElementsByClassName("precio");
    let subt = document.getElementsByClassName("subt");
    let subtotal = 0
    let total = 0
    let subt2 = 0
    let totalproductos = 0
    for (let i=0; i<precio.length; i++){
        let precios = precio[i];
        let cantidades= cantidad[i]
        let subts = subt[i]
        subtotal += parseInt(precios.innerHTML) * parseInt(cantidades.value);
        subt2 = parseInt(precios.innerHTML) * parseInt(cantidades.value);
        
        
       subts.innerHTML = "$" + " " + subt2;
        totalproductos += parseInt(cantidades.value)
    }
    total += parseInt(subtotal);
    document.getElementById("subtotal-modal").innerHTML = subtotal;
    document.getElementById("carrosubtotal").innerHTML = subtotal;
    document.getElementById("carrototal").innerHTML = total;
    document.getElementById("badge").innerHTML = totalproductos;
        

}
function tipoDeEnvio(porcentaje) {
    let subtotalenvio = document.getElementById("carrosubtotal");
    let porcentajeEnvio = (subtotalenvio.innerHTML * porcentaje) / 100;
    let preciofinal = parseInt(subtotalenvio.innerHTML) + parseInt(porcentajeEnvio);
    
    document.getElementById("carrototal").innerHTML = preciofinal; 

}



function mostrarCarrito(array){
    let contenidoparaadjuntar = "";
    let articulos = array.articles;
    let total=0;
    let subtotal= 0;
    let totalproductos = 0
    
    for (let i=0; i<articulos.length; i++){
        let carrito= articulos[i];
        
        if(carrito.currency ==="USD") {
            carrito.unitCost = carrito.unitCost * 40;
            carrito.currency = "UYU"
            
        contenidoparaadjuntar +=
        `<tr class="prod">
        <td ><img src="${carrito.src}" width="100" </td>
      <td>${carrito.name}</td>
    <td><input class="form-control cant" type="number" min="1" id="cant${i}" value="${carrito.count}" onchange="calcularSubtotal()" ></td>
    
    <td >$ <span class="precio">${carrito.unitCost}</span></td> 
    <td class="subt">$ ${carrito.count * carrito.unitCost}</td>

    <td><button class="btn btn-danger btn-block" onclick="borrar()">Borrar</button></td>     </tr>`
    
    
    
        }
        else {         
            contenidoparaadjuntar += 
            `<tr class="prod">
            <td ><img src="${carrito.src}" width="100"></td>
          <td>${carrito.name}</td>
        <td><input class="form-control cant" type="number" value="${carrito.count}" id="cant${i}" onchange="calcularSubtotal()" min="1"></td>
        <td >$ <span class="precio">${carrito.unitCost}</span></td> 
        <td class="subt">$ ${carrito.count * carrito.unitCost}</td>
     
        <td><button class="btn btn-danger btn-block" onclick="borrar()">Borrar</button></td>     </tr>`
        
        
            
        }
        
        
        subtotal += carrito.count *carrito.unitCost;
         
  
    
        totalproductos += parseInt(carrito.count);
       

    }
    
    total += parseInt(subtotal);
    document.getElementById("carro").innerHTML = contenidoparaadjuntar;
    document.getElementById("carrototal").innerHTML = total;
    document.getElementById("carrosubtotal").innerHTML = subtotal;
    document.getElementById("badge").innerHTML = totalproductos;
    document.getElementById("subtotal-modal").innerHTML = subtotal;
};




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ 
    getJSONData(CART_INFO2_URL).then(function(resultObj){
    if (resultObj.status = "ok") {
        micarrito = resultObj.data;
        mostrarCarrito(micarrito);
    }
})

});