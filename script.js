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
