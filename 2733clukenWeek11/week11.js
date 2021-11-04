"use strict";
let output = document.getElementById("output");
let formNode = document.getElementById("formid");

let queryString = location.search.slice(1);
console.log(queryString);

queryString = queryString.replace(/\+/g," ");
queryString = decodeURIComponent(queryString);
console.log(queryString);

let formData = queryString.split("&");
console.log(formData);

for (let items of formData) {
    let pair = items.split("=");
    let fieldLabel = document.createElement("li");
    fieldLabel.innerHTML = pair[0]+" = "+pair[1];
    formNode.appendChild(fieldLabel);
    let inputField = document.createElement("input");
    inputField.id = pair[0];
    inputField.name = pair[0];
    inputField.value = pair[1];
    inputField.hidden=true;
    formNode.appendChild(inputField);
}

for (let items of formData) {
    let pair = items.split("=");
    localStorage.setItem(pair[0],pair[1]);
}

for (let items of formData) {
    let pair = items.split("=");
    sessionStorage.setItems(pair[0],pair[1]);
}

console.log(localStorage.getItem('first_name'));
console.log(localStorage.first_name);

console.log(sessionStorage.getItem('first_name'));
console.log(sessionStorage.first_name);

function setCookie(name,value,expDate,path,domain,secure) {
    if (name && value) {
        let cStr= name + "="+encodeURIComponent(value);
        if (expDate) cStr += ";expires="+expDate.toUTCString();
        if (path) cStr += ";path="+path;
        if (domain) cStr += ";domain="+domain;
        if (secure) cStr += ";secure";
        document .cookie = cStr;
    }
}

let expDate = new Date("November 10, 2021");
setCookie("password", "keepPasswordPrivate",expDate, "","", "secure");

console.log(document.cookie);