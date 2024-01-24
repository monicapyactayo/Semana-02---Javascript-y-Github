function procesarTexto() {
  var textoOriginal = document.getElementById('texto').value.toLowerCase();
  var modo = document.getElementById('modo').value;
  var resultado = '';

  if (modo === 'encriptar') {
    resultado = encriptarTexto(textoOriginal);
  } else if (modo === 'desencriptar') {
    resultado = desencriptarTexto(textoOriginal);
  }

  document.getElementById('resultado').value = resultado;
}

function encriptarTexto(texto) {
  return texto.replace(/e/g, 'enter')
             .replace(/i/g, 'imes')
             .replace(/a/g, 'ai')
             .replace(/o/g, 'ober')
             .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
  return texto.replace(/enter/g, 'e')
             .replace(/imes/g, 'i')
             .replace(/ai/g, 'a')
             .replace(/ober/g, 'o')
             .replace(/ufat/g, 'u');
}
