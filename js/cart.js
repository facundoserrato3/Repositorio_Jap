const CART_INFO2_URL ="https://japdevdep.github.io/ecommerce-api/cart/654.json"

function cotizar(array){
    carrito = array[i]
    if(carrito.currency ==="USD") {
        carrito.unitCost = carrito.unitCost / 40;
        carrito.currency = "UYU"
    }
    
}

function mostrarCarrito(array){
    let contenidoparaadjuntar = "";
    let articulos = array.articles;
    let total=0
    for (let i=0; i<articulos.length; i++){
        let carrito= articulos[i];
        
        if(carrito.currency ==="USD") {
            carrito.unitCost = carrito.unitCost * 40;
            carrito.currency = "UYU"
        
        contenidoparaadjuntar +=
        `<tr>
        <td ><img src="${carrito.src}" class="col-3"</td>
      <td>${carrito.name}</td>
    <td>${carrito.count}</td>
    <td>${carrito.currency} ${carrito.unitCost}</td>      </tr>`
    
        
        
        
        /* ` <div class="container"><div>${carrito.name}</div>
        <div class="col-6">            
            </div><h4 class="mb-1">  ${carrito.count}</h4>  <p>${carrito.unitCost}</p>
            
            
        </div><br>
        <div class="col-12">
            <div class="d-flex w-100 justify-content-between">
                <p class="mb-1">${carrito.currency}</p>
                
            </div>
        </div>
    </div><hr><br>`;
    total += carrito.unitCost;*/
        }
        else { contenidoparaadjuntar += 
            `<tr>
            <td ><img src="${carrito.src}"class="col-3"></td>
          <td>${carrito.name}</td>
        <td>${carrito.count}</td>
        <td>${carrito.currency} ${carrito.unitCost}</td>      </tr>`
        
        
            
            /*` <div class="container"><div>${carrito.name}</div>
        <div class="col-6">            
            </div><h4 class="mb-1">  ${carrito.count}</h4>  <p>${carrito.unitCost}</p>
            
            
        </div><br>
        <div class="col-12">
            <div class="d-flex w-100 justify-content-between">
                <p class="mb-1">${carrito.currency}</p>
                
            </div>
        </div>
    </div><hr><br>`
    total += carrito.unitCost;*/

        }
        total += parseInt(carrito.unitCost)

    }
    document.getElementById("carro").innerHTML = contenidoparaadjuntar;
    document.getElementById("carrototal").innerHTML = total;
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