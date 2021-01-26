let totalLoan;
let installments;

const calculateEmi = () => {
    totalLoan = document.getElementById('totalLoan').value;

    if (document.getElementById('one-year').checked) {
        installments = 12;
    } else if (document.getElementById('two-year').checked) {
        installments = 24;
    } else if (document.getElementById('three-year').checked) {
        installments = 36;
    } else if (document.getElementById('four-year').checked) {
        installments = 48;
    } else {
        installments = 60;
    }

    const result = totalLoan / installments;

    if (result === 0) {
        document.getElementById('output').innerHTML = `Please provide valid Amount`;
    } else {
        document.getElementById('output').innerHTML = `Your EMI Amount is Rs. ${result.toFixed(2)}`;
    }
}

const reset = () => {
    document.getElementById('totalLoan').value = '';
    document.getElementById('output').innerHTML = '';
}