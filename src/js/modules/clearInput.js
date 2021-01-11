function clearInput() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = '';
    });
}

export default clearInput;