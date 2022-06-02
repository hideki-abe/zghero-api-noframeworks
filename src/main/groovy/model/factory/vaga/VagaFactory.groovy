package model.factory.vaga

import model.dao.vaga.VagaDAO

abstract class VagaFactory {

    abstract VagaDAO createVagas()

}
