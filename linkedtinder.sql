CREATE TABLE competencias (
  id SERIAL NOT NULL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL
);

CREATE TABLE candidatos (
  id SERIAL NOT NULL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  sobrenome VARCHAR(45) NOT NULL,
  data_de_nascimento VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  cpf VARCHAR(45) NOT NULL,
  pais VARCHAR(45) NOT NULL,
  cep VARCHAR(45) NOT NULL,
  descricao VARCHAR(100) NOT NULL,
  senha VARCHAR(20) NOT NULL
);

CREATE TABLE empresas (
  id SERIAL NOT NULL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  cnpj VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  descricao VARCHAR(45) NOT NULL,
  pais VARCHAR(45) NOT NULL,
  cep VARCHAR(45) NOT NULL,
  senha VARCHAR(20) NOT NULL
);

CREATE TABLE vagas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  descricao VARCHAR(45) NOT NULL,
  lugar VARCHAR(45) NOT NULL,
  id_empresas INT REFERENCES empresas(id) NOT NULL
);

CREATE TABLE candidatos_competencias (
  id_candidatos INT REFERENCES candidatos(id) NOT NULL,
  id_competencias INT REFERENCES competencias(id) NOT NULL
);

CREATE TABLE vagas_competencias (
  id_vagas INT REFERENCES empresas(id) NOT NULL,
  id_competencias INT REFERENCES competencias(id) NOT NULL
);

INSERT INTO competencias(nome) VALUES ('React');
INSERT INTO competencias(nome) VALUES ('Javascript');
INSERT INTO competencias(nome) VALUES ('Java');
INSERT INTO competencias(nome) VALUES ('Groovy');
INSERT INTO competencias(nome) VALUES ('HTML/CSS');
INSERT INTO competencias(nome) VALUES ('PHP');
INSERT INTO competencias(nome) VALUES ('Angular');
INSERT INTO competencias(nome) VALUES ('PostgreeSQL');

INSERT INTO candidatos(nome, sobrenome, data_de_nascimento, email, cpf, pais, cep, descricao, senha) VALUES
('Lucas', 'Hideki', '1997-12-16', 'hideki-abe@hotmail.com', '123456789', 'Brasil', '74455050', 'Estudante de engenharia de computação', '123456');
INSERT INTO candidatos(nome, sobrenome, data_de_nascimento, email, cpf, pais, cep, descricao, senha) VALUES
('João', 'Gomes', '2000-05-14', 'joão@email.com', '123456789', 'Brasil', '12345678', 'Goiano com muita vontade de trabalhar', '123456'); 
INSERT INTO candidatos(nome, sobrenome, data_de_nascimento, email, cpf, pais, cep, descricao, senha) VALUES
('Maria', 'Silva', '2003-03-30', 'maria@email.com', '123456789', 'Brasil', '74455050', 'Estudante de engeharia de software', '123456');
INSERT INTO candidatos(nome, sobrenome, data_de_nascimento, email, cpf, pais, cep, descricao, senha) VALUES
('Ricardo', 'Alves', '1980-06-06', 'ricardo@email.com', '123456789', 'Brasil', '74455050', 'Programador Java', '123456');
INSERT INTO candidatos(nome, sobrenome, data_de_nascimento, email, cpf, pais, cep, descricao, senha) VALUES
('Luana', 'Alves', '1990-09-12', 'luana@email.com', '123456789', 'Brasil', '74455050', 'Goiana com muita vontade de trabalhar', '123456');

INSERT INTO empresas(nome, cnpj, email, descricao, pais, cep, senha) VALUES ('Empresa 1', '123456789', 'empresa1@email.com', 'Empresa buscando funcionários', 'Brasil', '74455050', '123456');
INSERT INTO empresas(nome, cnpj, email, descricao, pais, cep, senha) VALUES ('Empresa 2', '123456789', 'empresa2@email.com', 'Procura-se especialista em React', 'Brasil', '74455050', '123456');
INSERT INTO empresas(nome, cnpj, email, descricao, pais, cep, senha) VALUES ('Empresa 3', '123456789', 'empresa3@email.com', 'Procuramos dev fullstack voltado para Java','Brasil', '74455050', '123456');
INSERT INTO empresas(nome, cnpj, email, descricao, pais, cep, senha) VALUES ('Empresa 4', '123456789', 'empresa4@email.com', 'Procura-se estagiários, Salário: R$ 1000,00', 'Brasil', '74455050', '123456');
INSERT INTO empresas(nome, cnpj, email, descricao, pais, cep, senha) VALUES ('Empresa 5', '123456789', 'empresa5@email.com', 'Procuramos aprendizes', 'Brasil', '74455050', '123456');

INSERT INTO vagas(nome, descricao, lugar, id_empresas) VALUES ('Desenvolvedor backend', 'Procuramos dev fullstack voltado para Java', 'Brasil', 3); 
INSERT INTO vagas(nome, descricao, lugar, id_empresas) VALUES ('Desenvolvedor frontend', 'Procuramos dev fullstack voltado para React','Brasil', 2);
INSERT INTO vagas(nome, descricao, lugar, id_empresas) VALUES ('Desenvolvedor fullstack', 'Procuramos dev fullstack Javascript/PHP', 'Brasil', 1);
INSERT INTO vagas(nome, descricao, lugar, id_empresas) VALUES ('Desenvolvedor React', 'Procuramos dev Júnior frontend', 'Brasil', 4);
INSERT INTO vagas(nome, descricao, lugar, id_empresas) VALUES ('Desenvolvedor Angular', 'Procuramos aprendizes', 'Brasil', 5);

INSERT INTO candidatos_competencias(id_candidatos, id_competencias) valueS(1, 1);
INSERT INTO candidatos_competencias(id_candidatos, id_competencias) valueS(2, 4);
INSERT INTO candidatos_competencias(id_candidatos, id_competencias) valueS(3, 3);
INSERT INTO candidatos_competencias(id_candidatos, id_competencias) valueS(4, 7);
INSERT INTO candidatos_competencias(id_candidatos, id_competencias) valueS(5, 8);


INSERT INTO vagas_competencias(id_vagas, id_competencias) valueS(1, 1);
INSERT INTO vagas_competencias(id_vagas, id_competencias) valueS(2, 4);
INSERT INTO vagas_competencias(id_vagas, id_competencias) valueS(3, 3);
INSERT INTO vagas_competencias(id_vagas, id_competencias) valueS(4, 7);
INSERT INTO vagas_competencias(id_vagas, id_competencias) valueS(5, 8);




