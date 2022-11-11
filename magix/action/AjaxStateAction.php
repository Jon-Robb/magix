<?php
    require_once("action/CommonAction.php");

     require_once("action/DAO/PgsqlDAO.php");

    class AjaxStateAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            
            $data = [];
            $data["key"] = $_SESSION["key"];

            if(!empty($_POST["id"])){
                if(!empty(PgsqlDAO::getCard($_POST["id"]))){
                    PgsqlDAO::updateCardPlayed($_POST["id"]);       
                }
                else{
                    PgsqlDAO::insertNewCard($_POST["id"], $_POST["cost"], $_POST["hp"], $_POST["attack"], $_POST["mechanics"]);
                }
            }
            

            if(!empty($_POST["HERO_POWER"])){
                $data["type"] = $_POST["HERO_POWER"];
                $result = parent::callAPI("games/action", $data);
            }
            else if(!empty($_POST["END_TURN"])){
                $data["type"] = $_POST["END_TURN"];
                $result = parent::callAPI("games/action", $data);
            }
            else if(!empty($_POST["SURRENDER"])){
                $data["type"] = $_POST["SURRENDER"];
                $result = parent::callAPI("games/action", $data);
            }
            else if(!empty($_POST["PLAY"])){
                $data["type"] = $_POST["PLAY"];
                $data["uid"] = $_POST["UID"];
                $result = parent::callAPI("games/action", $data);
            }
            else if (!empty($_POST["ATTACK"])){
                $data["type"] = $_POST["ATTACK"];
                $data["uid"] = $_POST["bf-UID"];
                $data["targetuid"] = $_POST["targetuid"];
                $result = parent::callAPI("games/action", $data);
            }
            else{
                $result = parent::callAPI("games/state", $data);
            }

            return compact("result");
        }
    }