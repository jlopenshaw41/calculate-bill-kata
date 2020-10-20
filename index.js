const calculateBill = (price, vat, tip) => { 
    let amount;
    const errorMessage = 'error';

    if (typeof(price) === 'number' && typeof(vat) === 'number' && typeof(tip) === 'number') {

        amount = price + (price * vat / 100) + tip;

        return "£" + amount;
    } else {
        return errorMessage;
    }
};


module.exports = calculateBill;