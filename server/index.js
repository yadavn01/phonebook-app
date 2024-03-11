const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
const PORT  = 8080
app.listen(PORT, ()=> 
{
    console.log(`server is running on port ${PORT}...`);
})


const DB = ''
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})
