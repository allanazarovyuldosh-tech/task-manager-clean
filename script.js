const addBtn = document.getElementById("addBtn");
const taskField = document.getElementById("taskField");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskField.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskField.value = "";
  }
});


