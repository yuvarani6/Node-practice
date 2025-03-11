
//with resolve
function PromiseEx(name, time){
    return new Promise((resolve) => { setTimeout(() => {
        console.log(`Hello ${name}`)
        
    }, time);
})
}
PromiseEx("yuva", 2000)

//with resolve and reject

function Divide(num1, num2){
    return new Promise((resolve, reject) => {
        if(num2 === 0){
            reject(new Error("Cannot divide by Zero"))
        }
        else{
           
          resolve(num1/num2)  
          
            
        }
    })
}

Divide(10, 2)
.then(result => console.log("value is :", result))
.catch(error => console.log(error))

//With async & await

function delayedTm(time){
    setTimeout(()=>{
        console.log("Inside Delayed")
    }, time)
}

async function greet(name){
    await delayedTm(5000);
    console.log(`Async and await output : Hi ${name}`)
}

greet("yuva");