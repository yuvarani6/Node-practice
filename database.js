const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://yuvakrish0624:Uf0z7l6D5I1Su8up@cluster0.7fmsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ MongoDB Atlas connected successfully!");
        return client.db("myDatabase"); // Change "myDatabase" to your DB name
    } catch (error) {
        console.error("❌ MongoDB connection failed!", error);
        process.exit(1);
    }
}

module.exports = connectDB;
