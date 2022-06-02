package model.factory.pessoas

import model.dao.pessoas.JDBCPessoaJuridicaDAO
import model.dao.pessoas.PessoaDAO

class PessoaJuridicaCC extends PessoaFactory{

    @Override
    PessoaDAO createPessoa() {
        return new JDBCPessoaJuridicaDAO()
    }
}
