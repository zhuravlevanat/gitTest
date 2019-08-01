const newTask = document.querySelector('#new-task');
const taskList = document.querySelector('.task-list');
const addTask = document.getElementById('add-task');
const noTasks = document.getElementById('no-tasks');


addTask.addEventListener('click', function (e) {
 e.preventDefault;
 if (newTask.value === ''){
   document.getElementById('mistake').classList.remove('d-none');
   newTask.classList.add('border-danger');
   } else {
    document.getElementById('mistake').classList.add('d-none');
    newTask.classList.remove('border-danger');
  const li = document.createElement('li');
 li.className = 'task-name';
 li.appendChild(document.createTextNode(newTask.value));
 taskList.appendChild(li);
 newTask.value="";
 noTasks.className="d-none";
 }
 
});


