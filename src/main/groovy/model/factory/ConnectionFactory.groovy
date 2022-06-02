package model.factory

import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException

class ConnectionFactory {

    public static Connection getConnection(){
        try {
            Class.forName("org.postgresql.Driver")
            String url = "jdbc:postgresql://localhost:5432/postgres2"
            String user = "postgres"
            String password = "postgres"
            return DriverManager.getConnection(url, user, password)

        } catch (ClassNotFoundException | SQLException ex){
            println("Erro na conexão!")
            }

    }


}
