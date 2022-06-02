package model.dao.pessoas

import model.factory.ConnectionFactory
import model.pessoas.Pessoa
import model.pessoas.PessoaFisica
import model.pessoas.PessoaJuridica

import java.sql.Connection
import java.sql.PreparedStatement
import java.sql.ResultSet
import java.sql.SQLException

class JDBCPessoaJuridicaDAO implements  PessoaDAO{

    private Connection connection

    public JDBCPessoaJuridicaDAO(){
        connection = ConnectionFactory.getConnection()
    }

    public List<PessoaFisica> listar(){
        String sql = "SELECT * FROM empresas"
        List<PessoaFisica> retorno = new ArrayList<>()

        try {
            PreparedStatement stmt = connection.prepareStatement(sql)
            ResultSet resultado = stmt.executeQuery()
            while(resultado.next()){
                PessoaJuridica empresa = new PessoaJuridica()
                empresa.setNome(resultado.getString("nome"))
                empresa.setCnpj(resultado.getString("cnpj"))
                empresa.setEmail(resultado.getString("email"))
                empresa.setEstado(resultado.getString("pais"))
                empresa.setCep(resultado.getString("cep"))
                empresa.setDescricao(resultado.getString("descricao"))

                retorno.add(empresa)
            }

        } catch (SQLException ex){
            ex.printStackTrace()
            println("Erro na conexão!")
        }

        return retorno
    }

    public boolean inserir(Pessoa empresa){
        String sql = "INSERT INTO empresas(nome, cnpj, email, descricao," +
                "pais, cep, senha) VALUES (?,?,?,?,?,?,?)"

        empresa = empresa as PessoaJuridica

        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, empresa.nome)
            stmt.setString(2, empresa.cnpj.toString())
            stmt.setString(3, empresa.email)
            stmt.setString(4, empresa.descricao)
            stmt.setString(5, empresa.pais)
            stmt.setString(6, empresa.cep.toString())
            stmt.setString(7, "123456")

            stmt.execute()
            return true

        } catch(SQLException ex){
            ex.printStackTrace()
            println("Erro na conexão!")
            return false
        }

    }

    public boolean alterar(Pessoa empresa, String cnpj){
        String sql = "UPDATE empresas SET nome=?, cnpj=?, email=?, descricao=?, pais=?, cep=?" +
                " WHERE cnpj=?"

        empresa = empresa as PessoaJuridica

        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, empresa.nome)
            stmt.setString(2, empresa.cnpj.toString())
            stmt.setString(3, empresa.email)
            stmt.setString(4, empresa.descricao)
            stmt.setString(5, empresa.estado)
            stmt.setString(6, empresa.cep.toString())
            stmt.setString(7, empresa.cnpj.toString())

            stmt.execute()
            return true

        }catch(SQLException ex){
            ex.printStackTrace()
            println("Erro de conexão!")
            return false
        }


    }

    public void remover(String cnpj){
        String sql = "DELETE FROM empresas WHERE cnpj=?"
        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, cnpj)
            stmt.execute()

        } catch(SQLException ex){
            ex.printStackTrace()
        }

    }


}
