var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const idade = document.querySelector('#idade');
const pais = document.querySelector('#pais');
const cep = document.querySelector('#cep');
const descricao = document.querySelector('#descricao');
let botaoCadastra = document.querySelector('.botao_cadastrar');
let link = document.querySelector('#link');
console.log(link);
botaoCadastra.addEventListener('click', () => {
    cadastraUsuario();
    setTimeout(function () {
        location.href = "../competencias/competencias.html";
    }, 500);
});
function cadastraUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        /*
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/zghero/candidatos", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(`?name=${nome.value}&email=${email.value}&cpf=${cpf.value}&pais=${pais.value}&cep=${cep.value}&descricao=${descricao.value}`
          );
      
        console.log(`?name=${nome.value}&email=${email.value}&cpf=${cpf.value}&pais=${pais.value}&cep=${cep.value}&descricao=${descricao.value}`)
      
        */
        let response;
        let json;
        try {
            event === null || event === void 0 ? void 0 : event.preventDefault;
            let url = "http://localhost:3000/zghero/candidatos" +
                `?name=${nome.value}&email=${email.value}&cpf=${cpf.value}&idade=${idade.value}&pais=${pais.value}&cep=${cep.value}&descricao=${descricao.value}`;
            const body = {
                name: nome.value,
                email: email.value,
                idade: idade.value,
                cpf: cpf.value,
                pais: pais.value,
                cep: cep.value,
                descricao: descricao.value
            };
            response = yield fetch(url, {
                method: 'POST',
                headers: {
                    Mode: 'no-cors',
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(body)
            });
            json = yield response.json();
            validaCandidato(nome.value, email.value, cpf.value, idade.value, pais.value, cep.value, descricao.value);
            let myObj = { cpf: cpf.value };
            localStorage.setItem('1', JSON.stringify(myObj));
        }
        catch (error) {
        }
    });
}
function validaCandidato(novoNome, novoEmail, novoCpf, novaIdade, novoEstado, novoCep, novaDescricao) {
    const regexNome = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$/; // /[A-Z]{1}[a-z]{2,10} [A-Z]{1}[a-z]{2,10}/
    const regexEmail = /(\S+@\w+\.\w{2,6}(\.\w{2})?)/g;
    const regexCpf = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/;
    const regexIdade = /\d{2}/;
    const regexEstado = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;
    const regexCep = /^[0-9]{5}-?[0-9]{3}$/;
    const regexDescricao = /\w{1,15}/g;
    link.href = './cadastroCandidato.html';
    if (!regexNome.test(novoNome)) {
        alert('Nome inválido!');
        return false;
    }
    else if (!regexEmail.test(novoEmail)) {
        alert('Email inválido!');
        return false;
    }
    else if (!regexCpf.test(novoCpf)) {
        alert('Cpf inválido!');
        return false;
    }
    else if (!regexIdade.test(novaIdade)) {
        alert('Idade inválida!');
        return false;
    }
    else if (!regexEstado.test(novoEstado)) {
        alert('Estado inválido!');
        return false;
    }
    else if (!regexCep.test(novoCep)) {
        alert('Cep inválido!');
        return false;
    }
    else if (!regexDescricao.test(novaDescricao)) {
        alert('Descrição inválida!');
    }
    else {
        link.href = '../competencias/competencias.html';
        return true;
    }
}
export {};
