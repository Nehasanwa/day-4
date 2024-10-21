const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require()
const app = express()
const port = 3000

const productRoutes = require('./routes/productRoutes')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/products', productRoutes)

mongoose.connect('mongodb+srv://nehasanwal16:a3HbWOAucWMwzaVy@neha.h51bl.mongodb.net/?retryWrites=true&w=majority&appName=Neha')
.then(() => console.log("Mongodb is connected succesfully"))
.catch( err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })