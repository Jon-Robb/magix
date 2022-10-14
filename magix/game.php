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
            <div class="ennemy-small-card"></div>
            <div class="ennemy-small-card"></div>
            <div class="ennemy-small-card"></div>
            <div class="ennemy-small-card"></div>
            <div class="ennemy-small-card"></div>
            <div class="ennemy-small-card"></div>
            <div class="ennemy-small-card"></div>
            <div class="ennemy-small-card"></div>


            
        </div>
        <div class="ennemy-name">
            Atlas Prime
        </div>
        <div class="ennemy-pic-box">
        <div class="ennemy-pic">
            <!-- <img src="./img/classes-img/warrior-atlas-icon.png" alt=""> -->
        </div>
        </div>
        
        <div class="ennemy-class">
            Warrior
        </div>
        <div class="ennemy-components">
            <!-- Place holders, a remplacer avec les variables des objets json -->
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
        <div class="battlefield-ennemy-cards-box">

            
                <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            <!-- <img src="../magix/img/Gamma_Cannon.webp" alt=""> -->
                            <p> 5</p> 
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
                <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
           
                
                
        </div>
        <div class="battlefield-player-cards-box">
        
        <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
                <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
                <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>


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
        
            <div class="player-life">
                20
            </div>
            <div class="player-mana">
                1
            </div>
     
            <div class="player-card-number">
                30
            </div>
        </div>


        <div class="player-cards">
        
        <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
                <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
                <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
                <div class="battlefield-card"> 
                    <div class="card-pic">
                        <!-- <img src="../magix/img/tank-thunderbolt.jpg" alt=""> -->
                        <div class="card-top">
                            <div class="card-mana">
                                <p>4</p>
                                <img src="../magix//img/health+mana/PNG/gaz.png" alt="">
                            </div>
                            <div class="card-icon">
                                <img src="../magix/img/protection.png" alt="">
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        Taunt
                    </div>
                    <div class="card-stats">
                        <div class="card-attack">
                            5
                        </div>
                        <div class="card-health">
                            2
                        </div>
                    </div>
                </div>
        
        </div>


        <div class="player-btn-section">
            <div class="player-btn-heropower">
                
            </div>
            <div class="player-btn-endturn">

            </div>
            <div class="player-btn-chat">

            </div>
            
        </div>
    </div>
</div>

<?php
    require_once("partial/footer.php");