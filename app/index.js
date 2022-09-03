const express = require('express');

app = express();

app.get('', (req, res) =>{
    res.send('Welcome to the application');
});

app.listen(4500, ()=> {
    console.log('app running in port 4500');
});