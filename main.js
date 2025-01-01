

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Happy new year 2025');
})



app.listen(80, () => {
    console.log('Server is running on http://localhost:80');
})


