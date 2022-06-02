package model.factory.candidatosCompetencias

import model.dao.candidatosCompetencias.CandidatosCompetenciasDAO
import model.dao.candidatosCompetencias.JDBCCandidatosCompetenciasDAO

class CandidatosCompetenciasCC extends CandidatosCompetenciasFactory{


    @Override
    CandidatosCompetenciasDAO createCandidatosCompetencias() {
        return new JDBCCandidatosCompetenciasDAO()
    }
}
