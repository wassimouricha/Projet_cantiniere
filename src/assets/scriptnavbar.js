// fonction pour le bouton du menu
function togglebutton(){
    const togglemenu = document.querySelector(".toggle");
    const navLinks = document.querySelector(".nav-links");

    togglemenu.addEventListener('click' , () => {
        navLinks.classList.toggle('mobile-menu') 
        togglemenu.classList.toggle('mobile-menu') 
    })
}
// fonction pour le panier
// function openCart(){
//     const cartIcon = document.querySelector(".cart-icon");
//     const cart = document.querySelector(".cart");
//     const closeCart = document.querySelector(".close-cart");

//     cartIcon.addEventListener('click' , () => {
//         cart.classList.add('active');
//     })

//     closeCart.addEventListener('click' , () => {
//         cart.classList.remove('active');
//     })
// }


// let cartIcon = document.querySelector(".cart-icon");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector(".close-cart");

// cartIcon.onClick = () => {
//     cart.classList.add("active")
// }