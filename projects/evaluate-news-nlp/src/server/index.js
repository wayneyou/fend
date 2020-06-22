const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
var aylien = require('aylien_textapi')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

let values = {};
textapi.sentiment({
    'text': 'John is a very good football player!'
}, function (error, response) {
    if (error === null) {
        console.log(response);
        values = response;
    }
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App is listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

