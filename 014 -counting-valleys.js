function countingValleys(steps, path) {
    // MY TRIAL :(
    /*const newPath = path.split('');

    for(let index = 0; index < steps; index++){
        if(newPath[index] == "U"){
            newPath[index] = 1;
        } else {
            newPath[index] = -1;
        }
    }

    let valleys = 0;
    let previousStepsSum = 0;

    if(newPath[0] < 0){
        valleys++;
    }

    for(let index2 = 1; index2 < newPath.length; index2++){

        for(let index3 = 0; index3 < index2; index3++){
            previousStepsSum += newPath[index3];
        }

        if(previousStepsSum == 0 && newPath[index2] == -1){
            valleys++;
        }
    }

    console.log(newPath);
    console.log(valleys);*/

    //AFTER WATHING AN YOUTUBE EXPLANATION
    let valleys = 0;
    let elevation = 0;

    for(let index = 0; index < steps; index++){
        if(path[index] == "D"){
            elevation--
        } else{
            if(elevation == -1){
                valleys++
            }            
            elevation++
        }
    }

    return valleys
}

let pathExample = "DDUUDDUDUUUD"

countingValleys(12, pathExample);