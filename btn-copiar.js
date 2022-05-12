var botonCopiar = document.querySelector(".btn-copiar");


botonCopiar.onclick = copiar;

function copiar(){
    navigator.clipboard.writeText(resultado.textContent);
    alert("Mensaje Copiado");       
}

