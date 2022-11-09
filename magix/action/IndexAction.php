<?php
require_once("action/CommonAction.php");

class IndexAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction()
    {

        $hasConnectionError = false;

        if (!empty($_POST["username"])) {
            $data = [];
            $data["username"] = $_POST["username"];
            $data["password"] = $_POST["pwd"];
            $_SESSION["username"] = $_POST["username"];
            $result = parent::callAPI("signin", $data);

            if ($result == "INVALID_USERNAME_PASSWORD") {
                $hasConnectionError = true;
            } else {
                $_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
                $key = $result->key;
                $_SESSION["key"] = $key;
                header("location:lobby.php");
            }
        }

        return compact("hasConnectionError");
    }
}
