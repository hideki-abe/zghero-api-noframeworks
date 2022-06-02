import ListaDePessoas from "../../pessoas/listaDePessoas.js";

const nome = <HTMLSelectElement>document.querySelector(".nome")
const email = <HTMLSelectElement>document.querySelector(".email")
const cnpj = <HTMLSelectElement>document.querySelector(".cnpj")
const pais = <HTMLSelectElement>document.querySelector(".pais")
const estado = <HTMLSelectElement>document.querySelector(".estado")
const cep = <HTMLSelectElement>document.querySelector(".cep")
const descricao = <HTMLSelectElement>document.querySelector(".descricao")
const competencias = <HTMLSelectElement>document.querySelector(".competencias")
const botaoLike = <HTMLSelectElement>document.querySelector(".botao_like")
const botaoDeslike = <HTMLSelectElement>document.querySelector(".botao_deslike")

const lista = new ListaDePessoas([],[])

console.log(lista)

botaoLike.addEventListener("click", ()=> trocaEmpresa())
botaoDeslike.addEventListener("click", ()=> trocaEmpresa())

trocaEmpresa()

function trocaEmpresa(){
    var numAleatorio:number = Math.floor(Math.random()*lista.empresas.length)
    
    nome.textContent = "Nome: " + lista.empresas[numAleatorio].nome
    email.textContent = "Email: " + lista.empresas[numAleatorio].email
    cnpj.textContent = "Cnpj: " + lista.empresas[numAleatorio].cnpj
    pais.textContent = "País: " + lista.empresas[numAleatorio].pais
    estado.textContent = "Estado: " + lista.empresas[numAleatorio].estado
    descricao.textContent = "Descrição: " + lista.empresas[numAleatorio].descricao
    competencias.textContent = "Competências: " + lista.empresas[numAleatorio].competencias

}
