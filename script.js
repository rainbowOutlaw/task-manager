const taskInput = document.querySelector('.input-bar');
const inputbtn = document.querySelector('.input-btn');
const clearbtn = document.querySelector('.clear-btn');
const tasksList = document.querySelector('.container-tasks');

const tasks = []

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
        const newlistEle = document.createElement('li');
        newlistEle.innerText = task.text;
        tasksList.appendChild(newlistEle);
        newlistEle.dataset.id = task.id;
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
    if(clicked.tagName === 'LI' && clicked.dataset.id){
        const clickedId = clicked.dataset.id;
        console.log(clickedId)
    }
})
