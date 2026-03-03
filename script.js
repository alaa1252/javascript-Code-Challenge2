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
// let n = 7; 

// if (n % 2 === 0) {
//     console.log("even");
// } 
// else {
//     console.log("odd");
// }
//8
const user = {role: "editor", active: true};

if((user.role === "admin" || user.role === "editor") && user.active === true) {
    console.log("can-edit");
}

// 9
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 10
let i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}

// 11
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 3);

// 12
for (let i = 1; i <= 10; i++) {
    console.log(3 * i);
}

// 13
let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}

// 14
let n = 5;
let factorial = 1;
for (let k = 1; k <= n; k++) {
    factorial *= k;
}
console.log(factorial);

// 15
let str = "";
for (let i = 0; i < 5; i++) {
    str += "#";
}
console.log(str);

// 16
let countDiv = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        countDiv++;
    }
}
console.log(countDiv);

// 17
const day = "Tue";

switch(day) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
        console.log("weekday");
        break;
    case "Sat":
    case "Sun":
        console.log("weekend");
        break;
    default:
        console.log("invalid day");
}

// 18
const month = 4; 
let season;

switch(month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn";
        break;
    default:
        season = "Invalid month";
}
console.log(season);

// 19
const color = "green";

switch(color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow");
        break;
    default:
        console.log("go");
}

// 20
const command = "pause";

function start() { 
    console.log("start function called"); 
}
function stop() { 
    console.log("stop function called"); 
}
function pause() { 
    console.log("pause function called");
 }

switch(command) {
    case "start":
        start();
        break;
    case "stop":
        stop();
        break;
    case "pause":
        pause();
        break;
    default:
        console.log("unknown");
}

