<?php
    require_once("action/LobbyAction.php");

    $action = new LobbyAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

    <h1>
        Lobby
    </h1>
    <iframe style="width:700px;height:240px;" 
        src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"] ?>">
    </iframe>


<?php
    require_once("partial/footer.php");