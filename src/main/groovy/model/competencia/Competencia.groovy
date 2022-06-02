package model.competencia

class Competencia {

    private String nome

    public Competencia(){
    }

    public Competencia(String nome){
        this.nome = nome
    }

    String getNome() {
        return nome
    }

    void setNome(String nome) {
        this.nome = nome
    }

    @Override
    String toString() {
        return this.nome
    }
}
