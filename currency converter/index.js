// js code
function CurrencyConverter() {
    let AmountIn_YourCurrency = document.getElementById("AmInCurr").value;
    let ExchangeRate_OfCurrency = document.getElementById("ExRate").value;
    let ConvertedAmount = AmountIn_YourCurrency * ExchangeRate_OfCurrency;
    document.getElementById("CC1").innerHTML=("The Converted Amount Is " + ConvertedAmount);
    alert("The Converted Amount Is " + ConvertedAmount);
    console.log("The Converted Amount Is " + ConvertedAmount);
}