const {
    tasks,
    addTask,
    markAsCompleted,
    deleteTask,
    filterByCategory,
    sortByPriority,
    getTasks,
} = require('../src/WorkManager');

beforeEach(() => {
    // Reset tasks array before each test
    tasks.splice(0, tasks.length);
});

test('should add a task successfully', () => {
    const task = addTask({ title: 'Test Task', priority: 'High' });
    expect(task).toMatchObject({
        title: 'Test Task',
        priority: 'High',
        completed: false,
    });
    expect(getTasks()).toHaveLength(1);
});

test('should throw an error if title is missing', () => {
    expect(() => addTask({})).toThrow('Task title is required');
});

test('should mark a task as completed', () => {
    const task = addTask({ title: 'Complete Homework' });
    const updatedTask = markAsCompleted(task.id);
    expect(updatedTask.completed).toBe(true);
});

test('should throw an error when marking a non-existent task as completed', () => {
    expect(() => markAsCompleted(999)).toThrow('Task not found');
});

test('should delete a task successfully', () => {
    const task = addTask({ title: 'Clean the House' });
    deleteTask(task.id);
    expect(getTasks()).toHaveLength(0);
});

test('should throw an error when deleting a non-existent task', () => {
    expect(() => deleteTask(999)).toThrow('Task not found');
});

test('should filter tasks by category', () => {
    addTask({ title: 'Work Task 1', category: 'Work' });
    addTask({ title: 'Personal Task', category: 'Personal' });
    const filteredTasks = filterByCategory('Work');
    expect(filteredTasks).toHaveLength(1);
    expect(filteredTasks[0].category).toBe('Work');
});

test('should sort tasks by priority', () => {
    addTask({ title: 'Task 1', priority: 'Low' });
    addTask({ title: 'Task 2', priority: 'High' });
    addTask({ title: 'Task 3', priority: 'Medium' });
    const sortedTasks = sortByPriority();
    expect(sortedTasks[0].priority).toBe('High');
    expect(sortedTasks[1].priority).toBe('Medium');
    expect(sortedTasks[2].priority).toBe('Low');
});
