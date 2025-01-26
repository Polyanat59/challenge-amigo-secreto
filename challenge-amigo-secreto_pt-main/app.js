let nomes = [];



function adicionarAmigo() {
    let tagInput = document.querySelector(".input-name");
    console.log(typeof tagInput.value)
    if (tagInput.value.length == 0) {
        alert("campo vazio")

    }   
    // if (typeof Number(tagInput.value) == 'number' || typeof Number(tagInput.value) == 'NaN') {
    //     alert("valor invalido")
    // }
   
    nomes.push(tagInput.value);
     tagInput.value = ""
    return tagInput.value

}

function sortearAmigo() {
    let index = Math.floor(Math.random()* nomes.length);
    let resultado = document.querySelector(".result-list")
    resultado.innerHTML = (nomes[index])
    return (nomes[index])
} 

