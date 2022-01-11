
//Login
var User = document.getElementById("User")
var Password = document.getElementById("Password")

function btnLogin() {
    
    if (User.value == "Nando" && Password.value == 123456789) {
        window.location="./Views/Inicio.html";
    }else{
        alert ("Usuario y password Incorrectos");
    }
}
var Saludar = ("Hola, "+ User)
var greeting = document.getElementById("greeting")
greeting.innerText = Saludar;
    
var Identificacion =document.getElementById("Identificacion") 
var Nombres =document.getElementById("Nombres")
var Apellidos =document.getElementById("Apellidos")
var Telefono =document.getElementById("Telefono")
var Correo =document.getElementById("Correo")
var FechaNacimiento =document.getElementById("FechaNacimiento")


// var DatosUsuario =  {Identificacion,Nombres,Apellidos,Rango,Apadrinados,Apadrinados2,Comunidad,Telefono,Correo,FechaNacimiento}
// function btnRegistrarse(Identificacion,Nombres,Apellidos,Rango,Apadrinados,Apadrinados2,Comunidad,Telefono,Correo,FechaNacimiento) {
    
// if (Identificacion > 0 && Nombres > 1 && Apellidos >1 && Telefono >1 && Correo >1 && FechaNacimiento >1) {
//     INSERT INTO `usuarios` (`Identificacion`, `Nombres`, `Apellidos`, `Rango`, `Apadrinados`, `Apadrinados2`, `Comunidad`, `Telefono`, `Correo`, `FechaNacimiento`) VALUES (Identificacion,Nombres,Apellidos,"Principiante","","",0,Telefono,Correo,FechaNacimiento);
// }
    
// }
// function DatosUsuarios() {
//     var Identificacion = "1345";
//     document.getElementById("Parrafo-Datos").innerText=Identificacion;
    
// }
