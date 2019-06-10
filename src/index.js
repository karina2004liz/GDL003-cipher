/*

function usrpas(){
if (document.form1.txt.value=="admin1" && document.form1.num.value=="1234");

else {alert("Error en Usuario o Contraseña. Intenta de nuevo.")}


document.getElementById("login").style.display = "none";
document.getElementById("inicio").style.display = "block";
document.getElementById("titulos").style.display = "block";
document.getElementById("resultado").style.display = "none";

}

*/



let text = document.getElementById("itexto");
let desplazamiento = document.getElementById("inum");



function fcod() {

document.getElementById("texto").innerHTML = window.cipher.encode(text,desplazamiento);
document.getElementById("inicio").style.display = "none";
document.getElementById("titulos").style.display = "none";
document.getElementById("resultado").style.display = "block";


}

function fdecod() {

document.getElementById("texto").innerHTML = window.decipher.decode(text,desplazamiento);
document.getElementById("inicio").style.display = "none";
document.getElementById("titulos").style.display = "none";
document.getElementById("resultado").style.display = "block";



}


function fregresar(){


//  document.getElementById('login').style.display = "none";
  document.getElementById("inicio").style.display = "block";
  document.getElementById("titulos").style.display = "block";
  document.getElementById('texto').style.display = "none";
  document.getElementById("resultado").style.display = "none";

  document.getElementById("itexto").value = "";
  document.getElementById("inum").value = "";
//    document.getElementById("inicio").innerHTML = "";


  // location.reload recarga la página a la que nos redirigimos
location.reload();

}
