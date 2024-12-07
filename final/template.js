let notas = []

function aggNota(){
    let textarea = document.querySelector("textarea")
    let notaAgg = textarea.value
    notas.push(notaAgg)
    console.log(notas)
    

    mostrarNotas()
    
}

function mostrarNotas(){
    let noteList = document.querySelector("#listaNotas")
    noteList.innerHTML = " "
    notas.forEach(nota => {
        const li = document.createElement("li")
    li.innerHTML = nota
    noteList.appendChild(li) 
    
    })
    

    
}

 