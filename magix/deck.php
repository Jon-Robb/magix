<?php
    require_once("action/DeckAction.php");

    $action = new DeckAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<div>
<iframe src="https://magix.apps-de-cours.com/server/#/deck/votre-clé-ici">
</iframe>

</div>
<?php
    require_once("partial/footer.php");