//Login
function btnLogin() {
    var User = document.getElementById("User");
    var ValueUser = User.value;
    var Password = document.getElementById("Password");
    var PasswordValue = Password.value;
    
    if (ValueUser == "Nando" && PasswordValue == 123456789) {
        window.location="./Views/Inicio.html";
    }else{
        alert ("Usuario y password Incorrectos");
    }
}
function btnRegistrarse() {
    
    var Identificacion =document.getElementById("Identificacion").value    
    var Nombres =document.getElementById("Nombres").value
    var Apellidos =document.getElementById("Apellidos").value
    var Rango =document.getElementById("Rango").value
    var Apadrinados =document.getElementById("Apadrinado").value
    var Apadrinados2 =document.getElementById("Apadrinado2").value
    var Comunidad =document.getElementById("Comunidad").value
    var Telefono =document.getElementById("Telefono").value
    var Correo =document.getElementById("Correo").value
    var FechaNacimiento =document.getElementById("FechaNacimiento").value
    if (Identificacion > 0) {
    
        console.log(Identificacion);
    }else{
        alert("Faltan Datos por llenar")
    }
}