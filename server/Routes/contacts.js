const express = require('express');
//const router = express.Router(); 
const PhoneBook = require("../Model/PhoneBook")
const app = express()


// Add body-parser middleware to parse incoming JSON requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/add-phone', async(req,res) => 
{
    const phoneNumber = new PhoneBook(req.body)
    try {
        await phoneNumber.save();
        res.status(201).json({
            status: 'Success',
            data : { phoneNumber }
        })

    }
    catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err.message
        })
    }
}
)

app.get('/', (req, res) => {
    res.send('Welcome to the Phone Book API');
});

module.exports = app