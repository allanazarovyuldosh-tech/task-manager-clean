const addBtn = document.getElementById("addBtn");
const taskField = document.getElementById("taskField");
const taskList = document.getElementById("taskList");

// Загружаем сохранённые задачи при старте
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
    li.textContent = task;

    // Кнопка удаления
    const delBtn = document.createElement("button");
    delBtn.textContent = "Удалить";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}



