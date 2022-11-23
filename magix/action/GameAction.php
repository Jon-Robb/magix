<?php
require_once("action/CommonAction.php");

class GameAction extends CommonAction
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
        return compact("key");
    }
}
