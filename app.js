var express = require('express');

var app = express(); // instance of express 

var port = 5000;

//set public directory as static directory 
//by using middleware 
app.use(express.static('public')); //for any request node checks if the file is present there 
//get index.html 
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('hello world');
});
app.get('/books', function (req, res) {
    res.send('hello books');
});



app.listen(port, function (err) {
    console.log('running server on port:' + port);
});
