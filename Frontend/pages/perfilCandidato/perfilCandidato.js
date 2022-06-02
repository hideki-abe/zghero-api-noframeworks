import ListaDePessoas from "../../pessoas/listaDePessoas.js";
const nome = document.querySelector(".nome");
const email = document.querySelector(".email");
const cnpj = document.querySelector(".cnpj");
const pais = document.querySelector(".pais");
const estado = document.querySelector(".estado");
const cep = document.querySelector(".cep");
const descricao = document.querySelector(".descricao");
const competencias = document.querySelector(".competencias");
const botaoLike = document.querySelector(".botao_like");
const botaoDeslike = document.querySelector(".botao_deslike");
const lista = new ListaDePessoas([], []);
console.log(lista);
botaoLike.addEventListener("click", () => trocaEmpresa());
botaoDeslike.addEventListener("click", () => trocaEmpresa());
trocaEmpresa();
function trocaEmpresa() {
    var numAleatorio = Math.floor(Math.random() * lista.empresas.length);
    nome.textContent = "Nome: " + lista.empresas[numAleatorio].nome;
    email.textContent = "Email: " + lista.empresas[numAleatorio].email;
    cnpj.textContent = "Cnpj: " + lista.empresas[numAleatorio].cnpj;
    pais.textContent = "País: " + lista.empresas[numAleatorio].pais;
    estado.textContent = "Estado: " + lista.empresas[numAleatorio].estado;
    descricao.textContent = "Descrição: " + lista.empresas[numAleatorio].descricao;
    competencias.textContent = "Competências: " + lista.empresas[numAleatorio].competencias;
}
