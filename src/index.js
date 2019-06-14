
let desplazamiento = document.getElementById("inum");
let text = document.getElementById("itexto");
let cifrar = document.getElementById("buttonC");
let descifrar = document.getElementById('buttonD');
let regresar = document.getElementById("bregresar");
// primero se definen todas las variables con las que vayamos a obtener nuestra info (botones y cajas de texto)


cifrar.addEventListener("click",() => {
    
let offset= desplazamiento.value; // obtenemos el valor y lo guardamos en nuestra variable para nuestro objeto
let txt = text.value; // obtenemos el valor y lo guardamos en nuestra variable para nuestro objeto
let txtCifrado = "Tu texto cifrado es:   " + (window.cipher.encode(offset,txt));
document.getElementById("texto").innerHTML = txtCifrado;

document.getElementById("inicio").style.display = "none";
document.getElementById("titulos").style.display = "none";
document.getElementById("resultado").style.display = "block";


});

// agrega funciones a los botones que seleccionemos
descifrar.addEventListener("click",() => {

let offset= desplazamiento.value;
let txt = text.value;
let txtCifrado = "Tu texto descifrado es:   " +  (window.cipher.decode(offset,txt));

document.getElementById("texto").innerHTML = txtCifrado;
document.getElementById("inicio").style.display = "none";
document.getElementById("titulos").style.display = "none";
document.getElementById("resultado").style.display = "block";


});


regresar.addEventListener("click",() => {

  document.getElementById("inicio").style.display = "block";
  document.getElementById("titulos").style.display = "block";
  document.getElementById('texto').style.display = "none";
  document.getElementById("resultado").style.display = "none";

  document.getElementById("itexto").value = "";
  document.getElementById("inum").value = "";
  location.reload();


});
