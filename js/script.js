const buttons = document.querySelectorAll('.check');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (button.classList.contains('checked')) {
            button.classList.remove('checked');
        } else {
            button.classList.add('checked');
        }
    });
});