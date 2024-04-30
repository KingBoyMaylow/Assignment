let todos = [
    { id: 1, task: 'Complete assignment', completed: false },
    { id: 2, task: 'Shop for groceries', completed: true },
    { id: 3, task: 'Go for a run', completed: false }
];

const addTask = (list, task) => {
    const newTask = { id: list.length + 1, task, completed: false };
    return [...list, newTask];
};

const removeTask = (list, taskId) => {
    return list.filter(todo => todo.id !== taskId);
};

// Add a new task
todos = addTask(todos, 'Read a book');

// Remove a task with id 2
todos = removeTask(todos, 2);

// Display the updated TODO list
console.log("Updated TODO list:");
console.table(todos);