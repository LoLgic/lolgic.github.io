const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

const contenedorErrores = document.querySelector(".errorMensaje");

let imgchange = document.getElementById("people"); 
let diamodchange = document.getElementById("diamod");
let darkmode =  document.querySelector('#darkmode');

function validarMensaje(){
    
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for(let err of erroresPrevios){
        contenedorErrores.removeChild(err);   
    }

    var mensaje = inputMensaje.value.toLowerCase();
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz.,;-_/ "  
    let mensajeError = document.createDocumentFragment();
    let n = 0;
    for(let letra of mensaje){
        if(!letrasValidas.includes(letra)){
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `La letra o el signo ( ${letra} ) no es válida`;
            mensajeError.appendChild(p);
            n = 1;
            break; 
        } 
    }
    
    contenedorErrores.appendChild(mensajeError);
    if(mensajeError.children.length === n){
        return true;
    }

    return false;
}


function encriptar(){   
    inputResultado.value = ''; 
    if (!validarMensaje()) return; 
    var mensaje = inputMensaje.value.toLowerCase();
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat")
    inputResultado.value = mensajeEncriptado;
}

function desencriptar(){
    inputResultado.value = ''; 
    if (!validarMensaje()) return; 
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u")
    inputResultado.value = mensaje;
}

function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);  
    inputMensaje.value = "";  
    inputMensaje.focus();
}

function darkMode(){
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark');
        diamodchange.src = "img/diamod-Dark.svg"
        imgchange.src = "./img/people-Dark.svg"
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');;
        document.body.classList.remove('dark');
        diamodchange.src = "./img/diamod.svg"
        imgchange.src = "./img/people.svg"
    }
}

darkmode.onclick = darkMode;
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;




