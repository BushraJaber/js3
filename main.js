function convertCurrency() {
  
   const amount = Number(document.getElementById('amount').value);
    
    const currency = document.getElementById('exchange').value;
    
    const rateUSD = 3.5; 
    const rateJOD = 5;   
    
    let convertedAmount;
    if (currency === "USD") {
        convertedAmount = amount * rateUSD;
    } else if (currency === "JOD") {
        convertedAmount = amount * rateJOD;
    } else {
        convertedAmount = amount;
    }
    
    const resultElement = document.querySelector('.result');
    resultElement.textContent = `Converted Amount: ${convertedAmount} ${currency}`;
}