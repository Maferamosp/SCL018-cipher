const cipher = {
  // ...
  encode: (desplazamiento, toEncode) =>{
   let messageEncode = "";
    for (let i = 0; i < toEncode.length; i++){
      let letter = toEncode[i];
      if(letter.match(/['A-Z']/i)){
        if(toEncode.charCodeAt(i) >= 65 && toEncode.charCodeAt(i) <= 90){
         let toAscii = (toEncode.charCodeAt(i) - 65 + parseInt(desplazamiento)) % 26 + 65;
         console.log(toAscii);
         messageEncode += String.fromCharCode(toAscii);
        }
      }
    } console.log(messageEncode);
    return messageEncode;
  },
  decode: (desplazamiento, toDecode) =>{
    let messageDecode = ""; // se declara una variable con el objeto vacio
     for (let i = 0; i < toDecode.length; i++){ // for itera por el string
       let letterOne = toDecode[i]; // almacena el caracter en el string a medida que el for itera
       if(letterOne.match(/['A-Z']/i)){ //verifica si la propiedad existe en el mapa
         if(toDecode.charCodeAt(i) >= 65 && toDecode.charCodeAt(i) <= 90){ //indicamos que va a iterar entre 65 y 90 que son los nros Ascii
          let toAscii = (toDecode.charCodeAt(i) + 65 - parseInt(desplazamiento)) % 26 + 65; // formula para ver el offset
          console.log(toAscii);
          messageDecode += String.fromCharCode(toAscii); //la variable vacia se suma con la cadena sacada del codigo ascii 
         }
       }
     } console.log(messageDecode);
     return messageDecode; // 
    }
};

export default cipher;



