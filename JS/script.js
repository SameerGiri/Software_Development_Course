document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please Enter the task.");
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => taskItem.remove());
  taskItem.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(taskItem);

  taskInput.value = "";
}
