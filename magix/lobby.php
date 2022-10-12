<?php
    require_once("action/LobbyAction.php");

    $action = new LobbyAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

    <div class="lobby-body">
        
        <div class="user-greetings">
            <p> Bonjour Mech-Guerrier <?= $data["username"] ?> </p>
        </div>
        <div class="buttons-section">
            <div class="button-section-firstRow">
                <button class="btn-jouer"> Jouer </button>
                <button class="btn-pratique"> Pratique </button>
            </div>
        </div>
    </div>
    <iframe style="width:700px;height:240px;" onload="applyStyles(this)" 
        src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"] ?>">
    </iframe>


<?php
    require_once("partial/footer.php");