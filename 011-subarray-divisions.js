function birthday(s, d, m) {
    // Write your code here
    
    let possibilities = 0
    let groupOfArrays = []

    for(let index = 0; index + m <= s.length; index++){
        let oneArray = []
        oneArray = s.slice(index, m + index)
        groupOfArrays.push(oneArray)
    }

    for(let index = 0; index < groupOfArrays.length; index++){
        let summing = 0
        for(let indexElement = 0; indexElement < groupOfArrays[index].length; indexElement++){
            summing += groupOfArrays[index][indexElement]    
        }

        if(summing == d){
            possibilities++
        }
    }
    
    return possibilities
}


birthday([1, 2, 1, 3, 2], 3 , 3)
/*birthday([1, 1, 1, 1, 1, 1], 3 , 2)
birthday([4], 4, 1)*/

/* The length of the segment matches Ron's birth month

The sum of the integers on the squares is equal to his birth day. 

Determine how many ways she can divide the chocolate.*/