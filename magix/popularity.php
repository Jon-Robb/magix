<?php
require_once("action/PopularityAction.php");
require_once("partial/header.php");

$action = new PopularityAction();
$data = $action->execute();

?>

<div class="popularity-body">

    <div class="popularity-title">
        <h1>
            Cartes les plus populaires
        </h1>
        <form action="" method="POST" name="btn-detruire">
                    <input type="hidden" name="btn-detruire" value="true">
                    <button class="btn-lobby btn-detruire">
                        Détruire
                    </button>
                </form>
    </div>
    <div class="palmares">
        <div class="palmares-titles palmares-line">
            <h3>
                ID
            </h3>
            <h3>
                Cost
            </h3>
            <h3>
                Hp
            </h3>
            <h3>
                Attack
            </h3>
            <h3>
                Mechanics
            </h3>
            <h3>
                Times played
            </h3>
            
        </div>
        <div class="palmares-lines">
        <?php
            foreach ($data["topTen"] as $line){?>

            <div class="palmares-line">
                <?php
                    foreach ($line as $value){?>
                        <p><?= $value ?></p>
                    <?php
                        }
                    ?>
                
            </div>
            <?php
                }
            ?>
        </div>
    </div>
</div>





<?php

require_once("partial/footer.php");