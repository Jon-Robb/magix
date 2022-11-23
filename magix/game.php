<?php
require_once("action/GameAction.php");

$action = new GameAction();
$data = $action->execute();

require_once("partial/header.php");
?>

<script defer src="js/game.js"></script>

<div class="game-body">

    <div class="game-chatbox">
    <iframe onload="applyStyles(this)" style="width:700px;height:240px;" 
        src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"] ?>">
    </iframe>

    </div>

    <div class="dialog-box">
         
    </div>
    <!-- section de l'adversaire -->
    <div class="ennemy-section">
        <div class="ennemy-section-cards"></div>
        <div class="ennemy-name"></div>
        <div class="ennemy-pic-box">
            <div class="ennemy-pic">
                <!-- <img src="./img/classes-img/warrior-atlas-icon.png" alt=""> -->
            </div>
        </div>

        <div class="ennemy-class">
            Warrior
        </div>
        <div class="ennemy-components">
            <div class="ennemy-life"></div>
            <div class="ennemy-mana"></div>
            <div class="ennemy-card-number"></div>
        </div>
    </div>

    <!-- Section champs de bataille -->
    <div class="battlefield-section">
        <div class="battlefield-ennemy-cards-box">


        </div>
        <div class="battlefield-player-cards-box">



        </div>
        <div class="battlefield-timer">
            <div class="timer-box">
                <div class="countdown"></div>
                <div class="hourglass">
                    <img src="../magix/img/hourglasses/yellow/frame_01.png" alt="sablier">
                </div>
            </div>
        </div>
    </div>

    <!-- Section cartes du joueur -->
    <div class="player-section">
        <div class="player-components">
            <div class="player-life"></div>
            <div class="player-mana"></div>
            <div class="player-card-number"></div>
        </div>

        <div class="player-cards"> </div>


        <div class="player-btn-section">
            <div class="player-btn-heropower">

            </div>
            <div class="player-btn-endturn">

            </div>
            <div class="player-btn-chat">

            </div>
            <div class="player-btn-surrender">

            </div>

        </div>
    </div>
</div>

<?php
require_once("partial/footer.php");
