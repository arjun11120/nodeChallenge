const express = require('express');
const app = express();
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('stocks.csv')
.pipe(csv({}))
.on('data' , (data) => results.push(data))
.on('end', ()=>{
    console.log(results);
}) ,

app.get('/', (req, res) => {
    res.send('<h2>Hello from Express.js server!!</h2>');
});
  
// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});