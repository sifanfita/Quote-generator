const addTask = document.getElementById('add-task');  
const taskContainer = document.getElementById('task-container');  
const inputTask = document.getElementById('input-task');  

addTask.addEventListener('click', function() {  
    // Validate input before doing anything else  
    if (inputTask.value.trim() === "") {  
        alert("Please enter a task");  
        return; // Exit the function if the input is empty  
    }  

    let task = document.createElement('div');  
    task.classList.add('task');  

    let li = document.createElement('li');  
    li.innerText = inputTask.value; // Directly use the value  
    task.appendChild(li);  

    let checkButton = document.createElement('button');  
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';  
    checkButton.classList.add('checkTask');  
    task.appendChild(checkButton);  

    let deleteButton = document.createElement('button');  
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';  
    deleteButton.classList.add('deleteTask');  
    task.appendChild(deleteButton);  

    taskContainer.appendChild(task); // Append the task container after validation  

    inputTask.value = ""; // Clear the input field  

    // Toggle text decoration on check button click  
    checkButton.addEventListener('click', function() {  
        checkButton.parentElement.style.textDecoration = 'line-through';
    });  

    // Remove task on delete button click  
    deleteButton.addEventListener('click', function() {  
        taskContainer.removeChild(task); // Directly remove the task div  
    });  
});