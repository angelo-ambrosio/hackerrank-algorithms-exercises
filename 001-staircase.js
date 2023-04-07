function staircase(n) {
    // Write your code here
    let space = " "
    let symbol = "#"

    
    let stair = ""
    
    for(let index = 0; index < n; index++){
        let stairRow = ""
        for(let indexColumn = 0; indexColumn < n; indexColumn++){
            if(indexColumn < (n - index - 1)){
                stairRow += space
            } else {
                stairRow += symbol
            }
        }
        stairRow += "\n"        
        stair += stairRow
    }
        console.log(stair)
}

staircase(60)