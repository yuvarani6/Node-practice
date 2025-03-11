const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://yuvaKrish:yuvaKrish0624>@cluster0.r6nbt.mongodb.net/SampleData?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    await client.close();
  }
}

connectDB();