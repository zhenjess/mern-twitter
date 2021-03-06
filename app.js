const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Friend"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const bodyParser = require('body-parser');