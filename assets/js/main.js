{
    /*---------------------------- NAV MENU --------------------------------- */
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


    /*---------------------------- SKILLS MENU --------------------------------- */
    const skillsContent = document.getElementsByClassName("skills_content");
    const skillsHeader = document.querySelectorAll(".skills_header");

    function toggleSkills() {
        let itemClass = this.parentNode.className

        for (let i = 0; i < skillsContent.length; i++) {
           skillsContent[i].className = "skills_content skills_close"
        }
        if (itemClass === "skills_content skills_close") {
            this.parentNode.className = "skills_content skills_open"
        }
    }

    skillsHeader.forEach((e) => {
        e.addEventListener("click", toggleSkills)
    })


    /*---------------------------- QUALIFICATION TABS --------------------------------- */
    const tabs = document.querySelectorAll("[data-target]");
    const tabsContent = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {

            const target = document.querySelector(tab.dataset.target);

            // Make all content inactive
            tabsContent.forEach((content) => {
                content.classList.remove("qual_active");
            })

            // Dispay tab content
            target.classList.add("qual_active");

            // Make all tabs inactive
            tabs.forEach((t) => {
                t.classList.remove("qual_active");
            })

            // Set tab as active
            tab.classList.add("qual_active");
        })
    })

}