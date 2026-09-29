
// Declare and initialize marks variable
let marks = 54;

// Check grade conditions using if-else ladder
if (marks < 25) {
    console.log("Grade: F");  // Less than 25 is Grade F
} else if (marks >= 25 && marks <= 44) {
    console.log("Grade: E");  // Between 25 and 44 is Grade E
} else if (marks >= 45 && marks <= 49) {
    console.log("Grade: D");  // Between 45 and 49 is Grade D
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade: C");  // Between 50 and 59 is Grade C
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade: B");  // Between 60 and 69 is Grade B
} else if (marks >= 70) {
    console.log("Grade: A");  // 70 and above is Grade A
} else {
    console.log("Invalid marks entered.");  // Handles invalid inputs
}

function modify(a){
    a=a+10;

}

let x=5;
modify(x);
console.log(x);


// pass by refernce for objects/arrays 
function modify(obj){
    obj.value +=10;
}

let data = { value:5};

modify(data);

console.log(data.value); output:15






