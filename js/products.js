const ordenPrecioAsc = "Precio ascendente";
const ordenPrecioDesc = "Precio descendente";
const ordenSoldCount = "Cant.";
var criterioActual = undefined;
var listaProductosActual = []
var minCount = undefined;
var maxCount = undefined;

var productsArray = [];

function showProductsList() {
    let adjuntarcontenidoHTML = "";
    for (let i=0; i < listaProductosActual.length; i++) {
        let product = listaProductosActual[i];
        
        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
        ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))) {
        adjuntarcontenidoHTML += 
        `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm custom-card" ">
                 <img class="card-img-top" src="${product.imgSrc}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">${product.currency} ${product.cost}</p>
    <a href="product-info.html" class="btn btn-dark">Ver Producto</a>
  
</div>
</div>
</div>
`
/* `
        <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name +`</h4>
                        <small class="text-muted">` + product.soldCount + ` artículos</small>
                    </div>
                    <p class="mb-1">` + product.description + `</p>
                    <p class="mb-1">` + product.currency + ` `+ product.cost + `</p>

                </div>
            </div>
        </a>
        `*/
        }
     }
     document.getElementById("prod-list-container").innerHTML = adjuntarcontenidoHTML;
    }
function ordenarProductos(criterio, productos) {
let result = []
if (criterio === ordenPrecioAsc) {
    result = productos.sort(function (a, b) {
        if(a.cost < b.cost) {
            return -1;
        }
        if (a.cost > b.cost) {
            return 1;
        }
        return 0;
    });
    
} else if(criterio === ordenPrecioDesc){
    result = productos.sort(function(a, b){
        if (a.cost < b.cost){
            return 1;
        }
        if (a.cost > b.cost) {
            return -1;
        }
        return 0
    });
} else if (criterio === ordenSoldCount){
    result = productos.sort(function(a, b){
        let aCount = parseInt(a.soldCount);
        let bCount = parseInt(b.soldCount);
        if (aCount < bCount) {
            return 1;
        }
        if (aCount > bCount){
            return -1;
        }
        return 0;

    });
}
return result;
}

function ordenarMostrarProductos(criterioElegido, listaProductos){
    criterioActual = criterioElegido;

    if(listaProductos != undefined){
        listaProductosActual = listaProductos;
    }

    listaProductosActual = ordenarProductos(criterioActual, listaProductosActual);

    
    showProductsList();
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            productsArray = resultObj.data;
            ordenarMostrarProductos(ordenPrecioAsc, productsArray);

        }
    });
    document.getElementById("sortAsc").addEventListener("click", function(){
        ordenarMostrarProductos(ordenPrecioAsc);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        ordenarMostrarProductos(ordenPrecioDesc);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        ordenarMostrarProductos(ordenSoldCount);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList();
    });
   
});