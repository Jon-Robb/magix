<?php
require_once("action/CommonAction.php");
require_once("action/DAO/PgsqlDAO.php");

class PopularityAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_MEMBER);
    }

    protected function executeAction()
    {

        if (!empty($_POST["btn-detruire"])) {
            PgsqlDAO::deleteTable();
            PgsqlDAO::createTable();
        }

        $topTen = PgsqlDAO::getTopTen();

        $sum = PgsqlDAO::getSum();
       

    

        return compact("topTen", "sum");
    }

    
}
