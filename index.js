const express = require('express');
const app = express();
const router = require('./controllers/icecream');
const CORS = require('cors');

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(CORS());
app.use(express.json());

// CONTROLLERS
app.use('/icecream',router);

// START SERVER
app.listen(PORT, () => console.log( `Server listening on port: ${PORT}`));
