document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.new_task_description.value);
  })

  
})

function handleToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'Delete';
  li.textContent = `${todo} `;
  document.querySelector('#tasks').appendChild(li).append(btn);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}