const { use } = require("react");

// 1
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const age =document.getElementById("age").value;
    console.log(age);
    let status;
    if (age < 13) {
        status = "child";
    } 
    else if (age >= 13 && age <= 17) {
        status = "teen";
    } 
    else {
        status = "adult";
    }

    console.log(status);
})

// 2
let x = 0;
if (x) { console.log("truthy"); } else { console.log("falsy");
} // 0 means false in js

//3 
let num = -5;

if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//4
let a = "10";
let b = 10;

// Using ==
if (a == b) {
    console.log("a == b is TRUE ");
} else {
    console.log("a == b is FALSE");
}

// Using ===
if (a === b) {
    console.log("a === b is TRUE");
} else {
    console.log("a === b is FALSE ");
}

//5
const form2 = document.getElementById("myForm2");

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    const score =document.getElementById("score").value;
    if (score >= 90) {
    console.log("A");
} 
else if (score >= 80) {
    console.log("B");
} 
else if (score >= 70) {
    console.log("C");
} 
else if (score >= 60) {
    console.log("D");
} 
else {
    console.log("F");
}
})

//6

let temp = 30;

if (temp > 30) {
    console.log("hot");
} 
else if (temp >= 20) {
    console.log("warm");
} 
else {
    console.log("cold");
}

//7
let n = 7; 

if (n % 2 === 0) {
    console.log("even");
} 
else {
    console.log("odd");
}
//8
const user = {role: "editor", active: true};

if((user.role === "admin" || user.role === "editor") && user.active === true) {
    console.log("can-edit");
}
