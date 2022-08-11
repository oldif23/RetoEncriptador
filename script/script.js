//Variables
let botonEncriptar = document.querySelector(".encriptar");
let botonDesenriptar = document.querySelector(".desencriptar");
let botonLimpiar = document.querySelector(".limpiar");
let labeltexto = document.querySelector(".texto-desencriptado");
let labelMedia = document.querySelector(".label-mobil");
let labelAdvertencia = document.querySelector("mensaje-error");
let inputTexto;
let textoEncriptado;
let regresion;
let palabraEncriptada;
let palabraDesencriptada;
// const cuerpoDocumento = document.body;
// cuerpoDocumento.onload = desabilitarBoton;

//Funciones

function encriptarMensaje(){
    inputTexto = document.querySelector(".texto-encriptar");
    texto = inputTexto.value.toLowerCase(); //convierte el texto del punto a minusculas
    palabraEncriptada = texto.replaceAll('e','enter').replaceAll('i','imes').replaceAll('o','ober').replaceAll('a','ai').replaceAll('u','ufat');
    labeltexto.innerHTML = palabraEncriptada; //envia la palabra encriptada al label
    labelMedia.innerHTML = "Su palabra encriptada es: " + palabraEncriptada;
    document.getElementById("ocultar").style.visibility = "hidden"; //oculta el label no se encontro
    document.getElementById("img-muneco").style.visibility = "hidden"; //oculta la imagen no se encontro
    textoEncriptado = document.querySelector(".texto-desencriptado");
    regresion = textoEncriptado.textContent;
    //console.log(regresion);
}

function desencriptarMensaje(){
    palabraDesencriptada = regresion.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ai','a').replaceAll('ufat','u');
    document.getElementById("ocultar").style.visibility = "visible";
    document.getElementById("img-muneco").style.visibility = "visible";

    labeltexto.innerHTML = palabraDesencriptada;
    labelMedia.innerHTML = "Su palabra desencriptada es: " + palabraDesencriptada;
}

function copiar(){
    inputTexto.value = "";
    labeltexto.innerHTML ="";
    navigator.clipboard.writeText(labelMedia.innerHTML);
    alert("texto Copiado al portapapeles");
    document.getElementById("ocultar").style.visibility = "visible";
    document.getElementById("img-muneco").style.visibility = "visible";
}



//llamado a las funciones
botonEncriptar.addEventListener('click',encriptarMensaje);
console.log(palabraEncriptada);
botonDesenriptar.addEventListener('click',desencriptarMensaje);
botonLimpiar.addEventListener('click',copiar);

