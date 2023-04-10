function gradingStudents(grades) {
    // Write your code here

    let roundedGrades = []
    
    for(let index = 0; index < grades.length; index++){
        if(grades[index] % 5 == 3 && grades[index] >= 38){
            roundedGrades.push(grades[index] + 2)      
         } else if (grades[index] % 5 == 4 && grades[index] >= 38){
            roundedGrades.push(grades[index] + 1)          
         } else {
            roundedGrades.push(grades[index])
         }
    }
           
    return roundedGrades

}

gradingStudents([73, 67, 38, 33])
