const express = require('express');
const app = express();

app.all('*',  (req, res, next) => {
    next();
});

const port = 8080;

app.get('/hello', (req, res, next) =>{
    res.status(200).json({
        'msg' : 'Hello JEDI\'s'
    });
});


app.listen(port, () =>{
    console.log('The magic happens at: localhost:' + port);
});

module.exports = app;
