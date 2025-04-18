const taskInput = document.querySelector('.input-bar');
const inputbtn = document.querySelector('.input-btn');
const clearbtn = document.querySelector('.clear-btn');
const tasksList = document.querySelector('.container-tasks');

const tasks = []

function addTask(){
    const taskValue = taskInput.value;

    if(taskValue !== ''){
        tasks.push(taskValue);
        taskInput.value = '';
        // console.log(tasks);
        const newlistEle = document.createElement('li');
        newlistEle.innerText = taskValue;
        tasksList.appendChild(newlistEle);
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

