/*
PASSO A PASSO PARA RESOLVER O PROBLEMA

1 - Saber quantos elementos diferentes tenho no array
  * Converter o array para um Set - new Set([...array])

2 - Contar a quantidade de pares em cada elemento desprezando um possível resto 1

3 - Somar a quantidade de pares.
*/


//MY TRIAL - worked in all cases, excpet one that has only one value for all array elements


function sockMerchant(n, ar) {
  // Write your code here
  let individualColors = new Set([...ar]);
  individualColors = new Array(...individualColors);
  
  let numberOfSocks = 0;
  let pairs = 0;
  
  for(let index = 0; index < individualColors.length; index++){
    ar.forEach((element) => {
      if(individualColors[index] === element){
        numberOfSocks++
      }
    })

    if(numberOfSocks % 2 === 0){
      pairs += numberOfSocks / 2;
    } else {
      pairs += (numberOfSocks - 1) / 2;
    }

    numberOfSocks = 0;
  }
  console.log(individualColors);
  console.log(pairs);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);


//YOUTUBE SOLUTION
const array42 = []

function createArray(){
  for(let index = 0; index < 100; index++){
    array42.push(42);
  }
}

createArray();

function sockMerchant2(n, ar) {
  // Write your code here
  
  let individualColors = new Set([...ar]);
  individualColors = Array.from(individualColors);
  
  let numberOfSocks = 0;
  let pairs = 0;
  
  for(let index = 0; index < individualColors.length; index++){
    ar.forEach((element) => {
      if(individualColors[index] === element){
        numberOfSocks++
      }
    })

    if(numberOfSocks % 2 === 0){
      pairs += numberOfSocks / 2;
    } else {
      pairs += (numberOfSocks - 1) / 2;
    }

    numberOfSocks = 0;
  }
  console.log(individualColors);
  console.log(pairs);
}

sockMerchant2(100, array42);