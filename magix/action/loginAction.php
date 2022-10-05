<?php
    require_once("action/CommonAction.php");

    class LoginAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            
            $hasConnectionError = false;
            
            if(!empty($_POST["username"])){
                $data = [];
                $data["username"] = $_POST["username"];
                $data["password"] = $_POST["pwd"];
                $_SESSION["user"] = $_POST["username"];
                $result = parent::callAPI("signin", $data);

                if ($result == "INVALID_USERNAME_PASSWORD") {
                    $hasConnectionError = true;
                }
                else {
                    var_dump($result);exit;
                    $key = $result->key;
                }

            }
            
            return compact("hasConnectionError", "key");


        
        }
    }