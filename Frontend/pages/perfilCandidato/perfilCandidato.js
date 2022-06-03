var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const cnpj = document.querySelector('.cnpj');
const pais = document.querySelector('.pais');
const cep = document.querySelector('.cep');
const descricao = document.querySelector('.descricao');
const botaoLike = document.querySelector('.botao_like');
const botaoDeslike = document.querySelector('.botao_deslike');
const lista = [];
botaoLike.addEventListener('click', () => trocaEmpresa());
botaoDeslike.addEventListener('click', () => trocaEmpresa());
function getContent() {
    return __awaiter(this, void 0, void 0, function* () {
        let lista = [];
        try {
            const response = yield fetch('http://localhost:8080/zghero/empresas');
            const data = yield response.json();
            data.forEach((empresa) => {
                lista.push(empresa);
            });
        }
        catch (error) {
            console.log(error);
        }
        return lista;
    });
}
function trocaEmpresa() {
    getContent().then(empresa => {
        var numAleatorio = Math.floor(Math.random() * empresa.length);
        nome.textContent = 'Nome: ' + empresa[numAleatorio].name;
        email.textContent = 'Email: ' + empresa[numAleatorio].email;
        cnpj.textContent = 'Cnpj: ' + empresa[numAleatorio].cnpj;
        pais.textContent = 'Pais: ' + empresa[numAleatorio].pais;
        //cep.textContent = 'Cep: ' + empresa[numAleatorio].cep
        descricao.textContent = 'Descrição: ' + empresa[numAleatorio].descricao;
    });
}
trocaEmpresa();
export {};
