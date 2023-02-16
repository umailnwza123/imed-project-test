const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var axios = require('axios')


const app = express()

var jsonParser = bodyParser.json()
app.use(cors())
app.use(jsonParser);

app.get('/test', jsonParser, function (req, res) {
    res.json({ msg: 'Hello Form Server' })
})

app.get('/nobelPrize', jsonParser,  function (req, res) {
    axios.get('http://api.nobelprize.org/2.1/nobelPrizes')
        .then(async function (response) {
            res.json({status: 'success', Nobel: response.data.nobelPrizes})
        })
        .catch(function (error) {
            console.log(error);
        })
})

app.listen(5000, () => {
    console.log('Server is running')
})