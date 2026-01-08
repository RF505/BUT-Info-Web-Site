const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if(menu.classList.contains["active"]){
        document.querySelector("header .material-icons").innerHTML = "close"
    }
    else{
        document.querySelector("header .material-icons").innerHTML = "menu"
    }
}

/*Pas de modif à faire, ce fichier gère la partie mobile*/