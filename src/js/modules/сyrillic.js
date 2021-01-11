function сyrillic(selector) {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('keypress' , (e) => {
            if (e.key.match(/[^а-я]/gi)) {
                e.preventDefault();
            }
        }); 
        input.addEventListener('change' , (e) => {
            if(input.value.match(/[^а-я]/gi)) {
                input.value = '';
            }
        }); 
    });
    
}

export default сyrillic;