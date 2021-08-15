document.getElementById("boton-registro").addEventListener("click", registro);
document.getElementById("boton-inicio").addEventListener("click", login);
document.getElementById("ingresar").addEventListener("click", iniciarSesion);
var contenedor_formulario = document.getElementsByClassName("contenedor-formulario");
var formulario_login = document.getElementsByClassName("formulario-login");
var formulario_registro = document.getElementsByClassName("formulario-registro");
var caja_login = document.getElementsByClassName("caja-login");
var caja_registro = document.getElementsByClassName("caja-registro");
var correo_electronico = document.getElementById("correo-electronico");
var contraseña = document.getElementById("contraseña")
function iniciarSesion(correo_electronico, contraseña){
    if(correo_electronico.value !== null && contraseña.value !== null) {
    window.location.assign = ("home.html");

    }

}

// Funcion que mueve cartel de registro
function registro() {
    formulario_registro[0].style.display = "block";
    contenedor_formulario[0].style.left = "480px";
    formulario_login[0].style.display = "none";
    caja_registro[0].style.opacity = "0";
    caja_login[0].style.opacity = "1";
}
// Funcion que mueve cartel de login
function login(){
    formulario_registro[0].style.display = "none";
    contenedor_formulario[0].style.left = "10px";
    formulario_login[0].style.display = "block";
    caja_registro[0].style.opacity = "1";
    caja_login[0].style.opacity = "0";
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});