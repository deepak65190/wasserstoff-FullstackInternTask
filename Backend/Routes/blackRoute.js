const express = require("express");
const blackRoutes = express.Router();
const { blackcofferModal } = require("../Models/blackModal");

//get request from user
blackRoutes.get("/get", async (req, res) => {
  try {
    const data = await blackcofferModal.find(req.query);
    res.send(data);
  } catch (err) {
    res.send(err.message);
    console.log("something went wrong", err);
  }
});

//post request from user
blackRoutes.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const post = await blackcofferModal(payload);
    await post.save();
    res.send("post created");
  } catch (err) {
    res.send(err.message);
    console.log("something went wrong", err);
  }
});

module.exports = {
  blackRoutes,
};
