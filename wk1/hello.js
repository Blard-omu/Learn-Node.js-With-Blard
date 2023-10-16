// // console.log("Hello Blard from Node.js")
// // console.log(process);

// const math = require("./example");
// const {greetMe, greetMe1, greetMe2} = require("./greet");

// math.addNum(1,2);
// math.minusNum(2,7);
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
const filePath1 = 'text.txt'
fs.readFile(filePath1, 'utf8', (err, data)=>{
    if(err){
        console.log('An error occur while reading the file: ', err)
    }else{
        console.log(data)
    }
})

// Assignment
// Using "fs", write into the text.txt file and log the new data to the console.

console.log(global);

