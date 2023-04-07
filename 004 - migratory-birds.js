function migratoryBirds(arr) {
    // Write your code here
    const id1 = arr.filter(x => x == 1).length
    const id2 = arr.filter(x => x == 2).length
    const id3 = arr.filter(x => x == 3).length
    const id4 = arr.filter(x => x == 4).length
    const id5 = arr.filter(x => x == 5).length

    let totalIds = [id1, id2, id3, id4, id5]
    console.log(totalIds)
    
    let numbersAppeared = totalIds[0]
    let maxSpecies = 0

    for(let index = 1; index <= totalIds.length; index++){
        if(numbersAppeared < totalIds[index]){
            numbersAppeared = totalIds[index]
            maxSpecies = index
        }
    }

    maxSpecies += 1

    return maxSpecies
}

migratoryBirds([1, 4, 4, 4, 5, 3, 1, 3, 3, 3])

/* ========= YOUTUBER RESOLUTION ================

function migratoryBirds(arr) {
  let counts = {};
  arr.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  });

  const maxVal = Math.max(...Object.values(counts));
  // console.log(Object.keys(counts));
  const num = Object.keys(counts).find((key) => counts[key] === maxVal);

  return num;
}

console.log(migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 5]));

*/
