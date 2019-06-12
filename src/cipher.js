window.cipher = {

  encode: (desplazamiento,text) => {

  
    let codeCipher ="";
  

   for(let i=0;i<text.length;i++){
            let numberCodeAscii = text[i].charCodeAt(0); // obtenemos el código ASCII
                if(numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)
                    let valueCapitalLetter = (numberCodeAscii-65 + parseInt(desplazamiento))%26 + 65; // Obtener el nuevo código ASCII mediante fórmula
                    let capitalLetter= String.fromCharCode(valueCapitalLetter); // convierte el nuevo ASCII en una letra del alfabeto
                    codeCipher+=capitalLetter; // concatenamos para formar la palabra
                    }
              else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // condición código ASCII (Valores minúsculas)
                    let valueLetterLower = (numberCodeAscii-97 + parseInt(desplazamiento))%26 +97; //Obtener el nuevo código ASCII mediante fórmula
                    let letterLower = String.fromCharCode(valueLetterLower); //convertir el nuevo ASCII en letra del alfabeto
                    codeCipher+=letterLower; // concatenar para formar la nueva palabra
                  }
            else if(numberCodeAscii==32){  // si el caracter es un espacio vacio
                        let space = " ";

                      codeCipher+=space;
                  }

  }
  
         return codeCipher;
         
         



  //        document.getElementById('texto').innerHTML ="Texto original: " + string  + " Texto codificado : " + codeCipher;



  },



  decode: (desplazamiento,text) => {

    
    let codeCipher ="";
    

   for( let i=0;i<text.length;i++){
            let numberCodeAscii = text[i].charCodeAt(0); // obtenemos el código ASCII
                if(numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)
                    let valueCapitalLetter = (numberCodeAscii+65 - parseInt(desplazamiento))%26 + 65; // Obtener el nuevo código ASCII mediante fórmula
                    let capitalLetter= String.fromCharCode(valueCapitalLetter); // convierte el nuevo ASCII en una letra del alfabeto
                    codeCipher+=capitalLetter; // concatenamos para formar la palabra
                    }
              else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // condición código ASCII (Valores minúsculas)
                    let valueLetterLower = (numberCodeAscii +97 - parseInt(desplazamiento) +14 )%26 +97; //Obtener el nuevo código ASCII mediante fórmula
                    let letterLower = String.fromCharCode(valueLetterLower); //convertir el nuevo ASCII en letra del alfabeto
                    codeCipher+=letterLower; // concatenar para formar la nueva palabra
                  }
            else if(numberCodeAscii==32){  // si el caracter es un espacio vacio
                        let space = " ";
                      codeCipher+=space;
                  }

              }

         return codeCipher;



  }
  };
