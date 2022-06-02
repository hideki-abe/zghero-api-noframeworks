package model.dao.vaga

import model.vaga.Vaga

interface VagaDAO {

    public abstract List<Vaga> listar()
    public abstract boolean inserir(Vaga vaga)
    public abstract boolean alterar(Vaga vaga, String nome)
    public abstract void remover(String nome)

}