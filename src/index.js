import cipher from './cipher.js';

const containerAnswer = document.getElementById('mensaje2'); //mensaje descifrado

const cifrar = document.getElementById('cifrar');

cifrar.addEventListener('click', () => {
    let toEncode = document.getElementById('mensaje1').value; //sacamos el valor de mensaje
    let desplazamiento = document.getElementById('offset').value; //sacamos el valor del desplazamiento
    console.log(toEncode)
<<<<<<< HEAD
    containerAnswer.innerHTML = cipher.encode(desplazamiento, toEncode.toUpperCase());//con la variable lo llamamos al html
})
=======
    containerAnswer.innerHTML = cipher.encode(toEncode, desplazamiento);
});
>>>>>>> cd0cd328e7b086f0544b697072e130e541547d0b

// desarrollar el boton descifrar 

const descifrar = document.getElementById('descifrar');

descifrar.addEventListener('click', () =>{
    let toDecode = document.getElementById('mensaje1').value;
    let desplazamiento = document.getElementById('offset').value;
    console.log(toDecode)
    containerAnswer.innerHTML = cipher.decode(desplazamiento, toDecode.toUpperCase());
});

