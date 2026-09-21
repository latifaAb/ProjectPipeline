const input = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const errorMessage = document.getElementById('errorMessage');

addButton.addEventListener('click', addTodo);

function addTodo() {
  const task = input.value.trim();

  if (task === '') {
    errorMessage.textContent = 'Please enter a task';
    return;
  }

  errorMessage.textContent = '';

  const li = document.createElement('li');
  li.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');

  deleteButton.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(deleteButton);
  todoList.appendChild(li);

  input.value = '';
}