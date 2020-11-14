const Nav = ( _ => {
    const init = _ => {
        listeners();
    };

    const listeners = _ => {
        const navEl = document.querySelector('.nav'),
              navIconEl = document.querySelector('.nav__icon'),
              navLinksEl = document.querySelector('.nav__links'),
              navLinkEls = document.querySelectorAll('.nav__link');

        // toggle show/hide nav
        navIconEl.addEventListener('click', _ => {
            navIconEl.classList.toggle('fa-bars');
            navIconEl.classList.toggle('fa-times');
            navIconEl.classList.toggle('show__icon');
            navEl.classList.toggle('show__nav');
            navLinksEl.classList.toggle('show');
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
               
                // remove highlight & rotate back
                setTimeout(_ =>  {
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


