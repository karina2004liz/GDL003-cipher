
let desplazamiento = document.getElementById("inum");
let text = document.getElementById("itexto");
let cifrar = document.getElementById("buttonC");
let descifrar = document.getElementById('buttonD');
let regresar = document.getElementById("bregresar");



cifrar.addEventListener("click",() => {
    
let offset= desplazamiento.value;
let txt = text.value;
let txtCifrado = "Tu texto cifrado es:   " + (window.cipher.encode(offset,txt));
document.getElementById("texto").innerHTML = txtCifrado;

document.getElementById("inicio").style.display = "none";
document.getElementById("titulos").style.display = "none";
document.getElementById("resultado").style.display = "block";


});

descifrar.addEventListener("click",() => {

let offset= desplazamiento.value;
let txt = text.value;
let txtCifrado = "Tu texto descifrado es:   " +  (window.cipher.decode(offset,txt));

document.getElementById("texto").innerHTML = txtCifrado;
document.getElementById("inicio").style.display = "none";
document.getElementById("titulos").style.display = "none";
document.getElementById("resultado").style.display = "block";


});

/*
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
//location.reload();

} */


regresar.addEventListener("click",() => {

  document.getElementById("inicio").style.display = "block";
  document.getElementById("titulos").style.display = "block";
  document.getElementById('texto').style.display = "none";
  document.getElementById("resultado").style.display = "none";

  document.getElementById("itexto").value = "";
  document.getElementById("inum").value = "";
  location.reload();


});
