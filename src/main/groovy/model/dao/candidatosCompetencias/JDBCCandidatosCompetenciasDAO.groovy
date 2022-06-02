package model.dao.candidatosCompetencias


import model.factory.ConnectionFactory

import java.sql.Connection
import java.sql.PreparedStatement
import java.sql.ResultSet
import java.sql.SQLException

class JDBCCandidatosCompetenciasDAO implements CandidatosCompetenciasDAO{

    private Connection connection

    public JDBCCandidatosCompetenciasDAO(){
        connection = ConnectionFactory.getConnection()
    }

    @Override
    public ArrayList findById(int id) {
        String sql = "SELECT * FROM candidatos_competencias WHERE id_candidatos=?"
        ArrayList idCompetencias = new ArrayList()
        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setInt(1, id)
            ResultSet resultado = stmt.executeQuery()
            while(resultado.next()){
                idCompetencias.add(resultado.getInt("id_competencias"))
            }

        } catch(SQLException ex){
            ex.printStackTrace()
        }
        return idCompetencias
    }
}
