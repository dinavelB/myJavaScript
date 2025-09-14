const studentInfo = [
   
    ]
   
   
    function Students (name, grades = [], ifHonor){
        this.name = name;
        this.grades = grades;
        this.ifHonor = ifHonor;
       
        this.enterGrades = function (grade){
            let gradesExceeded = false
            if (grade.length > 8){
                console.log('Please enter grades per subject, not exceeding to 8 grades ')
               
                 return gradesExceeded = true
            }
            this.grades.push(...grade)
            return true;
        }
       
        this.honor = function (honor){
            this.ifHonor = honor
        }
       
        studentInfo.push({
            name: this.name,
            grades: this.grades,
            ifHonor: this.ifHonor
        })
    }

z
    //if it has a parameter its always referrring to object. sample is the s parameter
            //if parameterName.objectPropertyName = this always refers to object
            //the findIndex returns -1 if not found so you can use indexArray !== condition

    function updateStudentInfo(student){
        //in the shortcut function, the parameter of it always refers to the existing array and can access its existing objct properties
        //object can pass properties
        const indexArray = studentInfo.findIndex(s =>
            s.name === student.name)

            if(indexArray >= 0){
                studentInfo[indexArray] =  {
                    name: student.name,
                    grades: student.grades,
                    ifHonor: student.ifHonor
                }
            }
    }
   
    function averageTotal(student){
        if (student.grades.length === 0) return false;
       
        let total = 0
        for (let thegrades of student.grades){
            total += thegrades
        }
         let average = total / student.grades.length
         
        return average
    }
   
    const studentOne = new Students('Dinavel',[], false)
    studentOne.enterGrades([89,89,90,91,78,80,76,47])
    studentOne.honor(true)

    updateStudentInfo(studentOne)
   
    console.log(studentInfo)