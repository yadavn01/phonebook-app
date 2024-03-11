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


const DB = 'mongodb+srv://ynaman29:Kingbook232654%21@cluster0.ehvcym2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})
