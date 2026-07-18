const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");

const app = express();

app.use(express.json());

const PORT = 3000;

// In-memory tasks
let tasks = [
    {
        id: 1,
        title: "Learn Express",
        done: false
    },
    {
        id: 2,
        title: "Complete FlyRank Assignment",
        done: false
    },
    {
        id: 3,
        title: "Push Code to GitHub",
        done: true
    }
];

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    });
});

// Health endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Get one task
app.get("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    res.json(task);
});

// Create a new task
app.post("/tasks", (req, res) => {

    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: title,
        done: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// Update task
app.put("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    const { title, done } = req.body;

    if (
        (title !== undefined && title.trim() === "") ||
        (title === undefined && done === undefined)
    ) {
        return res.status(400).json({
            error: "Provide title or done"
        });
    }

    if (title !== undefined) {
        task.title = title;
    }

    if (done !== undefined) {
        task.done = done;
    }

    res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    tasks.splice(index, 1);

    res.status(204).send();
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});