<?php
    require_once("action/PopularityAction.php");

    $action = new PopularityAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

    <h1>
        Popularity
    </h1>

<?php
    require_once("partial/footer.php");