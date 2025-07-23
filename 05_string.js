const name="G. Morshed";
const age=25;

console.log("Hello,my name is " +name+". And my age is "+age);

console.log(`Hello,My name is ${name},And I am ${age} years old`);
const gameName= new String("PUBGisjossGame");
console.log(gameName);
console.log(gameName[2]);
console.log(gameName.length);//find out the length of string
console.log(gameName.toLowerCase());//make lowercase
console.log(gameName.charAt(2));//give number and it will give you the charactor of that number
console.log(gameName.indexOf('U'));//give you the index number
console.log(gameName.substring(0,5));
console.log(gameName.slice(-10,2));

const newOneString="          Hello,Let's go       "
console.log(newOneString);
console.log(newOneString.trim());


console.log(newOneString.replace('Hello','hi'));
console.log(newOneString.includes('Hello'));
console.log(newOneString.split(','));
