function encriptar() {
    const inputText = document.getElementById('user-input').value.toLowerCase();
    const encriptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('result-display').textContent = encriptedText;
    document.getElementById('image-display').style.display = 'none';
}

function desencriptar() {
    const encriptedText = document.getElementById('user-input').value.toLowerCase();
    const originalText = encriptedText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('result-display').textContent = originalText;
    document.getElementById('image-display').style.display = 'none';
}






