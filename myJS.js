
document.getElementById("input").innerHTML
document.getElementById("test").innerHTML = Student1.getPlace();


    //when its template literal ` ` you dont need the backslash for "" inside the string;
     //the space " " is for not making them super close to each other. at the concat() method;
        //however this approach is old school, use template literal for best approach;
    let words = `Hi, my name is "Dinavel"`;
    let hobby = `my Hobby is coding`;
    let combineString = words.concat(" ", hobby);

    //best approach, modernized and easy to read;
    let optimizedApproach = `${words} ${hobby}`;
    //this will return the character on the specified variable and postion "variable(position/index)" ans = H;
    let position = words.charAt(0);
    let slice = words.slice(-9); // this will count start from the end (start from 1), resulting the counted is the only one to be showed ("Dinavel");
    let sliceSlice = hobby.slice(-15,-10);//result will be (Hobby is coding to Hobby) spaces are counted as a index;

    const myObj = {
        obj1: "Object1",
        obj2: 'Object2',
        obj3: "Obj3"
    }

    for (const value of Object.values(myObj)){
        document.getElementById('demo').innerHTML += value + '<br>';
    }



    //prototype for shared instance method, avoiding memory feed up (saves memory);
function Students (firstName, surName, middleName){
        this.firstName = firstName;
        this.surName = surName;
        this.middleName = middleName;
} 
Students.prototype.getfullName = function (){
    return `${this.firstName} ${this.surName} ${this.middleName}`
};   
    Students.prototype.setPlace = function(birthPlace, currentPlace){
        this.birthPlace = birthPlace;
        this.currentPlace = currentPlace;
}; 
    Students.prototype.getPlace = function(){
        return `${this.birthPlace} ${this.currentPlace}`
};


    const Student1 = new Students ("Dinavel", "Binongo", "Escodero");
    Student1.setPlace("Maasin City", "Quezon City");

    