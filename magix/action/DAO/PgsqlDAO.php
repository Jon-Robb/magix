<?php

require_once("action/DAO/Connection.php");

class PgsqlDAO
{

    public static function getCard($id)
    {

        $connection = Connection::getConnection();

        $statement = $connection->prepare("SELECT * FROM most_used_cards WHERE ? = id");
        $statement->bindParam(1, $id);

        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();

        return $statement->fetchAll();
    }

    public static function insertNewCard($id, $cost, $hp, $attack, $mechanics)
    {

        $connection = Connection::getConnection();

        $statement = $connection->prepare(
            "INSERT INTO most_used_cards
            VALUES (?,?,?,?,?,DEFAULT)"
        );
        $statement->bindParam(1, $id);
        $statement->bindParam(2, $cost);
        $statement->bindParam(3, $hp);
        $statement->bindParam(4, $attack);
        $statement->bindParam(5, $mechanics);

        $statement->execute();
    }

    public static function updateCardPlayed($id)
    {

        $connection = Connection::getConnection();

        $statement = $connection->prepare(
            "UPDATE most_used_cards
            SET nb_fois_utilise = nb_fois_utilise + 1
            WHERE id = ?"
        );

        $statement->bindParam(1, $id);

        $statement->execute();
    }

    public static function deleteAndCreateTable()
    {

        $connection = Connection::getConnection();

        $statement = $connection->prepare(
            "DROP TABLE IF EXISTS most_used_cards;
            CREATE TABLE most_used_cards(
                id SMALLINT PRIMARY KEY,
                cost SMALLINT NOT NULL,
                hp SMALLINT NOT NULL,
                attack SMALLINT NOT NULL,
                mechanics VARCHAR,
                nb_fois_utilise SMALLINT DEFAULT 1);"
        );

        $statement->execute();
    }

    public static function getTopTen(){

        $connection = Connection::getConnection();

        $statement = $connection->prepare(
            "SELECT * FROM most_used_cards
            ORDER BY nb_fois_utilise
            DESC LIMIT 10;"
        );

        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();

        return $statement->fetchAll();

    }
}
