package model.vaga

class Vaga {

    private String nome
    private String desc
    private String lugar
    private int id_empresas
    private List competencias

    public Vaga(){
    }

    public Vaga(String nome, String descricao, String lugar, int id_empresas){
        this.nome = nome
        this.desc = descricao
        this.lugar = lugar
        this.id_empresas = id_empresas
        this.competencias = competencias
    }

    String getNome() {
        return nome
    }

    void setNome(String nome) {
        this.nome = nome
    }

    String getDesc() {
        return desc
    }

    void setDesc(String desc) {
        this.desc = desc
    }

    String getLugar() {
        return lugar
    }

    void setLugar(String lugar) {
        this.lugar = lugar
    }

    int getId_empresas() {
        return id_empresas
    }

    void setId_empresas(int id_empresas) {
        this.id_empresas = id_empresas
    }

    List getCompetencias() {
        return competencias
    }

    void setCompetencias(List competencias) {
        this.competencias = competencias
    }

    @Override
    String toString() {
        return "Vaga " + "\nNome: " + this.nome + "\nDescrição: " + this.desc
        + "\nLugar: " + this.lugar + "\n" + this.competencias + "\n"
    }
}
