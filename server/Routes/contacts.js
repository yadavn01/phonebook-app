const express = require('express');
//const router = express.Router(); 
const PhoneBook = require("../Model/PhoneBook")
const app = express()


// Add body-parser middleware to parse incoming JSON requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/add-phone', async(req,res) => {
    const phoneNumber = new PhoneBook(req.body)
    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.get('/get-phone', async (req,res) => {
    const phoneNumbers = await PhoneBook.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                phoneNumbers
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.patch('/update-phone/:id', async (req,res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updatedPhone
            }
          })
    }catch(err){
        console.log(err)
    }
})

app.delete('/delete-phone/:id', async (req,res) => {
    await PhoneBook.findByIdAndDelete(req.params.id)
    try{
        res.status(200).json({
            status : 'Success',
            data : {}
          })
    }catch(err){
        console.log(err)
    }
})
module.exports = app