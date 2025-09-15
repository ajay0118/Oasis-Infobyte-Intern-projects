// Add Task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const now = new Date();
    const timeStamp = now.toLocaleString();
  
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="task-info">
        <span>${taskText}</span>
        <span class="task-time">Added: ${timeStamp}</span>
      </div>
      <div class="task-actions">
        <button class="complete-btn" onclick="completeTask(this)">✔</button>
        <button class="edit-btn" onclick="editTask(this)">✎</button>
        <button class="delete-btn" onclick="deleteTask(this)">✖</button>
      </div>
    `;
  
    document.getElementById("pendingList").appendChild(li);
    taskInput.value = "";
  }
  
  // Mark Task Complete
  function completeTask(button) {
    const li = button.closest("li");
    const now = new Date();
    const completedTime = now.toLocaleString();
  
    li.querySelector(".task-time").textContent = `Completed: ${completedTime}`;
    document.getElementById("completedList").appendChild(li);
    button.remove(); // Remove complete button
  }
  
  // Edit Task
  function editTask(button) {
    const li = button.closest("li");
    const taskSpan = li.querySelector(".task-info span");
    const newTask = prompt("Edit your task:", taskSpan.textContent);
  
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask;
    }
  }
  
  // Delete Task
  function deleteTask(button) {
    const li = button.closest("li");
    li.remove();
  }
  