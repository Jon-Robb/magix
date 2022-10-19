const state = () => {
    fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
 method : "POST"        // l’API (games/state)
    })
.then(response => response.json())
.then(data => {
    console.log(data); // contient les cartes/état du jeu.

    
    if (data.opponent){

        // La main de l'ennemi
        let ennemyHand = document.querySelector(".ennemy-section-cards");
        ennemyHand.innerHTML = "";
        for(let i = 0; i < data.opponent.handSize; i++){
            let carte = document.createElement("div");
            carte.classList.add("ennemy-small-card");
            ennemyHand.append(carte);
        }

        // ----- Ennemi -----
        // Le nom de l'ennemi
        let ennemyName = document.querySelector(".ennemy-name");
        ennemyName.innerHTML = "";
        ennemyName.innerHTML = data.opponent.username;

        // La photo de l'ennemi
        let ennemyPic = document.querySelector(".ennemy-pic");

        // La classe de l'ennemi
        let ennemyClass = document.querySelector(".ennemy-class");
        ennemyClass.innerHTML = "";
        ennemyClass.innerHTML = data.opponent.heroClass;

        // La vie de l'ennemi
        let ennemyLife = document.querySelector(".ennemy-life");
        ennemyLife.innerHTML = "";
        ennemyLife.innerHTML = data.opponent.hp;

        // La mana de l'ennemi
        let ennemyMana = document.querySelector(".ennemy-mana");
        ennemyMana.innerHTML = "";
        ennemyMana.innerHTML = data.opponent.mp;

        // Le nombre de cartes de l'ennemi
        let ennemyCardsCount = document.querySelector(".ennemy-card-number");
        ennemyCardsCount.innerHTML = "";
        ennemyCardsCount.innerHTML = data.opponent.remainingCardsCount;

        // ----- Joueur -----
        // Le nombre de cartes du joueur
        let playerCardsCount = document.querySelector(".player-card-number");
        playerCardsCount.innerHTML = "";
        playerCardsCount.innerHTML = data.remainingCardsCount;

        // La vie du joueur
        let playerLife = document.querySelector(".player-life");
        playerLife.innerHTML = "";
        playerLife.innerHTML = data.hp;

        // La mana du joueur
        let playerMana = document.querySelector(".player-mana");
        playerMana.innerHTML = "";
        playerMana.innerHTML = data.mp;
        
    }

    

   


    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
    
}

window.addEventListener("load", () => {
setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});
