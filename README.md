# Task API

A simple CRUD API built using Node.js and Express.

## Features

- Get all tasks
- Get a task by ID
- Create a task
- Update a task
- Delete a task
- Swagger UI documentation

## Technologies

- Node.js
- Express.js
- Swagger UI

## Run

```bash
npm install
node server.js
```

Server:

```
http://localhost:3000
```

Swagger:

```
http://localhost:3000/docs
```

## Endpoints

| Method | Endpoint |
|--------|----------|
| GET | / |
| GET | /health |
| GET | /tasks |
| GET | /tasks/:id |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

## Example

POST /tasks

```json
{
  "title": "Buy milk"
}
```

Response

```json
{
  "id": 4,
  "title": "Buy milk",
  "done": false
}
```

## Swagger

Add your Swagger screenshot here.

![Swagger](swagger.png)