const express = require("express");
const morgan = require("morgan");

const app = express();
const router = require("./routes/developers.js");

const PORT = process.env.APP_PORT || 3000;

app.disable("etag"); 
app.use(morgan("short")); 
app.use(express.json()); 
app.use(router); 

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, My name is Jesus." });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
