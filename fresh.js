
//Keep it DRY, Do Not Repeat Yourself. 
//this is callback callin another method.
function testLogger (inputValue){
      const result = textCase(inputValue)
      return result
}

function textCase (name){
    return `My Name is ${name}`
}

console.log(testLogger("dinavel"))