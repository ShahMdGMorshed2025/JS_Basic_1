function myName(){
    console.log("GM");
}

myName();

function addTwoNumber(n1,n2)//this is call perameters
{
    // console.log(n1+n2);
    return n1+n2
    
}

addTwoNumber(10,85);// this is called arguments 

function userLongInfo(userName){
    return `${userName} loged in`
}
console.log(userLongInfo("hello"));


// function productCost(...cost)// rest operator
// {
//     return cost;
// }
// console.log(productCost(10,6,10,31));



// function productCost(value1,value2, ...cost)// rest operator
// {
//     return cost;
// }
// console.log(productCost(10,6,10,31));


const a={
    name:"GM",
    age:25
}

function newObject(ok){
    console.log(`hi,my name is ${ok.name} and I am ${ok.age}`);
    
}

newObject(a);
newObject({
    name:"Helloooooooooo",
    age:10
}
);

function numbers (...number){
    console.log(`here is our numbers ${number}`);
    

}
numbers([100,20,10]);