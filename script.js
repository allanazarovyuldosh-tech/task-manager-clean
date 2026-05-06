const addBtn = document.getElementById("addBtn");
const taskField = document.getElementById("taskField");
const taskList = document.getElementById("taskList");

// Загружаем сохранённые задачи
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Добавление задачи
addBtn.addEventListener("click", () => {
  const taskText = taskField.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    saveTasks();
    renderTasks();
    taskField.value = "";
  }
});

// Сохранение в localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Отображение списка
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;

    const btns = document.createElement("div");
    btns.className = "task-buttons";

    // Кнопка редактирования
    const editBtn = document.createElement("button");
    editBtn.textContent = "Редактировать";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
      const newText = prompt("Измените задачу:", task);
      if (newText !== null && newText.trim() !== "") {
        tasks[index] = newText.trim();
        saveTasks();
        renderTasks();
      }
    };

    // Кнопка удаления
    const delBtn = document.createElement("button");
    delBtn.textContent = "Удалить";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    btns.appendChild(editBtn);
    btns.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btns);
    taskList.appendChild(li);
  });
}





