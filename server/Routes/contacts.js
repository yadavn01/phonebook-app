const express = require('express');
const router = express.Router(); 
const PhoneBook = require("../Model/PhoneBook")

router.post('/add-phone', async(req,res) => 
{
    const phoneNumber = new PhoneBook(req.body)
    try {
        await phoneNumber.save();
        res.status(201).json({
            status: 'Success',
            data : 
            {
                phoneNumber
            }
        })

    }
    catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err.message
        })
    }
})

router.get('/', (req, res) => {
    res.send('Welcome to the Phone Book API');
});

module.exports = router