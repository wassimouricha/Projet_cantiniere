// fonction pour le bouton du menu
function togglebutton(){
    const togglemenu = document.querySelector(".toggle");
    const navLinks = document.querySelector(".nav-links");

    togglemenu.addEventListener('click' , () => {
        navLinks.classList.toggle('mobile-menu') 
        togglemenu.classList.toggle('mobile-menu') 
    })
}

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded" , ready);
} else {
    ready();
}

// making function

function ready(){
    // supprimer produit du panier
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    // console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click' ,removeCartItem);
    }
}
