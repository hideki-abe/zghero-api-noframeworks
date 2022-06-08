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
const opt = document.querySelector(".competencias");
function getContent() {
    return __awaiter(this, void 0, void 0, function* () {
        let lista = [];
        try {
            const response = yield fetch('http://localhost:8080/zghero/competencias');
            const data = yield response.json();
            data.forEach((competencia) => {
                lista.push(competencia);
            });
        }
        catch (error) {
            console.log(error);
        }
        return lista;
    });
}
function criaCompetencia() {
    getContent().then(candidatos => {
        candidatos.forEach(element => {
            console.log(element.name);
            const novaCompetencia = document.createElement("option");
            novaCompetencia.textContent = element.name;
            opt.appendChild(novaCompetencia);
        });
    });
}
criaCompetencia();
