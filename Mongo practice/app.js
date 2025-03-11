const mongoose = require("mongoose");



mongoose.set("debug", true);


const uri = "mongodb+srv://yuvaKrish:yuvaKrish0624@cluster0.r6nbt.mongodb.net/SampleData?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


