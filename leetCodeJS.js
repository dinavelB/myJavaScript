
let tasks = [

]
function arrayLeetCode (theTasks, completed){
   return{
    theTasks,
    completed
   }
}
const task1 = arrayLeetCode('Buy Milk', true)
const task2 = arrayLeetCode('Buy Phone', true)
const task3 = arrayLeetCode('Buy Shoes', false)
const task4 = arrayLeetCode('Buy Case', false)
tasks.push(task1, task2, task3, task4)

function getPendingTasks(){
        // for of for arrays and for in for objects
        /*
        for (let _tasks of tasks){

            if(_tasks.completed === false)

            console.log(_tasks.theTasks, _tasks.completed)
            
             // this returns undefined because the function isnt returning a value
        }
            */

         return tasks
         // filter method lets you filtered of what value you want to get
         .filter(_task =>
            _task.completed === false
        )
        // the map method is to freely select the values you want to display in new aray 
        .map(_task => _task.theTasks)

    }
    function removeCTasks(){
        return tasks
        .filter(_tasks => _tasks.completed === false)
        
    }

    function toggletasks(tasks, text){
  return tasks.map(_task => {
    if (_task.theTasks === text) {
      return { ..._task, completed: !_task.completed } // ...objectName = this is a object spread it creates a copy of the original object
      // this also prints the object copy because of return key word
    }
    // this is an unchanged object to display
    return _task;
  });
}

        
    /*let array = {
        name: 'dina',
        age: 19
    }

    for(let theArr in array){
        console.log(theArr, array[theArr])
    }*/
console.log(removeCTasks())


