package model.dao.competencia

import model.competencia.Competencia

interface CompetenciaDAO {

    public String findNameById(int id)
    public List<Competencia> listar()
    public boolean inserir(Competencia comp)
    public boolean alterar(Competencia comp, String nome)
    public void remover(String nome)

}