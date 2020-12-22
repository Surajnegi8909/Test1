var a=5;
var b=2;

console.log(add())

function add()
{
   
    console.log(a+b)
}

function add1(x,y)
{
    console.log(x*y)

}
add1(5,5);

const square = x=> 5*2;
console.log(square());

console.log("\u{1F609}"+"\u{1F601}"+"\u{1F602}"+"\u{1F603}"+"\u{1F604}"+"\u{1F605}"); 

let s = Symbol.for("shared");
let t = Symbol.for("shared");
s === t // => true
console.log(s.toString()) // => "Symbol(shared)"
console.log(Symbol.keyFor(t))

// let z=[1,2,3,4,5]
// z.push(6);
// // z.pop(1)
// console.log(z.length)

// let i=0,j=0;
// console.log(++i);
// console.log(j++);

let an = new Array(5); // No elements, but an.length is 5.
an = [8,9,0,9,6,4,4,7,7,9]; // Create an array with no elements and length = 0.
let l=0; 
var name="";
for(l=0;l<an.length;l++)
{

    name +=an[l];
}
console.log(name); 

let o= [1, 2, 3];
console.log(o.map(x => x*x))

const sum = (x, y) => { return x + y; };
console.log(sum(3,5));

// console.log(new Array(42));
// console.log(Array.of(42));

// var m = new Map([[1, 2], [2, 4], [4, 8]]);
// console.log("m is:");
// console.log(m);

// var _from = Array.from(m);
// console.log("After .from: ");
// console.log(_from);

// let ab = [1,2,3,4,5]
// delete ab[2];
// delete ab[4];
// console.log(ab);
// ac = ab.filter(x => x !== undefined && x !== null);
// console.log(ac);

// let ad = [1, [2, [3, [4]]]];
// console.log(ad.flat());


// let scope = "global scope"; // A global variable
// function checkscope() {
//  let scope = "local scope"; // A local variable
//  function f() { console.log(scope); } // Return the value in scope here
//  return f();

// }
// checkscope() 

let uniqueInteger = (function() { // Define and invoke
    let counter = 0; // Private state of function below
    return function() { return counter++; };
   }());
   console.log(uniqueInteger()) // => 0
   console.log(uniqueInteger()) // => 1

   var count =0;  
while (count <10)  
{  
     console.log(count);  
     count++;  
}





