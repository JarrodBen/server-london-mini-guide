const express = require("express");
const app = express()

app.get("/",  (req, res) => {
    res.send("Home is where 127.0.0.1 is");
  });

  app.get("/pharmacies",  (req, res) => {
    res.send("These are the pharmacies for each City");
  });

  app.get("/colleges",  (req, res) => {
    res.send("These are the colleges for each City");
  });

  app.get("/hospitals", (req, res) => {
      res.send("These are the hospitals for each city")
  })

  app.get("/doctors", (req, res) => {
    res.send("These are the doctors for each city")
    })
    
app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
  });
  