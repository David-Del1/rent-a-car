const express = require('express');
const cors = require('cors');

const path = require("path");
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));

});

app.listen(PORT);

console.log('Reactr Server is running on port ', PORT);
