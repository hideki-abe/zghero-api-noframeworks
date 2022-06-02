package model.factory.candidatosCompetencias

import model.dao.candidatosCompetencias.CandidatosCompetenciasDAO

abstract class CandidatosCompetenciasFactory {

    abstract CandidatosCompetenciasDAO createCandidatosCompetencias()

}
