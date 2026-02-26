//1 
// print into the conscle
/*
print
hello

*/
console.log("Hello JavaScript World");

//3
console.log("alaa alawneh // 22 years old // palestine");

//4
console.log("5" + 5); // 55 will be printed

//5
console.log(10 + 20 + "30"); // first operation is arthmitic second is concationation.

/////////////////////////////////

//6
var x = 5;
console.log(x);
var x = 10;
console.log(x); // var allows redecloration and reassigment

//7
let y = 5;
console.log(y);
y = 10;
console.log(y); // let allows reassigment but not redecloration.

//8
const pi = 3.14
//pi = 4; cant reassign or redeclare a const.

//9
function scope1() {
  if (true) {
    var x = 10;
    let y = 20;
  }

  console.log(x); // var is block scope
  // console.log(y); let is block scope
}

scope1();

//10
const city = "Paris";
//city = "London"; cant reassign a const

//11



