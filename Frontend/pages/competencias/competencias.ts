const opt = <HTMLSelectElement>document.querySelector(".competencias")


async function getContent() {
    let lista: {name: string}[] = []

    try{
        const response = await fetch('http://localhost:8080/zghero/competencias')
        const data = await response.json()

        data.forEach((competencia: {name: string}) => {
            lista.push(competencia)
        });
    } catch (error){
        console.log(error)
    }
    return lista
}

function criaCompetencia(){

    getContent().then(candidatos => {
        candidatos.forEach(element => {
            console.log(element.name)
            const novaCompetencia = document.createElement("option")
            novaCompetencia.textContent = element.name
            opt.appendChild(novaCompetencia)
        });
    })  
        
}

criaCompetencia()