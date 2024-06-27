const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const { PORT, MONGO_URI } = process.env;

// Body parser middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Define a schema
const itemSchema = new mongoose.Schema({
    name: string,
    grade: Number,
});

const Item = mongoose.model("Item", itemSchema);

// Routes
// Create an item
app.post("/items", async (req, res) => {
    const item = new Item(req.body);
    newItem.id = itemt.length ? items[items.length - 1].id + 1 : 1;
    await item.save();
    res.status(201).send(item);
});

// Read all items
app.get("/items", async (req, res) => {
    const items = await Item.find({});
    res.send(items);
});

// Read an item by ID
app.get("/items/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
        return res.status(404).send();
    }
    res.send(item);
});

// Update an item by ID
app.patch("/items/:id", async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!item) {
        return res.status(404).send();
    }
    res.send(item);
});

// Delete an item by ID
app.delete("/items/:id", async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
        return res.status(404).send();
    }
    res.send(item);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
