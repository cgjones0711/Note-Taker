const express = require("express");
const path = require("path");
const fs = require("fs");
const noteData = require('./db/db.json');
// let uniqueId= require("uniqid");

// creates servers and sets port
const app = express();
const PORT = process.env.PORT || 5500

//data parsing for express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


    app.get('/', (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "./public/notes.html")));
    app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, "./db/db.json")));
    app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));

    app.post('/api/notes', (req, res) => {
        const noteTaker = req.body;
        let noteAll = {
            ID: "2",
            title: noteTaker.title,
            text: noteTaker.text
        };
           noteData.push(noteAll);
           res.json(noteData);
    });



app.listen(PORT,() => {
    console.log(`App listening on PORT: ${PORT}`);
    
});