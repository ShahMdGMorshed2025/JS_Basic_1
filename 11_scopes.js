// //if we use any variables here it will be gobal scope
// var c=6000;
// let a=5656;

// if(true)
//     {
//         //here this is block scope
//     let a =10;
//     const b=20;
//     var c=55;
// console.log("Inner: ",a);
// }
// console.log(a); // this will not print
// // console.log(b);// this will not print 
// console.log(c); // this will print 



// function one(){
//     userName :"GM",
//     function two(){
//         websiteName:"hello"
//         console.log(userName);
        
//     }
//     // console.log(websiteName);
//     two();
    
// }
// one();



//if we use only VAR then will work out of block scopes
//if we let or Const then it will not work out of scopes

// if(true){
//     var user="hello";
//     if(user==="hello"){
//         var a="okay";
//         console.log(`${user} ${a} ` );
        
//     }
//     console.log(a);
    
// }
// console.log(user);
