<?php
    require_once("action/CommonAction.php");

    class AjaxStateAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            
            $data = [];
            $data["key"] = $_SESSION["key"];

            

            if(!empty($_POST["HERO_POWER"])){
                $data["type"] = $_POST["HERO_POWER"];
                $result = parent::callAPI("games/action", $data);
            }
            else if(!empty($_POST["END_TURN"])){
                $data["type"] = $_POST["END_TURN"];
                $result = parent::callAPI("games/action", $data);
            }
            else{
                $result = parent::callAPI("games/state", $data);
            }

            return compact("result");
        }
    }