package Util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbUtil {

    private static Connection connection = null;

    public static Connection getConnection() {
        if (connection != null) {
            return connection;
        } else {
            try {
                
                String driver = "com.mysql.jdbc.Driver";
                String url = "jdbc:mysql://localhost:3306/rebi_tc";
                //        + "?autoReconnect=true&useSSL=false&useJDBCCompliantTimezoneShift=true&"
                //        + "useLegacyDatetimeCode=false&serverTimezone=UTC";
                String user = "root";
                String password = "";

                System.out.print(user);
                
                Class.forName(driver);
                connection = DriverManager.getConnection(url, user, password);
                
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return connection;
        }
    }

}