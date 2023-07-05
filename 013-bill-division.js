function bonAppetit(bill, k, b) {
    
    let totalBill = 0;
    for(let index = 0; index < bill.length; index++){
        totalBill += bill[index];
    }
    
    let anaHasToPay = (totalBill - k) / 2;
    let brianHasToPay = totalBill - anaHasToPay;

    if (anaHasToPay == b){
        console.log("Bon Appetit");
    } else {
        let refund = b - anaHasToPay;
        console.log(refund);
    }

}

let exampleBill = [3,10,2,9];
bonAppetit(exampleBill, exampleBill[1], 7)

