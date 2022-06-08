package controller

import jakarta.servlet.RequestDispatcher
import jakarta.servlet.ServletException
import model.dao.pessoas.JDBCPessoaFisicaDAO
import model.dao.pessoas.PessoaDAO
import model.factory.pessoas.PessoaFisicaCC
import model.pessoas.Pessoa
import model.pessoas.PessoaFisica

import java.io.IOException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;


@WebServlet("/candidatos")
class PessoaFisicaController extends HttpServlet{

    PessoaDAO candidatoDAO = new PessoaFisicaCC().createPessoa()

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "*");
        resp.setHeader("Content-Type", "x-requested-with");

        List<PessoaFisica> candidatos = candidatoDAO.listar() as List<PessoaFisica>

            String json = "["
            candidatos.each {candidato ->
            json += "{" + "\n";
            json += "\"name\": " + JSONObject.quote(candidato.getNome()) + ",\n";
            json += "\"email\": " + JSONObject.quote(candidato.getEmail()) + ",\n";
            json += "\"cpf\": " + JSONObject.quote(candidato.getCpf().toString()) + ",\n";
            json += "\"idade\": " + JSONObject.quote(candidato.getIdade().toString()) + ",\n";
            json += "\"estado\": " + JSONObject.quote(candidato.getEstado()) + ",\n";
            json += "\"cep\": " + JSONObject.quote(candidato.getCep().toString()) + ",\n";
            json += "\"descricao\": " + JSONObject.quote(candidato.getDescricao()) + "\n";
            json += "},";
        }
            json = json.substring(0, json.length() - 1)
            json+="]"
        resp.getOutputStream().println(json);
    }


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "*");
        resp.setHeader("Content-Type", "x-requested-with");


        println "Cadastrando novo candidato!"
        String nome = req.getParameter("name")
        String email = req.getParameter("email")
        String cpf = req.getParameter("cpf")
        String idade = req.getParameter("idade")
        String pais = req.getParameter("pais")
        String cep = req.getParameter("cep")
        String descricao = req.getParameter("descricao")
        String senha = req.getParameter("senha")

        //(String nome, String email, cpf, int idade, String estado, cep, String descricao)
        Pessoa candidato = new PessoaFisica(nome, email, cpf, idade, pais, cep, descricao, senha)

        println candidato

        candidatoDAO.inserir(candidato)

    }

}
