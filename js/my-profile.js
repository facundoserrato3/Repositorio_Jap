function cambiarImagen(){
    let imagen= document.getElementById("fotoperfil");
    let archivo = document.querySelector("input[type=file]").files[0];
    let lector = new FileReader();
    lector.onloadend = function() {
        imagen.src = lector.result;
    }
    if (archivo) {
        lector.readAsDataURL(archivo)
    }
    else {
        imagen.src = "avataaars.png"
    }
}
/*function guardarImagen(){
    let image= document.getElementById("fotoperfil");
    let usuario = JSON.parse(localStorage.getItem("datosperfil"));
    usuario.imagen = image.src
    //localStorage.setItem("imagen", JSON.stringify({imagen: image.src}))
    alert("Imágen guardada");
}*/
/*function mostrarInputs(){
    let perfil = JSON.parse(localStorage.getItem("datosperfil"));
    let inputs= document.getElementsByClassName("form-control");
    console.log(inputs[0]);
    for(let i=0; i>inputs.length; i++){
        let input=inputs[i];
    if(perfil === null) {
        input.style.border = "10px";

    }
    else {
        input.style.border = "0";
    }
}
}*/

function mostrarDatos(){
    let nombre = document.getElementById("nombres");
    let apellido = document.getElementById("apellidos");
    let edad = document.getElementById("edad");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let foto= document.getElementById("fotoperfil");
    let usuario = JSON.parse(localStorage.getItem("datosperfil"));
   // let imagen = JSON.parse(localStorage.getItem("imagen"));
     if(usuario != null ) {
    nombre.value = usuario.nombres;
    apellido.value = usuario.apellidos;
    edad.value = usuario.edad;
    email.value = usuario.email;
    telefono.value = usuario.telefono;
    foto.src = usuario.imagen
    

} 
    else {
        foto.src = "avataaars.png"
        
    }

}

function guardarDatosPerfil() {
    let nuevoNombre = document.getElementById("nombres");
    let nuevoApellido = document.getElementById("apellidos");
    let nuevaEdad = document.getElementById("edad");
    let nuevoEmail = document.getElementById("email");
    let nuevoTelefono = document.getElementById("telefono");
    let nuevaImagen = document.getElementById("fotoperfil")
    
    localStorage.setItem("datosperfil", JSON.stringify({nombres: nuevoNombre.value, apellidos: nuevoApellido.value, edad: nuevaEdad.value, email: nuevoEmail.value, telefono: nuevoTelefono.value, imagen: nuevaImagen.src}));
    Swal.fire({
     title:'Bien!',
        text:'Los cambios han sido guardados.',
        icon:'success',
        confirmButtonColor: 'success',
        confirmButtonText: 'Cerrar'
    })
}

function limpiarFormulario() {
    document.getElementById("datos").reset();
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    mostrarDatos();


});