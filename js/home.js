function mostrarUsuario() {
    var nombreusuario = document.getElementById("nombre");
    var user = JSON.parse(localStorage.usuario);
    nombreusuario.innerHTML =`Bienvenid@, ${user.usuario}`;


}
mostrarUsuario();