

const PRODUCT_TITLE = "Item";
const PRICE = 5.99;
const QUANTITY = 5;
const DISCOUNT = .2;

let formname = document.getElementById("formname");
let Product = document.getElementById("Product");
let Expense = document.getElementById("Expense");
let Amount = document.getElementById("Amount");
let disco = document.getElementById("disco");
let reset = document.getElementById("reset");
let calculate = document.getElementById("calculate");


window.onload = initialize;


formname.addEventListener("change", function (event) {
    calculate_it();
    event.preventDefault();
});
calculate.addEventListener("click", function (event) {
    calculate_it();
    event.preventDefault();
});
reset.addEventListener("click", function (event) {
    initialize();
    output.innerHTML = `<div class="alert alert-warning alert-dismissible"" role="alert">
                        The form has been reset
                        <button type ="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
});

function initialize() {
    output.innerHTML = null;
}

function calculate_it() {
    let prodTitle = (Product.value) ? Product.value : "[Product]";

    let a = ((isNaN(Expense.value) || !Expense.value) ||  (isNaN(Amount.value) || !Amount.value)) ? alert("Please enter a number") : (Expense.value)*(Amount.value);

    let text = prodTitle +" costs $" +a.toFixed()+" per quantity of " + Amount.value +".";
    let discounted = (disco.checked) ? DISCOUNT : 0;
    output.innerHTML = text +" and has a $"+ (a*discounted).toFixed() +" discount." ;
}