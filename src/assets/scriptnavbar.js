function togglebutton(){
    const togglemenu = document.querySelector(".toggle");
    const navLinks = document.querySelector(".nav-links");

    togglemenu.addEventListener('click' , () => {
        navLinks.classList.toggle('mobile-menu') 
        togglemenu.classList.toggle('mobile-menu') 
    })
}
