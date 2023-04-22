const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

function addTodo() {
  const todoText = todoInput.value;
  if (todoText === "") {
    return;
  }
  const todoItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.addEventListener("click", toggleTodo);
  const todoTextSpan = document.createElement("span");
  todoTextSpan.innerHTML = todoText;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", deleteTodo);
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoTextSpan);
  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);
  todoInput.value = "";
}

function toggleTodo() {
  const todoItem = this.parentElement;
  todoItem.classList.toggle("checked");
}

function deleteTodo() {
  const todoItem = this.parentElement;
  todoList.removeChild(todoItem);
}
