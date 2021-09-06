import cipher from './cipher.js';

let containerAnswer = document.getElementById('mensaje2');

const cifrar = document.getElementById('cifrar');
document.getElementById('mensaje1').addEventListener('keyup', function(){
    mensaje1.value = mensaje1.value.toUpperCase();
});
cifrar.addEventListener('click', () => {
    let toEncode = document.getElementById('mensaje1').value;
    let desplazamiento = document.getElementById('offset').value;
    console.log(toEncode)
    containerAnswer.innerHTML = cipher.encode(toEncode, desplazamiento);
});

const descifrar = document.getElementById('descifrar');

descifrar.addEventListener('click', () =>{
    let toDecode = document.getElementById('mensaje1').value;
    let desplazamiento = document.getElementById('offset').value;
    containerAnswer.innerHTML = cipher.decode(toDecode, desplazamiento)
});
