function accordion() {
    function bindAccordion(triggerSelector, contentSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              contents = document.querySelectorAll(contentSelector);

        hideAccordionContent();

        trigger.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                    hideAccordionContent();
                    showAccordionContent(i);    
            });
        });

        function hideAccordionContent() {
            contents.forEach(content => {
                content.classList.add('animated' , 'fadeOutUp');  
                content.style.display = 'none';
            });
        }

        function showAccordionContent(i) {
            trigger[i].classList.add('active-style');
            contents[i].style.display = 'block';
            contents[i].classList.remove('fadeOutUp');
            contents[i].classList.add('fadeInUp');
        }

    }

    bindAccordion('.accordion-heading', '.accordion-block');

}

export default accordion;