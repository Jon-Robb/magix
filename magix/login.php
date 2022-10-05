<?php
    require_once("action/loginAction.php");

    $action = new loginAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<h1>Connexion</h1>

    <?php
        if($data["hasConnectionError"]){?>

            <div style="color: red;">
                Nom d'usager ou mot de passe invalide
            </div>
        <?php
           } 
        ?>
    
<div class="login-form-frame">
    <form action="" method="post">
    

        <div class="form-label">
            <label for="username">Nom d'usager : </label>
        </div>
        <div class="form-input">
            <input type="text" name="username" id="username" required />
        </div>
        <div class="form-separator"></div>

        <div class="form-label">
            <label for="password">Mot de passe : </label>
        </div>
        <div class="form-input">
            <input type="password" name="pwd" id="password" required/>
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

<?php
    require_once("partial/footer.php");