// function service(ser1,ser2){
//     ser1();
//     const awake = false;
//     if(!awake){
//         return ser2();
//     }
    
// }

// const call=()=>{
//     console.log("make phone call");
// }
    
// const knock=()=>{
//     console.log("knock the door");
// }
   

// service(call,knock);



const makePhonecall=({phone})=>{
    console.log(phone);
}

const sendEmail=({email})=>{
    console.log(email);
}

function contact(makePhonecall,sendEmail){
    
    makePhonecall({phone:123455});
}

contact(makePhonecall,sendEmail);