const mongoose = require('../db/connections');


const IceCreamSchema = mongoose.Schema(

    {
        flavor : { type: String, require: true },
        brand : { type: String, require: true }
    
    },
    {
        timestamp : true
    }
)


const Icecream = mongoose.model('IceCream', IceCreamSchema);


module.exports = Icecream;