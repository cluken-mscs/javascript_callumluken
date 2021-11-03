"use strict";
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
// let output3 = document.getElementById("output3");

// create an object literal
let apartment = {
    bathrooms: 2,
    rent: 500.0,
    utilities: 100.0,
    renter: "Tenant",
    administrator: "Landlord",
    complexNumber: [1, 2, 3, 4],
    lastRented: null
};

output.innerHTML = "<p>apartment.administrator= " + apartment.administrator;
output2.innerHTML = "<p>apartment[\"administrator\"] = " +apartment["administrator"];

let apartment2 = {
    bathrooms: 2,
    costs: {
        rent: 500.0,
        utilities: 100.0}, 
    renter: "Tenant",
    administrator: "Landlord",
    complexNumber: [1, 2, 3, 4],
    lastRented: null
}

output.innerHTML += "<p>apartment2.costs.rent = "+apartment2.costs.rent;

let apartment3 = {
    bathrooms: 2,
    costs: {
        rent: 500.0,
        utilities: 100.0
    }, 
    renter: "Tenant",
    administrator: "Landlord",
    complexNumber: [1, 2, 3, 4],
    leaseStart: null,

    damageCosts: function() {
        let damage = .25;
        let expenses = apartment3.costs.rent;
        let total = damage * expenses;
        return "$" + total;
    }
};
output.innerHTML += "<p>Damage Cost = "+apartment3.damageCosts();

let apartment4 = new Object();
apartment4.administrator = "Landlord";
apartment4.renter = "Tenant";
apartment4.bills = 800;
apartment4.damageCosts = function() {
    let damage = .25;
    let expenses = apartment4.bills;
    let total = damage * expenses;
    return "$" + total;
}

output.innerHTML += "<p>Reusable Object Damage Cost = "+apartment4.damageCosts();

// function Apartment(administrator, bills) {
// this.administrator = administrator;
// this.bills = bills;
// this.damageCosts = function() {
//     let damage = .25;
//     let expenses = bills;
//     let total = damage * expenses;
//     return "$" + total;
// };
// }

// let unit1 = new Apartment("Unit 1", 1000)
// let unit2 = new Apartment("Unit 2", 2000)
// let unit3 = new Apartment("Unit 3", 1500)

// output.innerHTML += "Unit 1: " + unit1.damageCosts() + ", ";
// output.innerHTML += "Unit 2: " +unit2.damageCosts() + ", ";
// output.innerHTML += "Unit 3: " +unit3.damageCosts();

function Apartment2(administrator, bills) {
    this.administrator = administrator;
    this.bills = bills;
}

Apartment2.prototype.damageCostsPROTO = function () {
    let damage = .25;
    let expenses = this.bills;
    let total = damage * expenses;
    return "(from Prototype: $" + total + ")";
}

let unit1 = new Apartment2("Unit 1", 4000);
let unit2 = new Apartment2("Unit 2", 5000);
let unit3 = new Apartment2("Unit 3", 6000);

output.innerHTML += "Unit 1: " + unit1.damageCostsPROTO()+ ", ";
output.innerHTML += "Unit 2: " + unit2.damageCostsPROTO()+ ", ";
output.innerHTML += "Unit 3: " + unit3.damageCostsPROTO();


function Apartment3(administrator, bills) {
    this.administrator = administrator;
    this.bills = bills;

function damageCosts() {
    let damage = .25;
    let expenses = bills;
    let total = damage * expenses;
    return total;
}

this.showDamageCosts = function() {
    return "<P>(from PUBLIC)" + this.administrator+" owes $"+damageCosts() +" in damages.";
    }
}

let Apartment5 = new Apartment3("Unit 1", 10000);

output.innerHTML += Apartment5.showDamageCosts();
// output.innerHTML += Apartment5.damageCosts();

function tenant1() {
    this.tenant = null;
    this.getTenant = function () {
        return this.tenant;
    }
}
function rent1() {
    this.rent = null;
    this.getRent = function() {
        return this.rent;
    }
}
function totals1(amount) {
    this.totals = amount;
    this.getTotals = function () {
        return this.totals + " " + this.getRent() + "<p>";
    }
}

totals1.prototype = new rent1();
rent1.prototype = new tenant1();

let newPerson = new totals1("Tenant");

newPerson.rent = "rent costs $" + 650;
newPerson.tenant = "Person 1, ";
output.innerHTML += newPerson.tenant += newPerson.getTotals();

let json = JSON.stringify(newPerson);
output.innerHTML += "<p>"+json;

let newObject = JSON.parse(json);
output.innerHTML += "<p>"+newObject.rent;

