function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    let applesInTheHouse = 0
    let orangesInTheHouse = 0

    apples.forEach(element => {
        if(a + element >= s && a + element <= t){
            applesInTheHouse++
        }
    })

    oranges.forEach(element => {
        if(b + element >= s && b + element <= t){
            orangesInTheHouse++
        }
    })

    console.log(applesInTheHouse)
    console.log(orangesInTheHouse)
    return

}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, 4])
