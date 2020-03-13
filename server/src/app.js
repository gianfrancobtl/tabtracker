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

//Endpoint:
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    });
});

app.listen(process.env.PORT || 8081);