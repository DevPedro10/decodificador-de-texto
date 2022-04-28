let btnCriptografar = document.getElementById("btn-cript"); 
let btnDescriptografar = document.getElementById("btn-descrip"); 
let textoInput = document.querySelector("#campo-texto");

function criptografar() {
    let output = document.querySelector(".output-container")
    output.classList.add("active-output")

    let msg = textoInput.value;
    // Criptografando Vogais
    let criptografia = msg
    .replaceAll("a", "ai")
    .replaceAll('e', "enter")
    .replaceAll('i', "imes")
    .replaceAll('o', "ober")
    .replaceAll('u', "ufat")
    // Criptografando Consoantes
    
    output.innerHTML = `<span class="textUser">${criptografia}</span>`

    let btn = document.createElement("button")
    let contentBtn= document.createTextNode("Copiar")
    btn.appendChild(contentBtn)
    btn.addEventListener("click", () => {
        let clipboard = criptografia
        navigator.clipboard.writeText(clipboard)
        window.alert("O texto criptografado foi copiado e está na área de transferência.")
    })
    output.appendChild(btn)
}

function descriptografar() {
    let output = document.querySelector(".output-container")
    output.classList.add("active-output")

    let msg = textoInput.value;

    // Criptografando Vogais
    var descriptografia = msg
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")

    if(msg.length == descriptografia.length) {
        alert("Seu texto não está Criptografado.")
    } else {
        output.innerHTML = `<span class="textUser">${descriptografia}</span>`
    }


    let btn = document.createElement("button")
    let contentBtn= document.createTextNode("Copiar")
    btn.appendChild(contentBtn)
    btn.addEventListener("click", () => {
        let clipboard = descriptografia
        navigator.clipboard.writeText(clipboard)
        window.alert("O texto descriptogrado foi copiado e está na área de transferência.")
    })
    output.appendChild(btn)

}

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;