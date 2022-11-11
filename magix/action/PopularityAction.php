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
        $topTen = PgsqlDAO::getTopTen();

        return compact("topTen");
    }

    
}
