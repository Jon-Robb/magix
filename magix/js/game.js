let battlefieldCardSelectedUid;

// Quelques fonctions utiles
const backToLobby = () => {
    window.location.replace("lobby.php");
}

const show = (element, message) => {
    element.innerHTML = message
    element.style.opacity = "1";
}

const remove = (element) => {
    element.style.opacity = "0";
}

// Logique du toggle button pour le chat
let playerBtnChat = document.querySelector(".player-btn-chat");
let chatBox = document.querySelector(".game-chatbox");
let chatVisible = false;
playerBtnChat.onclick = () => {
    if(!chatVisible){
        chatBox.style.opacity = '1';
        chatVisible = true;
    }
    else{
        chatBox.style.opacity = '0';
        chatVisible = false;
    }
}


let imgList = ['url("./img/cartes/tank-thunderbolt.jpg")', 'url("img/chinese_tank_by_sinto_risky_d9uojbp.jpg")'];
let random = Math.floor(Math.random() * imgList.length);
console.log(random, imgList[random]);


const state = () => {
    fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
        method: "POST"        // l’API (games/state)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // contient les cartes/état du jeu.

            let dialogBox = document.querySelector(".dialog-box");


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
                    cardPic.style.background = imgList[random];
                    cardPic.style.backgroundRepeat = 'no repeat';
                    cardPic.style.backgroundSize = 'cover';
                    let cardTop = document.createElement("div");
                    cardTop.classList.add("card-top");
                    // Ajout du mana cost de la carte 
                    // manaCost.innerHTML = data.hand[i].cost;


                    // si la carte a une mécanique spéciale, on ajoute l'icone appropriée
                    for (let j = 0; j < data.hand[i].mechanics.length; j++) {

                        if (data.hand[i].mechanics[j].match("Taunt")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/protection.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);
                        }

                        if (data.hand[i].mechanics[j].match("Deathrattle")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/skull-and-bones.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);

                        }

                        if (data.hand[i].mechanics[j].match("Stealth")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/stealth.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);

                        }
                    }




                    let cardInfo = document.createElement("div");
                    cardInfo.classList.add("card-infos");
                    cardInfo.innerHTML = data.hand[i].mechanics;
                    let cardStats = document.createElement("div");
                    cardStats.classList.add("card-stats");
                    let cardAttack = document.createElement("div");
                    cardAttack.classList.add("card-attack");
                    cardAttack.innerHTML = data.hand[i].atk;
                    let cardMana = document.createElement("div");
                    cardMana.classList.add("card-mana");
                    cardMana.innerHTML = data.hand[i].cost;
                    let cardHealth = document.createElement("div");
                    cardHealth.classList.add("card-health");
                    cardHealth.innerHTML = data.hand[i].hp;

                    // Assemblage de la carte
                    cardStats.append(cardAttack);
                    cardStats.append(cardMana);
                    cardStats.append(cardHealth);
                    cardPic.append(cardTop);
                    battlefieldCard.append(cardPic);
                    battlefieldCard.append(cardInfo);
                    battlefieldCard.append(cardStats);
                    playerCards.append(battlefieldCard);


                    if (data.mp < data.hand[i].cost) {
                        battlefieldCard.style.opacity = "0.5";
                        battlefieldCard.style.cursor = "initial";
                    }
                    else if (data.mp >= data.hand[i].cost) {
                        battlefieldCard.style.cursor = "pointer";
                    }

                    battlefieldCard.onclick = () => {
                        if (data.yourTurn) {
                            let formData = new FormData();
                            formData.append("PLAY", "PLAY");
                            formData.append("UID", data.hand[i].uid);
                            let carte = data.hand[i];

                            fetch("ajax-state.php", {
                                method: "POST",
                                body: formData
                            })
                                .then(response => response.json())
                                .then(result => {

                                    if (typeof result != 'string' || !result instanceof String) {

                                        let formData2 = new FormData();
                                        formData2.append("id", carte.id);
                                        formData2.append("cost", carte.cost);
                                        formData2.append("hp", carte.hp);
                                        formData2.append("attack", carte.atk);
                                        formData2.append("mechanics", carte.mechanics);


                                        fetch("ajax-state.php", {
                                            method: "POST",
                                            body: formData2
                                        })

                                            .then(response => response.json())
                                            .then(result => {

                                            })
                                    }
                                    else {
                                        show(dialogBox, result);
                                        setTimeout(() => {
                                            remove(dialogBox);
                                        }, 2000);
                                    }
                                    console.log(result)
                                })
                        }
                    }
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
                    cardPic.style.background = imgList[random];
                    cardPic.style.backgroundRepeat = 'no repeat';
                    cardPic.style.backgroundSize = 'cover';
                    cardPic.classList.add("card-pic");
                    let cardTop = document.createElement("div");
                    cardTop.classList.add("card-top");



                    // si la carte a une mécanique spéciale, on ajoute l'icone appropriée

                    for (let j = 0; j < data.opponent.board[i].mechanics.length; j++) {
                        if (data.opponent.board[i].mechanics[j].match("Taunt")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/protection.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);
                        }

                        if (data.opponent.board[i].mechanics[j].match("Stealth")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            battlefieldCard.style.opacity = "0.7";
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/stealth.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);
                        }

                        if (data.opponent.board[i].mechanics[j].match("Deathrattle")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/skull-and-bones.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);

                        }

                    }





                    let cardInfo = document.createElement("div");
                    cardInfo.classList.add("card-infos");
                    cardInfo.innerHTML = data.opponent.board[i].mechanics;
                    let cardStats = document.createElement("div");
                    cardStats.classList.add("card-stats");
                    let cardAttack = document.createElement("div");
                    cardAttack.classList.add("card-attack");
                    cardAttack.innerHTML = data.opponent.board[i].atk;
                    let cardMana = document.createElement("div");
                    cardMana.classList.add("card-mana");
                    cardMana.innerHTML = data.opponent.board[i].cost;
                    let cardHealth = document.createElement("div");
                    cardHealth.classList.add("card-health");
                    cardHealth.innerHTML = data.opponent.board[i].hp;

                    cardStats.append(cardAttack);
                    cardStats.append(cardMana);
                    cardStats.append(cardHealth);

                    cardPic.append(cardTop);
                    battlefieldCard.append(cardPic);
                    battlefieldCard.append(cardInfo);
                    battlefieldCard.append(cardStats);
                    BFEnnemycards.append(battlefieldCard);

                    battlefieldCard.onclick = () => {
                        if (data.yourTurn) {
                            if (battlefieldCardSelectedUid != 0) {
                                let formData = new FormData();
                                formData.append("ATTACK", "ATTACK");
                                formData.append("bf-UID", battlefieldCardSelectedUid);
                                formData.append("targetuid", data.opponent.board[i].uid);
                                console.log(battlefieldCardSelectedUid);
                                fetch("ajax-state.php", {
                                    method: "POST",
                                    body: formData
                                })
                                    .then(response => response.json())
                                    .then(result => {
                                        if (typeof result == 'string' || result instanceof String) {
                                            dialogBox.innerHTML = result;
                                            dialogBox.style.opacity = "1";
                                            setTimeout(() => {
                                                remove(dialogBox);
                                            }, 2000);

                                        }

                                        console.log(result);
                                    })
                            }
                        }
                    }
                }

                // Cartes du joueur sur le champ de bataille
                let BFPlayerCards = document.querySelector(".battlefield-player-cards-box");
                BFPlayerCards.innerHTML = "";
                for (let i = 0; i < data.board.length; i++) {
                    // Creation de toute l'arborescence de la carte 
                    let battlefieldCard = document.createElement("div");
                    battlefieldCard.classList.add("battlefield-card");
                    let cardPic = document.createElement("div");
                    cardPic.style.background = imgList[random];
                    cardPic.style.backgroundRepeat = 'no repeat';
                    cardPic.style.backgroundSize = 'cover';
                    cardPic.classList.add("card-pic");
                    cardPic.style.background = "url"
                    let cardTop = document.createElement("div");
                    cardTop.classList.add("card-top");


                    let cardIcon = document.createElement("div");
                    cardIcon.classList.add("card-icon");

                    // si la carte a une mécanique spéciale, on ajoute l'icone appropriée
                    for (let j = 0; j < data.board[i].mechanics.length; j++) {
                        if (data.board[i].mechanics[j].match("Taunt")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/protection.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);
                        }

                        if (data.board[i].mechanics[j].match("Stealth")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            battlefieldCard.style.opacity = "0.7";
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/stealth.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);
                        }

                        if (data.board[i].mechanics[j].match("Deathrattle")) {

                            let cardIcon = document.createElement("div");
                            cardIcon.classList.add("card-icon");
                            let icon = document.createElement("img");
                            icon.src = "../magix/img/skull-and-bones.png";
                            cardIcon.append(icon);
                            cardTop.append(cardIcon);

                        }

                    }


                    let cardInfo = document.createElement("div");
                    cardInfo.classList.add("card-infos");
                    cardInfo.innerHTML = data.board[i].mechanics;
                    let cardStats = document.createElement("div");
                    cardStats.classList.add("card-stats");
                    let cardAttack = document.createElement("div");
                    cardAttack.classList.add("card-attack");
                    cardAttack.innerHTML = data.board[i].atk;
                    let cardMana = document.createElement("div");
                    cardMana.classList.add("card-mana");
                    cardMana.innerHTML = data.board[i].cost;
                    let cardHealth = document.createElement("div");
                    cardHealth.classList.add("card-health");
                    cardHealth.innerHTML = data.board[i].hp;

                    cardStats.append(cardAttack);
                    cardStats.append(cardMana);
                    cardStats.append(cardHealth);
                    cardPic.append(cardTop);
                    battlefieldCard.append(cardPic);
                    battlefieldCard.append(cardInfo);
                    battlefieldCard.append(cardStats);
                    BFPlayerCards.append(battlefieldCard);

                    if (data.yourTurn && data.board[i].state == "IDLE") {
                        battlefieldCard.classList.add("playable-card");
                    }

                    battlefieldCard.onclick = () => {
                        if (data.yourTurn) {
                            battlefieldCardSelectedUid = data.board[i].uid
                        }
                    }

                    let avatarEnnemi = document.querySelector(".ennemy-pic");
                    avatarEnnemi.onclick = () => {
                        if (data.yourTurn) {
                            console.log(battlefieldCardSelectedUid);
                            if (battlefieldCardSelectedUid != 0) {
                                let formData = new FormData();
                                formData.append("ATTACK", "ATTACK");
                                formData.append("bf-UID", battlefieldCardSelectedUid);
                                formData.append("targetuid", 0);
                                fetch("ajax-state.php", {
                                    method: "POST",
                                    body: formData
                                })
                                    .then(response => response.json())
                                    .then(result => {
                                        if (typeof result == 'string' || result instanceof String) {

                                            dialogBox.innerHTML = result;
                                            dialogBox.style.opacity = "1";

                                            setTimeout(() => {
                                                remove(dialogBox);
                                            }, 2000);
                                        }

                                        console.log(result);
                                    })
                            }
                        }
                    }
                }

                // Le timer
                let timer = document.querySelector(".countdown");
                timer.innerHTML = "";
                timer.innerHTML = data.remainingTurnTime;

                // hero power

                let heroPower = document.querySelector(".player-btn-heropower");

                if (data.yourTurn == true) {
                    let formData = new FormData();

                    if (data.heroPowerAlreadyUsed || data.mp <= 1) {
                        heroPower.style.opacity = "0.5";
                        heroPower.style.cursor = "initial";
                        heroPower.style.transform = "rotate(180deg)";
                    }
                    else if (!data.heroPowerAlreadyUsed) {
                        heroPower.onclick = () => {
                            formData.append("HERO_POWER", "HERO_POWER");
                            fetch("ajax-state.php", {
                                method: "POST",
                                body: formData
                            })
                        }
                        heroPower.style.opacity = "1";
                        heroPower.style.cursor = "pointer";
                        heroPower.style.transform = "initial";
                    }


                    let endTurnBtn = document.querySelector(".player-btn-endturn");
                    endTurnBtn.onclick = () => {
                        formData.append("END_TURN", "END_TURN");
                        fetch("ajax-state.php", {
                            method: "POST",
                            body: formData
                        })
                    }
                    let surrenderBtn = document.querySelector(".player-btn-surrender");
                    surrenderBtn.onclick = () => {
                        formData.append("SURRENDER", "SURRENDER");
                        fetch("ajax-state.php", {
                            method: "POST",
                            body: formData
                        })
                    }
                }
            }

            if (data == "LAST_GAME_LOST" || data == "LAST_GAME_WON") {

                show(dialogBox, data); 

                setTimeout(() => {
                    backToLobby();
                }, 5000);
            }

            setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
        })
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});
