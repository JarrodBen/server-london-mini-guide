const express = require("express");
const app = express()

const stratford = require("./data/Stratford.json")
const data = {
   Stratford: stratford
}
// const harrow = require("./data/Harrow.json")
  // const data = {
  //   Stratford: stratford
  // }
// const heathrow = require("./data/Heathrow.json")

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

  app.get("/:city/pharmacies", (req, res) => {
    let cityPharm = (req.params.city)

    if (data[cityPharm]) 
    res.json(data[cityPharm].pharmacies)
    else {
      res.status(404)
      res.json({msg: `Could not find specified ${cityPharm} in that city`})
    }
  })

  
  // app.get("/:city/colleges", (req, res) => {
  //   let cityCollege = (req.params.city)

  //   if (data[cityCollege]) 
  //   res.json(data[cityCollege].colleges)
  //   else {
  //     res.status(404)
  //     res.json({msg: `Could not find specified ${cityCollege} in that city`})
  //   }
  // })

  
  // app.get("/:city/doctors", (req, res) => {
  //   let cityDoctors = (req.params.city)

  //   if (data[cityDoctors]) 
  //   res.json(data[cityDoctors].doctors)
  //   else {
  //     res.status(404)
  //     res.json({msg: `Could not find specified ${cityDoctors} in that city`})
  //   }
  // })

  
  // app.get("/:city/hospitals", (req, res) => {
  //   let cityHosp = (req.params.city)

  //   if (data[cityHosp]) 
  //   res.json(data[cityHosp].hospitals)
  //   else {
  //     res.status(404)
  //     res.json({msg: `Could not find specified ${cityHosp} in that city`})
  //   }
  // })
    
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000.");
  });
  