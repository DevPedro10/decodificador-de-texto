let btnCriptografar = document.getElementById("btn-cript"); 
let btnDescriptografar = document.getElementById("btn-descrip"); 
let textoInput = document.querySelector("#campo-texto");

function criptografar() {
    let output = document.querySelector(".output-container")
    output.classList.add("active-output")

    let msg = textoInput.value;
    // Criptografando Vogais
    let criptografia = msg
    .replaceAll("a", "l0d")
    .replaceAll('e', "s3nt")
    .replaceAll('i', "v1k")
    .replaceAll('o', "0pt1c")
    .replaceAll('u', "z3t")
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
    let descriptografia = msg
    .replaceAll("l0d", "a")
    .replaceAll('s3nt', "e")
    .replaceAll('v1k', "i")
    .replaceAll('0pt1c', "o")
    .replaceAll('z3t', "u")

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