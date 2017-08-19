const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.use(express.static('client/build'));


const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

});
