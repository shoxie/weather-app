const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/weather", (req, res) => {
  const { lat, lon } = req.query;
  axios
    .get(
      `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`
    )
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send({ code: 500, message: "Internal Server Error" });
    });
});

app.listen(3000);
