function birthdayCakeCandles(candles) {
    // Write your code here

    candles.sort((a,b) => b - a);
    let tallestCandles = []
    candles.filter(element => {
        if(element == candles[0]){
            tallestCandles.push(element)
        }
    })

    return tallestCandles.length
}

birthdayCakeCandles([3, 2, 1, 3, 3, 2, 1, 3])

/* 
1 - WHAT IS THE BIGGEST VALUE OF THE ARRAY (order - sort)
2 - HOW MANY TIMES THIS VALUE APPEARS (count - filter)
3 - RETURN THIS NUMBER
*/