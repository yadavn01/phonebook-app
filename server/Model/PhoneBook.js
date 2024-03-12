const mongoose = require('mongoose')

const PhoneBookSchema = new mongoose.Schema({
    name : {type: String, required: true},
    phone: {type:Number, requried: true}
})

const Phonebook = mongoose.model('PhoneBook', PhoneBookSchema)

module.exports = Phonebook


