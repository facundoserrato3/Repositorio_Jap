document.getElementById("boton-registro").addEventListener("click", registro);
document.getElementById("boton-inicio").addEventListener("click", login);
var contenedor_formulario = document.getElementsByClassName("contenedor-formulario");
var formulario_login = document.getElementsByClassName("formulario-login");
var formulario_registro = document.getElementsByClassName("formulario-registro");
var caja_login = document.getElementsByClassName("caja-login");
var caja_registro = document.getElementsByClassName("caja-registro");

function validar(){
     correo_electronico = document.getElementById("correo-electronico").value;
 contraseña = document.getElementById("contraseña").value;

return correo_electronico.trim() != "" && contraseña.trim() != "" ;


}

function iniciarSesion(){
   

    if(validar()) {
        guardarDatos();
    }
    

}
function cerrarSesion(){
    localStorage.removeItem("usuario")
    location.href="index.html";
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



function guardarDatos() {
    var usuarioingresado = document.getElementById("correo-electronico");
    localStorage.setItem("usuario", JSON.stringify({usuario: usuarioingresado.value}))
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});