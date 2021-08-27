import cipher from './cipher.js';

console.log(cipher);

let containerAnswer = document.getElementById('mensaje2')

document.getElementById('cifrar').addEventListener('click', () => {
    let toEncode = document.getElementById('mensaje1').value;
    let desplazamiento = document.getElementById('offset').value;
    containerAnswer.innerHTML = cipher.encode(toEncode, desplazamiento);
})
document.getElementById('descifrar').addEventListener('click', () =>{
    let toDecode = document.getElementById('mensaje1').value;
    let desplazamiento = document.getElementById('offset').value;
    containerAnswer.innerHTML = cipher.decode(toDecode, desplazamiento)
})
