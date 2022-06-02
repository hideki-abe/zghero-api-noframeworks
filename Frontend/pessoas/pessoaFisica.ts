export default class PessoaFisica{
    nome: string
    email: string
    cpf: any
    idade: any
    estado: string
    cep: any
    descricao: string
    competencias: Array<string>


    constructor(nome: string, email: string, cpf: any, idade: any, estado:string,
        cep: string, descricao: string, competencias: Array<string>){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.idade = idade
        this.estado = estado
        this.cep = cep
        this.descricao = descricao
        this.competencias = competencias
    }

}