function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
    
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `
        <input type="checkbox" onchange="toggleComplete(this)">
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(listItem);
    taskInput.value = '';
}

function toggleComplete(checkbox) {
    const listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.querySelector('span').classList.add('completed');
    } else {
        listItem.querySelector('span').classList.remove('completed');
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}