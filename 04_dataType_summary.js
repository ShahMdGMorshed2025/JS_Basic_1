//primitive(call by value)

// 7 types:

// string
// number
// Boolean,null(null mean not 0 it is empty)
// undefine(variable is declare but value is not enter)
//symbol
//BigInt


const a=20;
const ab=20.3;
const bol=true;
const ac=null;
let ad;//undefine

const id=Symbol("123");
const idok=Symbol("123");

console.log(id===idok);


//Non-primitive(call by reference)

//arrry 
//object
//function


const Arrayok=["Mor","sh","ed"];
const MyObject = {
  MYnamE: "my",
  age: 12
}

const Myfunction= function(){
    console.log("Hello world");
    
}

console.log(typeof(Arrayok));
console.log(typeof(MyObject));
console.log(typeof(Myfunction));



//Stack(primitive),Heap(Non-primitive)
let x=5;
let y=x;
y=111;
console.log(x);
console.log(y);

let newObject={
  email:"aba@gmail.com",
  password:"ajdsfkja"
};
let okObject=newObject;
okObject.email="new@gmail.com"
console.log(newObject.email);
console.log(okObject.email);
