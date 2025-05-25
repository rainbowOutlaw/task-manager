const taskInput = document.querySelector('.input-bar');
const inputbtn = document.querySelector('.input-btn');
const clearbtn = document.querySelector('.clear-btn');
const tasksList = document.querySelector('.container-tasks');

let tasks = []


function renderTasks(){
    tasksList.innerHTML = '';
    for(i = 0; i < tasks.length; i++){
        const task = tasks[i];
        const newlistEle = document.createElement('li');
        newlistEle.innerText = task.text;
        newlistEle.dataset.id = task.id;
        tasksList.appendChild(newlistEle);
    }
}

function addTask(){
    const taskValue = taskInput.value;
    const task = {
        id: crypto.randomUUID(),
        text: taskValue,
    }

    if(taskValue !== ''){
        tasks.push(task);
        taskInput.value = '';
        // console.log(tasks);
        // const newlistEle = document.createElement('li');
        // newlistEle.innerText = task.text;
        // tasksList.appendChild(newlistEle);
        // newlistEle.dataset.id = task.id;
        renderTasks();
    }
}



taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addTask();
    }
})

inputbtn.addEventListener('click', () => {
    // console.log("Input Button Clicked");
    addTask();
})

clearbtn.addEventListener('click', () => {

    const shouldClear = confirm("Are you sure you want to clear all tasks ?");

    if(shouldClear){
        tasks.length = 0;
        tasksList.innerHTML = '';
    }
})


tasksList.addEventListener('click', (event) => {
    const clicked = event.target;
    const currTagElem = clicked.closest('li')
    if(currTagElem && currTagElem.tagName === 'LI'){
        const clickedId = currTagElem.dataset.id;
        tasks = tasks.filter(({id}) => id !== clickedId)
    }
    renderTasks();
})
