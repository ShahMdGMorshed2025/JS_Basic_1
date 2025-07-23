const users={
    userName:"GM",
    age:25,
    welcomeMessage: function(){
          console.log(`${this.userName},Hello`);
          console.log(this);
          
          
    }
}
// users.welcomeMessage();
// users.userName="Nur";
// users.welcomeMessage();

//  function welcomeMessage (){
//         userName="GM"
//           console.log(this.userNamenide);
          
          
//     }
// welcomeMessage();


// const welcomeMessage= ()=>{

//         userName="GM"
//           console.log(this.userNamenide);
          
          
//     }
// welcomeMessage();
// const addTwoNumber=(num1,num2)=> num1+num2;
    const addTwoNumber=(num1,num2)=> (num1+num2);


console.log(addTwoNumber(100,20));


// const addTwoNumber=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwoNumber(100,20));
