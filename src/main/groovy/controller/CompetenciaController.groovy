package controller

import jakarta.servlet.ServletException
import jakarta.servlet.annotation.WebServlet
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import model.competencia.Competencia
import model.dao.competencia.CompetenciaDAO
import model.factory.competencia.CompetenciaCC
import model.pessoas.PessoaFisica
import org.json.JSONObject

@WebServlet("/competencias")
class CompetenciaController extends HttpServlet{

    CompetenciaDAO compDAO = new CompetenciaCC().createCompetencia()

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET");
        resp.setHeader("Content-Type", "x-requested-with");

        List<Competencia> competencias = compDAO.listar() as List<Competencia>

        String json = "["
        competencias.each {competencia ->
            json += "{" + "\n";
            json += "\"name\": " + JSONObject.quote(competencia.getNome()) + "\n";
            json += "},";
        }
        json = json.substring(0, json.length() - 1)
        json+="]"
        resp.getOutputStream().println(json);
    }


}
