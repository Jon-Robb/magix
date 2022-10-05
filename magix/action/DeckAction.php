<?php
    require_once("action/CommonAction.php");

    class DeckAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            
            $key = $_SESSION["key"];
            return compact("key");
        }
    }