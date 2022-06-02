package model.factory.competencia

import model.dao.competencia.CompetenciaDAO
import model.dao.competencia.JDBCCompetenciaDAO

class CompetenciaCC extends CompetenciaFactory{

    @Override
    CompetenciaDAO createCompetencia() {
        return new JDBCCompetenciaDAO()
    }
}
