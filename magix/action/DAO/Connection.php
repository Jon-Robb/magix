<?php
    require_once("action/constants.php");
    
    class Connection {
        // on créé une variable static en dehors de notre if, pour ne pas créer plusieurs connections consécutives à la même base de données.
        private static $connection;

        public static function getConnection() {
            // Si la variable $connection est vide, alors on établit une connection en se servant des constantes que nous avons créés 
            // dans le fichier constants.php
            if (empty(Connection::$connection)) {
                Connection::$connection = new PDO(DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
                Connection::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                Connection::$connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            }

            // On retourne la connection, pour y avoir acces lorsqu'on appelera la fonction getConnection()
            return Connection::$connection;
        }
    }