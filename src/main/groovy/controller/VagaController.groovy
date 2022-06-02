package controller

import model.dao.vaga.VagaDAO
import model.factory.vaga.VagaCC
import model.vaga.Vaga

class VagaController {

    VagaDAO vagasDAO = new VagaCC().createVagas()


    void imprime(){
        println(vagasDAO.listar())
    }

    void insere(Vaga vaga){
        vagasDAO.inserir(vaga)
    }

    void altera(Vaga vaga, String nome){
        vagasDAO.alterar(vaga, nome)
    }

    void remove(String nome){
        vagasDAO.remover(nome)
    }

}
