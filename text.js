// Ques1
var num= 12345;
//first we are spliting the number and it will looks like a array, then we reverse the array the remove '' and join all the numbers
    var name1 = num.toString().split('').reverse().join('') 
    console.log("Old value => "+num+" new Value => "+name1);


//  Ques2
 function toupprcse()
{
    var name="gamepitra";
        console.log("Before capitalise => " + name);
        //here we take the first element or first character of name then converting it to UpperCase and then concating the name
        //by slicing the first character of string.
    var newname= name.charAt(0).toUpperCase() + name.slice(1);
    console.log(" After capitalise => "+newname); 
}
toupprcse();

// Ques3
var arr=[1,2,3,4];
//inserting the hello to thr arr[0] by inshif()
arr.unshift("hello");
//inserting the bye to the last of arr[3] by push()
arr.push("bye");
console.log(arr);


// Ques4
console.log(typeof(typeof(1)));   //here the typeof(1) is Number and if we do typeof(Number), so it will show the String

//Ques5

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;        // 6 is greater then 5, so roman will store V
        console.log(roman);
        num -= lookup[i];  // then sub the value to do equal number
        console.log(num);
      }
    }
    return roman;
  }
  console.log(romanize(6));

//what is the output
var hero={
    _name: 'john Deo',
    getSecretIdentity: function()
    {
        return this._name;
    }
};
var stoleSecretIdentity= hero.getSecretIdentity;
console.log(stoleSecretIdentity());       //undefined because we haven't call the function while assigning the value to stoleSecretIdentity. 
console.log(hero.getSecretIdentity());    //john Deo, here we directly seeing value from hero.getSecretIdentity() function, inside that we have name.


//what is the output

var num=4;     //a global variable
function outer()
{
    var num=2 //local variable for outer() but global variable for inner()
    function inner()
    {
        num++;
        var num =3;
        console.log(num);    // 3 bcoz num has been defined locally, so first function will look inside and show us the num value;
    }
    inner();
}
outer();

