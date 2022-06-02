package model.factory.pessoas

import model.dao.pessoas.JDBCPessoaFisicaDAO
import model.dao.pessoas.PessoaDAO

class PessoaFisicaCC extends PessoaFactory{

    @Override
    PessoaDAO createPessoa() {
        return new JDBCPessoaFisicaDAO()
    }
}
