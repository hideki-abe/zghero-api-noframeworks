package controller

import jakarta.servlet.ServletException
import jakarta.servlet.annotation.WebServlet
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import model.dao.vaga.VagaDAO
import model.factory.vaga.VagaCC
import model.vaga.Vaga

@WebServlet("/vagas")
class VagaController extends  HttpServlet{

    VagaDAO vagaDAO = new VagaCC().createVagas()

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "*");
        resp.setHeader("Content-Type", "x-requested-with");


        println "Cadastrando nova competência!"
        String nome = req.getParameter("name")
        String lugar = req.getParameter("lugar")
        String descricao = req.getParameter("descricao")

        Vaga vaga = new Vaga(nome, lugar, descricao, 1)

        println vaga

        vagaDAO.inserir(vaga)

    }

}
