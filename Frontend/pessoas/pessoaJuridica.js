export default class PessoaJuridica {
    constructor(nome, email, cnpj, pais, estado, cep, descricao, competencias) {
        this.nome = nome;
        this.email = email;
        this.cnpj = cnpj;
        this.pais = pais;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
        this.competencias = competencias;
    }
}
