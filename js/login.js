document.getElementById("boton-registro").addEventListener("click", registro);
document.getElementById("boton-inicio").addEventListener("click", login);
var contenedor_formulario = document.getElementsByClassName("contenedor-formulario");
var formulario_login = document.getElementsByClassName("formulario-login");
var formulario_registro = document.getElementsByClassName("formulario-registro");
var caja_login = document.getElementsByClassName("caja-login");
var caja_registro = document.getElementsByClassName("caja-registro");

// Funcion que mueve cartel de registro
function registro() {
    formulario_registro[0].style.display = "block";
    contenedor_formulario[0].style.left = "410px";
    formulario_login[0].style.display = "none";
}

function login(){
    formulario_login[0].style.display ="block";
    contenedor_formulario[0].style.right = "410px";
    formulario_registro[0].style.display = "none";
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});