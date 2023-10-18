// // console.log("Hello Blard from Node.js")
// // console.log(process);

const {addNum, minusNum} = require("./example");
// const {greetMe, greetMe1, greetMe2} = require("./greet");

addNum(1,2);
minusNum(2,7);
// greetMe("Blard") // Gooday Blard
// greetMe1("Nonso") // Gooday Nonso


// In-built node module
// os, path, fs, http, etc
const os = require('os');
// console.log(os.platform())
// console.log(os.totalmem())

const {platform, totalmem} = require('os')
// console.log("Your os is ", platform())
// console.log("Your total memory: ", totalmem())


// path
const path = require('path')
// console.log(path)
// const filePath = path.join(__dirname, 'wk1',  'lesson1.md')
// console.log(filePath)


// fs
const fs = require('fs')

// Reading file with fs.readFile()
// const filePath1 = 'text.txt'
// fs.readFile(filePath1, 'utf8', (err, data)=>{
//     if(err){
//         console.log('An error occur while reading the file: ', err)
//     }else{
//         console.log(data)
//     }
// })

// Assignment
// Using "fs", write into the text.txt file and log the new data to the console.


// Solution
// const fs = require('fs'); 

// Data to be written
const data = 'Hello, Tony just arrived';

// Writing to the file
// fs.writeFile('text.txt', data, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log('Data has been written to text.txt');
//     }
// });

// // Logging the data to the console
// console.log('Data:', data);


// // http server
// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello! Node server is up and running!');
// })

// const PORT = 8080

// server.listen(PORT, () =>{
//     console.log(`Server is running on port ${PORT}`)
// })


// Using third-party modules/libraries/frameworks
// npm install <package_name>
// express
const express = require('express')












