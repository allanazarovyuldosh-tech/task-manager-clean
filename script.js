const addBtn = document.getElementById("addBtn");
const taskField = document.getElementById("taskField");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

addBtn.addEventListener("click", () => {
  const taskText = taskField.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, done: false });
    saveTasks();
    renderTasks();
    taskField.value = "";
  }
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    // Чекбокс "Выполнено"
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.onchange = () => {
      tasks[index].done = checkbox.checked;
      saveTasks();
      renderTasks();
    };

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.color = "#888";
    }

    const btns = document.createElement("div");
    btns.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редактировать";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
      const newText = prompt("Измените задачу:", task.text);
      if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        saveTasks();
        renderTasks();
      }
    };

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

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btns);
    taskList.appendChild(li);
  });
}






