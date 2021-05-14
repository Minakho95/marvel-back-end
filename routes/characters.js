const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=xWG2k4lqyxLYEMXa"
    );
    // console.log(response.data.results[0]._id);

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/characters/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters/${req.params}?apiKey=xWG2k4lqyxLYEMXa`
    );
    // console.log(response.data.results[0]._id);
    console.log(response);
    res.send("data received");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
