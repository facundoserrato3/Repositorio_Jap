const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;



function showProductsList() {
    let adjuntarcontenidoHTML = "";
var productsArray = [];
    for (let i=0; i < productsArray.length; i++) {
        let product = productsArray[i];

        adjuntarcontenidoHTML +=  `
        <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name +`</h4>
                        <small class="text-muted">` + product.productCount + ` artículos</small>
                    </div>
                    <p class="mb-1">` + product.description + `</p>
                </div>
            </div>
        </a>
        `
    
     }
     document.getElementById("prod-list-container").innerHTML = adjuntarcontenidoHTML;
    }



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            productsArray = resultObj.data;
            showProductsList();

        }
    });

   
});