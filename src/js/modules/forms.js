import postData from '../services/post';

function forms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        bindPostData(form);
    });

    const message = {
        loading : 'loading...',
        success : 'Мы свяжемся с вами как можно быстрее!',
        failure : 'Failure',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            //set statusMessage loading
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.append(statusMessage); 
            
            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 500);

            let statusImg = document.createElement('img');
            statusImg.src = message.spinner;
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.append(statusImg);
            
            ///

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/posts', json)
            .then(data => {
                console.log(data);
                statusImg.src = message.ok;
            })
            .catch(() => {
                statusImg.src = message.fail;
            })
            .finally(() => {
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                    form.style.display = 'block';
                    form.classList.remove('fadeOutUp');
                    form.classList.add('fadeInUp');
                }, 5000);
            });
        });
        
    }

}

export default forms;