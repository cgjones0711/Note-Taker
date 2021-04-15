// LOAD DATA
    const notes = require('../data/notes');

// ROUTING
    module.exports = (app) => {
  
// API GET Requests
    app.get('/api/notes', (req, res) => res.json(notes));
    
 // API POST Requests
    app.post('/api/notes', (req, res) => {
 

   
    if (notes.length < 5) {
      notes.push(req.body);
      res.json(true);
    } else {
        "You need to enter something!"
    }
})   

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    notes.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
}; 
