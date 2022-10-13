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
        <div class="menu-section">
            <div class="button-section">
                <div class="button-section-firstCol">
                    <button class="btn btn-jouer"><span><a href="game.php">Jouer solo</a></span></button>
                    <button class="btn btn-pratique"> Pratique solo </button>
                    <button class="btn btn-historique"> Historique </button>
                    <button class="btn btn-quitter"> Quitter </button>
                </div>                   
            </div>
            <!-- style="width:700px;height:240px;" -->
            <div class="chat-section">
                <iframe  onload="applyStyles(this)" 
                        src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"] ?>">
                </iframe>
            </div>
            <div class="button-section">
                <form action="" method="POST" name="form-section">
                    <div class="button-section-secondCol">
                        <div class="input-section">
                            <button class="btn btn-coop"> Jouer Coop </button>
                            <input type="text" placeholder="Clé privée (optionnel)" name="input-coop-jouer">
                        </div>
                        <div class="input-section">
                            <button class="btn btn-pratique-coop"> Pratique Coop</button>
                            <input type="text" placeholder="Clé privée (optionnel)" name="input-coop-pratique">
                        </div>
                        <div class="input-section">
                            <button class="btn btn-observer"> Observer </button>
                            <input type="text" placeholder="Nom du joueur" name="input-nom-joueur">
                        </div                                       
                    </div>
                </form>
            </div>
        </div>
    </div>
   

<?php
    require_once("partial/footer.php");