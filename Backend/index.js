require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db");
const { blackRoutes } =require("./Routes/blackRoute");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", blackRoutes);

//server listioning
app.listen(process.env.PORT||8080, async (req, res) => {
  await connection;
  console.log("connected to db");
  console.log(`listing on 8080`);
});
