var producto = {}

function mostrarImagenes(array) {
    let adjuntarcontenidoHtml = "";

    for (let i=0; i<array.length; i++) {
        let imagen= array[i]
       adjuntarcontenidoHtml += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src=" ${imagen}" alt="">
            </div>
        </div>
        `
        document.getElementById("productImagesGallery").innerHTML = adjuntarcontenidoHtml;
    }
}
function productosRelacionados(producto){
    let adjuntarcontenido ="";
    for (let i=0; i<producto.length; i++) {
        let productorelacionado = producto[i]
        adjuntarcontenido += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src=" ${productorelacionado.imageSrc}" alt="">
            </div>
        </div>
        `
        document.getElementById("relatedProducts").innerHTML = adjuntarcontenido;
    }
}
    function mostrarComentarios(comentarios) {
        let adjuntarcontenido= "";
        for (let i=0; i<comentarios.length; i++) {
            let comentario = comentarios[i]
            adjuntarcontenido += ` <div class="list-group">
            <div class="col-6">
                ${comentario.score} <h4 class="mb-1">${comentario.user}</h4> <strong>${comentario.dateTime}</strong
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">${comentario.description}</p>
                
                </div>
            </div>
        </div>`
        document.getElementById("comments").innerHTML = adjuntarcontenido;

        }

    }


function mostrarinfoProductos(products) {

    let productName = document.getElementById("productName");
    let productDescription = document.getElementById("productDescription");
    let productCost = document.getElementById("productCost");
    let productSoldCount = document.getElementById("productSoldCount");
    let productCategory = document.getElementById("productCategory");


    productName.innerHTML = products.name;
    productDescription.innerHTML = products.description;
    productCost.innerHTML = products.currency + products.cost;
    productSoldCount.innerHTML = products.soldCount;
    productCategory.innerHTML = products.category;
    
    
    mostrarImagenes(products.images);
    
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status = "ok") {
        producto = resultObj.data;
        mostrarinfoProductos(producto)
    }
})
});
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status = "ok") {
            comentario = resultObj.data;
            mostrarComentarios(comentario);
        }
    })
    });