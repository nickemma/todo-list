const taskInput = document.querySelector('.input-container');
const taskHandler = document.querySelector('.todo-input');
const UI = document.querySelector('.lists');

let todos = JSON.parse(localStorage.getItem('todo-list'));
const showTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += ` <li class="list-info">
          <div class="check">
            <label for="${id}">
              <input type="checkbox" id="${id}" />
              <p>${todo.title}</p>
            </label>
          </div>
          <div class="icon">
            <i class="fa-solid fa-trash" id="${id}"></i>
          </div>
        </li>`;
    });
  }
  UI.innerHTML = li;
};
showTodo();

taskInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = taskHandler.value.trim();
  taskHandler.value = '';
  if (!todos) {
    todos = [];
  }
  const task = { title: userInput, status: 'completed' };
  todos.push(task);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo();
});

UI.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const { id = e.target.id } = e.target;
    todos.splice(id, 1);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();
  }
});
