const todoListElement = document.querySelector(".content-list");

// try {
//   JSON.parse(localStorage.getItem('todos'));
//   throw 'no todos';
// } catch (error) {
//   if (error) {
//     todos = [];
//     localStorage.setItem('todos', JSON.stringify(todos));
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
// }

let todos = JSON.parse(localStorage.getItem('todos'));

if (todos == null) {
  todos = [];
  localStorage.setItem("todos", JSON.stringify(todos));
}

let completed = JSON.parse(localStorage.getItem("completed"));

if (completed == null) {
  completed = [];
  localStorage.setItem("completed", JSON.stringify(completed));
}

populate();

function populate() {
  todoListElement.innerHTML = "";

  let counter = 0;
    if (localStorage.getItem("dark") == "inactive") {
      todos.forEach((todo) => {
        if (completed.includes(counter.toString())) {
          console.log("tesst");
          todoListElement.innerHTML += `<div class="todo"><button class="todo-check checked" id="${counter}"><svg class="tick" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
        <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"></path>
      </svg></button><p class="todo-text completed">${todo}</p></div>`;
        } else {
          console.log("tesstdssdsd");
          todoListElement.innerHTML += `<div class="todo" ><button class="todo-check" id="${counter}"><svg class="tick" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
        <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"></path>
      </svg></button><p class="todo-text">${todo}</p></div>`;
        }
        counter++;
      });
    } else {
      todos.forEach((todo) => {
        if (completed.includes(counter.toString())) {
          console.log("tesst");
          todoListElement.innerHTML += `<div class="todo"><button class="todo-check checked dark" id="${counter}"><svg class="tick" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
    <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"></path>
  </svg></button><p class="todo-text completed dark">${todo}</p></div>`;
        } else {
          todoListElement.innerHTML += `<div class="todo" ><button class="todo-check dark" id="${counter}"><svg class="tick" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
    <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"></path>
  </svg></button><p class="todo-text dark">${todo}</p></div>`;
        }
        counter++;
      });
    }
}

function setCompleted() {
  localStorage.setItem("completed", JSON.stringify(completed));
}
