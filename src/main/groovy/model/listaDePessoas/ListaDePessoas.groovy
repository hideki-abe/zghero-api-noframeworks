package model.listaDePessoas

import model.pessoas.PessoaFisica
import model.pessoas.PessoaJuridica

class ListaDePessoas {

    ArrayList<PessoaFisica> candidatos = new ArrayList<>()
    ArrayList<PessoaJuridica> empresas = new ArrayList<>()

    def listaCandidatos(){
        println this.candidatos
    }

    def listaEmpresas(){
        println this.empresas
    }

}
