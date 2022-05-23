function encriptar(){

    const frase_original = document.querySelector(".textoOriginal").value;
    const frase_encriptada = frase_original.replace(/e/gi, "eXt0N@").replace(/i/gi, "iZlP5").replace(/a/gi, "a-9 TbS&8").replace(/o/gi, "o@Lm Jh65%").replace(/u/gi, "uZg1 K5Hdc");
    document.querySelector(".textoEncriptado").value = frase_encriptada;
    document.querySelector(".textoEncriptado").value;
    
}	

boton1 = document.querySelector("#encriptar"); 
boton1.onclick = encriptar;

function desencriptar(){
    const frase_original = document.querySelector(".textoOriginal").value;
    const frase_encriptada = frase_original.replace(/eXt0N@/gi, "e").replace(/iZlP5/gi, "i").replace(/a-9 TbS&8/gi, "a").replace(/o@Lm Jh65%/gi, "o").replace(/uZg1 K5Hdc/gi, "u");
    document.querySelector(".textoEncriptado").value = frase_encriptada;
    document.querySelector(".textoEncriptado").value;
}

boton2 = document.querySelector("#desencriptar"); 
boton2.onclick = desencriptar;

function copiar(){
    let texto = document.getElementById("textoEncriptado")
    texto.select();
    texto.setSelectionRange(0, 999999);
    document.execCommand('copy');
}

boton3 = document.querySelector("#copiar"); 
boton3.onclick = copiar;
  
document.getElementById('paste').addEventListener('click', ()=>{
    let pasteArea = document.getElementById('pasteArea');
    pasteArea.value = '';
    navigator.clipboard.readText()
    .then((text)=>{
        pasteArea.value = text;
    });
});