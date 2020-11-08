const Nav = ( _ => {
    const init = _ => {
        listeners();
    };

    const listeners = _ => {
        const navEl = document.querySelector('.nav'),
              navIconEl = document.querySelector('.nav__icon'),
              navLinksEl = document.querySelector('.nav__links'),
              navLinkEls = document.querySelectorAll('.nav__link');
        
        // toogle nav icon and menu
        navIconEl.addEventListener('click', event => {
            if(navIconEl.matches('.fa-times')) {
                navIconEl.classList.add('fa-bars');
                navIconEl.classList.remove('fa-times');
                navLinksEl.style.visibility = 'hidden';
                navLinkEls.forEach(link => link.style.visibility = 'hidden');
                if(navEl.offsetWidth) {
                    navEl.style.left = -40 + '%';
                    navIconEl.style.left = 1 + '%';
                }
                
            } else {
                navIconEl.classList.remove('fa-bars');
                navIconEl.classList.add('fa-times');
                navLinksEl.style.visibility = 'visible';
                navLinkEls.forEach(link => link.style.visibility = 'visible');
                if(navEl.offsetWidth) {
                    navEl.style.left = 0;
                    navIconEl.style.left = 41 + '%';
                }
            }
        });

        // highlight project on click
        navLinkEls.forEach(link => {
            link.addEventListener('click', _ => {
                let id = link.href.match(/(?<=#)\d+/)[0],
                    str = window.getComputedStyle(link, null).getPropertyValue('border-bottom'),
                    color = str.match(/rgba.+/)[0];

                const projectEl = document.getElementById(id);
                projectEl.style.boxShadow = `0 0 46px 50px ${color}`;
                projectEl.style.transform = 'rotate(2deg)';
               
                // remove highlight
                setInterval(_ =>  {
                    projectEl.style.boxShadow = null;
                    projectEl.style.transform = 'rotate(0deg)';
                }, 1000);    
            });
        });
    };

    return {
        init
    };
})();

Nav.init();

export default Nav;


