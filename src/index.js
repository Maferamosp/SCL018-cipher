import cipher from './cipher.js';

let containerAnswer = document.getElementById('mensaje2'); //mensaje descifrado

const cifrar = document.getElementById('cifrar');
document.getElementById('mensaje1').addEventListener('keyup', function(){
    mensaje1.value = mensaje1.value.toUpperCase();//convertimos todo las letras en mayusculas
});
cifrar.addEventListener('click', () => {
    let toEncode = document.getElementById('mensaje1').value; //sacamos el valor de mensaje
    let desplazamiento = document.getElementById('offset').value; //sacamos el valor del desplazamiento
    console.log(toEncode)
    containerAnswer.innerHTML = cipher.encode(toEncode, desplazamiento);//con la variable lo llamamos al html la respuesta
})

const descifrar = document.getElementById('descifrar');

descifrar.addEventListener('click', () =>{
    let toDecode = document.getElementById('mensaje1').value;
    let desplazamiento = document.getElementById('offset').value;
    console.log(toDecode)
    containerAnswer.innerHTML = cipher.decode(toDecode, desplazamiento)
});
