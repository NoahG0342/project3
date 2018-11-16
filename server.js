require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', () => {
    console.log('mongoose is connected')
})

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
  
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  }) 

  const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})

