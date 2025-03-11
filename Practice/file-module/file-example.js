const { error } = require("console")
const fs = require("fs")
const path = require("path")


const dataFolder = path.join(__dirname, "sync folder")

//synchronous way of creating folder
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("sync folder is created")
}

//creating file in the folder
const file = path.join(dataFolder, "example.txt")
console.log("File is created Successfully!")

//synchronous way of writing into file

fs.writeFileSync(file, "Hello, the content is written inside the file successfully!")
console.log("Content is written!")

//synchronous way of reading the file

const dataInfile = fs.readFileSync(file, "utf-8")
console.log("Data in the file:", dataInfile);

//synchronous way of adding next line in the file

fs.appendFileSync(file, "\nAnother line is written successfully")
const dataInModfile = fs.readFileSync(file, "utf-8")
console.log("Data in the modified file:", dataInModfile);

//asynchronous way of creating folder
const asyndataFolder = path.join(__dirname, "async folder")
if(!fs.existsSync(asyndataFolder)){
    fs.mkdirSync(asyndataFolder)
    console.log("async folder is created")
}


//asynchrous way of creating file in the folder

const asyncfile = path.join(asyndataFolder, "async.txt")
console.log("async file is created")

fs.writeFile(asyncfile, "Hello this is async file",(error)=> {
    if(error){ 
        console.log("Error occured while creating file:",error)
    }
    console.log("content written in the asyns file")
})

fs.readFile(asyncfile, "utf-8", (error, data)=>{
    if(error){
        console.log("Error while reading async file:", error)
    }
    else{
        console.log("Data in the async file:", data)
    }
})

fs.appendFile(asyncfile, "\n Next line in async file", (error)=>{
    if(error){
        console.log("Error while appending in async file:", error)
    }
    else{
        console.log("Next line is appended in the async file")  
    }
})

fs.readFile(asyncfile, "utf-8", (error, data)=>{
    if(error){
        console.log("Error while reading async file:", error)
    }
    else{
        console.log("Data in the async file:", data)
    }
})


