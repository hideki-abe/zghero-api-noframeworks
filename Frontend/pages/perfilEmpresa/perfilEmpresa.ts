import ListaDePessoas from "../../pessoas/listaDePessoas.js";
import PessoaFisica from "../../pessoas/pessoaFisica.js";

const nome = <HTMLSelectElement>document.querySelector(".nome")
const email = <HTMLSelectElement>document.querySelector(".email")
const cpf = <HTMLSelectElement>document.querySelector(".cpf")
const idade = <HTMLSelectElement>document.querySelector(".idade")
const estado = <HTMLSelectElement>document.querySelector(".estado")
const cep = <HTMLSelectElement>document.querySelector(".cep")
const descricao = <HTMLSelectElement>document.querySelector(".descricao")
const competencias = <HTMLSelectElement>document.querySelector(".competencias")
const botaoLike = <HTMLSelectElement>document.querySelector(".botao_like")
const botaoDeslike = <HTMLSelectElement>document.querySelector(".botao_deslike")


botaoLike.addEventListener("click", ()=> trocaCandidato())
botaoDeslike.addEventListener("click", ()=> trocaCandidato())

async function getContent() {
    let lista: { name: string; email: string; cpf: string; idade: any; estado: string; cep: any; descricao: string; }[] = []

    try{
        const response = await fetch('http://localhost:8080/zghero/candidatos')
        const data = await response.json()

        data.forEach((candidato: {name: string, email:string, cpf:string, idade:any, 
            estado:string, cep:any, descricao:string, competencias:any}) => {
            lista.push(candidato)
        });
    } catch (error){
        console.log(error)
    }
    return lista
}


function trocaCandidato(){

    getContent().then(candidato => {
            
        var numAleatorio:number = Math.floor(Math.random()*candidato.length)
        console.log("Numero Aleatorio: " + numAleatorio)

        nome.textContent = "Nome: "  + candidato[numAleatorio].name
        email.textContent = "Email: " + candidato[numAleatorio].email
        cpf.textContent = "Cpf: " + candidato[numAleatorio].cpf
        idade.textContent = "Idade: " + Math.abs(candidato[numAleatorio].idade)
        estado.textContent = "Estado: " + candidato[numAleatorio].estado
        cep.textContent = "Cep: " + candidato[numAleatorio].cep
        descricao.textContent = "Descrição: " + candidato[numAleatorio].descricao
        competencias.textContent = "Competências: " // + candidato[numAleatorio].competencias

    })  
        
}

trocaCandidato()


