import PessoaJuridica from "../../pessoas/pessoaJuridica.js";
import ListaDePessoas from "../../pessoas/listaDePessoas.js";
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const cnpj = document.querySelector("#cnpj");
const pais = document.querySelector("#pais");
const estado = document.querySelector("#estado");
const cep = document.querySelector("#cep");
const descricao = document.querySelector("#descricao");
const competencias = document.querySelector("#competencias");
let botaoCadastra = document.querySelector(".botao_cadastrar");
let link = document.querySelector("#link");
botaoCadastra.addEventListener('click', () => { cadastraEmpresa(); });
const lista = new ListaDePessoas([], []);
function validaEmpresa(novoNome, novoEmail, novoCnpj, novoPais, novoEstado, novoCep, novaDescricao, novasCompetencias) {
    const regexNome = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$/; // /[A-Z]{1}[a-z]{2,10} [A-Z]{1}[a-z]{2,10}/
    const regexEmail = /(\S+@\w+\.\w{2,6}(\.\w{2})?)/g;
    const regexCnpj = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/;
    const regexPais = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;
    const regexEstado = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;
    const regexCep = /^[0-9]{5}-?[0-9]{3}$/;
    const regexDescricao = /\w{1,15}/g;
    const regexComp = competencias.value.split(/,/);
    link.href = "./cadastroEmpresa.html";
    if (!regexNome.test(novoNome)) {
        alert("Nome inválido!");
        return false;
    }
    else if (!regexEmail.test(novoEmail)) {
        alert("Email inválido!");
        return false;
    }
    else if (!regexCnpj.test(novoCnpj)) {
        alert("Cpf inválido!");
        return false;
    }
    else if (!regexPais.test(novoPais)) {
        alert("Idade inválida!");
        return false;
    }
    else if (!regexEstado.test(novoEstado)) {
        alert("Estado inválido!");
        return false;
    }
    else if (!regexCep.test(novoCep)) {
        alert("Cep inválido!");
        return false;
    }
    else if (!regexDescricao.test(novaDescricao)) {
        alert("Descrição inválida!");
    }
    else {
        link.href = "../perfilEmpresa/perfilEmpresa.html";
        return true;
    }
}
function cadastraEmpresa() {
    let novoNome = nome.value;
    let novoEmail = email.value;
    let novoCnpj = cnpj.value;
    let novoPais = pais.value;
    let novoEstado = estado.value;
    let novoCep = cep.value;
    let novaDescricao = descricao.value;
    let novasCompetencias = [];
    novasCompetencias.push(competencias.value);
    const valida = validaEmpresa(novoNome, novoEmail, novoCnpj, novoPais, novoEstado, novoCep, novaDescricao, novasCompetencias);
    if (valida) {
        const novaEmpresa = new PessoaJuridica(novoNome, novoEmail, novoCnpj, novoPais, novoEstado, novoCep, novaDescricao, novasCompetencias);
        lista.cadastraEmpresa(novaEmpresa);
        alert("Cadastro realizado com sucesso!");
    }
}
export default function listaCandidatos() {
    console.log(lista);
}
console.log(lista.empresas);
