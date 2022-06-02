package model.dao.vaga

import model.factory.ConnectionFactory
import model.vaga.Vaga

import java.sql.Connection
import java.sql.PreparedStatement
import java.sql.ResultSet
import java.sql.SQLException

class JDBCVagaDAO implements VagaDAO{

    private Connection connection

    public JDBCVagaDAO(){
        connection = ConnectionFactory.getConnection()
    }

    public List<Vaga> listar(){
        String sql = "SELECT * FROM vagas"
        List<Vaga> retorno = new ArrayList<>()

        try {
            PreparedStatement stmt = connection.prepareStatement(sql)
            ResultSet resultado = stmt.executeQuery()
            while(resultado.next()){
                Vaga vaga = new Vaga()
                vaga.setNome(resultado.getString("nome"))
                vaga.setDesc(resultado.getString("descricao"))
                vaga.setLugar(resultado.getString("lugar"))

                retorno.add(vaga)
            }

        } catch (SQLException ex){
            ex.printStackTrace()
            println("Erro na conexão!")
        }

        return retorno
    }

    public boolean inserir(Vaga vaga){
        String sql = "INSERT INTO vagas(nome, descricao, lugar, id_empresas) VALUES(?,?,?,?)"

        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, vaga.getNome())
            stmt.setString(2, vaga.getDesc())
            stmt.setString(3, vaga.getLugar())
            stmt.setInt(4, vaga.getId_empresas())

            stmt.execute()
            return true

        } catch(SQLException ex){
            ex.printStackTrace()
            println("Erro na conexão!")
            return false
        }
    }
    public boolean alterar(Vaga vaga, String nome){
        String sql = "UPDATE vagas SET nome=? WHERE nome=?"
        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, vaga.nome)
            stmt.setString(2, nome)

            stmt.execute()
            return true

        }catch(SQLException ex){
            ex.printStackTrace()
            println("Erro de conexão!")
            return false
        }
    }

    public void remover(String nome){
        String sql = "DELETE FROM vagas WHERE nome=?"
        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, nome)
            stmt.execute()

        } catch(SQLException ex){
            ex.printStackTrace()
        }

    }



}
