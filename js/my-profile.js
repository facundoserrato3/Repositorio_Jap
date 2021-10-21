function mostrarDatos(){
    let nombre = document.getElementById("nombres");
    let apellido = document.getElementById("apellidos");
    let edad = document.getElementById("edad");
    let telefono = document.getElementById("telefono");
    let usuario = JSON.parse(localStorage.datosperfil)
    nombre.innerHTML = `${usuario.nombres}`;
    apellido.innerHTML = `${usuario.apellidos}`;
    edad.innerHTML = `${usuario.edad}`;
    telefono.innerHTML = `${usuario.telefono}`;

}

function guardarDatosPerfil() {
    let nuevoNombre = document.getElementById("nuevonombre");
    let nuevoApellido = document.getElementById("nuevoapellido");
    let nuevaEdad = document.getElementById("nuevaedad");
    let nuevoTelefono = document.getElementById("nuevotelefono");
    localStorage.setItem("datosperfil", JSON.stringify({nombres: nuevoNombre.value, apellidos: nuevoApellido.value, edad: nuevaEdad.value, telefono: nuevoTelefono.value}));

mostrarDatos();
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});