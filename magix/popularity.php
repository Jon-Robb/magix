<?php
require_once("action/PopularityAction.php");

$action = new PopularityAction();
$data = $action->execute();

require_once("partial/header.php");
?>

<h1>
    Popularity
</h1>

<div>
    <?php
    foreach ($data["topTen"] as $line) {
        foreach ($line as $value) { ?>
            <div>
                <?= $value ?>
            </div>

    <?php
        }
    }
    ?>



</div>

<?php
require_once("partial/footer.php");
