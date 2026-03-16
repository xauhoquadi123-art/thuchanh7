function convertCurrency() {
let amount = document.getElementById('amount').value;
let fromCurrency = document.getElementById('fromCurrency').value;
let toCurrency = document.getElementById('toCurrency').value;
let result = document.getElementById('result');
const exchangeRate = 23000;
let convertedAmount = 0;
if(fromCurrency === 'VND'&& toCurrency === 'USD'){
    convertedAmount = amount/exchangeRate;}
else if (fromCurrency === 'USD'&& toCurrency === 'VND'){
    convertedAmount = amount*exchangeRate;
}
else{ convertedAmount = amount;}
result.innerText = "Result : " + convertedAmount +""+ toCurrency;}