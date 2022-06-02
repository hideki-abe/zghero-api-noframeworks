package main


import model.dao.pessoas.PessoaDAO
import model.factory.pessoas.PessoaFisicaCC
import model.pessoas.Pessoa
import model.pessoas.PessoaFisica

class TestePessoaFisicaDAO {

    static void main(String[] args) {

        listar()

        //INSERÇÃO DE CANDIDATOS
        List<String> competencia = new ArrayList<>()
        Pessoa candidato = new PessoaFisica("Alberto Sousa", "alberto@email.com",
                "11111", 30, "Brasil", "74455050", "Estudante de TI", null)
        competencia.add("React")
        inserir(candidato)

        //LISTAGEM DE CANDIDATOS
        listar()

        //UPDATE
        PessoaFisica novoCandidato = new PessoaFisica("Alberto Silva", "alberto123@email.com",
                "12345678", 30, "EUA", "74455050", "Estudante de TI", null)
        alterar(novoCandidato, "11111")

        //LISTAGEM DE CANDIDATOS
        listar()

        //REMOÇÃO DE CANDIDATOS
        remover("12345678")

    }

    def static listar(){
        PessoaDAO candidatoDAO = new PessoaFisicaCC().createPessoa()
        println(candidatoDAO.listar())
    }

    def static inserir(Pessoa candidato){
        PessoaDAO candidatoDAO = new PessoaFisicaCC().createPessoa()
        candidatoDAO.inserir(candidato)

    }

    def static alterar(PessoaFisica candidato, String cpf){
        PessoaDAO candidatoDAO = new PessoaFisicaCC().createPessoa()
        candidatoDAO.alterar(candidato, cpf)

    }

    def static remover(String cpf){
        PessoaDAO candidatoDAO = new PessoaFisicaCC().createPessoa()
        candidatoDAO.remover(cpf)
    }

}
