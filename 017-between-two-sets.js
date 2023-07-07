/*
    DONE BY MYSELF :)

    I admit that I had to go to Youtube in order to understand the problem.
    But, since I got what was expected, I solved the problem after thinking a lot kkk
*/

function getTotalX(a, b) {
        
    //setting multiples
    const multiples = [];
    const commonMultiples = [];

    for(let index = 0; index < a.length; index++){
        let controlNumber = 0;        
        for(let multiplier = 1; controlNumber < 100; multiplier++){
            multiples.push(a[index] * multiplier);
            controlNumber = a[index] * multiplier;    
        }
    }

    multiples.sort((x, y) => x - y);
    
    for(let index = 0; index < multiples.length; index++){
        if(multiples[index] == multiples[index + a.length - 1]){ //AQUI EU PRECISO QUE O NÚMERO SE REPITA a.length vezes
            commonMultiples.push(multiples[index]);
        }
    }

    //SETTING FACTORS
    const factors = [];
    const commonFactors = [];

    for(let index = 0; index < b.length; index++){
        let controlNumber = 100;
        for(controlNumber = 100; controlNumber >= 1; controlNumber--){
            if(b[index] >= controlNumber && b[index] % controlNumber == 0){
                factors.push(controlNumber);
            }
        }
    }

    factors.sort((x, y) => x - y);

    for(let index = 0; index < factors.length; index++){
        if(factors[index] == factors[index + b.length - 1]){
            commonFactors.push(factors[index]);
        }
    }

    //ANALYSING THE MATCH BETWEEN THE MULTIPLIERS AND THE FACTORS
    const finalArray = [];
    for(let index = 0; index < commonMultiples.length; index++){
        for(let j = 0; j < commonFactors.length; j++){
            if(commonMultiples[index] == commonFactors[j]){
                finalArray.push(commonMultiples[index]);
            }
        }
    }

    console.log(finalArray.length);

}

getTotalX([2, 6], [24,36]);
getTotalX([2, 4], [16, 32, 96]);