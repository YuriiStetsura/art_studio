import {getData} from '../services/request';

function showMoreStyle(triggerSelector, contentSelector) {
    const trigger = document.querySelector(triggerSelector),
          contents = document.querySelectorAll(contentSelector);

    trigger.addEventListener('click', () => {
        getData('http://localhost:3000/styles')
        .then(data => {
            data.forEach(({src, title, link}, i) => {
                const imgBlock = document.createElement('div');
                imgBlock.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
                imgBlock.innerHTML = `
                    <div class=styles-block>
                        <img src=${src} alt>
                        <h4>${title}</h4>
                        <a href="#">Подробнее</a>
                    </div>
                `;
                contents[0].parentNode.append(imgBlock);
            });
        });
        trigger.remove();
    });
    
    // trigger.addEventListener('click', () => {
    //     contents.forEach(content => {
    //         content.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
    //         content.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
    //         trigger.remove();
    //     });
    // });

}

export default showMoreStyle;