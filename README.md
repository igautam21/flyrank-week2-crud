# Task API

A simple RESTful CRUD API built using **Node.js**, **Express.js**, and **Swagger UI**.

## Features

- Create tasks
- Read all tasks
- Read task by ID
- Update task
- Delete task
- Health check endpoint
- Interactive Swagger API documentation

## Tech Stack

- Node.js
- Express.js
- Swagger UI

## Installation

```bash
npm install
```

## Run the project

```bash
node server.js
```

Server:

```
http://localhost:3000
```

Swagger Documentation:

```
http://localhost:3000/docs
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | API Information |
| GET | /health | Health Check |
| GET | /tasks | Get All Tasks |
| GET | /tasks/:id | Get Task By ID |
| POST | /tasks | Create Task |
| PUT | /tasks/:id | Update Task |
| DELETE | /tasks/:id | Delete Task |

## Author

**Gautam Yadav**