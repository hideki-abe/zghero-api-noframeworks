package model.dao.pessoas

import model.pessoas.Pessoa

interface PessoaDAO {

    public abstract List<Pessoa> listar()
    public abstract boolean inserir(Pessoa pessoa)
    public abstract boolean alterar(Pessoa pessoa, String cpf)
    public abstract void remover(String cpf)

}