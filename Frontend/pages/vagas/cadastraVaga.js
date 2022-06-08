"use strict";
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
const lugar = document.querySelector('#lugar');
const descricao = document.querySelector('#descricao');
const botaoCadastra = document.querySelector('.botao_cadastrar');
botaoCadastra.addEventListener('click', () => {
    console.log("cadastrando nova vaga!");
    cadastraVaga();
    /*
    setTimeout(function() {
      location.href="../perfilEmpresa/perfilEmpresa.html"
    }, 500)
   */
});
function cadastraVaga() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        let json;
        try {
            event === null || event === void 0 ? void 0 : event.preventDefault;
            let url = "http://localhost:3000/zghero/vagas" +
                `?name=${nome.value}&lugar=${lugar.value}&descricao=${descricao.value}`;
            response = yield fetch(url, {
                method: 'POST',
                headers: {
                    Mode: 'no-cors',
                    'Content-type': 'application/json; charset=utf-8'
                },
            });
            json = yield response.json();
        }
        catch (error) {
        }
    });
}
