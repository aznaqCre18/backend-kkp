const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT_APP || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/', router);


app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`)
});