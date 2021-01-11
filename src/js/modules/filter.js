function filter(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector),
          no = document.querySelector('.portfolio-no');
         

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(classSelector = 'all', i = 0) {
        content.forEach(item => {
            if (classSelector === 'grandmother' || classSelector === 'granddad') {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            }

            if (item.classList.contains(classSelector)) {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            }
        });
        
        tabs[i].classList.add(activeClass);
    }

    // hideTabContent();
    // showTabContent();

    header.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        
        if (target && (target.tagName == 'LI')) {
            tabs.forEach((tab, i) => {
                if (tab == target) {
                    let classSelector = target.getAttribute('class').replace(' ' + activeClass, '');

                    hideTabContent();
                    showTabContent(classSelector, i);
                }
            });
        }
    });
}

export default filter;