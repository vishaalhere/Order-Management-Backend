const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')

app.use(cors())
app.use(express.json()); //to send a response res.send use krne ke liye

connectToMongo();

//routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/orders', require('./routes/orders'))

app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`);
})
