const express = require('express');
const app = express();
const PORT = 8080;

// this is called before any endpoint is reached
// express.json() is a middleware
// it converts the body of the request into a json 
// then make thi json in our post callback handler
app.use( express.json() )

// this command launching our server on the port 8080
app.listen(PORT, () => {
    console.log(`it's alive at on http://localhost:${PORT} `);
});

// Adding an endpoint to the API
// we could do that by chaining a http verd to the app instance
// the callback function inside its called an handler. When the user requests this url 
// il will fire this callback function to handle the request

// req : is the incoming data
// res : is the response we want to send to the client (outgoing data)
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt:'👕',
        size : 'large'
    })
});


// :id is a route params. it captures dynamic values in the URL.
// in our case it will be the id of the tshirt
// when using a post request, it mean that the user is trying to create an new data on the server
app.post('/tshirt/:id', (req, res) => {
    
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    } 

    res.send({
        tshirt : `👕 with your ${logo} and ID of ${id}`,
    })
});