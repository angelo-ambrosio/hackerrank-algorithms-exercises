function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let yesNo = "NO"

    if(v2 > v1){
        console.log(yesNo)
        return yesNo
    }

    if (v1 == v2){
        console.log(yesNo)
        return yesNo
    }

    let jumps = 1
    let firstKangarooPosition = x1 + v1;
    let secondKangarooPosition = x2 + v2;

    while (firstKangarooPosition !== secondKangarooPosition){
        jumps++
        firstKangarooPosition = (firstKangarooPosition + v1)
        secondKangarooPosition = (secondKangarooPosition + v2)

        if(firstKangarooPosition > secondKangarooPosition){
            console.log(yesNo)
            return yesNo
        }

    }

    yesNo = "YES"

    console.log(yesNo, jumps)
    return yesNo
}

kangaroo(43, 2, 70, 2)


/*

It is necessary to discover, after how many jumps, they will be at the same position
   - Is this possible? Print "YES"
   - Is this not possible? Print "NO"

*/