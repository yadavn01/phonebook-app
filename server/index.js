const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const contactsRoutes = require("./Routes/contacts")

app.use(express.json())
app.use(cors())
app.use(contactsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

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


