// Retrieve user data from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// Display a welcome message
if (user) {
    document.getElementById('welcomeMessage').textContent = `Welcome, ${user.firstName} ${user.lastName}!`;
}

// Initialize task list
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks in the task list
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${task.title} - <strong>${task.priority}</strong> (Assigned to: ${task.assignedTo})
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Add a task
document.getElementById('taskForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('taskTitle').value;
    const priority = document.getElementById('taskPriority').value;

    const task = {
        title,
        priority,
        assignedTo: `${user.firstName} ${user.lastName}` // Assign task to the registered user
    };

    tasks.push(task);
    saveTasks();
    renderTasks();

    // Clear the form
    document.getElementById('taskForm').reset();
});

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Render tasks on page load
renderTasks();
