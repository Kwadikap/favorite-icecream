const express = require('express');
const mongoose = require('./db/connections.js');
const app = express();
const router = require('./controllers/icecream');
const CORS = require('cors');
const { append } = require('express/lib/response');



const PORT = process.env.PORT || 3000;

app.use(CORS());

app.use(express.json());



app.use('/icecream',router);



app.listen(PORT, () => console.log( `Server listening on port: ${PORT}`));