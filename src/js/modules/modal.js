function modal() {

    let modalBtnClick = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(btn => {
            btn.addEventListener('click' , (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (destroy) {
                    btn.remove();
                }

                hideModal();
                showModal();

                modalBtnClick = true;
            });
        });

        close.addEventListener('click', () => {
            hideModal();
        });

        modal.addEventListener('click', (e) => {
            if(e.target == modal) {
                hideModal();
            }
        });

        function showModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            clearTimeout(timerIdByModal);
        }

        function hideModal() {
            windows.forEach(item => {
                item.classList.add('animated', 'fadeIn');
                item.style.display = 'none';
                document.body.style.overflow = '';
            });
        }

    }

    const timerIdByModal = setTimeout(() => {
        document.querySelector('.popup-consultation').classList.add('animation', 'fadeIn');
        document.querySelector('.popup-consultation').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60000);

    function showModalByScroll() {
        if (!modalBtnClick && 
            window.scrollY + document.documentElement.clientHeight == document.documentElement.scrollHeight) {
            document.querySelector('.popup-gift').classList.add('animated', 'fadeIn');
            document.querySelector('.popup-gift').style.display = 'block';
            document.querySelector('.fixed-gift').remove();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    
    
    window.addEventListener('scroll', showModalByScroll);
    
    

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    
}

export default modal;