const express = require("express");
const path = require("path");
const fs = require("fs");
let noteData = require("./db/db.json");
let uniqid = require("uniqid");

// creates servers and sets port
const app = express();
const PORT = process.env.PORT || 5500;

//data parsing for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);
app.get("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./db/db.json"))
);
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.post("/api/notes", (req, res) => {
  const noteTaker = req.body;
  let newId = uniqid();
  let noteAll = {
    id: newId,
    title: noteTaker.title,
    text: noteTaker.text,
  };
  noteData.push(noteAll);
  postNotes();
  res.json(noteData);
});

app.delete("/api/notes/:id", (req, res) => {
  let idDelete = req.params.id;

  console.log();
  noteData = noteData.filter((note) => note.id != idDelete);
  postNotes();
  res.json(noteData);
});

function postNotes() {
  const fileName = "./db/db.json";
  let fileArray = JSON.stringify(noteData);
  fs.writeFile(fileName, fileArray, (err) =>
    err ? console.log(err) : console.log("updating server")
  );
}

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
