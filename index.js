require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./Routes/Routes')
require('./Connection/db')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


const PORT = 4000 || process.env.PORT


app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})

