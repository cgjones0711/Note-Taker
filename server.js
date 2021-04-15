const express = require("express");

// creates servers and sets port
const app = express();
const PORT = process.env.PORT || 5500

//data parsing for express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes for servers to respond
require("./notesRoute")(app)

// listens for PORT activity
app.listen(PORT,() => {
    console.log(${PORT});
    
})
