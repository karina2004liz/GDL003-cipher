let text = document.getElementById("itexto");
let desplazamiento = document.getElementById("inum");



function fcod() {

document.getElementById("texto").innerHTML = window.cipher.encode(text,desplazamiento);


}

function fdecod() {

document.getElementById("texto").innerHTML = window.decipher.decode(text,desplazamiento);

}

function fregresar(){

  location.reload();
}
