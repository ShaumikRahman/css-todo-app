const input = document.querySelector('.input');


input.addEventListener('keyup', e => {
    let string = e.target.value;
    if (e.keyCode === 13 && string.trim().length != 0) {
        todos.push(string);
        localStorage.setItem('todos', JSON.stringify(todos));
        e.target.value = '';
        populate();
        recheck();
    }
    e.preventDefault();
});