
const express = require('express'); //defining express

const bodyParser = require('body-parser'); //defining bodyParser

const app = express(); //creating the express app

app.use(bodyParser.json()); //adding a generic JSON with body-parser

app.use(bodyParser.urlencoded({ extended: false})); //adding an URL-encoded with body-parser

app.get('/', (req, res)=> {
    res.send('OK')
});

require('./controller/authController')(app);

app.listen(3000);