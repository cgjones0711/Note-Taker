const express = require("express");
const path = require("path");
const fs = require("fs");
const noteData = require('../db/db.json');
// let = require("uniqid");

app.listen(PORT,() => {
    console.log(`App listening on PORT: ${PORT}`);
    
})

// creates servers and sets port
const app = express();
const PORT = process.env.PORT || 5500

//data parsing for express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//route sending user to first AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, "../db/db.json")));
    