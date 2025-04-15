let score= "33"
console.log(typeof (score));

let stringToNumber= Number(score);
console.log( typeof(stringToNumber));

let score1= "33adf"
let stringToNumber1= Number(score1);
console.log( typeof(stringToNumber1));
console.log( stringToNumber1); //This number is NaN

let score2= null
let stringToNumber2= Number(score2);
console.log( typeof(stringToNumber2));
console.log( stringToNumber2); //Null gives number 0


let score3= undefined
let stringToNumber3= Number(score3);
console.log( typeof(stringToNumber3));
console.log( stringToNumber3);

let score4= true
let stringToNumber4= Number(score4);
console.log( typeof(stringToNumber4));
console.log( stringToNumber4);

let score5= false
let stringToNumber5= Number(score5);
console.log( typeof(stringToNumber5));
console.log( stringToNumber5);

let a =1
let ab=Boolean(a);
console.log(ab);


let ba =0
let bab=Boolean(ba);
console.log(bab);


let number =55
let numberToString= String(number);
console.log(numberToString);
console.log(typeof(numberToString));



//"33" =>Number
//"33adf" =>null
// null => 0
//undefine => NaN
//true => 1
//false => 0
//1 or any number or string boolean => true
//0 => false
//"" if empty => false