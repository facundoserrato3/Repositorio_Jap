const CART_INFO2_URL ="https://japdevdep.github.io/ecommerce-api/cart/654.json"


    

function borrar(){
    carrito = micarrito.articles[i]
    micarrito.splice(carrito);

}
function subtotal() {
    let cantidad= document.getElementsByClassName("cant");
        console.log(cantidad);

}



function mostrarCarrito(array){
    let contenidoparaadjuntar = "";
    let articulos = array.articles;
    let total=0
    let subtotal= 0
    let totalproductos = 0
    for (let i=0; i<articulos.length; i++){
        let carrito= articulos[i];
        
        if(carrito.currency ==="USD") {
            carrito.unitCost = carrito.unitCost * 40;
            carrito.currency = "UYU"
            
        contenidoparaadjuntar +=
        `<tr>
        <td ><img src="${carrito.src}" width="100"</td>
      <td>${carrito.name}</td>
    <td><input class="form-control cant" type="number" min="1" value="${carrito.count}"></td>
    
    <td>${carrito.currency} ${carrito.unitCost}</td> 
    <td>$ ${carrito.count * carrito.unitCost}</td>

    <td><button class="btn btn-danger btn-block" onclick="borrar()">Borrar</button></td>     </tr>`
    
    
    
        }
        else {         
            contenidoparaadjuntar += 
            `<tr>
            <td ><img src="${carrito.src}"class="col-3"></td>
          <td>${carrito.name}</td>
        <td><input class="form-control cant" type="number" value="${carrito.count}" name="count"></td>
        <td>${carrito.currency} ${carrito.unitCost}</td>
        <td>$ ${carrito.count * carrito.unitCost}</td>
     
        <td><button class="btn btn-danger btn-block" onclick="borrar()">Borrar</button></td>     </tr>`
        
        
            
        }
        
        
        subtotal += carrito.count *carrito.unitCost;
         
  
    
        
       
        
        totalproductos += parseInt(carrito.count);

    }
    total += parseInt(subtotal);
    document.getElementById("carro").innerHTML = contenidoparaadjuntar;
    document.getElementById("carrototal").innerHTML = "$" + " " + total;
    document.getElementById("carrosubtotal").innerHTML = "$" + " " + subtotal;
    
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