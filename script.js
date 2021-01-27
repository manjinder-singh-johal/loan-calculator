let totalLoan;
let installments;
let interestRate;

const calculateEmi = () => {
    totalLoan = document.getElementById('totalLoan').value;

    if (document.getElementById('one-year').checked) {
        installments = 12;
        interestRate = 0.07;
    } else if (document.getElementById('two-year').checked) {
        installments = 24;
        interestRate = 0.08;
    } else if (document.getElementById('three-year').checked) {
        installments = 36;
        interestRate = 0.09;
    } else if (document.getElementById('four-year').checked) {
        installments = 48;
        interestRate = 0.1;
    } else {
        installments = 60;
        interestRate = 0.11;
    }

    const result = (totalLoan / installments) + ((totalLoan * interestRate)/installments);
    const finalAmount = parseFloat(totalLoan) + (totalLoan * interestRate);

    console.log(finalAmount);

    if (result === 0) {
        document.getElementById('output').innerHTML = `Please provide valid Amount`;
    } else {
        document.getElementById('output').innerHTML = `Your EMI Amount is Rs. ${result.toFixed(2)}. Your final payment is Rs.${finalAmount.toFixed(2)}`;
    }
}

const reset = () => {
    document.getElementById('totalLoan').value = '';
    document.getElementById('output').innerHTML = '';
}