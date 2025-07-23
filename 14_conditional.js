const a=100;
if(a==100){
    var b=200;
    
}
    console.log(`a is gater then ${b}`);


    //falsy value
    //false,0,-0,0n,"",null,NaN,Undefine

    //truthy value
    //"0","false"," ",[],{},function(){}

    const useremail=[];
    if(useremail.length===0){
        console.log("yes,this is an array");
        
    }
    emptyObject={}
    if(Object.keys(emptyObject).length===0){
                console.log("yes,this is an object");


    }


    //Nullish coalescing operator ?? :null undefine
    let value;


    value = 5??10;
    value = null ?? 10;

    console.log(value);

    //terniery operator
    
    // condition ?ture : false 

    const iceCreamPrice=100;

    iceCreamPrice<=80?console.log("Price is low"):console.log("Price is high");
    
    