<?php
    require_once("action/loginAction.php");

    $action = new loginAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<div class="index-body">

<form action="" method="post" autocomplete="off">
        <div class="sign-in-input-group">
            <h1>Connexion</h1>
            <div id="api-message"></div>
            <input type="text" name="username" placeholder="Nom d'usager" required class="loginBox">
            <input type="password" name="pwd" placeholder="Mot de passe" required class="passwordBox">
            <input type="submit" name="" value="Connexion" class="connexionBox">

        </div>
    </form>

</div>

    



<!-- <h1>Connexion</h1>

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
    </form>
</div> -->


<?php
        if($data["hasConnectionError"]){?>

            <div style="color: red;">
                Nom d'usager ou mot de passe invalide
            </div>
        <?php
           } 
        ?>

<?php
    require_once("partial/footer.php");