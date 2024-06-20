const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
    {
        id: 1,
        name: "정현서",
        grade: 3,
    },
    {
        id: 2,
        name: "윤재국",
        grade: 3,
    },
];

app.get("/", (req, res) => {
    res.send("Express.js CRUD API");
});

// Create - POST
app.post("/items", (req, res) => {
    const newItem = req.body;
    newItem.id = items.length ? items[items.length - 1].id + 1 : 1;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read - GET 전체 목록
app.get("/items", (req, res) => {
    res.json(items);
});

// Read - GET 단일 항목
app.get("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = items.find((i) => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// Update - PUT
app.put("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex((i) => i.id === itemId);

    if (itemIndex !== -1) {
        const updatedItem = { ...items[itemIndex], ...req.body };
        items[itemIndex] = updatedItem;
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// Delete - DELETE
app.delete("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex((i) => i.id === itemId);

    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.status(204).send("데이터 삭제됨");
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
