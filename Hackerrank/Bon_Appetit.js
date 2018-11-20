function bonAppetit(bill, k, b) {
    let newArr = bill.splice(k, 1);
    let totalAmount = b - (bill.reduce((a, c) => a + c) / 2);
    totalAmount === 0 ? console.log("Bon Appetit") : console.log(totalAmount);
}
