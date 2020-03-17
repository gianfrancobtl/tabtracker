// Const Variables of Packages/Dependencies:
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

// Express server built:
const app = express();

//Enabling packages:
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server stated on port ${config.port}`)
    })

require('./routes')(app);
require('./passport');

// app.listen(process.env.PORT || 8081);