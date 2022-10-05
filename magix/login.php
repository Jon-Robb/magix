<?php
    require_once("action/loginAction.php");

    $action = new loginAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magix</title>
</head>

<body>
<h1>Connexion</h1>

<div class="login-form-frame">
    <form action="login.php" method="post">
    

        <div class="form-label">
            <label for="username">Nom d'usager : </label>
        </div>
        <div class="form-input">
            <input type="text" name="username" id="username" />
        </div>
        <div class="form-separator"></div>

        <div class="form-label">
            <label for="password">Mot de passe : </label>
        </div>
        <div class="form-input">
            <input type="password" name="pwd" id="password" />
        </div>
        <div class="form-separator"></div>

        <div class="form-label">
            &nbsp;
        </div>
        <div class="form-input">
            <button type="submit">Connexion</button>
        </div>
        <div class="form-separator"></div>
        <a href="lobby.php">Lobby</a>
        <a href="popularity.php">Popularity</a>
    </form>
</div>
</body>
</html>

<?php
    require_once("partial/footer.php");