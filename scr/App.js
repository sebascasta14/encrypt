const icon = document.getElementById("icon");
const textInput = document.querySelector(".text-input");
const textOutput = document.querySelector(".text-output");
const textTittle = document.querySelector(".text-tittle");
const textParagraph = document.querySelector(".text");
const btnCopy = document.querySelector(".btn-copy");

let isDarkMode = false;
const matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
const btnMode = () => {
    isDarkMode = !isDarkMode;
    document.documentElement.style.setProperty(
        "--background-color",
        isDarkMode
            ? "var(--background-color-dark)"
            : "var(--background-color-light)"
    );
    document.documentElement.style.setProperty(
        "--background-color-invested",
        isDarkMode
            ? "var(--background-color-light)"
            : "var(--background-color-dark)"
    );
    document.documentElement.style.setProperty(
        "--text-color",
        isDarkMode ? "var(--text-color-dark)" : "var(--text-color-light)"
    );
    document.documentElement.style.setProperty(
        "--text-color-invested",
        isDarkMode ? "var(--text-color-light)" : "var(--text-color-dark)"
    );
    icon.className = isDarkMode ? "fas fa-sun" : "fas fa-moon";
};

const btnEncrypt = () => {
    const textEncrypt = encrypt(textInput.value);
    textOutput.textContent = textEncrypt;
    textInput.value = "";
    updateVisibility();
};

const btnDecode = () => {
    const textEncrypt = Decode(textInput.value);
    textOutput.textContent = textEncrypt;
    textInput.value = "";
    updateVisibility();
};

const encrypt = (text) => {
    text = text.toLowerCase();
    for (let i = 0; i < matrizCode.length; i++) {
        if (text.includes(matrizCode[i][0])) {
            text = text.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }
    return text;
};

const Decode = (text) => {
    text = text.toLowerCase();
    for (let i = 0; i < matrizCode.length; i++) {
        if (text.includes(matrizCode[i][1])) {
            text = text.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }
    return text;
};

const updateVisibility = () => {
    if (textOutput.textContent.trim() === "") {
        btnCopy.classList.add("hidden");
        textTittle.style.display = "block";
        textParagraph.style.display = "block";
    } else {
        btnCopy.classList.remove("hidden");
        textTittle.style.display = "none";
        textParagraph.style.display = "none";
    }
};

/* "Funcion de verificacion"
 Reemplaza el caracter no valido por un "" en el instante que lo digita.
    El caracter no valida ingresado:
    El usuario no lo visualiza
    No se almacena en la variable
    No se tiene en cuenta en la encriptacion*/
textInput.addEventListener("input", () => {
    textInput.value = textInput.value.replace(/[^a-z0-9]/g, "");
});

window.onload = updateVisibility;
