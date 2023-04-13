document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    })
    const taskInput = document.querySelector('#new-task-description');
    const newTask = taskInput.value
    const listItem = document.createElement('li');
    listItem.innerText = newTask;
    const taskList = document.querySelector('#tasks');
    taskList.appendChild(listItem)
    taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'li') {
        event.target.remove();
      }
    })
    taskInput.value = '';
  });

  function handleToDo(todo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo}`
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#create-task-form').appendChild(p)
  }
  function handleDelete(e){
    e.target.parentNode.remove()
  }