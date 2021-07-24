const express = require("express");
const app = express()

app.get("/",  (req, res) => {
    res.send("Home is where The Cake is");
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

  app.get("/pharmacies/:city", (req, res) => {
    let cityPharm = parseInt(req.params.city)

    if (pharmacies[cityPharm]) 
    res.json(pharmacies[cityPharm])
    else {
      res.status(404)
      res.json({msg: `Could not find specified ${cityPharm} in that city`})
    }
  })

  
  app.get("/colleges/:city", (req, res) => {
    let cityCollege = parseInt(req.params.city)

    if (colleges[cityCollege]) 
    res.json(colleges[cityCollege])
    else {
      res.status(404)
      res.json({msg: `Could not find specified ${cityCollege} in that city`})
    }
  })

  
  app.get("/doctors/:city", (req, res) => {
    let cityDoctors = parseInt(req.params.city)

    if (doctors[cityDoctors]) 
    res.json(doctors[cityDoctors])
    else {
      res.status(404)
      res.json({msg: `Could not find specified ${cityDoctors} in that city`})
    }
  })

  
  app.get("/hospitals/:city", (req, res) => {
    let cityHosp = parseInt(req.params.city)

    if (hospitals[cityHosp]) 
    res.json(hospitals[cityHosp])
    else {
      res.status(404)
      res.json({msg: `Could not find specified ${cityHosp} in that city`})
    }
  })
    
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000.");
  });
  