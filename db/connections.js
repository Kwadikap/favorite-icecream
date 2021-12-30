const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI)
    .then(result => console.log('Connected to database⭐️'))
    .catch(err => console.log(err));

module.exports = mongoose;