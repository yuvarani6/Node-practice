const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection (Database Name Included)
const DATABASE_NAME = "mydatabase"; // Change this to your desired DB name
const MONGO_URI = process.env.MONGO_URI || `mongodb+srv://yuvakrish0624:N6jQXg3sK5Yveac7@cluster0.7fmsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
    .connect(MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log(`✅ MongoDB Connected to Database: ${DATABASE_NAME}`))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1); // Exit if connection fails
    });

// ✅ Define Schema & Model
const ItemSchema = new mongoose.Schema({ name: { type: String, required: true } });
const Item = mongoose.model("Item", ItemSchema);

// ✅ CRUD Routes with Error Handling

// Create Item
app.post("/api/items", async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json({ error: "Name is required" });
        const item = new Item(req.body);
        await item.save();
        res.status(201).json({ message: "✅ Item created successfully", item });
    } catch (error) {
        next(error);
    }
});

// Get All Items
app.get("/api/items", async (req, res, next) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        next(error);
    }
});

// Get Single Item by ID
app.get("/api/items/:id", async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ error: "Item not found" });
        res.json(item);
    } catch (error) {
        next(error);
    }
});

// Update Item
app.put("/api/items/:id", async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json({ error: "Name is required" });
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).json({ error: "Item not found" });
        res.json({ message: "✅ Item updated successfully", item });
    } catch (error) {
        next(error);
    }
});

// Delete Item
app.delete("/api/items/:id", async (req, res, next) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ error: "Item not found" });
        res.json({ message: "✅ Item deleted successfully" });
    } catch (error) {
        next(error);
    }
});

// ✅ Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
