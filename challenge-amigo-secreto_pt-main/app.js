let nomes = [];


function adicionarAmigo() {
    let tagInput = document.querySelector(".input-name");
    const a = (tagInput.value)
    if (tagInput.value.length == 0) {
        alert("campo vazio");
        return;
    }
    if (!isNaN(tagInput.value)) {
        alert("Valor inválido, por favor digite um nome");
        return;
    }   

    nomes.push(tagInput.value);
     resultado.innerHTML = ""
     tagInput.value = ""
     atualizaAmigos()
    return tagInput.value

}


