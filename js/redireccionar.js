document.addEventListener("DOMContentLoaded", function(e){

});
function redireccionar(){

    if (localStorage.getItem("usuario") === null) {
      window.location.href = "index.html"
    } else {
        document.getElementById("nombre").innerHTML = `Bienvenido, ${user.usuario}`;
    }
};

redireccionar();