const mongoose = require('mongoose')

mongoose.connect(
'mongodb+srv://yuvaKrish:yuvaKrish0624@cluster0.r6nbt.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log("Database is connected!")).catch((e)=> console.log("Error occured", e));
const userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    age: Number,
    ph: Number, 
    tags: [String],    
    createdAt: {type: Date, default: Date.now()},
    isActive: String

})

const User = mongoose.model("User", userSchema)

async function userCreation(){
    try{
        const newUser = new User({
            name: "yuva", 
            email: "yuva@gmail.com",
         age: "22",
    ph: "9394967891", 
    tags: ["Developer", "Designer", "Engineer"],
    isActive: true
        })
        

        console.log("New user is created", newUser)
    }
    catch(e){
        console.log("Error Occured", e)
    }
    finally{
        await mongoose.connection.close()
    }
}

userCreation()



