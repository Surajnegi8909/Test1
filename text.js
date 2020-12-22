// Ques1








//  Ques2
 function toupprcse()
{
    var name="gamepitra";

        console.log("Before capitalise => " + name);
    var newname= name.charAt(0).toUpperCase() + name.slice(1);
    console.log(" After capitalise => "+newname);
}
toupprcse();

// Ques3
var arr=[1,2,3.4];
arr.unshift("hello");
arr.push("bye");
console.log(arr);





























// function romanize(num) {
//     var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
//     for ( i in lookup ) {
//       while ( num >= lookup[i] ) {
//         roman += i;
//         num -= lookup[i];
//       }
//     }
//     return roman;
//   }
//   console.log(romanize(250));