<?php
require_once("action/CommonAction.php");

class LobbyAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_MEMBER);
    }

    protected function executeAction()
    {

        $key = $_SESSION["key"];
        $data = [];
        $data["key"] = $key;


        if (!empty($_POST["btn-play"])) {
            $data["type"] = "PVP";
            $results = parent::callAPI("games/auto-match", $data);
            if ($results == "JOINED_PVP") {
                header("location:game.php");
            }
        }

        if (!empty($_POST["btn-pratique"])) {
            $data["type"] = "TRAINING";
            $results = parent::callAPI("games/auto-match", $data);
            if ($results == "JOINED_TRAINING") {
                header("location:game.php");
            }
        }

        if (!empty($_POST["btn-quitter"])){
            parent::callAPI("signout", $data);
            header("location:index.php");
            session_unset();
            session_destroy();
            session_start();
        }

        if (!empty($_POST["btn-historique"])){
            header("location:popularity.php");
        }


        return compact("key");
    }
}
