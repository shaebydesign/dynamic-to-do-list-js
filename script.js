document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }
        

    function addTask(taskText, save = true) {
        const taskTextToAdd = taskText ? taskText.trim() : taskInput.value.trim();

        if (!taskTextToAdd === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskTextToAdd;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        removeButton.onclick = () => {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(taskTextToAdd);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            saveTaskToLocalStorage(taskTextToAdd);
        }

        taskInput.value = '';
    }

    function saveTaskToLocalStorage(task) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    function removeTaskFromLocalStorage(task) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(storedTask => storedTask !== task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    add-task-btn.addEventListener('click', addTask)
    classList.addEventListener('click')

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    addTask();
});
