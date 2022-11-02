const state = () => {
    fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
        method: "POST"        // l’API (games/state)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // contient les cartes/état du jeu.


            if (data.opponent) {

                // La main de l'ennemi
                let ennemyHand = document.querySelector(".ennemy-section-cards");
                ennemyHand.innerHTML = "";
                for (let i = 0; i < data.opponent.handSize; i++) {
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

                // La main du joueur
                let playerCards = document.querySelector(".player-cards");
                playerCards.innerHTML = "";
                for (let i = 0; i < data.hand.length; i++) {
                    // Creation de toute l'arborescence de la carte 
                    let battlefieldCard = document.createElement("div");
                    battlefieldCard.classList.add("battlefield-card");
                    battlefieldCard.classList.add("player-card");
                    let cardPic = document.createElement("div");
                    cardPic.classList.add("card-pic");
                    let cardTop = document.createElement("div");
                    cardTop.classList.add("card-top");
                    let cardMana = document.createElement("div");
                    cardMana.classList.add("card-mana");
                    let manaImg = document.createElement("img");
                    manaImg.src = "../magix//img/health+mana/PNG/gaz.png";
                    cardMana.append(manaImg);
                    let manaCost = document.createElement("p");
                    manaCost.classList.add("mana-cost");

                    // Ajout du mana cost de la carte 
                    manaCost.innerHTML = data.hand[i].cost;
                    let cardIcon = document.createElement("div");
                    cardIcon.classList.add("card-icon");

                    // si la carte a une mécanique spéciale, on ajoute l'icone appropriée
                    if (data.hand[i].mechanics == "Taunt") {

                        let icon = document.createElement("img");
                        icon.src = "../magix/img/protection.png";
                        cardIcon.append(icon);
                    }

                    let cardInfo = document.createElement("div");
                    cardInfo.classList.add("card-infos");
                    cardInfo.innerHTML = data.hand[i].mechanics;
                    let cardStats = document.createElement("div");
                    cardStats.classList.add("card-stats");
                    let cardAttack = document.createElement("div");
                    cardAttack.classList.add("card-attack");
                    cardAttack.innerHTML = data.hand[i].atk;
                    let cardHealth = document.createElement("div");
                    cardHealth.classList.add("card-health");
                    cardHealth.innerHTML = data.hand[i].hp;

                    cardStats.append(cardAttack);
                    cardStats.append(cardHealth);
                    cardMana.append(manaCost);
                    cardTop.append(cardMana);
                    cardTop.append(cardIcon);
                    cardPic.append(cardTop);
                    battlefieldCard.append(cardPic);
                    battlefieldCard.append(cardInfo);
                    battlefieldCard.append(cardStats);
                    playerCards.append(battlefieldCard);

                }




                // le champ de bataille
                // cartes de l'ennemi
                let BFEnnemycards = document.querySelector(".battlefield-ennemy-cards-box");
                BFEnnemycards.innerHTML = "";
                for (let i = 0; i < data.opponent.board.length; i++) {
                    // Creation de toute l'arborescence de la carte 
                    let battlefieldCard = document.createElement("div");
                    battlefieldCard.classList.add("battlefield-card");
                    let cardPic = document.createElement("div");
                    cardPic.classList.add("card-pic");
                    let cardTop = document.createElement("div");
                    cardTop.classList.add("card-top");
                    let cardMana = document.createElement("div");
                    cardMana.classList.add("card-mana");
                    let manaImg = document.createElement("img");
                    manaImg.src = "../magix//img/health+mana/PNG/gaz.png";
                    cardMana.append(manaImg);
                    let manaCost = document.createElement("p");
                    manaCost.classList.add("mana-cost");

                    // Ajout du mana cost de la carte 
                    manaCost.innerHTML = data.opponent.board[i].cost;
                    let cardIcon = document.createElement("div");
                    cardIcon.classList.add("card-icon");

                    // si la carte a une mécanique spéciale, on ajoute l'icone appropriée
                    if (data.opponent.board[i].mechanics == "Taunt") {

                        let icon = document.createElement("img");
                        icon.src = "../magix/img/protection.png";
                        cardIcon.append(icon);
                    }

                    let cardInfo = document.createElement("div");
                    cardInfo.classList.add("card-infos");
                    cardInfo.innerHTML = data.opponent.board[i].mechanics;
                    let cardStats = document.createElement("div");
                    cardStats.classList.add("card-stats");
                    let cardAttack = document.createElement("div");
                    cardAttack.classList.add("card-attack");
                    cardAttack.innerHTML = data.opponent.board[i].atk;
                    let cardHealth = document.createElement("div");
                    cardHealth.classList.add("card-health");
                    cardHealth.innerHTML = data.opponent.board[i].hp;

                    cardStats.append(cardAttack);
                    cardStats.append(cardHealth);
                    cardMana.append(manaCost);
                    cardTop.append(cardMana);
                    cardTop.append(cardIcon);
                    cardPic.append(cardTop);
                    battlefieldCard.append(cardPic);
                    battlefieldCard.append(cardInfo);
                    battlefieldCard.append(cardStats);
                    BFEnnemycards.append(battlefieldCard);

                }

                // Cartes du joueur sur le champ de bataille
                let BFPlayerCards = document.querySelector(".battlefield-player-cards-box");
                BFPlayerCards.innerHTML = "";
                for (let i = 0; i < data.board.length; i++) {
                    // Creation de toute l'arborescence de la carte 
                    let battlefieldCard = document.createElement("div");
                    battlefieldCard.classList.add("battlefield-card");
                    let cardPic = document.createElement("div");
                    cardPic.classList.add("card-pic");
                    let cardTop = document.createElement("div");
                    cardTop.classList.add("card-top");
                    let cardMana = document.createElement("div");
                    cardMana.classList.add("card-mana");
                    let manaImg = document.createElement("img");
                    manaImg.src = "../magix//img/health+mana/PNG/gaz.png";
                    cardMana.append(manaImg);
                    let manaCost = document.createElement("p");
                    manaCost.classList.add("mana-cost");

                    // Ajout du mana cost de la carte 
                    manaCost.innerHTML = data.board[i].cost;
                    let cardIcon = document.createElement("div");
                    cardIcon.classList.add("card-icon");

                    // si la carte a une mécanique spéciale, on ajoute l'icone appropriée
                    if (data.board[i].mechanics == "Taunt") {

                        let icon = document.createElement("img");
                        icon.src = "../magix/img/protection.png";
                        cardIcon.append(icon);
                    }

                    let cardInfo = document.createElement("div");
                    cardInfo.classList.add("card-infos");
                    cardInfo.innerHTML = data.board[i].mechanics;
                    let cardStats = document.createElement("div");
                    cardStats.classList.add("card-stats");
                    let cardAttack = document.createElement("div");
                    cardAttack.classList.add("card-attack");
                    cardAttack.innerHTML = data.board[i].atk;
                    let cardHealth = document.createElement("div");
                    cardHealth.classList.add("card-health");
                    cardHealth.innerHTML = data.board[i].hp;

                    cardStats.append(cardAttack);
                    cardStats.append(cardHealth);
                    cardMana.append(manaCost);
                    cardTop.append(cardMana);
                    cardTop.append(cardIcon);
                    cardPic.append(cardTop);
                    battlefieldCard.append(cardPic);
                    battlefieldCard.append(cardInfo);
                    battlefieldCard.append(cardStats);
                    BFPlayerCards.append(battlefieldCard);

                }

                
                // Le timer
                let timer = document.querySelector(".countdown");
                timer.innerHTML = "";
                if (data.yourTurn == true) {
                    timer.innerHTML = data.remainingTurnTime;
                }
                else if (data.yourTurn == false) {
                    timer.innerHTML = data.opponent.remainingTurnTime;
                }

                // hero power
                let heroPower = document.querySelector(".player-btn-heropower");
                if (data.heroPowerAlreadyUsed) {
                    heroPower.style.opacity = "0.5";
                    heroPower.style.cursor = "initial";
                    heroPower.style.transform = "rotate(180deg)";
                }
                if(data.yourTurn == true){
                    if(data.heroPowerAlreadyUsed == false){
                        heroPower.onclick = () => {
                            console.log("click hero power");
                            let formData = new FormData();
                            formData.append("HERO_POWER", "HERO_POWER");
                            fetch("ajax-state.php", {
                                method: "POST",
                                body: formData
                            })
                            .then(response => response.json())
                            .then(result => {
                                console.log(result);
                            })               
                        }
                    }
                    let endTurnBtn = document.querySelector(".player-btn-endturn");
                    endTurnBtn.onclick = () => {
                        console.log("click end turn");
                        let formData = new FormData();
                        formData.append("END_TURN", "END_TURN");
                        fetch("ajax-state.php", {
                            method: "POST",
                            body: formData
                        })
                        .then(response => response.json())
                        .then(result => {
                            console.log(result);
                        })
                    }
                }
             
                    
                
            }

            // Logique de hero power
            






            setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
        })

}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});
