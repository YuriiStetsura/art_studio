import {postData} from '../services/request';

function forms(priceBase) {
    const forms = document.querySelectorAll('form'),
    upload = document.querySelectorAll('[name="upload"]');

    forms.forEach(form => {
        bindPostData(form);
    });
    
    upload.forEach(item => {
        item.addEventListener('input', () => {
            const arr = item.files[0].name.split('.');
            let dots;
            arr[0].length > 8 ? dots = '...' : dots = '.';
            item.previousElementSibling.textContent = arr[0].substring(0,9) + dots + arr[1];
        });
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

            //set statusPostData
            let status = document.createElement('div');
            status.classList.add('status');
            form.parentNode.append(status); 
            
            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 500);

            let statusImg = document.createElement('img');
            statusImg.src = message.spinner;
            statusImg.classList.add('animated', 'fadeInUp');
            status.append(statusImg);

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            status.append(statusMessage);
            ///
            
            const formData = new FormData(form);

            // add resultPrice in FormData
            if(form.classList.contains('form-calc')) {
                formData.append('resultPrice', priceBase.resultPrice);       
            }
            ///
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
        
            postData('http://localhost:3000/posts', json)
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
                statusImg.src = message.ok;
            })
            .catch(() => {
                statusMessage.textContent = message.failure;
                statusImg.src = message.fail;
            })
            .finally(() => {
                form.reset();

                //reset calc-price and delete obj calc
                document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                for (let key in priceBase) {
                    delete priceBase[key];
                }
                ///

                upload.forEach(item => {
                    item.previousElementSibling.textContent = 'Файл не выбран';
                });

                //hide statusPostData and show modal
                setTimeout(() => {
                    status.remove();
                    form.style.display = 'block';
                    form.classList.remove('fadeOutUp');
                    form.classList.add('fadeInUp');
                }, 5000);
            });
        });
        
    }

}

export default forms;