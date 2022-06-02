package model.factory.pessoas

import model.dao.pessoas.PessoaDAO

abstract class PessoaFactory {

    public abstract PessoaDAO createPessoa()

}
