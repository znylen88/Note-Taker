// LOAD DATA - holds array of information found within db.json

var noteData = require("../db.json");

// ROUTING

module.exports = function (app) {
  
  // API GET Request

  app.get("/api/notes", function (req, res) {
    res.json(noteData);
    console.log(noteData);
  });

  // API POST Request

  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    res.json(true);
    console.log("Note Added");
  });

  // API DELETE Request

  app.delete("/api/notes", function (req, res) {
    noteData.pop(req.body);
    res.json(true);
    console.log("Item Deleted");
  });
}
