package model.factory.vaga

import model.dao.vaga.JDBCVagaDAO
import model.dao.vaga.VagaDAO

class VagaCC extends VagaFactory{

    @Override
    VagaDAO createVagas() {
        return new JDBCVagaDAO()
    }
}
