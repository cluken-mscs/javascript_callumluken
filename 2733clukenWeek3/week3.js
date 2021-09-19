

const PRODUCT_TITLE = "Item";
const PRICE = 5.99;
const QUANTITY = 5;
const DISCOUNT = .2;

window.onload = initialize;


document.getElementById("touch").addEventListener("click", function (event) {
    calculate();
    event.preventDefault();
});


function initialize() {
    document.getElementById("prod").value = PRODUCT_TITLE;
    document.getElementById("pric").value = PRICE;
    document.getElementById("amount").value = QUANTITY;
}

function calculate() {
    let prodTitle = document.getElementById("prod").value;

    let price = document.getElementById("pric").value;
    let quant = document.getElementById("amount").value;

    let a = price * quant;

    let text = prodTitle +" costs $" +a.toFixed()+" per quantity of " + quant +".";
    let disc = (document.getElementById("discount").checked) ? DISCOUNT : 0;
    document.getElementById("output").innerHTML = text +" and has a $"+ (a*disc).toFixed() +" discount." ;
    document.getElementById("output").innerHTML = text +" and has a $"+ (a*disc).toFixed() +" discount." ;
}