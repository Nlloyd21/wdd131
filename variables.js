

const PI = 3.14;
let radius = 3;
                  
let area = radius * radius * PI;
console.log(area);

// PI = 4; //will not work. Cannot change a constant


area = radius * radius * PI;
console.log(area);

// Type Coersion
const one = 1;
const two = '2';

let result = one * two;
console.log(result);

result = one + Number(two);
console.log(result);

// Scope

let course = "CSE131"; //global scope. Can be see inside or outside the scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
//When there is a mistake in JavaScript, it will stop and nothing after that mistake will show up in the console.
                    
                    
console.log("Hello world")