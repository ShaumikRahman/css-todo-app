let setting;
if (localStorage.getItem('setting').length == 0) {
  setting = 'all';
  localStorage.setItem("setting", JSON.stringify(setting));
} else {
  setting = JSON.parse(localStorage.getItem('setting'));
}

const trackerButtons = document.querySelectorAll('.tracker-button');

checkBlue();

trackerButtons.forEach(button => {
    button.addEventListener('click', () => {
        // setting = button.innerHTML.toLowerCase();
        setting = button.classList[1];
        localStorage.setItem('setting', JSON.stringify(setting));
        handleSettingChange();
        checkBlue();
    });
});

function checkBlue() {
    trackerButtons.forEach(button => {
        if (button.classList.contains(`${setting}`)) {
            button.classList.add('blue');
        } else {
            button.classList.remove('blue');
        }
    });
}


function handleSettingChange() {
    let todoElements = document.querySelectorAll('.todo');
    setting = JSON.parse(localStorage.getItem('setting'));
    if (setting == 'all') {
      todoElements.forEach(todo => {
        todo.classList.remove('hide');
      });
    } else if (setting == 'active') {
      todoElements.forEach(todo => {
        if (todo.firstChild.classList.contains('checked')) {
          todo.classList.add('hide');
        } else {
          todo.classList.remove('hide');
        }
      });
    } else if (setting == 'completed') {
      todoElements.forEach(todo => {
        if (!todo.firstChild.classList.contains('checked')) {
          todo.classList.add('hide');
        } else {
          todo.classList.remove('hide');
        }
      });
    }
}

function calcRemaining() {
    let checked = 0;
    let todo = 0;
    document.querySelectorAll('.checked').forEach(check => {
      checked++;
    });
  
    document.querySelectorAll('.todo-check').forEach(button => {
      todo++;
    });
  
    let final = todo - checked;
    if (final == 1) {
      remaining.innerHTML = `${final} item left`;
    } else {
      remaining.innerHTML = `${final} items left`;
    }
    
  }
  
  function clearCompleted() {
    let counter = 0;
    let newTodos = [];
    todos.forEach(todo => {
      if (!completed.includes(counter.toString())) {
        newTodos.push(todo);
      }
      counter++;
    });
    localStorage.setItem('todos', JSON.stringify(newTodos));
    todos = newTodos;
    localStorage.setItem('completed', JSON.stringify([]));
    completed = [];
    populate();
    recheck();
  }
  
  const clear = document.querySelector('.clear');
  clear.addEventListener('click', () => {
    clearCompleted();
  })