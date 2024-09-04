export function calculateTotal(purchases, applyDiscount) {
    const sum = purchases.reduce((total, item) => {
        return total + item.count * item.price;
    }, 0)
    return applyDiscount ? sum * 0.5 : sum;

    // let result = 0;
    // for (let i = 0; i < purchases.length; i++) {
    //     result += purchases[i].count * purchases[i].price;
    // }
    // return result;

}

//module.exports = { calculateTotal };