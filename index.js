const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config(); // import .env file
const port = process.env.PORT || 3001;
// routes
app.use(bodyParser.json());
express.json({
  limit: "100kb",
  type: "application/json",
});

const userRoute = require("./routes/user");

app.get("/", (req, res) => {
  res.status(200).send("server running");
});

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("running on " + port);
});
