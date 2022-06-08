var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
botaoCadastra.addEventListener('click', () => {
    cadastraEmpresa();
    setTimeout(function () {
        location.href = "../vagas/cadastraVaga.html";
    }, 500);
});
function cadastraEmpresa() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        let json;
        try {
            event === null || event === void 0 ? void 0 : event.preventDefault;
            let url = "http://localhost:3000/zghero/empresas" +
                `?name=${nome.value}&email=${email.value}&cnpj=${cnpj.value}&pais=${pais.value}&estado=${estado.value}&cep=${cep.value}&descricao=${descricao.value}`;
            response = yield fetch(url, {
                method: 'POST',
                headers: {
                    Mode: 'no-cors',
                    'Content-type': 'application/json; charset=utf-8'
                }
            });
            json = yield response.json();
            validaEmpresa(nome.value, email.value, cnpj.value, pais.value, estado.value, cep.value, descricao.value);
        }
        catch (error) {
            //json = null
            console.log(error);
        }
    });
}
function validaEmpresa(novoNome, novoEmail, novoCnpj, novoPais, novoEstado, novoCep, novaDescricao) {
    const regexNome = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$/; // /[A-Z]{1}[a-z]{2,10} [A-Z]{1}[a-z]{2,10}/
    const regexEmail = /(\S+@\w+\.\w{2,6}(\.\w{2})?)/g;
    const regexCnpj = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/;
    const regexPais = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;
    const regexEstado = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;
    const regexCep = /^[0-9]{5}-?[0-9]{3}$/;
    const regexDescricao = /\w{1,15}/g;
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
export {};
