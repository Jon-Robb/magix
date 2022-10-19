    let loginBox = document.querySelector(".loginBox");
    let passwordBox = document.querySelector(".passwordBox");
    let connexionBox = document.querySelector(".connexionBox");

    loginBox.onfocus = () => {
        loginBox.style.width = "280px";
        loginBox.style.borderColor = "#2ecc71"
    }

    loginBox.onblur = () => {
        loginBox.style.width = "200px";
        loginBox.style.borderColor = "#3498db"
    }

    passwordBox.onfocus = () => {
        passwordBox.style.width = "280px";
        passwordBox.style.borderColor = "#2ecc71"
    }

    passwordBox.onblur = () => {
        passwordBox.style.width = "200px";
        passwordBox.style.borderColor = "#3498db"
    }


    connexionBox.onmouseover = () => {
        connexionBox.style.background = "#2ecc71"
    }

    connexionBox.onmouseout = () => {
        connexionBox.style.background = "#191919"
    }