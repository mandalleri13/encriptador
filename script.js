function encryptText() {
    let text = document.getElementById("inputText").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("resultText").value = encryptedText;
    togglePlaceholder();
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultText").value = decryptedText;
    togglePlaceholder();
}

function copyToClipboard() {
    let copyText = document.getElementById("resultText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied to clipboard: " + copyText.value);
}

function togglePlaceholder() {
    let resultText = document.getElementById("resultText").value;
    let placeholder = document.querySelector(".placeholder");
    if (resultText) {
        placeholder.style.display = "none";
    } else {
        placeholder.style.display = "flex";
    }
}

// Inicializa el estado de la imagen de marcador de posición cuando se carga





