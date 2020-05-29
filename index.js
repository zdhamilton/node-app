// import node framework
var express = require('express');

var app = express();

// respond with "hello world" for requests that hit root "/"
app.get('/', (req, res) => {
    res.send('hello world whats up');
});

// listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;