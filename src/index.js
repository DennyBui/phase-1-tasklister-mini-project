document.addEventListener("DOMContentLoaded", () => {
document.querySelector('form').addEventListener('submit', (e) => {
    let taskForm = document.querySelector('#create=task-form');
    let priorityForm = document.querySelector('#priority-level')
    e.preventDefault();
    let taskDescription = document.getElementById('new-task-description');
    taskForm.reset();
    priorityForm.reset();
  })
});


function buildToDo(listItem) {
    let p = document.createElement('p');
    let prioritySelection = document.querySelector('#priority-level-selection');
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    let date = document.querySelector('#deadline-date').value;
    function handlePriorityLevel() {
        if (prioritySelection.value === "high-priority") {
            p.style.color = "red";
        } else if (prioritySelection.value === "medium-priority") {
            p.style.color = "orange";
        } else if (prioritySelection.value === "low-priority") {
            p.style.color = "green";
        } else {
            p.style.color = "";
        }
        prioritySelection.addEventListener('submit', handlePriorityLevel);
        handlePriorityLevel(prioritySelection);
        completeBtn.addEventListener('click', handleDelete);
        document.querySelector('#tasks').appendChild(p);
        p.appendChild(editBtn);
        p.appendChild(completeBtn);
    }
}
function handleDelete(e) {
    e.target.parentNode.remove();
}

