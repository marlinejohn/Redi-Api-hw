const express = require('express');
const app = express();
const port = 3000;  

app.get('/welcome', (req, res) => {
    res.send('Welcome to my website !');
})

app.listen(port, () => {
    console.log(`My website is live on http://localhost:${port}/welcome`)
})