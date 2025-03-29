const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => { // маска телефона только цифры
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/g, '');
        });
    });
};

export default checkNumInputs;
