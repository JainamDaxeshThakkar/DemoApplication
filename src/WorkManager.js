const tasks = []; // Task list

function addTask({ title, description = '', priority = 'Medium', category = 'General', deadline = null }) {
    if (!title) throw new Error('Task title is required');
    const task = {
        id: tasks.length + 1,
        title,
        description,
        priority,
        category,
        deadline,
        completed: false,
    };
    tasks.push(task);
    return task;
}

function markAsCompleted(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) throw new Error('Task not found');
    task.completed = true;
    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error('Task not found');
    tasks.splice(index, 1);
}

function filterByCategory(category) {
    return tasks.filter(task => task.category === category);
}

function sortByPriority() {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

function getTasks() {
    return tasks;
}

module.exports = {
    tasks, // Export the tasks array for testing
    addTask,
    markAsCompleted,
    deleteTask,
    filterByCategory,
    sortByPriority,
    getTasks,
};
