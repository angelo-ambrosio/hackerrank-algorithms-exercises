function miniMaxSum(arr){
    arr.sort((a, b) => a - b)
      
    let miniSum = 0;
    let maxSum = 0;

    for(let indexMini = 0; indexMini < 4; indexMini++){
        miniSum += arr[indexMini]
    }

    for(let indexMax = 1; indexMax <= 4; indexMax++){
        maxSum += arr[indexMax]
    }

    console.log(miniSum, maxSum)
}

miniMaxSum([1, 5, 3, 4, 2])