# zghero-api-noframeworks
Projeto do programa de aceleração da ZG Soluções, integrando um backend e frontend sem a utilização de frameworks

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
