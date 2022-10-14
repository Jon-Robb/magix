<?php
    require_once("action/GameAction.php");

    $action = new GameAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<div class="game-body">
    <!-- section de l'adversaire -->
    <div class="ennemy-section">
        <div class="ennemy-section-cards">

        </div>
        <div class="ennemy-name">

        </div>
        <div class="ennemy-pic">

        </div>
        <div class="ennemy-class">

        </div>
        <div class="ennemy-components">
            <div class="ennemy-life">
                20
            </div>
            <div class="ennemy-mana">
                1
            </div>
            <div class="ennemy-card-number">
                30
            </div>

        </div>
    </div>

    <!-- Section champs de bataille -->
    <div class="battlefield-section">
        <div class="battlefield-ennemy-cards">

        </div>
        <div class="battlefield-player-cards">

        </div>
        <div class="battlefield-timer">
            <div class="timer-box">
                <div class="countdown">
                    <!-- place holder doit remplacer par variable de temps -->
                    50
                </div>
                <div class="hourglass">
                    <img src="../magix/img/hourglasses/yellow/frame_01.png" alt="sablier">           
                </div> 
            </div>
        </div>
    </div>

    <!-- Section cartes du joueur -->
    <div class="player-section">
        <div class="player-components">

        </div>
        <div class="player-cards">

        </div>
        <div class="player-btn-section">

        </div>
    </div>
</div>

<?php
    require_once("partial/footer.php");