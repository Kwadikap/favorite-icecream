const express = require('express');
const IceCream = require('../models/icecream');
const router = express.Router();

router.get('/', (req, res) => {
    IceCream.find()
        .then(result => res.send(result));
});

router.post('/', (req, res) => {
    
    IceCream.create(req.body)
        .then(result => res.send(result))
        .catch(err => console.log(err));
})

module.exports = router;