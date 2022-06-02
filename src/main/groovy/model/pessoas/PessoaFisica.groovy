package model.pessoas

import groovy.transform.Canonical
import model.competencia.Competencia

@Canonical
class PessoaFisica implements Pessoa{

    private String nome
    private String email
    private def cpf
    private String idade
    private String estado
    private def cep
    private String descricao
    private String senha
    private List<Competencia> competencias = []

    PessoaFisica(){

    }
    PessoaFisica(String nome, String email, cpf, String idade,
                 String estado, cep, String descricao, String senha) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.idade = idade
        this.estado = estado
        this.cep = cep
        this.descricao = descricao
        this.senha = senha
    }

    String getNome() {
        return nome
    }

    void setNome(String nome) {
        this.nome = nome
    }

    String getEmail() {
        return email
    }

    void setEmail(String email) {
        this.email = email
    }

    def getCpf() {
        return cpf
    }

    void setCpf(cpf) {
        this.cpf = cpf
    }

    String getIdade() {
        return idade
    }

    void setIdade(String idade) {
        this.idade = idade
    }

    String getEstado() {
        return estado
    }

    void setEstado(String estado) {
        this.estado = estado
    }

    def getCep() {
        return cep
    }

    void setCep(cep) {
        this.cep = cep
    }

    String getDescricao() {
        return descricao
    }

    void setDescricao(String descricao) {
        this.descricao = descricao
    }

    String getSenha() {
        return senha
    }

    void setSenha(String senha) {
        this.senha = senha
    }

    List<Competencia> getCompetencias() {
        return competencias
    }

    void setCompetencias(List<Competencia> competencias) {
        this.competencias = competencias
    }

    @Override
    public String toString() {
        return "Candidato: \n" +
                "--------------------- \n" +
                "Nome: " + nome + '\n' +
                "Email: " + email + '\n' +
                "Cpf: " + cpf + '\n' +
                "Idade: " + idade + '\n' +
                "Estado: " + estado + '\n' +
                "Cep: " + cep + '\n' +
                "Descrição: " + descricao + '\n' +
                "Competências: " + competencias +
                "\n--------------------- \n"
                ;
    }

}
