var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nome = document.querySelector(".nome");
const email = document.querySelector(".email");
const cpf = document.querySelector(".cpf");
const idade = document.querySelector(".idade");
const estado = document.querySelector(".estado");
const cep = document.querySelector(".cep");
const descricao = document.querySelector(".descricao");
const competencias = document.querySelector(".competencias");
const botaoLike = document.querySelector(".botao_like");
const botaoDeslike = document.querySelector(".botao_deslike");
botaoLike.addEventListener("click", () => trocaCandidato());
botaoDeslike.addEventListener("click", () => trocaCandidato());
function getContent() {
    return __awaiter(this, void 0, void 0, function* () {
        let lista = [];
        try {
            const response = yield fetch('http://localhost:8080/zghero/candidatos');
            const data = yield response.json();
            data.forEach((candidato) => {
                lista.push(candidato);
            });
        }
        catch (error) {
            console.log(error);
        }
        return lista;
    });
}
function trocaCandidato() {
    getContent().then(candidato => {
        var numAleatorio = Math.floor(Math.random() * candidato.length);
        console.log("Numero Aleatorio: " + numAleatorio);
        nome.textContent = "Nome: " + candidato[numAleatorio].name;
        email.textContent = "Email: " + candidato[numAleatorio].email;
        cpf.textContent = "Cpf: " + candidato[numAleatorio].cpf;
        idade.textContent = "Idade: " + Math.abs(candidato[numAleatorio].idade);
        estado.textContent = "Estado: " + candidato[numAleatorio].estado;
        cep.textContent = "Cep: " + candidato[numAleatorio].cep;
        descricao.textContent = "Descrição: " + candidato[numAleatorio].descricao;
        competencias.textContent = "Competências: "; // + candidato[numAleatorio].competencias
    });
}
trocaCandidato();
export {};
