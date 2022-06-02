export default class ListaDePessoas {
    constructor(empresas, candidatos) {
        this.empresas = empresas;
        this.candidatos = candidatos;
    }
    cadastraEmpresa(empresa) {
        this.empresas.push(empresa);
    }
    cadastraCandidato(candidato) {
        this.candidatos.push(candidato);
    }
}
