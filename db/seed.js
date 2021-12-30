const mongoose = require('./connections');
const seedData = require('./icecream.json');
const IceCreamSchema = require('../models/icecream');

IceCreamSchema.deleteMany({})
    .then(() => {
        IceCreamSchema.insertMany(seedData)
            .then((icecream) => {
                console.log(icecream);
                process.exit();
            })
    })
    .catch(err => console.log(err));