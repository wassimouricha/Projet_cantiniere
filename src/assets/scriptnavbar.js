function togglebutton(){
    const menuHamburger = document.querySelector(".menuhamburger");
    const navLinks = document.querySelector(".nav-links");



    menuHamburger.addEventListener('click' , () => {
        navLinks.classList.toggle('mobile-menu')
    })


}
