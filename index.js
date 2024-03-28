// 1. Importaciones y requerimientos externos

// 2. Definición de constantes y variables globales

let TextoParaEncriptar = "", TextoParaDesEncriptar = "";
let ArrayTextoParaEncriptar = [];

// 3. Definición de funciones y clases

function oculta_imagen() {

    let media_q = window.screen.width;

        if (media_q >= 992) {
            document.getElementById("ImagenNoneText").style.visibility = 'hidden';
        } else {
            document.getElementById("NoneText").style.visibility = 'hidden';
        }

}

function muestra_imagen() {

    let media_q = window.screen.width;

        if (media_q >= 992) {
            document.getElementById("ImagenNoneText").style.visibility = 'visible';
        } else {
            document.getElementById("NoneText").style.visibility = 'visible';
        }

}

function Encriptar () {
    // Inicializo variables
    TextoParaEncriptar = "";
    ArrayTextoParaEncriptar = [];
    // Capturo el texto escrito
    document.getElementById("T-Encriptado").value = "";
    TextoParaEncriptar = document.getElementById("T-Encriptar").value;

    // Validaciones del texto 
    if (TextoParaEncriptar === "") {

        document.getElementById("T-Encriptado").value = "";
        muestra_imagen();
        return;

    }
            
    const caracteres_esp = /[áÁéÉíÍóÓúÚA-Z]|[^\w\s]/g;
    
    if (caracteres_esp.test(TextoParaEncriptar)) {
 
        alert("Por favor, compruebe que el texto no contenga letras mayusculas, tildes o caracteres especiales y intente de nuevo...");
        return;
    }
    // Encriptación del texto
    oculta_imagen();

    for (let i = 0; i < TextoParaEncriptar.length; i++) {
        let offset_slice = i + 1;
        let letra = TextoParaEncriptar.slice(i, offset_slice);
        switch (letra) {
            case 'a':
                ArrayTextoParaEncriptar[i] = 'ai';
                break;
            case 'e':
                ArrayTextoParaEncriptar[i] = 'enter';
                break;
            case 'i':
                ArrayTextoParaEncriptar[i] = 'imes';
                break;
            case 'o':
                ArrayTextoParaEncriptar[i] = 'ober';
                break;
            case 'u':
                ArrayTextoParaEncriptar[i] = 'ufat';
                break;
            default:
                ArrayTextoParaEncriptar[i] = TextoParaEncriptar.slice(i, offset_slice);;
        }
    }
    // Borro texto para nueva entrada
    document.getElementById("T-Encriptar").value = ""; 
    // Muestro el texto encriptado al usuario
    document.getElementById("T-Encriptado").value = ArrayTextoParaEncriptar.join("");
}

function copiar_encriptado () {
    //Copiando
    let T_copiado = document.getElementById("T-Encriptado").value;

    if (T_copiado === "") {
        
        alert("No hay texto encriptado disponible para copiar...");
        return;

    }
    navigator.clipboard.writeText(T_copiado);
    alert("Su texto ya encriptado ha sido copiado en el portapapeles...")
    inicializarAplicacion();
}

function Desencriptar () {
    // Inicializo variables
    TextoParaDesEncriptar = "";
    // Capturo el texto para desencriptar
    TextoParaDesEncriptar = document.getElementById("T-Encriptar").value;

    // Validaciones del texto 
    if (TextoParaDesEncriptar === "") {

        document.getElementById("T-Encriptado").value = "";
        muestra_imagen();
        return;

    }
            
    const caracteres_esp = /[áÁéÉíÍóÓúÚA-Z]|[^\w\s]/g;
    
    if (caracteres_esp.test(TextoParaDesEncriptar)) {
 
        alert("Por favor, compruebe que el texto encriptado no contenga letras mayusculas, tildes o caracteres especiales y intente de nuevo...");
        return;
    }
    // DesEncriptando del texto
    oculta_imagen();

    if (TextoParaDesEncriptar.search('ai') >= 0) {
        TextoParaDesEncriptar = TextoParaDesEncriptar.replaceAll('ai', 'a');
    }
    if (TextoParaDesEncriptar.search('enter') >= 0) {
        TextoParaDesEncriptar = TextoParaDesEncriptar.replaceAll('enter', 'e');
    }
    if (TextoParaDesEncriptar.search('imes') >= 0) {
        TextoParaDesEncriptar = TextoParaDesEncriptar.replaceAll('imes', 'i');
    }
    if (TextoParaDesEncriptar.search('ober') >= 0) {
        TextoParaDesEncriptar = TextoParaDesEncriptar.replaceAll('ober', 'o');
    }
    if (TextoParaDesEncriptar.search('ufat') >= 0) {
        TextoParaDesEncriptar = TextoParaDesEncriptar.replaceAll('ufat', 'u');
    }

    // Borro texto para nueva entrada
    document.getElementById("T-Encriptar").value = ""; 
    // Muestro el texto desencriptado al usuario
    document.getElementById("T-Encriptado").value = TextoParaDesEncriptar;

}

// 4. Manejadores de eventos de usuario y ventana

document.getElementById("BotonEncriptar").addEventListener("click", Encriptar);
document.getElementById("BotonDesencriptar").addEventListener("click", Desencriptar);
document.getElementById("BotonCopy").addEventListener("click", copiar_encriptado);

// 5. Función de inicialización

function inicializarAplicacion() {
    // Borro textos para nueva entrada
    document.getElementById("T-Encriptar").value = "";
    document.getElementById("T-Encriptado").value = "";
    TextoParaDesEncriptar = ""
    TextoParaEncriptar = "";
    ArrayTextoParaEncriptar = [];
    // Deshabilito el cuadro de texto encriptado para evitar falsas entradas
    document.getElementById("T-Encriptado").setAttribute("disabled", "");
    // Muestro imagen "Text non found" habilitada
    muestra_imagen()

}

// 6. Ejecución del código

inicializarAplicacion();


