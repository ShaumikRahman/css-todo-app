recheck();

function recheck() {
    document.querySelectorAll('.todo-check').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('checked')) {
                button.classList.remove('checked');
                button.nextElementSibling.classList.remove('completed');
                completed.forEach(num => {
                    if (num == button.id) {
                        completed.splice(completed.indexOf(button.id), 1);
                    }
                });
            } else {
                button.classList.add('checked');
                button.nextElementSibling.classList.add('completed');
                completed.push(button.id);
            }
            setCompleted();
        });
    });
}