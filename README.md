

# LEARN NODE.JS WITH BLARD

Node.js is a powerful runtime environment that has gained immense popularity among developers for building server-side applications. In this article, we will explore Node.js from the ground up, covering essential concepts, code snippets, and best practices.

## What is Node.js?

Node.js is an open-source JavaScript runtime environment built on the V8 JavaScript engine by Google. Unlike traditional JavaScript, which runs in web browsers, Node.js allows JavaScript to be executed on the server-side. Its non-blocking, event-driven architecture makes it an excellent choice for building fast and scalable applications.

Node.js is commonly used for web servers, APIs, real-time applications, and more. Let's dive into some fundamental aspects of Node.js.

## Running Node.js on the Terminal

Running Node.js applications is as simple as executing JavaScript files from the terminal. Here's how you can run a basic "Hello, World!" program:

```javascript
// hello.js
console.log("Hello, World!");
```

In the terminal:

```bash
node hello.js
```

This command will execute the `hello.js` file, and you will see "Hello, World!" printed to the terminal.

## Handling Modules in Node.js

Node.js leverages the CommonJS module system, allowing you to create reusable code modules. You can use `module.exports` to export a module and `require` to import it into other files.

**Example: Creating and using a module**

```javascript
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
```

```javascript
// main.js
const math = require('./math');

console.log(math.add(5, 3)); // Outputs: 8
console.log(math.subtract(10, 4)); // Outputs: 6
```

Node's module system makes it easy to organize and share code in your applications.

## Node Core Modules

Node.js comes with a set of built-in core modules that provide essential functionalities. Here are some notable core modules:

### OS Module

The 'os' module provides information about the operating system. You can use it to access data like the CPU architecture and free memory.

```javascript
const os = require('os');

console.log(os.platform()); // Outputs the platform (e.g., 'win32')
console.log(os.totalmem()); // Outputs the total system memory
```

### Path Module

The 'path' module handles file and directory paths. It's useful for manipulating file paths in a cross-platform way.

```javascript
const path = require('path');

const filePath = path.join(__dirname, 'myfolder', 'myfile.txt');
console.log(filePath); // Outputs the joined file path
```

### HTTP Module

The 'http' module allows you to create HTTP servers and clients. Let's create a simple HTTP server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, HTTP server!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

By running this code, you'll start an HTTP server that listens on port 3000 and responds with "Hello, HTTP server!" when accessed through a web browser or API request.

## Installing Third-Party Modules with npm

Node.js uses npm (Node Package Manager) to manage packages and dependencies. You can install third-party modules easily:

```bash
npm install package-name
```

For example, to install the popular Express.js framework:

```bash
npm install express
```

You can then require and use it in your Node.js application.

## Error Handling in Node.js

Error handling is crucial in Node.js applications. Use `try-catch` blocks or asynchronous error handling to manage exceptions effectively.

**Example: Asynchronous error handling with callbacks**

```javascript
const fs = require('fs');

fs.readFile('nonexistent-file.txt', (err, data) => {
  if (err) {
    console.error('An error occurred:', err.message);
    return;
  }
  console.log('File content:', data.toString());
});
```

## Building an HTTP Server: GET, POST, DELETE

Node.js excels at creating HTTP servers. You can build a server that handles various HTTP methods such as GET, POST, and DELETE. Here's a simplified example:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('GET request received');
  } else if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('POST request received');
  } else if (req.method === 'DELETE') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('DELETE request received');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

This code creates an HTTP server that responds to GET, POST, and DELETE requests.

---


--NB: This content will be updated periodically @BLARD_DEV 2023

