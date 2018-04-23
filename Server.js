const express = require('express');
const app = express();

app.all('*',  (req, res, next) => {
    next();
});

const port = 8080;

app.listen(port, () =>{
    console.log('The magic happens at: localhost:' + port);
});

module.exports = app;
