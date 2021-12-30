const mongoose = require('../db/connections');


const IceCream = mongoose.Schema(
    {
        flavor : { type: String, require: true },
        brand : { type: String, require: true }
    
    },
    {
        timestamp : true
    }
)

const Icecream = mongoose.Model('IceCream', IceCream);

module.exports = Icecream;