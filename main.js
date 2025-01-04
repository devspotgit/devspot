

const express = require('express')
const templates = require("./templates.js")

const app = express()


app.use(express.static('static'))


app.get('/', (req, res) => {
   
    res.send(templates.home_page())
})

app.get('/website-template/:id', (req, res) => {

})

app.get('/website-template-category/:id', (req, res) => {


})

app.get('/website-template-search/', (req, res) => {

    
})



app.listen(80, () => {
    console.log('Server is running on http://localhost:80');
})


