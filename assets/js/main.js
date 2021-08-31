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



    /*---------------------------- ABILITIES MODAL --------------------------------- */
    const modalViews = document.querySelectorAll(".abilities_modal");
    const modalBtns = document.querySelectorAll(".abilities_button");
    const modalCloses = document.querySelectorAll(".abilities_modal_close");

    let modal = function(modalClick) {
        modalViews[modalClick].classList.add("active_modal");
    }

    modalBtns.forEach((button, i) => {
        button.addEventListener("click", () => {
            modal(i);
        })
    })

    modalCloses.forEach((close) => {
        close.addEventListener("click", () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove("active_modal");
            })
        })
    }) 




    /*---------------------------- PORTFOLIO SWIPER --------------------------------- */
    let swiper = new Swiper('.portfolio_container', {
        cssMode: true,
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


    /*---------------------------- SCROLL SECTIONS ACTIVE LINK --------------------------------- */
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset
    
        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')
    
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
            }else{
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)



    /*==================== ADJUSTABLE NAVBAR SHADOW ====================*/ 
    function scrollHeader(){
        const nav = document.getElementById('header')
        // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) nav.classList.add('scroll_header'); else nav.classList.remove('scroll_header')
    }
    window.addEventListener('scroll', scrollHeader)


   
    /*---------------------------- SHOW SCROLL TO TOP --------------------------------- */ 
    function scrollUp(){
        const scroll_up = document.getElementById('scroll_up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scroll_up.classList.add('show_scroll'); else scroll_up.classList.remove('show_scroll')
    }
    window.addEventListener('scroll', scrollUp)



    /*---------------------------- LIGHT/DARK THEMES --------------------------------- */ 
    const themeButton = document.getElementById('theme_button')
    const darkTheme = 'dark_theme'
    const iconTheme = 'uil-sun'
    
    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected_theme')
    const selectedIcon = localStorage.getItem('selected_icon')
    
    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
    
    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    } else {
        document.body.classList['add'](darkTheme)
    }
    
    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected_theme', getCurrentTheme())
        localStorage.setItem('selected_icon', getCurrentIcon())
    })



    /*---------------------------- CONTACT SEND --------------------------------- */ 


}




