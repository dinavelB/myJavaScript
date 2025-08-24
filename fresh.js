/* correct way to add bigint and an integer;
// n = bigint indicator;
let x = 5n;
let z = Number(x) + 5;
console.log(`This is how to add a bigInt num, ${z}`)
*/

/*it says to the console cannot mix BigInt and other types.
let r = 5n;
let y = x / 2;
*/
    /*
    function personalInfo(name, age, height, gender){
        this.name = name;
        this.age = age;
        this.height = height;
        this.gender = gender;
    }   personalInfo.prototype.getFullInfo = function(){
            return `${this.name}, ${this.age}, ${this.height}, ${this.gender}, ${this.weigth}`
    };     
        personalInfo.prototype.setChangeDets = function(name, weigth){
            this.name = name;
            this.weigth = weigth;

    }; 
            const user1 = new personalInfo('Dinavel', 19, '154 cm', 'female')
                user1.setChangeDets('Dina', '42 kg')

    console.log(user1.getFullInfo())
    */

        const myObjects = {
            obj1: '1',
            obj2: '2',
            obj3: '3'
        }
        let resultObj = console.log(myObjects.obj1)

        const myArray = ['Item1',
            'item2',
            'item3',
            'item4',
            'item5'
        ]
        const addNewArray = myArray.push('items6')
        const resultAddArray = console.log(myArray)  
        const lengthArray = console.log(myArray.length)

        //Values in objects can be arrays, and values in arrays can be objects:
        const objArray = {
            itemName: 'manyItems',
            item : [
                {itemName: 'items', numberofItems:['1','2','3']},
                {itemName: 'item2', numberofItems: ['4', '5','6']}
            ]
        }
        /*
        let space = '';
        for (let i in objArray){
            space += '<h1>' + objArray.item[i].itemName + '</h1>';
            for (let h in objArray.item[i].numberofItems){
                x += objArray.item[i].numberofItems[j]
            }
        }
        console.log(space)
        */


        
        let arrayItems = myArray.length;
        let text = '<ul>';
        for (let i = 0; i < arrayItems; i++){
            text += '<li>' + myArray[i] + '</li>'
        }
        text += '</ul>';

        /*
        //Date objects are created with the new Date() constructor.
        const currentDate = console.log(new Date())

        // negative is -1, positive is positive 1, 0 is for 0;
        let num_1 = 2
        const mathSign = console.log(Math.sign(num_1))

        //returns the value of x to the power of y:
        const mathPow = console.log(Math.pow(2,2))
       
         //its always minus 1, instead of between 1 to 101, its 1 to 100;
       //if u want to exactly 101, you need to add 1, or just use a direct number that its above the desired number.
       const mathRandom = console.log(Math.floor(Math.random() * 101)) + 1
        */

       function buttonClick(){
        let age = document.getElementById('demo').value
        let voteAge = (age < 18) ? 'Too young' : 'Youre too old!'
        document.getElementById('demo').innerHTML = `${voteAge} to vote`
       }



