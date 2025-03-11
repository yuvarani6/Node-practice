//callback ex:1

function greeting(name, callback){
    console.log(`Hello, ${name}`);
    callback();

}

function welcome(){
    console.log("Welcome to learn Node js")
}

greeting("yuva", welcome)

//data fetching and displaying using callback

function dataFetch(callback){
    console.log("Fetching data");

   
        setTimeout(() => {
            const data = {name : "alice", country: "america"}
            callback(data);
        }, 5000
        
    )
    }


    function callbackEx(data)
    {
        console.log("Data fetched", data);
    }

    dataFetch(callbackEx);


    //callback hell example

    function first(callback){
        setTimeout(()=>{
            console.log("In first file");
            callback();
        })
    }

    function second(callback){
        setTimeout(()=>{
            console.log("In second file");
            callback();
        })
    }

    function third(callback){
        setTimeout(()=>{
            console.log("In third file");
            callback();
        })
    }

    function fourth(callback){
        setTimeout(()=>{
            console.log("In fourth file");
            callback();
        })
    }


    first(()=>{
        second(()=>{
            third(()=>{
                fourth(()=>{
                    console.log("All done");
                })
            })
    })
})