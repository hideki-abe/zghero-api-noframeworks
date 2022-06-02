package model.factory.competencia

import model.dao.competencia.CompetenciaDAO

abstract class CompetenciaFactory {

    abstract CompetenciaDAO createCompetencia()

}
