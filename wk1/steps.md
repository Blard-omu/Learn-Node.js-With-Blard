## Basic Routes for CRUD Operations

In this section, we'll create a simple Express application with routes for basic CRUD (Create, Read, Update, Delete) operations on a list of items.

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Sample data
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// Middleware to parse JSON requests
app.use(express.json());

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Read a specific item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

This Express application defines routes for creating, reading, updating, and deleting items. You can test these routes using a tool like Postman or by making HTTP requests in your browser.

These examples should give you a better understanding of using core modules and building basic routes for CRUD operations in a Node.js application.
