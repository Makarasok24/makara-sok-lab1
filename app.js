import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, CI/CD!");
});

// New function: Get user by ID
app.get("/user/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        id: id,
        name: `User ${id}`,
        email: `user${id}@example.com`
    });
});

export default app;