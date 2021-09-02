const cipher = {
  // ...
  encode: (toEncode, desplazamiento) =>{
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
  }
};

export default cipher;


