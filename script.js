const taskInput = document.querySelector('.input-bar');
const inputbtn = document.querySelector('.input-btn');

const tasks = []

function addTask(){
    const taskValue = taskInput.value;

    if(taskValue !== ''){
        tasks.push(taskValue);
        taskInput.value = '';
        console.log(tasks);
    }
}

taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addTask();
    }
})

inputbtn.addEventListener('click', () => {
    // console.log("Input Button Clicked");
    addTask()
})



