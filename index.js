const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');

const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/hello', (req, res) => res.send (JSON.stringify({'chen': 'Hello guys'})))
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))