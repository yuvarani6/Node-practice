const path = require("path")
const fs = require("fs")

const dataFolder = path.join(__dirname, "Callback-hell-example")
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Callback hell folder is created")
}

const dataFile = path.join(dataFolder, "callback-hell.txt")
console.log("Callback hell file is created")

fs.writeFile(dataFile, "Hello from callback hell", (err)=>{
    if(err){
        console.log("While writing", err.message)
    }
    console.log("Data is written in the file")


    fs.readFile(dataFile, "utf-8", (err, data) => {
        if (err) {
            console.log("While reading", err.message)
        }
        else{
            console.log("Data fetched in the file", data)
        }
    })

    fs.appendFile(dataFile, "\n Next line is written", (err)=>{
        if(err){
            console.log("While appending", err.message)
        }
        console.log("Appending is successful")
    })


    fs.readFile(dataFile, "utf-8", (err, data) => {
        if (err) {
            console.log("While reading", err.message)
        }
        else{
            console.log("Data fetched in the file", data)
        }
    })

})
