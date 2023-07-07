//MY TRIAL - half of hackerrank's cases did not work. I don't know why
function getMoneySpent(keyboards, drives, b) {
    /*Write your code here*/
    const possibleShops = [];
    let shop1 = 0;
    let biggestShop = 0

    for(let i = 0; i < keyboards.length; i++){
        for(let index = 0; index < drives.length; index++){
            possibleShops.push(keyboards[i] + drives[index]);
        }
    }

    for(let index2 = 0; index2 < possibleShops.length; index2++){
        if(possibleShops[index2] < b){
            shop1 = possibleShops[index2]
        }

        if(shop1 < possibleShops[index2 + 1] && possibleShops[index2 + 1] < b){
            biggestShop = possibleShops[index2 + 1];
        } else if ((possibleShops[index2 + 1] < shop1 && shop1 < b)){
            biggestShop = shop1;
        }
    }

    if(biggestShop == 0){
        console.log(-1);
    } else {
        console.log(biggestShop);
    }

    console.log(biggestShop);
    console.log(possibleShops);

}

getMoneySpent([40,50,60], [5,8,12], 20)

//YOUTUBE SOLUCTION :(
//exercise solution link: https://www.youtube.com/watch?v=nPjnn2QtrgA

function getMoneySpent(keyboards, drives, b){
    let bigger = 0;

    for(let key = 0; key < keyboards.length; key++){
        let sum = 0;        
        for(let usb = 0; usb < drives.length; usb++){
            sum = keyboards[key] + drives[usb];
            if(sum <= b) {
                sum > bigger ? bigger = sum : bigger;
            } else {
                sum = 0;
            }
        }
    }

    return bigger === 0 ? -1 : bigger;
}