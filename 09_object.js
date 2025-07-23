const Symbol1= Symbol("key1");

const anObject={
    name:"G. Morshed",
    [Symbol1]:"myKey",
    age:25,
    isGood:false,
    likeToDo:["eat","sleep"],
    "what is your name":"ok"

}

//Destructuring
const {age:a}=anObject;
console.log(a);

// console.log(anObject.name);
// console.log(anObject["isGood"]);
// console.log(anObject["what is your name"]);
// console.log(anObject[Symbol1]);
// console.log(anObject.age=29);//change the value of an object
// Object.freeze(anObject);//this is uesd for not to change the value of our object 


// const anobject1={}
// anobject1.name="G Morshed"
// anobject1.id=21
// console.log(anobject1.name);
// console.log(anobject1.id);

const regularUser={
    email:"myemail@gmail.com",
   fullName:{
    userfullname:{
        firstName:"shah",
        lastName:"mor"
    }
   }

}

// console.log(["regularUser.fullName.firstName"]);




// const user=[
//     {
//         email:"hello",
//         id:2354
//     },
//        {
//         email:"ok",
//         id:956
//     },
//        {
//         email:"new",
//         id:89
//     }
// ]
// console.log(user[2].email);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(regularUserhgj.hasOwnProperty('email'));



