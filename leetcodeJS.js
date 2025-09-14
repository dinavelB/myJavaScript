
/*let tasks = [

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
    }
console.log(removeCTasks())
*/

const inventory = []

    // constructor with validity and auto push

function Product (productname, productprice, productquan, productcategory, id){
    if(typeof productname !== 'string'){
    throw new Error ('invalid input')
    }
    if(typeof productcategory !== 'string'){
    throw new Error ('invalid input')
    }
    if( productprice<= 0 || !Number.isInteger(productprice)){
    throw new Error ('price must be greater than zero')
    }
    if(productquan<= 0 || !Number.isInteger(productquan)){
    throw new Error ('quantity must be greater than zero')
    }
    if(id<= 0 || !Number.isInteger(id)){
    throw new Error ('the id of the product must be greater than zero')
    }

    this.productname = productname;
    this.productcategory = productcategory;
    this.productprice = productprice;
    this.productquan = productquan;
    this.id = id;

    inventory.push(this)

}
    //create a product then checks if it has errors by try and catch, this is connected to the validity in constructor

function createProduct(productname, productprice, productquan, productcategory, id){
    try {
      const createproduct = new Product(productname, productprice, productquan, productcategory, id)
      console.log('create successfully')
      return createproduct
    } catch (error){
      console.log('failed to create a product')
      return null;
    }
}
    //finds the productid and productname, returns failure if not found

function findProductbyID(productid, productname){
    const product = inventory.find(itemproduct => itemproduct.id === productid || itemproduct.productname === productname)
    return product? product : 'product not found'
}
    //adds a product quantity based on the product id

function restockProduct(productid, addQuantity){
    const product = findProductbyID(productid)

    if (typeof product === 'string'){
      return product
    }
    if (addQuantity <= 0 || !Number.isInteger(addQuantity)){
      return 'invalid quantity'
    }

    product.productquan += addQuantity
    return `Restocked! New quantity: ${product.quantity}`;
}




