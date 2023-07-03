let tasks = [];
let deletedTasks = [];
const undoButton = document.getElementById("undoButton");

window.onload = function () {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
};
// save the task
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
      <span>${task.text}</span>
      <button class="edit-button" onclick="editTask(${index})">Edit</button>
      <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
    `;

        taskList.appendChild(li);
    });
    saveTasks();
    undoButton.style.display = deletedTasks.length > 0 ? "block" : "none";
}
// add the task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({
            text: taskText
        });
        taskInput.value = "";
        renderTasks();
    }
}
//edit the new task
function editTask(index) {
    const newTask = prompt("Enter a new task");

    if (newTask !== null) {
        tasks[index].text = newTask;
        renderTasks();
    }
}
//delete the task
function deleteTask(index) {
    const deletedTask = tasks.splice(index, 1)[0];
    deletedTasks.push(deletedTask);
    renderTasks();
}
//undo button
function undoDeleteTask() {
    if (deletedTasks.length > 0) {
        const lastDeletedTask = deletedTasks.pop();
        tasks.push(lastDeletedTask);
        renderTasks();
    }
}
// clearAll task
function clearAllTasks() {
    tasks = [];
    deletedTasks = [];
    renderTasks();
}