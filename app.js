const dotenv = require('dotenv');
const express = require('express');


const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/blard', (req, res) => {
    res.send({
        id: 1,
        name: 'blard',
        email: 'blard@example.com',
        age: 36
    });
})

const port = process.env.PORT
const dbUrl = process.env.DB_URL
const apiSecret = process.env.API_SECRET

console.log(port);
console.log(dbUrl);
console.log(apiSecret);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})