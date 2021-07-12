/*---------------------------- NAV MENU --------------------------------- */
{
    const navMenu = document.getElementById("nav_menu");
    const navToggle = document.getElementById("nav_toggle");
    const navClose = document.getElementById("nav_close");
    const navLink = document.querySelectorAll(".nav_link");

    // Reveal Menu (mobile)
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show_menu");
        })
    }
    

    // Close Menu (mobile)
    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show_menu");
        })
    }


    // Collapse Menu on click (mobile)
    navLink.forEach((l) => {
        l.addEventListener("click", () => {
            navMenu.classList.remove("show_menu");
        })
    })











}