const mongoose = require('mongoose');

const PhoneBookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('PhoneBook', PhoneBookSchema);


