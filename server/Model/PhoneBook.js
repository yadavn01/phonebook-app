const mongoose = require('mongoose');

const PhoneBookSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true 
        },
    phone: {
         type: Number, 
         required: true 
        }
},{strict: true});


module.exports = mongoose.model('PhoneBook', PhoneBookSchema);


