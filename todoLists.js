const userInput = document.querySelector('#js-Input');
const addButton = document.querySelector('#js-addTask')
const theLists = document.querySelector('#lists')


    window.addEventListener('DOMContentLoaded', loadTasks);


    addButton.addEventListener('click', () =>{
        if (userInput.value.trim() === '')return
        addTask(userInput.value, false)
        saveTask();
        userInput.value = ''
    })
//addButton function: to be called i eventlistener in addButton
function addTask(text, completed ){
    const li = document.createElement('li');
    const inputValue = document.createElement('p')
    const completeButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    //for userValue holder
    inputValue.textContent = text;
    if (completed) inputValue.classList.add('completed')

        // for completebuton
        completeButton.textContent = 'Complete'
        completeButton.addEventListener('click', () => {
            inputValue.classList.toggle('completed')
            saveTask()
        })
     
        //for deletebutton 
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', () =>{
            li.remove() 
            saveTask()
        })

        let divButton = document.createElement('div')
        divButton.appendChild(completeButton)
        divButton.appendChild(deleteButton)


        li.appendChild(inputValue)
        li.appendChild(divButton)

        theLists.appendChild(li)
}

    function saveTask(){
        let tasks = []
        theLists.querySelectorAll('li').forEach(li => {
            tasks.push({
                 text: li.querySelector('p').textContent,
                completed: li.querySelector('p').classList.contains('completed')
            }
            )
        })

        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function loadTasks(){
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.text, task.completed))
    }
