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
            <div class="button-section-firstCol">
                <button class="btn-jouer"> Jouer solo </button>
                <button class="btn-pratique"> Pratique solo </button>
                <button class="btn-historique"> Historique </button>
                <button class="btn-quitter"> Quitter </button>
            </div>                   
        </div>
        <div class="chat-section">
            <iframe style="width:700px;height:240px;" onload="applyStyles(this)" 
                    src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"] ?>">
            </iframe>
        </div>
        <div class="button-section">
            <div class="button-section-secondCol">
                <button class="btn-coop"> Jouer Coop </button>
                <input type="text" placeholder="Clé privée (optionnel)" name="input-coop-jouer">
                <button class="btn-pratique-coop"> Pratique Coop</button>
                <input type="text" placeholder="Clé privée (optionnel)" name="input-coop-pratique">
                <button class="btn-observer"> Observer </button>
                <input type="text" placeholder="Nom du joueur" name="input-nom-joueur">
            </div>
        </div>
    </div>
   

<?php
    require_once("partial/footer.php");