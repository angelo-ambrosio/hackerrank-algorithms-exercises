function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0

    for(let index = 0; index < ar.length; index++){
        for(let index2 = index + 1; index2 < ar.length; index2++){
            let sum = 0
            sum = ar[index] + ar[index2]

            if(sum % k == 0){
                count++
            }
        }        
    }

    console.log(count)
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])