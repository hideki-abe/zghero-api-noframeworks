package controller

import jakarta.servlet.ServletException
import jakarta.servlet.annotation.WebServlet
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import model.dao.pessoas.PessoaDAO
import model.factory.pessoas.PessoaJuridicaCC
import model.pessoas.Pessoa
import model.pessoas.PessoaFisica
import model.pessoas.PessoaJuridica
import org.json.JSONObject

@WebServlet("/empresas")
class PessoaJuridicaController extends HttpServlet{

    PessoaDAO empresaDAO = new PessoaJuridicaCC().createPessoa()

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET");
        resp.setHeader("Content-Type", "x-requested-with");

        List<PessoaJuridica> empresas = empresaDAO.listar() as List<PessoaJuridica>

        String json = "["
        empresas.each {empresa ->
            json += "{" + "\n";
            json += "\"name\": " + JSONObject.quote(empresa.getNome()) + ",\n";
            json += "\"email\": " + JSONObject.quote(empresa.getEmail()) + ",\n";
            json += "\"cnpj\": " + JSONObject.quote(empresa.getCnpj().toString()) + ",\n";
            json += "\"pais\": " + JSONObject.quote(empresa.getPais()) + ",\n";
            //json += "\"estado\": " + JSONObject.quote(empresa.getEstado()) + ",\n";
            json += "\"cep\": " + JSONObject.quote(empresa.getCep().toString()) + ",\n";
            json += "\"descricao\": " + JSONObject.quote(empresa.getDescricao()) + "\n";
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
        String cnpj = req.getParameter("cnpj")
        String pais = req.getParameter("pais")
        String estado = req.getParameter("estado")
        String cep = req.getParameter("cep")
        String descricao = req.getParameter("descricao")
        String senha = req.getParameter("senha")

        //(String nome, String email, cpf, int idade, String estado, cep, String descricao)
        Pessoa empresa = new PessoaJuridica(nome, email, cnpj, pais, estado, cep, descricao, senha)

        println empresa

        empresaDAO.inserir(empresa)

    }


}
