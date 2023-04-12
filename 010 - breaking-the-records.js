function breakingRecords(scores) {
    // Write your code here

    let maxRecord = scores[0]
    let minRecord = scores[0]

    let maxRecordCount = 0
    let minRecordCount = 0

    for(let index = 0; index < scores.length; index++){
        if(scores[index] > maxRecord){
            maxRecordCount++
            maxRecord = scores[index]
        }

        if(scores[index] < minRecord){
            minRecordCount++
            minRecord = scores[index]
        }
    }

    let result = [maxRecordCount, minRecordCount]
    return result

}

breakingRecords(10, 5, 20, 20, 4, 5, 2, 25, 1)