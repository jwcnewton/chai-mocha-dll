const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({type: 'application/json'}));


require('./controllers/home-controller')(app);

const server = app.listen(0, () => {
  let port = server.address().port;
  console.log('Listening at port:', port);
});

module.exports = app;
