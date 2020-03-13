// Const Variables of Packages/Dependencies:
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Express server built:
const app = express();

//Enabling packages:
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Endpoint (rest service):
app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} Your user was registered. Fine!`
    });
});

app.listen(process.env.PORT || 8081);