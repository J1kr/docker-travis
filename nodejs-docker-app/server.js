const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req,res) => {
    res.send("HI!!!. J1")
});

app.listen(PORT);
console.log("Server is running")