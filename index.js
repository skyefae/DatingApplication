const express = require('express');
const app = express();
const port = 3000;

//Idiomatic expression in express to route and respond to a client requestnode index
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})

//server starts listening for any attempts from a client to connect at port: {port}
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 
