# zghero-api-noframeworks
Projeto do programa de aceleração da ZG Soluções, integrando um backend e frontend sem a utilização de frameworks

## (K2-T6): REST/RESTFUL API
A etapa consistia em fazer uma API RESTful sem o uso de frameworks. A tentativa não teve muito sucesso, já que alguns requisitos REST não foram seguidos, mas uma comunicação entre Backend e Frontend foi estabelecida. Além disso, ficaram faltando algumas conexões entre as páginas, que seriam o cadastro de competência do usuário (atualmente é feito somente o GET para mostrar elas), e também a conexão da vaga cadastrada com a respectiva empresa (atualmente o cadastro é feito apenas para a empresa de ID = 1). Não pesquisei como fazer isso ainda, mas uma alternativa seria armazenar no localstorage o CNPJ da empresa para fazer um GET para pegar o ID da empresa e conectar a empresa e a vaga.

## Executando o projeto
  No Intellij configure o Tomcat para que o endpoint da api seja http://localhost:8080/zghero. Os seguintes endpoints foram utilizados: </br>
  - /candidatos</br>
  - /empresas</br>
  - /competencias</br>
  
  Configurações necessárias: </br>
  - É necessário ter a extensão do live-server instalada no Visual Studio.</br>
  - É necessário que a IDE utilizada seja o Intellij IDEA.</br>
  - A conexão do PostgreeSQL precisa ser: </br>
    - String url = "jdbc:postgresql://localhost:5432/postgres2"</br>
    - String user = "postgres"</br>
    - String password = "postgres"</br>
 
  O endpoint do Tomcat precisa ser: http://localhost:8080/zghero, para que a requisição no Frontend seja aplicável.
Para executar o projeto, realize o seguinte comando no terminal da pasta "Frontend": **no-cors-proxy -p 3000 -t http://localhost:8080**. 
A seguir, dê o seguinte comando para iniciar o Frontend: **npm start**. Se necessário, finalize o processo do live-server com os comandos: 
  - netstat -tulpn | grep 3000
  - kill (numero da porta utilizada)

Após isso, entre na página inicial, a home.html, e a aplicação estará pronta para uso.
