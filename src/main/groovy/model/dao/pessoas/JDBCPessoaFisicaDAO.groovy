package model.dao.pessoas

import model.factory.ConnectionFactory
import model.pessoas.Pessoa
import model.pessoas.PessoaFisica

import java.sql.Connection
import java.sql.PreparedStatement
import java.sql.ResultSet
import java.sql.SQLException

class JDBCPessoaFisicaDAO implements PessoaDAO{

    private Connection connection

    public JDBCPessoaFisicaDAO(){
        connection = ConnectionFactory.getConnection()

    }

    public List<PessoaFisica> listar(){
        String sql = "SELECT * FROM candidatos "
        List<PessoaFisica> retorno = new ArrayList<>()

        try {
            PreparedStatement stmt = connection.prepareStatement(sql)
            ResultSet resultado = stmt.executeQuery()
            while(resultado.next()){
                PessoaFisica candidato = new PessoaFisica()
                candidato.setNome(resultado.getString("nome") + " " + resultado.getString("sobrenome"))
                candidato.setCpf(resultado.getString("cpf"))
                candidato.setEmail(resultado.getString("email"))
                candidato.setCpf(resultado.getString("cpf"))
                candidato.setEstado(resultado.getString("pais"))
                candidato.setCep(resultado.getString("cep"))
                candidato.setDescricao(resultado.getString("descricao"))

                String dataNasc = resultado.getString("data_de_nascimento")
                String regex = /-/
                def anoNasc = dataNasc.split(regex)

                Calendar data = Calendar.getInstance()
                def anoAtual = data.YEAR
                String idade = anoAtual - anoNasc[0].toInteger()

                candidato.setIdade(idade)
                retorno.add(candidato)
            }

        } catch (SQLException ex){
            ex.printStackTrace()
            println("Erro na conexão!")
        }

        return retorno
    }

    public boolean inserir(Pessoa pessoa){
        String sql = "INSERT INTO candidatos(nome, sobrenome,  data_de_nascimento, email, cpf," +
                " pais, cep,  descricao, senha) VALUES (?,?,?,?,?,?,?,?,?)"
        pessoa = pessoa as PessoaFisica

        println(pessoa)
        def nomeCompleto = pessoa.getNome()
        def split = nomeCompleto.trim().split("[,.!?'@_] *| +")
        String primeiroNome = split[0]
        String sobrenome = split[1]

        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, primeiroNome)
            stmt.setString(2, sobrenome)
            stmt.setString(3, pessoa.idade.toString())
            stmt.setString(4, pessoa.email)
            stmt.setString(5, pessoa.cpf.toString())
            stmt.setString(6, pessoa.estado)
            stmt.setString(7, pessoa.cep.toString())
            stmt.setString(8, pessoa.descricao)
            stmt.setString(9, "123456")
            stmt.execute()
            return true

        } catch(SQLException ex){
            ex.printStackTrace()
            println("Erro na conexão!")
            return false
        }

    }

    public boolean alterar(Pessoa pessoa, String cpf){
        String sql = "UPDATE candidatos SET nome=?, sobrenome=?, data_de_nascimento=?, email=?, " +
                "cpf=?, pais=?, cep=?, descricao=? WHERE cpf=?"
        pessoa = pessoa as PessoaFisica

        def nomeCompleto = pessoa.getNome()
        def split = nomeCompleto.trim().split("[,.!?'@_] *| +")
        String primeiroNome = split[0]
        String sobrenome = split[1]

        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(9, pessoa.cpf.toString())
            stmt.setString(1, primeiroNome)
            stmt.setString(2, sobrenome)
            stmt.setString(3, pessoa.idade.toString())
            stmt.setString(4, pessoa.email)
            stmt.setString(5, pessoa.cpf.toString())
            stmt.setString(6, pessoa.estado)
            stmt.setString(7, pessoa.cep.toString())
            stmt.setString(8, pessoa.descricao)


            stmt.execute()
            return true

        }catch(SQLException ex){
            ex.printStackTrace()
            println("Erro de conexão!")
            return false
        }


    }

    public void remover(String cpf){
        String sql = "DELETE FROM candidatos WHERE cpf=?"
        try{
            PreparedStatement stmt = connection.prepareStatement(sql)
            stmt.setString(1, cpf)
            stmt.execute()

        } catch(SQLException ex){
            ex.printStackTrace()
        }



    }

}
