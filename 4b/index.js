const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

// parsing middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse json
app.use(bodyParser.json());

// static files
app.use(express.static('public/image'));

// templating engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// router
const routes = require('./server/routes/user');
app.use('/', routes);

// listen
app.listen(process.env.PORT, () =>
    console.log(`app is running at port ${process.env.PORT}`)
);
