

const express = require('express')
const app = express()

const api = require("./api.js")


app.get('/', (req, res) => {
    d=api.all_websites()
    api.sort_websites(d)
    res.send(d);
})



app.listen(80, () => {
    console.log('Server is running on http://localhost:80');
})


