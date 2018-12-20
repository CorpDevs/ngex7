const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('./dist/ngex7'));


app.get('/*', function(req, res) {
  res
    .sendFile(path.join(__dirname, '/dist/ngex7/index.html'));
});

const server = app.listen(process.env.PORT || 8080, function() {
  const port = server.address().port;
  console.log('Express is working on port ' + port);
});
