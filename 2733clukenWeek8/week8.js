var customForm = document.forms[0];
var email = customForm.elements[0];
var password = customForm.elements[1];
var multiSelectList = document.getElementById("skills");
var selectList = document.getElementById("schoolYears");



customForm.onchange = changed;



function changed (event) { 
    
    console.log(email.value);

    console.log(selectList.options[selectList.selectedIndex].value);
    
    for (let i = 0; i < multiSelectList.options.length; i++) {
            if (multiSelectList.options[i].selected) {
                console.log(multiSelectList.options[i].value);
            }
    }

    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    if (password1.value != password2.value) {
        alert("Passwords do not match");
        return false;
    } 



    // validate email
    customForm.elements["exampleInputEmail1"].setCustomValidity("");
    if (customForm.elements["exampleInputEmail1"].validity.typeMismatch) {
        console.log("email is valid");
        customForm.elements["exampleInputEmail1"].setCustomValidity(customForm.elements["exampleInputEmail1"].value+ " is an invalid email");
    }else {
        console.log("Email is valid");
    }
    //validate password
    if (customForm.elements["password1"].validity.valid) {
        console.log("valid");
    }else{
        console.log("invalid");
    }
    if (customForm.elements["password2"].validity.valid) {
        console.log("valid");
    }else{
        console.log("invalid");
    }
    // validate billing address
    customForm.elements["billingCity"].setCustomValidity("");
    if (customForm.elements["billingCity"].validity.tooLong) {
        console.log("city is valid");
        customForm.elements["billingCity"].setCustomValidity(customForm.elements["billingCity"].value+ " is an invalid city");
    }else {
        console.log("City is valid");
    }
    customForm.elements["billingState"].setCustomValidity("");
    if (customForm.elements["billingState"].validity.tooShort) {
        console.log("state is valid");
        customForm.elements["billingState"].setCustomValidity(customForm.elements["billingState"].value+ " is an invalid state");
    }else {
        console.log("City is valid");
    }
    customForm.elements["billingZip"].setCustomValidity("");
    if (customForm.elements["billingZip"].validity.tooLong) {
        console.log("zip is valid");
        customForm.elements["billingZip"].setCustomValidity(customForm.elements["billingZip"].value+ "is an invalid zip");
    }else {
        console.log("Zip is valid");
    }
    // validate shipping address
    customForm.elements["shippingCity"].setCustomValidity("");
    if (customForm.elements["shippingCity"].validity.tooLong) {
        console.log("city is valid");
        customForm.elements["shippingCity"].setCustomValidity(customForm.elements["shippingCity"].value+ " is an invalid city");
    }else {
        console.log("City is valid");
    }
    customForm.elements["shippingState"].setCustomValidity("");
    if (customForm.elements["shippingState"].validity.tooShort) {
        console.log("state is valid");
        customForm.elements["shippingState"].setCustomValidity(customForm.elements["shippingState"].value+ " is an invalid state");
    }else {
        console.log("City is valid");
    }
    customForm.elements["shippingZip"].setCustomValidity("");
    if (customForm.elements["shippingZip"].validity.tooLong) {
        console.log("zip is valid");
        customForm.elements["shippingZip"].setCustomValidity(customForm.elements["shippingZip"].value+ "is an invalid zip");
    }else {
        console.log("Zip is valid");
    }
    // validate phone number
    customForm.elements["phone"].setCustomValidity("");
    if (customForm.elements["phone"].valid) {
        console.log("phone valid");
    } else{console.log("phone invalid");} 
    // validate second email
    customForm.elements["email2"].setCustomValidity("");
    if (customForm.elements["email2"].validity.typeMismatch) {
        console.log("email is valid");
        customForm.elements["email2"].setCustomValidity(customForm.elements["email2"].value+ " is an invalid email");
    }else {
        console.log("Email is valid");
    }

    






    customForm.elements["cc"].setCustomValidity("");
    if (customForm.elements["cc"].validity.patternMismatch) {
        console.log("cc invalid");
        customForm.elements["cc"].setCustomValidity(customForm.elements["cc"].value+ " is an invalid credit card number");
    }else {
        console.log("credit card valid");
    }

    customForm.elements["CVC"].setCustomValidity("");
    if (!(/^\d{3}$/).test(customForm.elements["CVC"].value)) {
        console.log("CVC invalid");
        customForm.elements["CVC"].setCustomValidity(customForm.elements["CVC"].value+" is an invalid CVC number");
    }else{
        console.log("CVC valid");
    }

    
   
}




customForm.onclick = addressFunction;

function addressFunction() {
    if (document.getElementById(
      "addressCheck").checked) {
        document.getElementById(
            "addressCityShip").value = 
        document.getElementById(
            "addressCityBill").value;
        
        document.getElementById(
            "addressStateShip").value = 
        document.getElementById(
            "addressStateBill").value;

        document.getElementById(
            "addressZipShip").value = 
        document.getElementById(
            "addressZipBill").value;


    } else {
        document.getElementById(
            "addressCityShip").value = "";
        document.getElementById(
            "addressStateShip").value = "";
        document.getElementById(
            "addressZipShip").value = "";
    }
    console.log(document.getElementById("addressCheck").value);
}



form.submit()