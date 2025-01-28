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

function sortearAmigo() {
    let index = Math.floor(Math.random()* nomes.length);
    let resultado = document.querySelector(".result-list")
    resultado.innerHTML = (nomes[index])
    listaAmigos.innerHTML = ""
return (nomes[index])
} 

 

function atualizaAmigos(){
    let listaAmigos = document.querySelector(".name-list")
    let li = document.createElement("li")
    nomes.forEach(function(element){
        li.innerHTML = element
    });
    listaAmigos.append(li)
}
